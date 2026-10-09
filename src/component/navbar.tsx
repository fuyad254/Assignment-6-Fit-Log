
"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import navlogo from "@/assets/logo.png";

type NavbarProps = {
  planCount?: number;
  savedCount?: number;
};

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "Workouts", href: "/" },
  { name: "My Plan", href: "/my-plan" },
];

// Menu Icon
const MenuIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// Close Icon
const CloseIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="m18 6-12 12M6 6l12 12" />
  </svg>
);

// Active Navigation Links
function NavigationLinks({
  menuOpen,
  onNavigate,
}: {
  menuOpen: boolean;
  onNavigate: () => void;
}) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return (
        pathname === "/" ||
        pathname.startsWith("/librarySection/")
      );
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        aria-label="Main navigation"
        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 sm:flex"
      >
        {navItems.map((item) => {
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`rounded-full px-4 py-1.5 text-[11px] font-medium transition-colors ${
                active
                  ? "bg-[#1b2410] text-[#ccff00]"
                  : "text-[#a3a5ad] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#202126] px-4 py-3 sm:hidden"
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-4 py-3 text-sm transition-colors ${
                    active
                      ? "bg-[#1b2410] text-[#ccff00]"
                      : "text-[#a3a5ad] hover:bg-[#18191d] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
}

// Navbar Component
export default function Navbar({
  planCount = 0,
  savedCount = 0,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#202126] bg-[#0c0d0f] text-white">
      <div className="relative mx-auto flex h-17.5 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Fitlog home"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src={navlogo}
            alt="Fitlog logo"
            width={navlogo.width}
            height={navlogo.height}
            className="h-6 w-auto shrink-0 object-contain"
            priority
          />

          <span className="text-[15px] font-black tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Navigation: Suspense fixes usePathname prerendering */}
        <Suspense
          fallback={
            <div className="absolute left-1/2 hidden h-8 w-32 -translate-x-1/2 sm:block" />
          }
        >
          <NavigationLinks
            menuOpen={menuOpen}
            onNavigate={() => setMenuOpen(false)}
          />
        </Suspense>

        {/* Right Side Counters */}
        <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5"
          >
            <span className="text-[10px] text-[#d0d1d5] sm:text-[11px]">
              Plan
            </span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ccff00] px-1 text-[9px] font-bold text-black">
              {planCount}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5"
          >
            <span className="text-[10px] text-[#a3a5ad] sm:text-[11px]">
              Saved
            </span>

            <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#34363d] px-1 text-[9px] text-[#b5b6bd]">
              {savedCount}
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-8 w-8 items-center justify-center rounded-md text-white transition-colors hover:bg-[#202126] sm:hidden"
          >
            {menuOpen ? (
              <CloseIcon size={19} />
            ) : (
              <MenuIcon size={19} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
