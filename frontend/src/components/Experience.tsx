import React from 'react';

// Definerer typen for erfaring
type ExperienceProps = {
    title: string;
    description: string;
    children?: React.ReactNode;
};

const Experience: React.FC<ExperienceProps> = ({ title, description, children }) => {
    return (
        <div>
            <h3>{title}</h3> 
            <p>{description}</p> 
            {children}
        </div>
    );
};

export default Experience;