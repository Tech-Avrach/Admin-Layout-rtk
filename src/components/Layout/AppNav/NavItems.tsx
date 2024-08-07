import { Grid, User, Folder, ChartNoAxesCombined} from "lucide-react";

import { MenuItem } from "@/@Typings/interface";


export const menus: MenuItem[] = [
  { 
    label: "dashboard",
    to: "/dashboard", 
    icon: ChartNoAxesCombined 
  },
  { 
    label: "user",
    icon: User, 
    content: [
      { 
        label: "Add", 
        to: "/user/add" 
      },
      { 
        label: "List", 
        to: "/user/list" 
      }
    ]
  },
  { 
    label: "404 Error", 
    to: "/404", 
    icon: Folder 
  },
  { 
    label: "forbidden", 
    to: "/forbidden", 
    icon: Folder 
  },
];
