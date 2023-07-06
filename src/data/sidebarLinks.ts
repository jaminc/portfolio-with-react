import { Link, SidebarLinks } from "../types/sidebarLinks";

const sidebarLinks: SidebarLinks = [
  {
    title: "about me",
    link: `#${Link.AboutMe}`,
  },
  {
    title: "work experience",
    link: `#${Link.WorkExperience}`,
  },
  {
    title: "projects",
    link: `#${Link.Projects}`,
  },
  {
    title: "contact me",
    link: `#${Link.ContactMe}`,
  },
];

export default sidebarLinks;
