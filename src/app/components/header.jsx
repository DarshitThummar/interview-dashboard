"use client";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
} from "@nextui-org/react";
import { Bell, Search, ChevronDown, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <Navbar
      className="border-b bg-white"
      classNames={{
        wrapper: "max-w-full px-4",
      }}
    >
      <NavbarContent className="flex-1">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[20rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-50 border-none hover:bg-default-100",
          }}
          placeholder="Search..."
          size="sm"
          startContent={<Search size={18} />}
          type="search"
        />
      </NavbarContent>

      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            className="relative"
            aria-label="Notifications"
          >
            <Bell size={20} />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-500" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            isIconOnly
            variant="light"
            className="relative"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
            <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-blue-500 text-xs text-white">
              2
            </span>
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button
                variant="light"
                className="flex items-center gap-2"
                endContent={<ChevronDown size={20} />}
              >
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  size="sm"
                  src="/placeholder.svg"
                />
                <div className="hidden flex-col items-start text-left md:flex">
                  <span className="text-small font-semibold">Jenil Patel</span>
                  <span className="text-tiny text-default-500">Manager</span>
                </div>
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile">Profile</DropdownItem>
              <DropdownItem key="settings">Settings</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
