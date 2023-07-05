import { ReactElement } from "react";

import sidebarLinks from "../../data/sidebarLinks";

import styles from "./sidebar.module.css";

const Sidebar = (): ReactElement => {
  return (
    <div className={styles.container}>
      <h1>Jamin Cheung</h1>
      <div>Web Developer</div>

      <ul className={styles.linksList}>
        {sidebarLinks.map((linkData) => {
          return (
            <li className={styles.linkContainer}>
              <a href={linkData.link} className={styles.link}>
                {linkData.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
