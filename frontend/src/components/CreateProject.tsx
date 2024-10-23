import React, { useState } from "react";
import { format } from 'date-fns';
import dayjs from 'dayjs';

type CreateProjectProps = {
    onCreate: (newProject: { title: string; description: string; details: string }) => void;
};

const CreateProject: React.FC<CreateProjectProps> = ({ onCreate }) => {

    //State for prosjektdata
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('');

    //Håndterer skjema-innsending
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        //Opprett nytt prosjekt objekt
        const newProject = { title, description, details, category };
        onCreate(newProject); 

        //Nullstill feltene etter innsending
        setTitle('');
        setDescription('');
        setDetails('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Tittel</label>
                <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                />
            </div>

            <div>
                <label htmlFor="description">Beskrivelse</label>
                <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />
            </div>

            <div>
                <label htmlFor="details">Detaljer</label>
                <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
                />
            </div>

            <div>
                <label htmlFor="category">Kategori</label>
                <input
                type="text"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                />
            </div>

            <button type="submit">Opprett Prosjekt</button>
        </form>
    );
};


export default CreateProject;