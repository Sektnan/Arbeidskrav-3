import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import { ProjectSchema, ProjectType } from '../schemas/projectSchema';

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects();

        // Valider prosjektdata med Zod-skjema
        const parsedProjects = ProjectSchema.array().parse(data); // Parse data som en array
        setProjects(parsedProjects);
      } catch (error) {
        if (error instanceof z.ZodError) {
          // Håndter Zod-feil spesifikt hvis du ønsker å logge eller vise feil
          setError('Data validation error: ' + error.errors.map(err => err.message).join(', '));
        } else {
          setError('Det har oppstått en feil ved henting av prosjekter');
        }
        console.error(error);
      }
    };

    loadProjects();
  }, []);

  return { projects, error };
};