"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
// import { Progress } from "@nextui-org/react";
import { ChevronDown, ChevronUp, MoreVertical } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [65, 59, 80, 81, 56, 55, 40, 61, 75, 63, 52, 59],
        borderColor: "rgb(59, 130, 246)",
        tension: 0.1,
      },
      {
        label: "Sales",
        data: [28, 48, 40, 19, 86, 27, 90, 42, 56, 78, 46, 68],
        borderColor: "rgb(239, 68, 68)",
        tension: 0.1,
      },
    ],
  };

  const doughnutData = {
    labels: ["POS Network", "Online Store", "Amazon Store"],
    datasets: [
      {
        data: [45000, 20500, 10000],
        backgroundColor: ["#3B82F6", "#60A5FA", "#93C5FD"],
      },
    ],
  };

  return (
    <div className="">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome Back Jeni!
          </h1>
          <p className="text-gray-600">Let's check your stats today</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { label: "Total Project", value: "6,784", change: "+2.5%" },
            { label: "Total Hours", value: "1,920", change: "+1.5%" },
            { label: "Total Task", value: "4,412", change: "+4.5%" },
            { label: "Total Member", value: "329", change: "+2.0%" },
          ].map((stat) => (
            <Card key={stat.label} className="w-full">
              <CardBody className="p-6">
                <p className="text-sm font-medium text-gray-600">
                  {stat.label}
                </p>
                <div className="flex items-baseline mt-4">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {stat.value}
                  </h3>
                  <span className="ml-2 text-sm text-green-600">
                    {stat.change}
                  </span>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card className="w-full   shadow-md rounded-lg bg-white">
            <CardHeader className="flex justify-between items-center p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Target</h3>
                <p className="text-sm text-gray-500">Revenue Target</p>
              </div>
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly variant="light" radius="full">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem>Edit</DropdownItem>
                  <DropdownItem>Download</DropdownItem>
                  <DropdownItem className="text-danger" color="danger">
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </CardHeader>
            <CardBody className="pt-4 pb-6 px-6">
              {/* Semi-circular progress section */}
              <div className="relative flex flex-col items-center mb-6">
                <div className="relative w-60 h-24">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    {/* Background arc */}
                    <path
                      d="M 5 50 A 45 45 0 1 1 95 50"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                    {/* Progress arc */}
                    <path
                      d="M 5 50 A 45 45 0 1 1 95 50"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="141.37"
                      strokeDashoffset="34.55" // Adjusted for 75.55%
                    />
                  </svg>
                  {/* Percentage display */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-1xl font-bold text-gray-900">
                      75.55%
                    </span>
                    <span className="text-xs font-medium text-green-500 bg-green-100 rounded px-2 py-1 mt-1">
                      +10%
                    </span>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-4">
                  You succeeded in earning{" "}
                  <span className="font-semibold">$240</span> today, which is
                  higher than yesterday.
                </p>
              </div>

              {/* Targets and stats section */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Target</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-lg font-bold text-gray-900">
                      $20k
                    </span>
                    <ChevronDown className="h-4 w-4 text-red-500" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Revenue</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-lg font-bold text-gray-900">
                      $16k
                    </span>
                    <ChevronUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Today</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-lg font-bold text-gray-900">
                      $1.5k
                    </span>
                    <ChevronUp className="h-4 w-4 text-green-500" />
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold mb-4">Statistics</h3>
              <Line data={lineChartData} options={{ responsive: true }} />
            </CardBody>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sales Source</h3>
              <div className="flex items-center justify-center">
                <div className="w-64">
                  <Doughnut
                    data={doughnutData}
                    options={{ responsive: true }}
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">POS Network</span>
                  <span className="text-sm font-medium">$45,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Online Store</span>
                  <span className="text-sm font-medium">$20,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Amazon Store</span>
                  <span className="text-sm font-medium">$10,000</span>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="p-6">
              <h3 className="text-lg font-semibold mb-4">Top Products</h3>
              <div className="space-y-4">
                {[
                  { name: "Logitech Wireless Mouse", price: "$1,200" },
                  { name: "PS Gaming Controller", price: "$1,190" },
                  { name: "Mechanical Keyboard", price: "$950" },
                  { name: "Audio Tech Earphone", price: "$850" },
                  { name: "Smart 5G Pro", price: "$750" },
                ].map((product) => (
                  <div
                    key={product.name}
                    className="flex justify-between items-center"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg" />
                      <span className="text-sm font-medium">
                        {product.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.price}
                    </span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
