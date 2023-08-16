"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const Menu = () => {
  const current = usePathname();
  return (
    <div>
      <ul>
        <li>
          <Link className={current ==="/"?"active":"inactive"} href="/">Home</Link>
        </li>
        <li>
          <Link className={current ==="/about"?"active":"inactive"} href="/about">About</Link>
        </li>
        <li>
          <Link className={current ==="/product"?"active":"inactive"} href={{pathname:"/product", query:{name:"jagodihs", price:"200tk"}}}>Product</Link>
        </li>
        <li>
          <Link className={current ==="/profile"?"active":"inactive"} href="/profile">Profile</Link>
        </li>
        <li>
          <Link className={current ==="/contact"?"active":"inactive"} href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
