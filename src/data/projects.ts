import { Projects } from "../types/projects";

import activeRecordImage from "../images/active-archive-screenshot.png";
import snakePainterImage from "../images/snake-screenshot.png";

const projects: Projects = [
  {
    title: "ActiveArchive",
    description:
      "An object-relational-mapping library inspired by ActiveRecord.",
    sourceCodeLink: "https://github.com/jaminc//ActiveArchive",
    imgSrc: activeRecordImage,
  },
  {
    title: "Snake Painter",
    description:
      "Game built with JavaScript and inspired by the classic, Snake. Your snake will leave a trail of paint behind. Collect orbs quickly to clean up after yourself. Don't get lost in the paint!",
    sourceCodeLink: "https://github.com/jaminc//snake",
    pageLink: "https://github.com/jaminc//ActiveArchive",
    imgSrc: snakePainterImage,
  },
];

export default projects;
