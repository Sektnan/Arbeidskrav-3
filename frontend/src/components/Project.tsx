import React from 'react';
import { format } from 'date-fns';

// Typen for prosjektet, inkludert datoene
type ProjectProps = {
  title: string;
  description: string;
  details: string;
  createdAt: string; // For opprettelsesdato
  publishedAt: string; // For publikasjonstidspunkt
  children?: React.ReactNode;
};

// Project-komponenten som viser ett prosjekt
const Project: React.FC<ProjectProps> = ({
  title,
  description,
  details,
  createdAt,
  publishedAt,
  children,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <p>{details}</p>
      <p>Opprettet: {format(new Date(createdAt), 'dd.MM.yyyy')}</p> {/* La til opprettelsesdato */}
      <p>Publisert: {format(new Date(publishedAt), 'dd.MM.yyyy')}</p> {/* La til publikasjonstidspunkt */}
      {children}
    </div>
  );
};

<Projects projects={projects} onCreate={handleCreateProject} onRemove={handleRemoveProject} />
{
  projects.map((project) => (
    <Project
      key={project.id}
      title={project.title}
      description={project.description}
      details={project.details}
      createdAt={project.createdAt} // Passer opprettelsesdato
      publishedAt={project.publishedAt} // Passer publikasjonstidspunkt
    />
  ))
}

export default Project;