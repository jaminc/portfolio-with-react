import { ReactElement } from "react";

import Sidebar from "../sidebar/Sidebar";
import MainContent from "../mainContent/MainContent";

import styles from "./page.module.css";

const Page = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default Page;
