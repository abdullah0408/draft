"use client";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NAV_MAIN_DATA } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMain = () => {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {NAV_MAIN_DATA.map((item) => {
          const Icon = item.icon;
          return (
            <SidebarMenuItem key={item.title} className="flex justify-center">
              <SidebarMenuButton
                tooltip={item.title}
                className={`group ${pathname.includes(item.url) && "bg-muted"}`}
                asChild
              >
                <Link
                  href={item.url}
                  className={`text-lg ${pathname.includes(item.url) && "font-bold"}`}
                >
                  <Icon className="size-4 group-hover:animate-none" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
