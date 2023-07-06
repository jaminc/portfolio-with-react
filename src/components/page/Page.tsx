import { ReactElement } from "react";

import Sidebar from "../sidebar/Sidebar";
import MainContent from "../mainContent/MainContent";

import styles from "./page.module.css";

const Page = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>

      <div className={styles.mainContentContainer}>
        <MainContent />
      </div>
    </div>
  );
};

export default Page;
