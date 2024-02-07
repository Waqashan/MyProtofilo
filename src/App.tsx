import { Route, Routes } from "react-router-dom";
import HomeMainPage from "./Pages/homeMainPage"; // Corrected component name
import AboutMainPage from "./Pages/aboutMainPage";
import Header from "./components/Navbar/Header";
import FooterMainPage from "./Pages/footerMainPage";
import Layout from "./Layout/Layout";
import Projects from "./components/Projects/Prjects";
import ContactPage from "./Pages/ContactPage";
import ExperienceMainPage from "./Pages/ExperienceMainPage";
import SkillsMianPage from "./Pages/SkillsMianPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<HomeMainPage />} />
          <Route path="/about" element={<AboutMainPage />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<FooterMainPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperienceMainPage />} />
          <Route path="/skills" element={<SkillsMianPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
