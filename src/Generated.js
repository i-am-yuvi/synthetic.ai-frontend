import React from 'react';
import { useLocation } from 'react-router-dom';
import './Generated.css';

const Generated = () => {
    const location = useLocation();
    const content = location.state?.content;

    return (
        <div className="generated-content">
            <h2>Generated Content</h2>
            <ul>
                {content && content.split('\n')
                .filter(item => item.trim() !== '')
                .map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </ul>

        </div>
    );
}

export default Generated;
