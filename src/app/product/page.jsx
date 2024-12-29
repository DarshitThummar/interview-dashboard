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
  Chip,
  Pagination,
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

const statusColorMap = {
  Published: "success",
  Draft: "default",
  "Low Stock": "warning",
  "Out of Stock": "danger",
};

export default function ProductPage() {
  const [allData, setAllData] = useState(data);
  const [statusBtn, setStatusBtn] = useState("All Product");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  // Filter data based on status (Published, Low Stock, etc.)
  const statusWiseDataHandle = (status) => {
    setStatusBtn(status);
    setCurrentPage(1); // Reset to the first page when filtering by status
    if (status === "All Product") {
      return setAllData(data);
    }
    setAllData(data?.filter((d) => d.status === status));
  };

  // Search function
  const searchDataHandle = (value) => {
    const lowerCaseValue = value.toLowerCase();
    const filteredData = data?.filter(({ category, price, sku }) => {
      return (
        category?.toLowerCase().includes(lowerCaseValue) ||
        sku?.toLowerCase().includes(lowerCaseValue)
      );
    });
    setAllData(filteredData);
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = allData.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Previous and Next Page Handlers
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(allData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mx-auto">
      <div className="flex justify-end items-center mb-6">
        <div className="flex gap-3">
          <Button
            color="primary"
            variant="flat"
            startContent={<Download size={20} />}
          >
            Export
          </Button>
          <a href="product/addproduct">
            <Button color="primary" startContent={<Plus size={20} />}>
              Add Product
            </Button>
          </a>
        </div>
      </div>

      {/* Status Filter Buttons */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center mb-6">
        <div className="flex gap-2">
          <Button
            variant="outline"
            className={`${
              statusBtn === "All Product" ? "bg-[#EAF8FF]" : "bg-background"
            }`}
            onClick={() => statusWiseDataHandle("All Product")}
          >
            All Product
          </Button>
          <Button
            variant="outline"
            className={`${
              statusBtn === "Published" ? "bg-[#EAF8FF]" : "bg-background"
            }`}
            onClick={() => statusWiseDataHandle("Published")}
          >
            Published
          </Button>
          <Button
            variant="outline"
            className={`${
              statusBtn === "Low stock" ? "bg-[#ffeaea]" : "bg-background"
            }`}
            onClick={() => statusWiseDataHandle("Low stock")}
          >
            Low Stock
          </Button>
          <Button
            variant="outline"
            className={`${
              statusBtn === "Draft" ? "bg-[#EAF8FF]" : "bg-background"
            }`}
            onClick={() => statusWiseDataHandle("Draft")}
          >
            Draft
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              className="pl-8 w-full"
              placeholder="Search product..."
              onChange={(e) => searchDataHandle(e.target.value)}
            />
          </div>
          <Button
            variant="outline"
            className={`bg-background`}
            onClick={() => statusWiseDataHandle("Draft")}
          >
            Filters
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Edit Columns
          </Button>
        </div>
      </div>

      {/* Product Table */}
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
          {paginatedData?.map(
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

      {/* Custom Pagination with Page Numbers */}
      <div className="flex justify-between items-center">
        {/* Previous Button */}
        <p className="text-sm text-gray-500">
          Showing {startIndex + 1}-{Math.min(endIndex, allData.length)} of{" "}
          {allData.length}
        </p>
        {/* <Button
          color="primary"
          variant="flat"
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
        >
          Previous
        </Button>

        <div className="flex gap-2">
          {[...Array(Math.ceil(allData.length / itemsPerPage))].map(
            (_, index) => (
              <Button
                key={index}
                variant="outline"
                color={currentPage === index + 1 ? "primary" : "default"}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Button>
            )
          )}
        </div>

        <Button
          color="primary"
          variant="flat"
          disabled={currentPage === Math.ceil(allData.length / itemsPerPage)}
          onClick={goToNextPage}
        >
          Next
        </Button> */}
        <Pagination
          total={Math.ceil(allData.length / itemsPerPage)}
          initialPage={1}
          currentPage={currentPage}
          onChange={(page) => setCurrentPage(page)}
          className="flex gap-2"
        />
      </div>
    </div>
  );
}
