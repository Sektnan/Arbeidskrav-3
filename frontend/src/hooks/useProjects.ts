import { useState, useEffect } from 'react';
import { fetchProjects } from '../services/api';

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError('Unable to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return { projects, error, loading };
};

export default useProjects;