import React from 'react';
import Header from '../components/Header';
import Experiences from '../components/Experiences';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import CreateProject from '../components/CreateProject';
import { useProjects } from '../hooks/useProjects'; // Custom hook for prosjekter
import Layout from '../components/Layout';

const PortfolioPage: React.FC = () => {
  const { projects, handleCreateProject, handleRemoveProject, error } = useProjects();

  return (
    <Layout>
      <Header student="Halgeir Geirson" degree="Bachelor IT" points={180} />
      <Experiences />
      <Contact email="student@hiof.no" />
      {error && <p>{error}</p>}
      <Projects projects={projects} onCreate={handleCreateProject} onRemove={handleRemoveProject} />
      <CreateProject onCreate={handleCreateProject} />
    </Layout>
  );
};

export default PortfolioPage;