import React, { useState } from 'react';

const FeedbackBox = () => {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit feedback goes here
        console.log('Feedback submitted:', feedback);
        setFeedback('');
    };

    return (
        <div>
            <h2>Feedback</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback here"
                    required
                />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackBox;