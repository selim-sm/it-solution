import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Switch,
} from "@nextui-org/react";
import { Sun, MoonIcon } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const menuItems = ["HOME", "ABOUT", "SERVICE", "CONTACT US"];
  return (
    <>
      <Navbar
        isBordered
        disableAnimation
        className="bg-gradient-to-t from-[#000006] to-[#01011c] text-white py-2 font-nunito"
      >
        <NavbarBrand>
          <Link href={"/"}>
            <img src="/logo.png" alt="" />
          </Link>
        </NavbarBrand>

        <NavbarContent justify="end" className="hidden sm:flex gap-4">
          <Link href={"/"}>
            <NavbarItem className="hover:text-red-500 font-bold">
              HOME
            </NavbarItem>
          </Link>
          <Link href={"/about"}>
            <NavbarItem className="hover:text-red-500 font-bold">
              ABOUT
            </NavbarItem>
          </Link>
          <Link href={"/service"}>
            <NavbarItem className="hover:text-red-500 font-bold">
              SERVICE
            </NavbarItem>
          </Link>
          <Link href={"/contact"}>
            <NavbarItem className="hover:text-red-500 font-bold">
              CONTACT US
            </NavbarItem>
          </Link>
        </NavbarContent>
        <NavbarMenu className="pt-10 font-nunito font-bold bg-white/20">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href="/">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent className="sm:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
