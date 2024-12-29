"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  BarChart2,
  Calendar,
  FolderOpen,
  Layers,
  MessageSquare,
  Phone,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
const menuItems = [
  {
    name: "Dashboard",
    icon: <BarChart2 className="w-5 h-5" />,
    href: "/",
  },
  {
    name: "product",
    icon: <ShoppingCart className="w-5 h-5" />,
    href: "/product",
    badge: "2",
    // subItems: [
    //   {
    //     name: "Product",
    //     href: "/product",
    //   },
    //   {
    //     name: "Categories",
    //     href: "/e-commerce/categories",
    //   },
    //   {
    //     name: "Orders",
    //     href: "/e-commerce/orders",
    //     badge: "2",
    //   },
    //   {
    //     name: "Customer",
    //     href: "/e-commerce/customer",
    //   },
    // ],
  },
  {
    name: "Project",
    icon: <FolderOpen className="w-5 h-5" />,
    href: "/projects",
  },
  {
    name: "Contact",
    icon: <Phone className="w-5 h-5" />,
    href: "/contact",
    badge: "3",
  },
  {
    name: "File Manager",
    icon: <Layers className="w-5 h-5" />,
    href: "/files",
  },
  {
    name: "Chat",
    icon: <MessageSquare className="w-5 h-5" />,
    href: "/chat",
  },
  {
    name: "Calendar",
    icon: <Calendar className="w-5 h-5" />,
    href: "/calendar",
  },
];

export function Sidebar() {
  return (
    <>
      <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-semibold">Mytech</span>
          </div>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          {menuItems.map((item, index) => (
            <>
              <div
                className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 group relative ${
                  item.subItems ? "cursor-pointer" : ""
                }`}
              >
                {item.icon}
                <Link href={item.href}>
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="absolute right-2 bg-blue-100 text-blue-600 px-2 rounded-full text-xs">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </div>
              {/* {item?.subItems && (
                <Accordion selectionMode="multiple" className="space-y-1">
                  <AccordionItem key={item.name} aria-label={item.name}>
                    <p className="space-y-1 px-9 py-1">E-Commerce</p>
                    {item.subItems && (
                      <div className="space-y-1 px-9 py-1">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-blue-600"
                          >
                            {subItem.name}
                            {subItem.badge && (
                              <span className="bg-blue-100 text-blue-600 px-2 rounded-full text-xs">
                                {subItem.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </AccordionItem>
                </Accordion>
              )} */}
            </>
          ))}
          {/* <Accordion selectionMode="multiple" className="space-y-1">
            {menuItems.map((item, index) => {
              return (
                <AccordionItem
                  key={item.name}
                  aria-label={item.name}
                  title={
                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 group relative">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="absolute right-2 bg-blue-100 text-blue-600 px-2 rounded-full text-xs">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  }
                  className={!item.subItems ? "hidden" : ""}
                >
                  {item.subItems ? (
                    <div className="space-y-1 px-9 py-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center justify-between py-2 text-sm text-gray-700 hover:text-blue-600"
                        >
                          {subItem.name}
                          {subItem.badge && (
                            <span className="bg-blue-100 text-blue-600 px-2 rounded-full text-xs">
                              {subItem.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 group relative"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="absolute right-2 bg-blue-100 text-blue-600 px-2 rounded-full text-xs">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )}
                </AccordionItem>
              );
            })}
          </Accordion> */}
        </nav>
      </div>
    </>
  );
}
