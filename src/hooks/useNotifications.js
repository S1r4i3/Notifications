import { useEffect } from 'react';

const useNotifications = (notificationType) => {
    useEffect(() => {
        if (notificationType && Notification.permission === 'granted') {
            const title = notificationType === 'answer' ? 'Someone answered your question' : 'Someone upvoted your question/answer';
            const body = notificationType === 'answer' ? 'Check out the new answer!' : 'Your question/answer received an upvote!';
            const backgroundColor = notificationType === 'answer' ? 'green' : 'yellow';

            new Notification(title, {
                body,
                icon: '/icon.png',
                data: { backgroundColor }
            });
        }
    }, [notificationType]);
};

export default useNotifications;
