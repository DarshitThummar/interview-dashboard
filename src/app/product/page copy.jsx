"use client";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Input,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Chip,
} from "@nextui-org/react";
import {
  EditIcon,
  TrashIcon,
  Download,
  Plus,
  Search,
  ViewIcon,
} from "lucide-react";
import { data } from "../utils/data";
import moment from "moment";
import { product } from "@/images";
import Image from "next/image";
import { useState } from "react";
import FilterPanel from "../components/filter";

const statusColorMap = {
  Published: "success",
  Draft: "default",
  "Low Stock": "warning",
  "Out of Stock": "danger",
};

export default function ProductPage() {
  const [allData, setallData] = useState(data);
  const [stautsBtn, setStautsBtn] = useState("All Product");
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const itemsPerPage = 10;

  const statusWiseDataHandle = (status) => {
    setStautsBtn(status);
    setCurrentPage(1);
    if (status === "All Product") {
      return setallData(data);
    }
    setallData(data?.filter((d) => d.status === status));
  };

  const searchDataHandle = (value) => {
    const lowerCaseValue = value.toLowerCase();
    const filteredData = data?.filter(({ category, price, sku }) => {
      return (
        category?.toLowerCase().includes(lowerCaseValue) ||
        sku?.toLowerCase().includes(lowerCaseValue)
      );
    });
    setallData(filteredData);
  };

  // Pagination logic
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const paginatedData = allData.slice(startIndex, endIndex);

  return (
    <div className="">
      <div className="flex justify-end items-center mb-6">
        <div className="flex gap-3">
          <Button
            color="primary"
            variant="flat"
            startContent={<Download size={20} />}
          >
            Export
          </Button>
          <Button color="primary" startContent={<Plus size={20} />}>
            Add Product
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-3">
          <Button
            color="default"
            variant="flat"
            className={`bg-background ${
              stautsBtn === "All Product" && "bg-[#EAF8FF]"
            }`}
            onClick={() => statusWiseDataHandle("All Product")}
          >
            All Product
          </Button>
          <Button
            color="default"
            variant="flat"
            className={`bg-background ${
              stautsBtn === "Published" && "bg-[#EAF8FF]"
            }`}
            onClick={() => statusWiseDataHandle("Published")}
          >
            Published
          </Button>
          <Button
            color="default"
            variant="flat"
            className={`bg-background ${
              stautsBtn === "Low stock" && "bg-[#ffeaea]"
            }`}
            onClick={() => statusWiseDataHandle("Low stock")}
          >
            Low Stock
          </Button>
          <Button
            color="default"
            variant="flat"
            className={`bg-background ${
              stautsBtn === "Draft" && "bg-[#EAF8FF]"
            }`}
            onClick={() => statusWiseDataHandle("Draft")}
          >
            Draft
          </Button>
          <Input
            className="w-64"
            placeholder="Search product..."
            startContent={<Search className="w-4 h-4" />}
            onChange={(e) => searchDataHandle(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          {/* <Button variant="flat" startContent={<Filter size={20} />}>
            Filters
          </Button> */}
          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Open Menu</Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions">
              <DropdownItem>
                <FilterPanel />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button variant="flat">Edit Columns</Button>
        </div>
      </div>

      <Table
        aria-label="Product table"
        selectionMode="multiple"
        className="mb-6 w-auto"
      >
        <TableHeader>
          <TableColumn>PRODUCT</TableColumn>
          <TableColumn>SKU</TableColumn>
          <TableColumn>CATEGORY</TableColumn>
          <TableColumn>STOCK</TableColumn>
          <TableColumn>PRICE</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>ADDED</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {allData?.map(
            ({ sku, image, name, category, stock, price, status }, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Image
                      src={product}
                      alt={name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium">{name}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{sku}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell>{stock}</TableCell>
                <TableCell>{price}</TableCell>
                <TableCell>
                  <Chip color={statusColorMap[status]} variant="flat" size="sm">
                    {status}
                  </Chip>
                </TableCell>
                <TableCell>{moment().format("DD MMM YYYY")}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <EditIcon />
                    <ViewIcon />
                    <TrashIcon />
                  </div>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

      <div className="flex justify-between items-center">
        {/* <p className="text-sm text-gray-500">
          Showing {startIndex + 1}-{Math.min(endIndex, allData.length)} of{" "}
          {allData.length}
        </p> */}
        {/* <Pagination
          total={Math.ceil(allData.length / itemsPerPage)}
          initialPage={1}
          currentPage={currentPage}
          onChange={(page) => setCurrentPage(page)}
          className="flex gap-2"
        /> */}
      </div>
    </div>
  );
}
