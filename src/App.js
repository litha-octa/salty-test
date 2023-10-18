import { Route, HashRouter, Routes } from "react-router-dom";
import { Home } from "./screen";
function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
