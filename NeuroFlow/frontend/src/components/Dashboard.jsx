import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [moodHistory, setMoodHistory] = useState([]);
    const [feedbackHistory, setFeedbackHistory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const moodResponse = await fetch('/api/mood');
                const feedbackResponse = await fetch('/api/feedback');
                
                if (moodResponse.ok) {
                    const moodData = await moodResponse.json();
                    setMoodHistory(moodData);
                }

                if (feedbackResponse.ok) {
                    const feedbackData = await feedbackResponse.json();
                    setFeedbackHistory(feedbackData);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>User Dashboard</h1>
            <section>
                <h2>Mood History</h2>
                <ul>
                    {moodHistory.map((mood, index) => (
                        <li key={index}>{mood}</li>
                    ))}
                </ul>
            </section>
            <section>
                <h2>Feedback History</h2>
                <ul>
                    {feedbackHistory.map((feedback, index) => (
                        <li key={index}>{feedback}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Dashboard;