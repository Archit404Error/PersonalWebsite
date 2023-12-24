import {
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
        <p className="font-bold text-inherit text-2xl">Archit Mehta</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link className="text-white text-xl" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>|</NavbarItem>
        <NavbarItem>
          <Link className="text-white text-xl" href="#projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>|</NavbarItem>
        <NavbarItem>
          <Link className="text-white text-xl" href="#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>|</NavbarItem>
        <NavbarItem>
          <Link className="text-white text-xl" href="#contact">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>|</NavbarItem>
        <NavbarItem>
          <Link className="text-white text-xl" href="/Archit_Mehta_Resume.pdf">
            Resume
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
