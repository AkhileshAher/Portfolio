import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import GearPage from "./pages/Gear";
import NotFoundPage from "./pages/NotFound";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gear" element={<GearPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
