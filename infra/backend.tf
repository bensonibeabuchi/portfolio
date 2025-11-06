terraform {
  backend "azurerm" {
    resource_group_name  = "portfolio-rg"
    storage_account_name = "portfolioterraformsa"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}
