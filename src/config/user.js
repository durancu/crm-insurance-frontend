import {
  Gear,
  Bag,
  Files,
  ArchiveFill,
  CashStack,
  Bookmarks,
  PersonBoundingBox,
  FileDiff,
} from "react-bootstrap-icons";

export const USER_SETTINGS = {
  roles: [
    { id: "ADMIN", name: "System Administrator", description: "", icon: Gear },
    { id: "OWNER", name: "Business Owner", description: "", icon: Bag },
    { id: "LEGAL", name: "Legal Representative", description: "", icon: Files },
    {
      id: "MANAGER",
      name: "Office Manager",
      description: "",
      icon: ArchiveFill,
    },
    { id: "SELLER", name: "Sales Agent", description: "", icon: CashStack },
    {
      id: "ENDORSEMENTS",
      name: "Endorsements Assistant",
      description: "",
      icon: FileDiff,
    },
    {
      id: "CERTIFICATES",
      name: "Certificates Assistant",
      description: "",
      icon: Bookmarks,
    },
    {
      id: "TRAINEE",
      name: "Sales Agent On Training",
      description: "",
      icon: PersonBoundingBox,
    },
  ],
};

export const SELLER_ROLES = ["SELLER", "TRAINEE"];
export const ADMIN_ROLES = ["OWNER", "ADMIN",];
export const EXECUTIVE_ROLES = ["LEGAL", "MANAGER","ADMIN","OWNER"];
