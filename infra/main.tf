


# 1️⃣ Resource Group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}


# 3️⃣ App Service Plan (Linux)
resource "azurerm_service_plan" "asp" {
  name                = var.app_service_plan_name
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  os_type             = "Linux"
  sku_name            = "F1"
}

# 4️⃣ App Service (Docker-based)
resource "azurerm_linux_web_app" "app" {
  name                = var.app_service_name
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  service_plan_id     = azurerm_service_plan.asp.id

  site_config {
    always_on = (
      azurerm_service_plan.asp.sku_name == "F1" || 
      azurerm_service_plan.asp.sku_name == "D1"
    ) ? false : true

    application_stack {
      docker_image_name = "${var.dockerhub_username}/portfolio:latest"
    }
  }
  app_settings = {
    WEBSITES_PORT = "3000"
    DOCKER_REGISTRY_SERVER_URL      = "https://index.docker.io"
    DOCKER_REGISTRY_SERVER_USERNAME = var.dockerhub_username
    DOCKER_REGISTRY_SERVER_PASSWORD = var.dockerhub_password
    APPLICATIONINSIGHTS_CONNECTION_STRING = azurerm_application_insights.appinsights.connection_string
    APPINSIGHTS_INSTRUMENTATIONKEY        = azurerm_application_insights.appinsights.instrumentation_key
    ApplicationInsightsAgent_EXTENSION_VERSION = "~3"
  }
  identity {
    type = "SystemAssigned"
  }
}



# 📊 Log Analytics Workspace
resource "azurerm_log_analytics_workspace" "law" {
  name                = "${var.app_service_name}-law"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name

  sku               = "PerGB2018"
  retention_in_days = 30
}


# 📊 Application Insights
resource "azurerm_application_insights" "appinsights" {
  name                = "${var.app_service_name}-ai"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  application_type    = "web"
  workspace_id        = azurerm_log_analytics_workspace.law.id
}

# 📘 App Service Diagnostic Settings
resource "azurerm_monitor_diagnostic_setting" "appservice_logs" {
  name = "${var.app_service_name}-diag"
  target_resource_id         = azurerm_linux_web_app.app.id
  log_analytics_workspace_id = azurerm_log_analytics_workspace.law.id

  enabled_log {
    category = "AppServiceHTTPLogs"
  }

  enabled_log {
    category = "AppServiceConsoleLogs"
  }

  enabled_log {
    category = "AppServiceAppLogs"
  }

  enabled_log {
    category = "AppServicePlatformLogs"
  }

  metric {
    category = "AllMetrics"
  }
}
