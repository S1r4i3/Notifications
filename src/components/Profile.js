import React, { useState, useEffect } from 'react';
import { requestNotificationPermission } from '../utils/notificationUtils';
import './Profile.css';

const Profile = () => {
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);

    useEffect(() => {
        if (Notification.permission === 'granted') {
            setNotificationsEnabled(true);
        }
    }, []);

    const handleToggleNotifications = () => {
        if (!notificationsEnabled) {
            requestNotificationPermission().then(permission => {
                if (permission === 'granted') {
                    setNotificationsEnabled(true);
                }
            });
        } else {
            setNotificationsEnabled(false);
        }
    };

    return (
        <div className="profile-page">
            <h2>Profile Page</h2>
            <button
                className={notificationsEnabled ? 'enabled' : 'disabled'}
                onClick={handleToggleNotifications}
            >
                {notificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}
            </button>
        </div>
    );
};

export default Profile;
