import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import { ProjectSchema, ProjectType } from '../schemas/projectSchema';

export const useProjects = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      const parsedResult = ProjectSchema.array().safeParse(data); // safeParse for mer robust håndtering
      if (parsedResult.success) {
        setProjects(parsedResult.data);
      } else {
        setError('Data validation error');
        console.error(parsedResult.error.errors.map((err: { message: any; }) => err.message).join(', '));
      }
    };

    loadProjects();
  }, []);

  return { projects, error };
};