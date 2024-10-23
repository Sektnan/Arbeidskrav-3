import React, { useEffect, useState } from "react";
import Project from './components/Project'; 
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Header from "./components/Header";
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";


type ProjectType = {
  id: number;
  title: string;
  description: string;
  details: string;
  category: string;
}

const App: React.FC = () => {
  const student = 'Halgeir Geirson';
  const degree = 'Bachelor IT';
  const points = 180;
  const email = 'student@hiof.no';

  // State for prosjekter
  const [projects, setProjects] = useState<ProjectType[]>([]);

  const [error, setError] = useState<string | null>(null);


useEffect(() => {
  const fetchProjects = async () => {
    try{
      const response = await fetch('http://localhost:3999/api/projects');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      setError('Det har oppstått en feil ved henting av prosjekter')
      console.error(error);
    }
  };
  fetchProjects();
}, []);


  // Håndtering av opprettelse av prosjekter
  const handleCreateProject = (newProject: Omit<ProjectType, 'id'> ) => {
    const projectWithId = { ...newProject, id: Date.now() };
    setProjects((prevProjects) => [...prevProjects, projectWithId]);
};

  // Håndtering av fjerning av prosjekter
  const handleRemoveProject = (index: number) => {
    setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header student={student} degree={degree} points={points} />
      <Experiences />
      <Contact email={email} />
      {error && <p>{error}</p>}
      <Projects projects={projects} onCreate={handleCreateProject} onRemove={handleRemoveProject} />
    </div>
  );
};

export default App;
