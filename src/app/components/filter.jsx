"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Radio,
  RadioGroup,
  Slider,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import { ChevronUp } from "lucide-react";

const FilterPanel = () => {
  const [priceRange, setPriceRange] = useState([200, 8000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [comparison, setComparison] = useState("less-than");
  const [selectedComparison, setSelectedComparison] = useState("less-than");

  const handleReset = () => {
    setPriceRange([200, 8000]);
    setSearchQuery("");
    setSortOrder("");
    setSelectedComparison("less-than");
  };

  const comparisonOptions = [
    { label: "(<) Less Than", value: "less-than" },
    { label: "(=) Equals", value: "equals" },
    { label: "(>) Greater Than", value: "greater-than" },
    { label: "(<=) Less Than Equal", value: "less-than-equal" },
    { label: "(>=) Greater Than Equal", value: "greater-than-equal" },
  ];

  return (
    <Card className="w-[300px]">
      <CardHeader className="flex justify-between items-center px-4 py-3">
        <p className="text-xl font-semibold">Filter</p>
        <div className="flex items-center gap-2">
          <Button
            variant="light"
            className="text-blue-500 min-w-0 p-0 h-auto font-normal"
            onPress={handleReset}
          >
            Clear all
          </Button>
          <ChevronUp className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardBody className="gap-6 px-4">
        <Input
          type="search"
          placeholder="Search"
          value={searchQuery}
          onValueChange={setSearchQuery}
          classNames={{
            input: "border-2 border-blue-500",
            inputWrapper: "border-none shadow-none bg-transparent",
          }}
        />

        <RadioGroup value={sortOrder} onValueChange={setSortOrder}>
          <Radio value="low-to-high">Low to high</Radio>
          <Radio value="high-to-low">high to Low</Radio>
        </RadioGroup>

        <div className="space-y-4">
          <Slider
            step={100}
            minValue={200}
            maxValue={8000}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
            className={{
              track: "bg-blue-500",
              filledTrack: "bg-blue-200",
              thumb: "border-2 border-blue-500",
            }}
          />
          <div className="flex gap-4">
            <Input
              type="number"
              value={priceRange[0].toString()}
              onValueChange={(value) =>
                setPriceRange([parseInt(value) || 200, priceRange[1]])
              }
              classNames={{
                input: "text-right",
                inputWrapper: "h-10 border rounded-lg",
              }}
            />
            <Input
              type="number"
              value={priceRange[1].toString()}
              onValueChange={(value) =>
                setPriceRange([priceRange[0], parseInt(value) || 8000])
              }
              classNames={{
                input: "text-right",
                inputWrapper: "h-10 border rounded-lg",
              }}
            />
          </div>
        </div>

        <Select
          value={comparison}
          placeholder="(<) Less Than"
          onChange={(e) => setComparison(e.target.value)}
          classNames={{
            trigger: "h-10",
          }}
        >
          {comparisonOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </Select>
      </CardBody>
    </Card>
  );
};

export default FilterPanel;
