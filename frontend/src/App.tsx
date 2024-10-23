import React from "react";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { useProjects } from "./hooks/useProjects"; // Importer hooket

const App: React.FC = () => {
  const student = 'Halgeir Geirson';
  const degree = 'Bachelor IT';
  const points = 180;
  const email = 'student@hiof.no';

  type ProjectType = {
    id: number;
    title: string;
    description: string;
    details: string;
    category: string;
    publishedAt: string; // La til publishedAt her
  }

  // Bruk hooket til å hente prosjekter
  const { projects, error } = useProjects();

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences />
      <Contact email={email} />
      {error && <p>{error}</p>}
      <Projects projects={projects} onCreate={function (): void {
        throw new Error("Function not implemented.");
      } } onRemove={function (): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default App;