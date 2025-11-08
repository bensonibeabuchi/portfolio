variable "resource_group_name" {
  default = "portfolio-rg"
}

variable "location" {
  default = "canadacentral"
}

variable "acr_name" {
  default = "portfolioacrregistry3691"
}

variable "app_service_plan_name" {
  default = "portfolio-asplan"
}

variable "app_service_name" {
  default = "bensonibeabuchiportfolio"
}

variable "dockerhub_username" {
  description = "Docker Hub username"
}

variable "dockerhub_password" {
  description = "Docker Hub personal access token"
  sensitive   = true
}
