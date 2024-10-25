import React, { useState } from "react";

type CreateProjectProps = {
    onCreate: (newProject: {
        title: string;
        description: string;
        details: string;
        category: string;
        publishedAt: string; 
        public: boolean;     
        status: 'draft' | 'published'; 
        tags: string[];      
    }) => void;
};

const CreateProject: React.FC<CreateProjectProps> = ({ onCreate }) => {
    // State for prosjektdata
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('');
    const [publishedAt, setPublishedAt] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [status, setStatus] = useState<'draft' | 'published'>('draft');
    const [tags, setTags] = useState<string[]>([]);

    // Håndterer skjema-innsending
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Opprett nytt prosjekt objekt
        const newProject = { title, description, details, category, publishedAt, public: isPublic, status, tags };
        
        // Send data til backend
        try {
            const response = await fetch('http://localhost:3999/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProject),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Kall onCreate for å oppdatere state i Projects-komponenten
            onCreate(newProject);

            // Nullstill feltene etter innsending
            setTitle('');
            setDescription('');
            setDetails('');
            setCategory('');
            setPublishedAt('');
            setIsPublic(false);
            setStatus('draft');
            setTags([]);
        } catch (error) {
            console.error('Feil ved opprettelse av prosjekt:', error);
        }
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
                <label htmlFor="publishedAt">Publiseringsdato</label>
                <input
                    type="date"
                    id="publishedAt"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="public">Offentlig</label>
                <input
                    type="checkbox"
                    id="public"
                    checked={isPublic}
                    onChange={(e) => setIsPublic(e.target.checked)}
                />
            </div>

            <div>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value as 'draft' | 'published')}
                >
                    <option value="draft">Kladd</option>
                    <option value="published">Publisert</option>
                </select>
            </div>

            <div>
                <label htmlFor="tags">Tags (separer med komma)</label>
                <input
                    type="text"
                    id="tags"
                    value={tags.join(', ')} // Konverterer array til tekst
                    onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))} // Deler opp i array
                />
            </div>

            <button type="submit">Opprett Prosjekt</button>
        </form>
    );
};

export default CreateProject;