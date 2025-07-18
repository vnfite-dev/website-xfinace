"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const tab = [
  {
    name: "Giới thiệu",
    href: "/about",
  },
  {
    name: "Dịch vụ",
    href: "/service",
  },
  {
    name: "Tin tức",
    href: "/news",
  },
  {
    name: "Hỗ trợ",
    href: "/support",
  },
];

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsFixed(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY >= 48) {
          if (!isFixed) {
            setIsFixed(true);
          }
        } else {
          if (window.innerWidth > 768) {
            setIsFixed(false);
          }
        }
      }
    };

    if (window.innerWidth < 768) {
      setIsFixed(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header suppressHydrationWarning={false}>
      {isFixed && <div className="h-[72px] w-full"></div>}
      <div
        className={cn(
          "relative w-full transition-all duration-400",
          isFixed
            ? "fixed top-0 left-0 z-50 bg-white shadow-md"
            : "bg-transparent"
        )}
        ref={headerRef}
      >
        <div className="w-full flex items-center justify-between py-2 px-6 text-black scrollbar-ignore mx-auto">
          <Link href={"/"}>
            <Image
              src="/logoText.png"
              alt="logo"
              width={160}
              height={48}
            />
          </Link>
          <div className="max-w-[550px] w-[50%] lg:w-full flex items-center justify-between">
            {tab.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-md font-bold hover:text-red-500 transition-colors p-4"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Button
            className={cn(
              "h-12 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-md font-bold leading-none cursor-pointer",
              "bg-main-color hover:bg-red-700"
            )}
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
          >
            <span className="leading-none">Tải ứng dụng</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
