export const requestNotificationPermission = async() => {
    try {
    const permission = await Notification.requestPermission();
    return permission;
} catch (error) {
    console.error('Notification permission request failed:', error);
}
};

export const triggerNotification = (title, body, backgroundColor) => {
    new Notification(title, {
        body,
        icon: 'path/to/icon.png',
        badge: 'path/to/badge.png',
        requireInteraction: true,
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    });
};
