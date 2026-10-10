
"use client";

import Image from "next/image";
import React from "react";

import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#252933] bg-[#0e1014] px-5 py-8 text-white sm:px-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={logo.width}
            height={logo.height}
            className="h-6 w-auto shrink-0 object-contain"
            priority
          />

          <span className="text-lg font-extrabold tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-400">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
