import { z } from 'zod';

// Definerer Zod-skjema for prosjektdata
export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  details: z.string().min(1, 'Details are required'),
  category: z.string().min(1, 'Category is required'),
});

// TypeScript type for validert prosjekt
export type ProjectType = z.infer<typeof ProjectSchema>;