"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export const NavHeader = () => {
  return (
    <Navbar className="bg-black opacity-95">
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">Archit Mehta</p>
      </NavbarBrand>
      <NavbarContent className="sm:hidden absolute right-0">
        <Dropdown className="bg-black">
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                radius="sm"
                variant="solid"
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className="flex-1 text-2xl text-white"
                />
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            <DropdownItem className="text-white" href="#home">
              Home
            </DropdownItem>
            <DropdownItem className="text-white" href="#projects">
              Projects
            </DropdownItem>
            <DropdownItem className="text-white" href="#work-experience">
              Experience
            </DropdownItem>
            <DropdownItem className="text-white" href="#contact">
              Contact
            </DropdownItem>
            <DropdownItem
              className="text-white"
              href="/Archit_Mehta_Resume.pdf"
            >
              Resume
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link className="text-white text-lg" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>|</NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>|</NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="#work-experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>|</NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="#contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>|</NavbarItem>
        <NavbarItem>
          <Link className="text-white text-lg" href="/Archit_Mehta_Resume.pdf">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
