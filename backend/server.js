const express = require('express');
const cors = require('cors'); 

const app = express();

//Konfig CORS-middelvaren for Express-appen 
app.use(cors({
    origin: 'http://localhost:5173', // Definerer hvilken URL som har lov til å gjøre forespørsler til backend
    methods: 'GET,POST,PUT,DELETE',  // Tillat hvilke HTTP metoder jeg trenger
    credentials: true                // Om jeg skal tillate credentials (feks cookies eller autentisering)
}));

const projects = [
    {
        id: 1,
        title: 'Prosjekt A',
        description: 'Beskrivelse av prosjekt A',
        createdAt: new Date('2024-01-01'),
        category: 'Web-development'
    },
    { 
        id: 2, 
        title: 'Prosjekt B', 
        description: 'Beskrivelse av prosjekt B', 
        createdAt: new Date('2024-02-01'), 
        category: 'Mobil-app' 
    },
    { 
        id: 3, 
        title: 'Prosjekt C', 
        description: 'Beskrivelse av prosjekt C', 
        createdAt: new Date('2024-03-01'), 
        category: 'Data-Tek' 
    }
];

app.get('/api/projects', (req, res) => {
    res.json(projects)
});

// Start serveren
const PORT = process.env.PORT || 3999;
app.listen(PORT, () => {
    console.log(`Server kjører på port ${PORT}`);
});