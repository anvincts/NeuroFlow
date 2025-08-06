import React, { useState } from 'react';

const moodEmojis = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😐', label: 'Neutral' },
  { emoji: '😢', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😱', label: 'Stressed' },
  { emoji: '😴', label: 'Tired' },
];

export default function MoodCheckin() {
  const [selected, setSelected] = useState(null);
  const [sentiment, setSentiment] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSelect = async (emoji) => {
    setSelected(emoji);
    setLoading(true);
    setSentiment('');
    try {
      const res = await fetch('/api/mood/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mood: emoji }),
      });
      const data = await res.json();
      setSentiment(data.sentiment || 'No result');
    } catch (err) {
      setSentiment('Error analyzing mood');
    }
    setLoading(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>How are you feeling?</h2>
      <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        {moodEmojis.map(({ emoji, label }) => (
          <button
            key={emoji}
            style={{
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              fontSize: '2rem',
              border: selected === emoji ? '2px solid #007bff' : '1px solid #ccc',
              borderRadius: '1rem',
              background: selected === emoji ? '#e3f2fd' : '#fff',
              cursor: 'pointer',
            }}
            aria-label={label}
            onClick={() => handleSelect(emoji)}
          >
            {emoji}
          </button>
        ))}
      </div>
      {loading && <p>Analyzing mood...</p>}
      {sentiment && !loading && (
        <div>
          <strong>Sentiment:</strong> {sentiment}
        </div>
      )}
    </div>
  );
}