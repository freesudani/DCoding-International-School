import React from "react";
import {
  FaHome,
  FaGraduationCap,
  FaRegNewspaper,
  FaPhoneAlt,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "Programs",
    path: "/programs",
    icon: <FaGraduationCap />,
  },
  {
    title: "News",
    path: "/news",
    icon: <FaRegNewspaper />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaPhoneAlt />,
  },
];
