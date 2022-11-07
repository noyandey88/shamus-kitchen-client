import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { IoRestaurantSharp } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="shadow-md"
      >
        <Navbar.Brand href="https://flowbite.com/">
          <IoRestaurantSharp className="w-7 h-7 text-teal-600"/>
          <span className="self-center whitespace-nowrap text-2xl font-bold text-teal-400">
            Shamu's Kitchen
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button className="hidden md:block bg-teal-400 hover:bg-teal-500">
            Login
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/navbars"
            active={true}
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Services
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/navbars">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;