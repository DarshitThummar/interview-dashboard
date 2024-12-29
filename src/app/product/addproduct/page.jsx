'use client'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Select,
  SelectItem,
  Breadcrumbs,
  BreadcrumbItem,
  Textarea,
} from "@nextui-org/react"
import { ChevronDown, Link, ImageIcon, AlignLeft, AlignCenter, AlignRight, List, Code, Maximize2 } from 'lucide-react'

export default function ProductEdit() {
  const productCategories = [
    { label: "Watch", value: "watch" },
    { label: "Gadget", value: "gadget" },
  ]

  const statusOptions = [
    { label: "Published", value: "published" },
    { label: "Draft", value: "draft" },
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Edit Product</h1>
          <Breadcrumbs>
            <BreadcrumbItem href="#">Dashboard</BreadcrumbItem>
            <BreadcrumbItem href="#">Product List</BreadcrumbItem>
            <BreadcrumbItem>Edit Product</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <div className="flex gap-2">
          <Button color="danger" variant="light">Cancel</Button>
          <Button color="primary">Save Product</Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-2 space-y-6">
          {/* General Information */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">General Information</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                label="Product Name"
                placeholder="Enter product name"
                defaultValue="Smartwatch E2"
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium">Description</label>
                <div className="border rounded-lg">
                  <div className="flex flex-wrap items-center gap-1 p-2 border-b">
                    <Button isIconOnly size="sm" variant="light">
                      <span className="font-bold">B</span>
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <span className="italic">I</span>
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <span className="underline">U</span>
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <span className="line-through">S</span>
                    </Button>
                    <div className="h-4 w-px bg-gray-200 mx-1" />
                    <Select
                      size="sm"
                      className="w-20"
                      defaultSelectedKeys={["16"]}
                    >
                      <SelectItem key="12">12</SelectItem>
                      <SelectItem key="14">14</SelectItem>
                      <SelectItem key="16">16</SelectItem>
                      <SelectItem key="18">18</SelectItem>
                      <SelectItem key="20">20</SelectItem>
                    </Select>
                    <div className="h-4 w-px bg-gray-200 mx-1" />
                    <Button isIconOnly size="sm" variant="light">
                      <AlignLeft className="h-4 w-4" />
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <AlignCenter className="h-4 w-4" />
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <AlignRight className="h-4 w-4" />
                    </Button>
                    <div className="h-4 w-px bg-gray-200 mx-1" />
                    <Button isIconOnly size="sm" variant="light">
                      <span className="font-semibold">H1</span>
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <span className="font-semibold">H2</span>
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <span className="font-semibold">H3</span>
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <span className="font-semibold">H4</span>
                    </Button>
                    <div className="h-4 w-px bg-gray-200 mx-1" />
                    <Button isIconOnly size="sm" variant="light">
                      <List className="h-4 w-4" />
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <Link className="h-4 w-4" />
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <Code className="h-4 w-4" />
                    </Button>
                    <Button isIconOnly size="sm" variant="light">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <Textarea
                    placeholder="Enter product description"
                    minRows={4}
                    defaultValue="Smartwatch for men women notify you incoming calls, SMS notifications, when you connect the smartphone with fitness tracker. Connect fitness tracker with your phone, you will never miss a call and a message. The smart watches for android phones will vibrate to alert you if your phone receives any notifications. You can reject calls and view message directly from your watch. A best gift for family and friends"
                    className="border-0"
                  />
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Media */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Media</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className="aspect-square rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:border-gray-300 transition-colors"
                  >
                    <ImageIcon className="h-6 w-6 text-gray-400" />
                  </div>
                ))}
              </div>
              <Button
                variant="light"
                startContent={<ImageIcon className="h-4 w-4" />}
                className="mt-4"
              >
                Add Image
              </Button>
            </CardBody>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Pricing</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <Input
                label="Base Price"
                placeholder="0.00"
                startContent={<span className="text-gray-500">$</span>}
                type="number"
                defaultValue="400.00"
              />
              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Discount Type"
                  placeholder="Select discount type"
                  defaultSelectedKeys={["no_discount"]}
                >
                  <SelectItem key="no_discount" value="no_discount">
                    No Discount
                  </SelectItem>
                  <SelectItem key="percentage" value="percentage">
                    Percentage
                  </SelectItem>
                  <SelectItem key="fixed" value="fixed">
                    Fixed Amount
                  </SelectItem>
                </Select>
                <Input
                  label="Discount Percentage (%)"
                  placeholder="0%"
                  type="number"
                  defaultValue="0"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Tax Class"
                  placeholder="Select tax class"
                  defaultSelectedKeys={["tax_free"]}
                >
                  <SelectItem key="tax_free" value="tax_free">
                    Tax Free
                  </SelectItem>
                  <SelectItem key="standard" value="standard">
                    Standard Rate
                  </SelectItem>
                </Select>
                <Input
                  label="VAT Amount (%)"
                  placeholder="0%"
                  type="number"
                  defaultValue="0"
                />
              </div>
            </CardBody>
          </Card>

          {/* Inventory */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Inventory</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-3 gap-4">
                <Input
                  label="SKU"
                  placeholder="Enter SKU"
                  defaultValue="302002"
                />
                <Input
                  label="Barcode"
                  placeholder="Enter barcode"
                  defaultValue="0984939101123"
                />
                <Input
                  label="Quantity"
                  type="number"
                  placeholder="Enter quantity"
                  defaultValue="124"
                />
              </div>
            </CardBody>
          </Card>

          {/* Variation */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Variation</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="grid grid-cols-2 gap-4 items-end">
                <Select
                  label="Variation Type"
                  placeholder="Select variation type"
                  defaultSelectedKeys={["color"]}
                >
                  <SelectItem key="color" value="color">Color</SelectItem>
                  <SelectItem key="size" value="size">Size</SelectItem>
                </Select>
                <div className="flex gap-2">
                  <Input
                    label="Variation"
                    placeholder="Enter variation"
                    defaultValue="Black"
                  />
                  <Button isIconOnly color="danger" className="mb-2">
                    +
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 items-end">
                <Select
                  label="Variation Type"
                  placeholder="Select variation type"
                  defaultSelectedKeys={["color"]}
                >
                  <SelectItem key="color" value="color">Color</SelectItem>
                  <SelectItem key="size" value="size">Size</SelectItem>
                </Select>
                <div className="flex gap-2">
                  <Input
                    label="Variation"
                    placeholder="Enter variation"
                    defaultValue="Gray"
                  />
                  <Button isIconOnly color="danger" className="mb-2">
                    +
                  </Button>
                </div>
              </div>
              <Button
                color="primary"
                variant="light"
                startContent={<span>+</span>}
              >
                Add Variant
              </Button>
            </CardBody>
          </Card>

          {/* Shipping */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Shipping</h2>
            </CardHeader>
            <CardBody>
              <div className="mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="form-checkbox" />
                  <span>This is a physical product</span>
                </label>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Input
                  label="Weight"
                  placeholder="Weight"
                  defaultValue="0.25 kg"
                />
                <Input
                  label="Height"
                  placeholder="Height"
                  defaultValue="10 cm"
                />
                <Input
                  label="Length"
                  placeholder="Length"
                  defaultValue="10 cm"
                />
                <Input
                  label="Width"
                  placeholder="Width"
                  defaultValue="7 cm"
                />
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Category */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Category</h2>
            </CardHeader>
            <CardBody className="space-y-4">
              <Select
                label="Product Category"
                placeholder="Select category"
                defaultSelectedKeys={["watch"]}
              >
                {productCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </Select>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Product Tags
                </label>
                <div className="flex gap-2 flex-wrap">
                  <Button size="sm" variant="flat" color="primary">
                    Watch ×
                  </Button>
                  <Button size="sm" variant="flat" color="primary">
                    Gadget ×
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Status */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold">Status</h2>
            </CardHeader>
            <CardBody>
              <Select
                label="Product Status"
                placeholder="Select status"
                defaultSelectedKeys={["published"]}
              >
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </Select>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

