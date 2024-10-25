// PortfolioPage.tsx
import React from "react";
import { useProjects } from "../hooks/useProjects";
import Projects from "../components/Projects";

const PortfolioPage: React.FC = () => {
  const { projects, error } = useProjects();

  return (
    <div>
      {error && <p>{error}</p>}
      <Projects projects={projects} onCreate={function (newProject: { title: string; description: string; details: string; category: string; }): void {
        throw new Error("Function not implemented.");
      } } onRemove={function (index: number): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default PortfolioPage;