import AppSidebar from "@/components/app-sidebar";
import TopNavbar from "@/components/top-navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const DraftLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNavbar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DraftLayout;
