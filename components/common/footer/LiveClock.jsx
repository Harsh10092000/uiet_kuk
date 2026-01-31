"use client";
import React, { useState, useEffect } from 'react';

const LiveClock = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        // Set initial time
        const updateTime = () => {
            const now = new Date();
            const options = {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true,
                timeZone: 'Asia/Kolkata'
            };
            setCurrentTime(now.toLocaleString('en-IN', options));
        };

        updateTime(); // Initial call
        const interval = setInterval(updateTime, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <>
            {currentTime || 'Loading...'}
            <br />
            <span style={{ fontSize: '0.9em', opacity: 0.8 }}>(India Standard Time)</span>
        </>
    );
};

export default LiveClock;
