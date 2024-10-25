import sqlite3 from 'sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '../database.sqlite');

// Oppretter tilkobling til SQLite-database
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Kunne ikke koble til database:', err.message);
    } else {
        console.log('Tilkoblet til SQLite-database');
    }
});

export default db;