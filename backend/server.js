const express = require('express');
const cors = require('cors'); 

const app = express();
app.use(express.json()); // For å håndtere JSON-kropp i forespørslene

//Konfig CORS-middelvaren for Express-appen 
app.use(cors({
    origin: 'http://localhost:5173', // Definerer hvilken URL som har lov til å gjøre forespørsel til backend
    methods: 'GET,POST,PUT,DELETE',  // Tillat hvilke HTTP metoder jeg trenger
    credentials: true                // Om jeg skal tillate credentials (feks cookies eller autentisering)
}));

const projects = [
    {
        id: 1,
        title: 'Prosjekt A',
        description: 'Beskrivelse av prosjekt A',
        details: 'Detaljer om prosjekt A',
        category: 'Web-development',
        publishedAt: '2024-01-15', // Bruker dato som en streng
        public: true,
        status: 'published',
        tags: ['web', 'frontend']
    },
    { 
        id: 2, 
        title: 'Prosjekt B', 
        description: 'Beskrivelse av prosjekt B', 
        details: 'Detaljer om prosjekt B',
        category: 'Mobil-app', 
        publishedAt: '2024-02-15',
        public: true,
        status: 'draft',
        tags: ['mobile', 'ios'] 
    },
    { 
        id: 3, 
        title: 'Prosjekt C', 
        description: 'Beskrivelse av prosjekt C', 
        details: 'Detaljer om prosjekt C',
        category: 'Data-Tek', 
        publishedAt: '2024-03-15',
        public: false,
        status: 'draft',
        tags: ['data', 'backend']
    }
];

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// Nytt API-endepunkt for å opprette et nytt prosjekt
app.post('/api/projects', (req, res) => {
    const newProject = {
        id: projects.length + 1, // Generer nytt ID basert på eksisterende prosjekter
        ...req.body // Kopierer data fra forespørselen
    };

    projects.push(newProject); // Legg til det nye prosjektet i arrayen
    res.status(201).json(newProject); // Send tilbake det nyopprettede prosjektet
});

// Start serveren
const PORT = process.env.PORT || 3999;
app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}`);
});
