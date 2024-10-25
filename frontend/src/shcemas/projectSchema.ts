import { z } from 'zod';

// Definerer Zod-skjema for prosjektdata
export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  details: z.string(),
  category: z.string(),
  publishedAt: z.string(), // Validering for dato
  public: z.boolean(),      // Validering for public
  status: z.enum(['draft', 'published']), // Validering for status
  tags: z.array(z.string()), // Validering for tags
});

// TypeScript type for validert prosjekt
export type ProjectType = z.infer<typeof ProjectSchema>;