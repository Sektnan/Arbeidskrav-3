import React from "react";
import Project from './Project'; 
import CreateProject from './CreateProject';

// Props for Projects-komponenten
type ProjectType = {
    id: number; // Husk å inkludere id
    title: string;
    description: string;
    details: string;
    category: string;
    publishedAt: string; // Nytt felt
    public: boolean;     // Nytt felt
    status: 'draft' | 'published'; // Nytt felt
    tags: string[];      // Nytt felt
};

type ProjectProps = {
    projects: ProjectType[];
    onCreate: (newProject: ProjectType) => void;
    onRemove: (index: number) => void;
}

// Projects-komponenten som viser flere prosjekter
const Projects: React.FC<ProjectProps> = ({ projects, onCreate, onRemove }) => {

    // Summerer prosjektene på kategori
    const categoryTotals = projects.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = 0;
        }
        acc[project.category] += 1;  // Øker totalen for kategorien 
        return acc;
    }, {} as Record<string, number>); // initier som et tomt objekt

    return (
        <div>
            <CreateProject onCreate={onCreate} />
            {Object.keys(categoryTotals).length === 0 ? (
                <p>Ingen prosjekter tilgjengelig.</p>
            ) : (
                <div>
                    <h2>Prosjekt totals per Kategori</h2>
                    <ul>
                        {Object.entries(categoryTotals).map(([category, total]) => (
                            <li key={category}>{category}: {total}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Vis prosjektene */}
            {projects.map((project, index) => (
                <div key={project.id}> {/* Bruk prosjektets ID her for unik nøkkel */}
                    <Project
                        title={project.title} 
                        description={project.description}
                        details={project.details}
                        publishedAt={project.publishedAt} // Send med de nye feltene
                        public={project.public}
                        status={project.status}
                        tags={project.tags}
                    />
                    <button onClick={() => onRemove(index)}>Fjern Prosjekt</button>
                </div>
            ))}
        </div>
    );
};

export default Projects;