import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Image from "next/image";
import NavMain from "./nav-main";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="max-w-[212px] bg-background-90">
      <SidebarHeader className="pt-6 px-2 pb-0">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:text-sidebar-accent-foreground justify-center hover:bg-transparent active:bg-transparent"
        >
          <Image
            src="/draft.svg"
            alt="draft-logo"
            width={124}
            height={48}
            className="group-data-[collapsible=icon]:hidden"
          />
          <Image
            src="/d-draft.svg"
            alt="draft-logo-small"
            width={23}
            height={32}
            className="hidden group-data-[collapsible=icon]:block"
          />
        </SidebarMenuButton>
      </SidebarHeader>

      <SidebarContent className="mt-10 gap-y-6">
        <NavMain />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
