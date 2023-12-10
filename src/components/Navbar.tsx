"use client";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className="flex space-x-3">
        {NAV_LINKS.map(({ key, href, label }) => {
          return (
            <li key={key}>
              <Link
                href={href}
                className={`text-xl ${pathname === href ? "active" : ""}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
