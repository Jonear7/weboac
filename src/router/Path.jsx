import { Route, Routes } from "react-router-dom";
import Home from "../Home/home"; // Import Home component (assuming it's the correct path)

function MyApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* Add other routes here if needed */}
    </Routes>
  );
}

export default MyApp;
