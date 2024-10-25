import db from './connection';

// Funksjon for å initialisere prosjekttabellen
const initializeDatabase = () => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT,
                details TEXT,
                publishedAt TEXT,
                public INTEGER,
                status TEXT,
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