import { ReactElement } from "react";

import MainContent from "../mainContent/MainContent";
import Sidebar from "../sidebar/Sidebar";

function App(): ReactElement {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
