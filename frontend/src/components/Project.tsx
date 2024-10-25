import React from 'react';
import { format } from 'date-fns';

type ProjectProps = {
  title: string;
  description: string;
  details: string;
  publishedAt: string; // Nytt felt
  public: boolean;     // Nytt felt
  status: 'draft' | 'published'; // Nytt felt
  tags: string[];      // Nytt felt
};

const Project: React.FC<ProjectProps> = ({ title, description, details, publishedAt, public: isPublic, status, tags }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h4>{description}</h4>
      <p>{details}</p>
      <p>Publisert: {format(new Date(publishedAt), 'dd.MM.yyyy')}</p>
      <p>Status: {status}</p>
      <p>Offentlig: {isPublic ? 'Ja' : 'Nei'}</p>
      <p>Tags: {tags.join(', ')}</p>
    </div>
  );
};

export default Project;