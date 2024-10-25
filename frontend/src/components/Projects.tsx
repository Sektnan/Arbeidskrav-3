import React from "react";
import Project from './Project'; 
import CreateProject from './CreateProject';

// Typen for prosjektet
type ProjectType = {
    id: number; // For å identifisere prosjektet
    title: string;
    description: string;
    details: string;
    category: string;
    publishedAt: string; 
    public: boolean;     
    status: 'draft' | 'published'; 
    tags: string[];      
};

// Props for Projects-komponenten
type ProjectProps = {
    projects: ProjectType[];
    onCreate: (newProject: ProjectType) => void;
    onRemove: (id: number) => void; // Endret til å ta id i stedet for index
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
    }, {} as Record<string, number>); // Initierer som et tomt objekt

    // Håndterer sletting av prosjekt
    const handleRemove = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:3999/api/projects/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Kall onRemove for å oppdatere state i parent-komponenten
            onRemove(id);
        } catch (error) {
            console.error('Feil ved sletting av prosjekt:', error);
        }
    };

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
            {projects.map((project) => (
                <div key={project.id}> {/* Bruk id som key */}
                    <Project
                        title={project.title} 
                        description={project.description}
                        details={project.details}
                        publishedAt={project.publishedAt}
                        public={project.public} // Passer på at public-feltet sendes
                        status={project.status}  // Passer på at status-feltet sendes
                        tags={project.tags}      // Passer på at tags-feltet sendes
                    />
                    <button onClick={() => handleRemove(project.id)}>Fjern Prosjekt</button>
                </div>
            ))}
        </div>
    );
};

export default Projects;