import { useSidebarContext } from "@/context/SidebarContext";
import { isSmallScreen } from "@/helpers/is-small-screen";
import {
  Button,
  DarkThemeToggle,
  Dropdown,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import type { FC } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";

export const DashboardNavbar: FC<Record<string, never>> = function () {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();

  return (
    <header>
      <Navbar fluid className="bg-[#e90000]">
        <NavbarBrand href="#" className="flex-[3]">
          <button
            aria-controls="sidebar"
            aria-expanded
            className=" cursor-pointer rounded p-2 text-white hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
            onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
          >
            {isSidebarCollapsed || !isSmallScreen() ? (
              <HiMenuAlt1 className="h-6 w-6" />
            ) : (
              <HiX className="h-6 w-6" />
            )}
          </button>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </NavbarBrand>
        <div className="flex flex-[6]">
          <NavbarCollapse>
            <NavbarLink href="#" active>
              Home
            </NavbarLink>
            <NavbarLink href="#">About</NavbarLink>
            <NavbarLink href="#">Services</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Contact</NavbarLink>
          </NavbarCollapse>
        </div>
        <div className="flex flex-[3]">
          <Button>Get started</Button>
        </div>
      </Navbar>
    </header>
  );
};
