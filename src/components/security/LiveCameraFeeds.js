import React from 'react';

const LiveCameraFeeds = () => {
    const feeds = [
        { id: 1, name: 'Camera 1', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 2, name: 'Camera 2', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ];

    return (
        <div>
            <h1>Live Camera Feeds</h1>
            <div style={styles.feedContainer}>
                {feeds.map((feed) => (
                    <div key={feed.id} style={styles.feed}>
                        <h3>{feed.name}</h3>
                        <video src={feed.url} controls style={styles.video} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    feedContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    feed: {
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '8px',
    },
    video: {
        width: '100%',
        height: 'auto',
    },
};

export default LiveCameraFeeds;
