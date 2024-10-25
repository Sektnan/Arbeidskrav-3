import { API_BASE_URL } from '../config';
import { ProjectType } from '../types'; // Flytt typene hit også

export const fetchProjects = async (): Promise<ProjectType[]> => {
  const response = await fetch(`${API_BASE_URL}/api/projects`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();

};
