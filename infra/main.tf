


# 1️⃣ Resource Group
resource "azurerm_resource_group" "rg" {
  name     = var.resource_group_name
  location = var.location
}

# 2️⃣ Azure Container Registry (ACR)
# resource "azurerm_container_registry" "acr" {
#  name                = var.acr_name
#  resource_group_name = azurerm_resource_group.rg.name
#  location            = azurerm_resource_group.rg.location
#  sku                 = "Basic"
#  admin_enabled       = true
# }

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
    # Conditionally enable Always On depending on App Service Plan tier
    always_on = (
      azurerm_service_plan.asp.sku_name == "F1" || 
      azurerm_service_plan.asp.sku_name == "D1"
    ) ? false : true

    application_stack {
      # docker_image     = "${azurerm_container_registry.acr.login_server}/portfolio-app"
      docker_image     = "${var.dockerhub_username}/portfolio-app"
      docker_image_tag = "latest"
    }
  }

  app_settings = {
    WEBSITES_PORT = "3000"
    # DOCKER_REGISTRY_SERVER_URL      = azurerm_container_registry.acr.login_server
    DOCKER_REGISTRY_SERVER_URL      = "https://index.docker.io"
    # DOCKER_REGISTRY_SERVER_USERNAME = azurerm_container_registry.acr.admin_username
    DOCKER_REGISTRY_SERVER_USERNAME = var.dockerhub_username
    # DOCKER_REGISTRY_SERVER_PASSWORD = azurerm_container_registry.acr.admin_password
    DOCKER_REGISTRY_SERVER_PASSWORD = var.dockerhub_password

  }

  identity {
    type = "SystemAssigned"
  }
}


# 5️⃣ Azure Key Vault
# resource "azurerm_key_vault" "kv" {
#  name                        = "portfolio-kv-${random_id.suffix.hex}"
#  location                    = azurerm_resource_group.rg.location
#  resource_group_name          = azurerm_resource_group.rg.name
#  tenant_id                    = data.azurerm_client_config.current.tenant_id
#  sku_name                     = "standard"
#
#  soft_delete_retention_days   = 7
#  purge_protection_enabled     = false
#
#  access_policy {
#    tenant_id = data.azurerm_client_config.current.tenant_id
#    object_id = data.azurerm_client_config.current.object_id
#
#    secret_permissions = ["Get", "Set", "List", "Delete"]
#  }
# }

# Random suffix to make key vault name unique
# resource "random_id" "suffix" {
#  byte_length = 3
# }

# data "azurerm_client_config" "current" {}

# 6️⃣ Store ACR Credentials in Key Vault
# resource "azurerm_key_vault_secret" "acr_username" {
#  name         = "acr-username"
#  value        = azurerm_container_registry.acr.admin_username
#  key_vault_id = azurerm_key_vault.kv.id
# }

# resource "azurerm_key_vault_secret" "acr_password" {
#  name         = "acr-password"
#  value        = azurerm_container_registry.acr.admin_password
#  key_vault_id = azurerm_key_vault.kv.id
# }
