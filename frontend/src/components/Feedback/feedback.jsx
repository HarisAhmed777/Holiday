import React, { useState } from 'react';
import './feedback.css';

function Feedback() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8888/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, feedback })
        });

        if (response.ok) {
            alert('Feedback submitted successfully');
            setName('');
            setEmail('');
            setFeedback('');
        } else {
            alert('Error submitting feedback');
        }
    };

    return (
        <>
            <h1 className="text-center">Feedback</h1>
            <div className="feedback-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="form-control-feedback"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Your Email"
                        className="form-control-feedback"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Your Feedback"
                        className="form-control-feedback"
                        rows="4"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                    ></textarea>
                    <button className="btn-feedback" type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Feedback;
