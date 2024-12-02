"use client";
import Link from 'next/link';
import { FaCartPlus, FaUser } from "react-icons/fa";
import { MdWatch } from "react-icons/md";

const NavBar: React.FC = () => {

  return (
    <div>
      <nav className="bg-darkgray text-white">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center ml-4">
            <MdWatch size={24} className="mr-2 text-green" />
            <span className="text-lg font-bold">Space X</span>
          </div>

          <div className="hidden md:flex space-x-12">
            <Link href="#home" className="hover:text-green cursor-pointer">Home</Link>
            <Link href="#about" className="hover:text-green">About</Link>
            <Link href="#products" className="hover:text-green">Products</Link>
            <Link href="#contact" className="hover:text-green cursor-pointer">Contact</Link>
            <Link href="#faq" className="hover:text-green">FAQ</Link>
          </div>

          <div className="flex space-x-4 mr-4">
            <Link href="#cart" className="hover:text-gray-400 text-green">
              <FaCartPlus size={24} />
            </Link>
            <Link href="#user" className="hover:text-gray-400 text-green">
              <FaUser size={24} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
