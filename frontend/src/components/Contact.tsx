import React, { useState } from 'react';

type ContactProps = {
    email: string;
};

/* Bruker useState-hooken til å holde styr på navn, message og innsendte data */
const Contact: React.FC<ContactProps> = ({ email }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    const [error, setError] = useState('');

    //håndtering av innsending av skjema-funksjon
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

    // validering
    if(!name || !message) {
        setError('Fyll ut både navn og melding.');
        return;
    }

    // Hvis begge felt fylt, vis data og nullstill
    setError('');
    const formData = { name, message, email };
    setSubmittedData(formData); //Lagre innsendt data
    setName('');                //Nullstille navn-feltet
    setMessage('');             //Nullstille melding-feltet
};

    return (
        <div>
            <h2>Kontaktinformasjon</h2>
            <p>E-post: {email}</p>
        

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Navn</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>

            <div>
                <label htmlFor="message"> Melding:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            {/* Vis valideringsfeil hvis det er noen */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit">Send</button>
            </form>

            {/* Vis innsendte data hvis skjemaet er sendt */}
            {submittedData && (
                <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            )}
            </div>
    );
};

export default Contact;