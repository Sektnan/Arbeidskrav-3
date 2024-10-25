import React from "react";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { useProjects } from "./hooks/useProjects";
import PortfolioPage from './pages/PortfolioPage';

const App: React.FC = () => {

  const student = 'Halgeir Geirson';
  const degree = 'Bachelor IT';
  const points = 180;
  const email = 'student@hiof.no';

  // Bruker hooket til å hente prosjekter
  const { projects, error } = useProjects();

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences />
      <Contact email={email} />
      {error && <p>{error}</p>}
      <Projects projects={projects} />
      <PortfolioPage />
    </div>
  );
};

export default App;