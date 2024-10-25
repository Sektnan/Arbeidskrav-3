import db from './connection';

// Funksjon for å initialisere prosjekttabellen
const initializeDatabase = () => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            details TEXT,
            category TEXT NOT NULL,
            publishedAt TEXT, 
            public BOOLEAN NOT NULL,
            status TEXT CHECK (status IN ('draft', 'published')),
            tags TEXT
  )
        `, (err: Error | null) => {
            if (err) {
                console.error('Kunne ikke opprette tabellen:', err.message);
            } else {
                console.log('Tabellen "projects" er opprettet eller eksisterer allerede');
            }
        });
    });
};

export default initializeDatabase;