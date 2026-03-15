resource "azurerm_resource_group" "agilesync" {
  name     = var.resource_group_name
  location = var.location
}
