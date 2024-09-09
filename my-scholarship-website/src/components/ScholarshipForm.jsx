import React, { useState, useEffect } from 'react';

const ScholarshipForm = ({ addScholarship, scholarship }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [banner, setBanner] = useState(null);

    useEffect(() => {
        if (scholarship) {
            setTitle(scholarship.title);
            setDescription(scholarship.description);
            setBanner(scholarship.banner);
        } else {
            setTitle('');
            setDescription('');
            setBanner(null);
        }
    }, [scholarship]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newScholarship = { title, description, banner };
        addScholarship(newScholarship);
        setTitle('');
        setDescription('');
        setBanner(null);
    };

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setBanner(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Banner:</label>
                <input type="file" onChange={handleBannerChange} />
                {banner && <img src={banner} alt="Banner Preview" width="100" />}
            </div>
            <button type="submit">{scholarship ? 'Update Scholarship' : 'Add Scholarship'}</button>
        </form>
    );
};

export default ScholarshipForm;
