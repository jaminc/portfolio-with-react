export enum Link {
  AboutMe = "about-me",
  WorkExperience = "work-experience",
  Projects = "projects",
  ContactMe = "contact-me",
}

export type SidebarLink = {
  title: string;
  link: string;
};

export type SidebarLinks = SidebarLink[];
