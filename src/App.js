import React, { useState } from 'react';
import Notification from './components/Notification';
import Profile from './components/Profile';

const App = () => {
    const [notifications, setNotifications] = useState([]);

    const handleAnswerNotification = () => {
        setNotifications(notifications => [
            ...notifications,
            {
                title: 'Someone answered your question',
                body: 'Check out the new answer!',
                backgroundColor: 'green',
            },
        ]);
    };

    const handleUpvoteNotification = () => {
        setNotifications(notifications => [
            ...notifications,
            {
                title: 'Someone upvoted your question/answer',
                body: 'Your question/answer received an upvote!',
                backgroundColor: 'yellow',
            },
        ]);
    };

    return (
        <div className="App">
            <Profile /><br/>
            <center>
            <button onClick={handleAnswerNotification}>Trigger Answer Notification</button>
            <button onClick={handleUpvoteNotification}>Trigger Upvote Notification</button>
            </center>
            {notifications.map((notification, index) => (
                <Notification
                    key={index}
                    title={notification.title}
                    body={notification.body}
                    backgroundColor={notification.backgroundColor}
                />
            ))}
        </div>
    );
};

export default App;
