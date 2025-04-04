import React, { useState } from 'react';
import { FaQrcode, FaCalendarAlt, FaVideo, FaLock } from 'react-icons/fa';
import SCOImage from "../resources/SCO.png";

const EventHub = () => {
  const [showVideoRoom, setShowVideoRoom] = useState(false);
  
  const event = {
    id: 'scan-code-own',
    title: 'Scan It, Code It, Own It!',
    image: SCOImage,
    date: '2025-04-19',
    description: 'Build practical digital tools (QR business cards, emergency tags) in this hands-on workshop.',
    meetingLink: '', // Empty = not yet available
  };

  const handleJoinClick = () => {
    if (event.meetingLink) {
      window.open(event.meetingLink, '_blank');
    } else {
      setShowVideoRoom(true);
    }
  };

  const closeVideoRoom = () => {
    setShowVideoRoom(false);
  };

  return (
    <div className="event-hub">
      <h1>Event Hub</h1>
      <div className="event-card">
        <div className="event-image">
          <img src={event.image || '/default-event.jpg'} alt={event.title} />
          <div className="event-badge">
            <FaQrcode /> QR Workshop
          </div>
        </div>
        
        <div className="event-details">
          <h2>{event.title}</h2>
          <p className="event-date">
            <FaCalendarAlt /> {new Date(event.date).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </p>
          <p>{event.description}</p>
          
          <button 
            className="join-button"
            onClick={handleJoinClick}
          >
            <FaVideo /> Join Room
          </button>
        </div>
      </div>

      {/* Video Chat Room Modal */}
      {showVideoRoom && (
        <div className="video-room-overlay">
          <div className="video-room">
            <button className="close-button" onClick={closeVideoRoom}>
              ×
            </button>
            
            <div className="video-placeholder">
              <div className="countdown-message">
                <FaLock className="lock-icon" />
                <h3>Chat Room Coming Soon</h3>
                <p>This interactive space will unlock on</p>
                <div className="unlock-date">
                  April 19, 2025
                </div>
                <div className="video-placeholder-graphic">
                  <div className="screen"></div>
                  <div className="controls">
                    <div className="control-button"></div>
                    <div className="control-button"></div>
                    <div className="control-button"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// CSS Styles
const styles = `
.event-hub {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  position: relative;
}

.event-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  display: flex;
}

.event-image {
  width: 40%;
  position: relative;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #022350;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-details {
  width: 60%;
  padding: 2rem;
}

.event-date {
  color: #666;
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.join-button {
  background: #022350;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 1.5rem;
}

.join-button:hover {
  background: #011a3a;
  transform: translateY(-2px);
}

/* Video Room Styles */
.video-room-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.video-room {
  width: 90%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  padding: 2rem;
  position: relative;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.video-placeholder {
  background: #f5f7fa;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
}

.countdown-message {
  max-width: 500px;
  margin: 0 auto;
}

.lock-icon {
  font-size: 3rem;
  color: #022350;
  margin-bottom: 1rem;
}

.unlock-date {
  background: #022350;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  display: inline-block;
  margin: 1rem 0;
}

.video-placeholder-graphic {
  margin-top: 2rem;
  background: #e1e5eb;
  border-radius: 8px;
  padding: 1rem;
}

.screen {
  height: 200px;
  background: #c9d1db;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7a8ba9;
  font-weight: bold;
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.control-button {
  width: 40px;
  height: 40px;
  background: #d8e0ed;
  border-radius: 50%;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  .event-card {
    flex-direction: column;
  }
  
  .event-image,
  .event-details {
    width: 100%;
  }
}
`;

// Add styles to document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default EventHub;