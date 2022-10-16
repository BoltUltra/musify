import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SIngleTrack from "./SIngleTrack";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track/:id" element={<SIngleTrack />} />
      </Routes>
    </div>
  );
}

export default App;
