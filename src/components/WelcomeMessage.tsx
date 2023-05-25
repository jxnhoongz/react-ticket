import React from 'react';

const WelcomeMessage: React.FC = () => {
    const hours = new Date().getHours();
    let timeOfDay;

    if (hours < 12) {
        timeOfDay = 'Morning';
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'Afternoon';
    } else {
        timeOfDay = 'Evening';
    }

    return (
        <h1>
            Good {timeOfDay}, Welcome to the Ticket System
        </h1>
    );
};

export default WelcomeMessage;
