import React from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Search, Twitter } from "lucide-react";

export default function Navbar() {
  return (
    <FullContainer className="bg-white shadow py-3 sticky top-0 z-10">
      <div className="flex items-center justify-between w-10/12">
        <Link href="/">
          <Image
            height={50}
            width={180}
            src="https://cheerup2.theme-sphere.com/bold/wp-content/uploads/sites/8/2017/07/logo-2-1.png"
            alt="logo"
            className="w-40 md:w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center justify-center gap-5">
          <Link href="/" className="font-semibold text-gray-700 capitalize">
            home
          </Link>
          <Link
            href={`/${"about"}`}
            className="font-semibold text-gray-700 capitalize"
          >
            About
          </Link>
          <Link
            href={`/${"contact"}`}
            className="font-semibold text-gray-700 capitalize"
          >
            contact
          </Link>
          <Link
            href={`/${"blogs"}`}
            className="font-semibold text-gray-700 capitalize"
          >
            blogs
          </Link>
        </div>
        <div className="flex items-center justify-end gap-3 text-gray-500">
          <Facebook className="w-4" />
          <Twitter className="w-4" />
          <Instagram className="w-4" />
          {"|"}
          <Search className="w-4 text-black" />
        </div>
      </div>
    </FullContainer>
  );
}
