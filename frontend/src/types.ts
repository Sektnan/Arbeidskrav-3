export type ProjectType = {
  id: number;
  title: string;
  description: string;
  details: string;
  category: string;
  publishedAt: string; // inkludert
  public: boolean;     // Nytt felt for offentlig status
  status: 'draft' | 'published'; // Nytt felt for prosjektstatus
  tags: string[];      // Nytt felt for tags
};