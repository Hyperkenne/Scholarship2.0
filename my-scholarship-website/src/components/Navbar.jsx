import React from "react";
import "./Navbar.css";

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id '${id}' not found.`);
        }
    };

    return (
        <div className="navbar">
            <h1>Admins Only</h1>
            <div className="nav-links">
                <button onClick={() => scrollToSection('scholarship-section')}>Upload Scholarships</button>
                <button onClick={() => scrollToSection('blog-section')}>Upload Blogs</button>
            </div>
        </div>
    );
};

export default Navbar;
