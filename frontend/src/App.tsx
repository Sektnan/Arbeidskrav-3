import React, { useEffect, useState } from "react";
import Project from './components/Project'; 
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import useProjects from "./hooks/useProjects";
import config from './config'; // Importer config
import { API_BASE_URL, STUDENT_NAME, DEGREE, POINTS, EMAIL } from './config';




type ProjectType = {
  id: number;
  title: string;
  description: string;
  details: string;
  category: string;
}

const App: React.FC = () => {
  const student = {STUDENT_NAME};
  const degree = {DEGREE};
  const points = {POINTS};
  const email = {EMAIL};

 // Bruk custom hook for å hente prosjekter
 const { projects, error } = useProjects();

 // Håndtering av opprettelse av prosjekter
 const handleCreateProject = (newProject: Omit<ProjectType, 'id'> ) => {
   const projectWithId = { ...newProject, id: Date.now() };
   // Oppdater state med nytt prosjekt
   // For senere bruk: Kan også sende POST request til server for å lagre på backend
 };

 // Håndtering av fjerning av prosjekter
 const handleRemoveProject = (index: number) => {
   // Oppdater state med å fjerne et prosjekt
 };

 return (
   <div>
      <Header student={config.STUDENT} degree={config.DEGREE} points={config.POINTS} />
      <Experiences />
     <Contact email={email} />
     {error && <p>{error}</p>}
     <Projects projects={projects} onCreate={handleCreateProject} onRemove={handleRemoveProject} />
   </div>
 );
};

export default App;
