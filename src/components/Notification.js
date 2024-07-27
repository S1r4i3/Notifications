import React, { useEffect, useState } from 'react';
import './Notification.css';

const Notification = ({ title, body, backgroundColor }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="custom-notification" style={{ backgroundColor }}>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Notification;
