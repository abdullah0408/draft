import { HouseIcon } from "@/icons/HouseIcon";
import { LayoutGridIcon } from "@/icons/LayoutGridIcon";
import { SettingsIcon } from "@/icons/SettingsIcon";
import { Trash2Icon } from "@/icons/Trash2Icon";

export const NAV_MAIN_DATA = [
  {
    title: "Home",
    url: "/draft",
    icon: HouseIcon,
  },
  {
    title: "Templates",
    url: "/draft/templates",
    icon: LayoutGridIcon,
  },
  {
    title: "Trash",
    url: "/draft/trash",
    icon: Trash2Icon,
  },
  {
    title: "Settings",
    url: "/draft/settings",
    icon: SettingsIcon,
  },
];
