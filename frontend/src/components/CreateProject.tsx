import React, { useState } from "react";
import { ProjectType } from '../types'; // Importerer ProjectType for typing

type CreateProjectProps = {
    onCreate: (newProject: Omit<ProjectType, 'id'>) => void; // Bruker Omit for å ekskludere id
};

const CreateProject: React.FC<CreateProjectProps> = ({ onCreate }) => {
    // State for prosjektdata
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('');
    const [publishedAt, setPublishedAt] = useState('');
    const [publicProject, setPublicProject] = useState(false);
    const [status, setStatus] = useState<'draft' | 'published'>('draft');
    const [tags, setTags] = useState('');

    // Håndterer skjema-innsending
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Opprett nytt prosjekt objekt
        const newProject = { 
            title, 
            description, 
            details, 
            category, 
            publishedAt, 
            public: publicProject, 
            status, 
            tags: tags.split(',').map(tag => tag.trim()), // Konverterer tags til array
        };
        onCreate(newProject); 

        // Nullstill feltene etter innsending
        setTitle('');
        setDescription('');
        setDetails('');
        setCategory('');
        setPublishedAt('');
        setPublicProject(false);
        setStatus('draft');
        setTags('');
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

            <div>
                <label htmlFor="publishedAt">Publisert den</label>
                <input
                    type="date"
                    id="publishedAt"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={publicProject}
                        onChange={(e) => setPublicProject(e.target.checked)}
                    />
                    Offentlig
                </label>
            </div>

            <div>
                <label htmlFor="status">Status</label>
                <select id="status" value={status} onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}>
                    <option value="draft">Utkast</option>
                    <option value="published">Publisert</option>
                </select>
            </div>

            <div>
                <label htmlFor="tags">Tags (komma-separert)</label>
                <input
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
            </div>

            <button type="submit">Opprett Prosjekt</button>
        </form>
    );
};

export default CreateProject;