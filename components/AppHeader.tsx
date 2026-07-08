"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Today", href: "/today" },
  { label: "Journal", href: "/journal" },
  { label: "The wall", href: "/wall" },
  { label: "Resources", href: "/resources" },
];

export default function AppHeader() {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between border-b border-sand px-6 py-[18px] sm:px-11">
      <Link
        href="/"
        className="font-serif text-base font-medium text-espresso no-underline"
      >
        Held
      </Link>
      <nav className="flex items-center gap-1.5">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-3.5 py-[7px] text-[12.5px] no-underline transition-all ${
                active
                  ? "bg-clay-deep font-semibold text-espresso"
                  : "font-normal text-bark hover:text-ember"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <span className="ml-3.5 hidden overflow-hidden rounded-full border border-sand-deep text-[10.5px] sm:flex">
          <span className="bg-espresso px-2.5 py-[3px] font-semibold text-paper">
            EN
          </span>
          <span className="px-2.5 py-[3px] text-fawn" title="Français — coming later">
            FR
          </span>
        </span>
      </nav>
    </header>
  );
}
