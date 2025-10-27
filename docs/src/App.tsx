import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { allRoutes } from "@/Routes";
import NotFoundPage from "@/pages/NotFoundPage";
import "@/styles/homepage.css";

export default function App() {
  return (
    <Router>
      <Routes>
        {allRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Fallback Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
