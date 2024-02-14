"use client";
import Link from "next/link";
import { usePathname  } from "next/navigation";
const siteRoutes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/posts",
      label: "Posts",
    },
    {
      href: "/products",
      label: "Products",
    },
    {
      href: "/ecommerce/product",
      label: "ecommerce",
    },
  ];
export default function SiteNav() {
   const pathName = usePathname();
   return (
    <nav>
      <ul className="flex gap-x-5 text-[14px]">
        {siteRoutes.map((siteRoute) => (
          <li key={siteRoute.href}>
            <Link
              href={siteRoute.href}
              className={`text-zinc-400 transition ${
                pathName === siteRoute.href ? "text-zinc-900" : ""
              }`}
            >
              {siteRoute.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );;
}