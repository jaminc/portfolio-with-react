import { ReactElement } from "react";

import MainContent from "./components/mainContent/MainContent";
import Sidebar from "./components/sidebar/Sidebar";

function App(): ReactElement {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
