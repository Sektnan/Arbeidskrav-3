import React, { useState } from "react";
import Project from './Project'; 
import CreateProject from './CreateProject';
import { format } from 'date-fns';
import dayjs from 'dayjs';


// Typen for prosjektet
type ProjectType = {
    title: string;
    description: string;
    details: string;
    category: string;
};

//Props for Projects-komponenten
type ProjectProps = {
    projects: ProjectType[];
    onCreate: (newProject: ProjectType) => void;
    onRemove: (index: number) => void;
}

// projects-komponenten som viser flere prosjekter
const Projects: React.FC<ProjectProps> = ({ projects, onCreate, onRemove }) => {

    //Summerer prosjektene på kategori
    const categoryTotals = projects.reduce((acc, project) => {
        if (!acc[project.category]) {
            acc[project.category] = 0;
        }
        acc[project.category] += 1;  //Øker totalen for kategorien 
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
                            <li key={category}>{category}: {total}
                            </li>
                         ))}
                    </ul>
                    </div>
            )}

                {/*Vis prosjektene*/}
                {projects.map((project, index) => (
                    <div key={index}>
                        <Project
                            title={project.title} 
                            description={project.description}
                            details={project.details}
                        />
                        <button onClick={() => onRemove(index)}>Fjern Prosjekt</button>
                     </div>
                ))}
        </div>
    );
};

export default Projects;
