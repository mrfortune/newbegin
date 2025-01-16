'use client';

import React from 'react';

const Portfolio: React.FC = () => {
    return (
        <div>
            <h1>Our Portfolio</h1>
            <p>Check out some of our recent projects.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="portfolio-item">
                    <img src="/path/to/image1.jpg" alt="Project 1" />
                    <h2>Project 1</h2>
                    <p>Description of Project 1.</p>
                </div>
                <div className="portfolio-item">
                    <img src="/path/to/image2.jpg" alt="Project 2" />
                    <h2>Project 2</h2>
                    <p>Description of Project 2.</p>
                </div>
                <div className="portfolio-item">
                    <img src="/path/to/image3.jpg" alt="Project 3" />
                    <h2>Project 3</h2>
                    <p>Description of Project 3.</p>
                </div>
                {/* Add more portfolio items as needed */}
            </div>
        </div>
    );
};

export default Portfolio;