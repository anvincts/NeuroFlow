import React, { useState } from 'react';

const MoodCheckin = () => {
    const [mood, setMood] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit mood data to the backend
        console.log('Mood:', mood);
        console.log('Comments:', comments);
    };

    return (
        <div>
            <h2>Mood Check-in</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    How are you feeling?
                    <select value={mood} onChange={(e) => setMood(e.target.value)}>
                        <option value="">Select your mood</option>
                        <option value="happy">Happy</option>
                        <option value="sad">Sad</option>
                        <option value="neutral">Neutral</option>
                        <option value="angry">Angry</option>
                    </select>
                </label>
                <br />
                <label>
                    Additional Comments:
                    <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default MoodCheckin;