import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "/introduction",
    heading: "Getting started",
    items: [
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Oracle",
    href: "/Oracle",
    heading: "Oracle Notes",
    items: [
      {
        title: "Ghi chú thứ nhất",
        href: "/note1",
      },
    ],
  },
  {
    title: "C# Programing",
    href: "/CSharpPrograming",
    heading: "Programing Notes",
    items: [
      {
        title: "Ghi chú thứ nhất",
        href: "/note1",
      },
    ],
  },
];