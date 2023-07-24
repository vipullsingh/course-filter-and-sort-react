import React, { useState, useEffect } from 'react';
import SpeakerTable from '../components/SpeakerTable';

const SpeakersPage = () => {
  const [speakers, setSpeakers] = useState([]);

  // Fetch speakers from the backend (you may use axios or fetch)
  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        // Replace the URL with your backend API endpoint for fetching speakers
        const response = await fetch('http://localhost:5000/speakers');
        const data = await response.json();
        setSpeakers(data);
      } catch (error) {
        console.error('Error fetching speakers:', error);
      }
    };

    fetchSpeakers();
  }, []);

  return (
    <div>
      <h1>Speakers</h1>
      <SpeakerTable speakers={speakers} />
    </div>
  );
};

export default SpeakersPage;
