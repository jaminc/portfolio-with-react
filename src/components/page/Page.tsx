import { ReactElement } from "react";

import Sidebar from "../sidebar/Sidebar";
import MainContent from "../mainContent/MainContent";

const Page = (): ReactElement => {
  return (
    <>
      <Sidebar />
      <MainContent />
    </>
  );
};

export default Page;
