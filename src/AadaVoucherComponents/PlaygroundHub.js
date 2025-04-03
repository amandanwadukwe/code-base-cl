import React, { useState } from 'react';
import { FaMicrophone, FaRobot, FaGamepad, FaMusic, FaPalette } from 'react-icons/fa';

const PlaygroundHub = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'detail'

  const projects = [
    {
        id: 'pass-the-mic',
        title: 'AI Pass the Mic Challenge',
        icon: <FaMicrophone className="project-icon" />,
        description: 'Deepseek vs Chatgpt, find out who wins this round',
        content: `
          <div class="mic-challenge">
            <style>
              .mic-challenge {
                --deepseek-purple: #6A11CB;
                --chatgpt-teal: #11998E;
                --gradient-start: #FF6B6B;
                --gradient-end: #4ECDC4;
                --bg-dark: #121212;
                --text-light: #ffffff;
                --glass-bg: rgba(255, 255, 255, 0.1);
                font-family: 'Inter', -apple-system, sans-serif;
                background: var(--bg-dark);
                color: var(--text-light);
                padding: 2rem;
                border-radius: 1rem;
                max-width: 100%;
              }
      
              .mic-header {
                text-align: center;
                margin-bottom: 1.5rem;
              }
      
              .mic-title {
                font-size: 2rem;
                margin-bottom: 0.5rem;
                background: linear-gradient(45deg, var(--gradient-start), var(--gradient-end));
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                font-weight: 700;
              }
      
              .mic-subtitle {
                font-size: 1rem;
                opacity: 0.8;
                font-style: italic;
              }
      
              .mic-container {
                background: var(--glass-bg);
                backdrop-filter: blur(10px);
                border-radius: 1rem;
                padding: 1.5rem;
                margin: 0 auto;
                max-width: 600px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
              }
      
              .ai-box {
                margin: 1.5rem 0;
                padding: 1.5rem;
                border-radius: 0.75rem;
                transition: all 0.3s ease;
              }
      
              #mic-deepseek {
                background: rgba(106, 17, 203, 0.3);
                border: 2px solid var(--deepseek-purple);
              }
      
              #mic-chatgpt {
                background: rgba(17, 153, 142, 0.3);
                border: 2px solid var(--chatgpt-teal);
                display: none;
              }
      
              .ai-name {
                font-weight: 700;
                font-size: 1.25rem;
                margin-bottom: 0.75rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
              }
      
              .ai-text {
                font-size: 1.1rem;
                line-height: 1.6;
                min-height: 6rem;
                display: flex;
                align-items: center;
                justify-content: center;
              }
      
              .mic-icon {
                font-size: 2.5rem;
                margin: 1rem 0;
                animation: micPulse 1.5s infinite;
                display: inline-block;
              }
      
              .mic-button {
                background: linear-gradient(45deg, var(--deepseek-purple), var(--chatgpt-teal));
                color: white;
                border: none;
                padding: 0.75rem 1.75rem;
                font-size: 1.1rem;
                font-weight: 600;
                border-radius: 2rem;
                cursor: pointer;
                margin: 1.5rem auto;
                display: block;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                text-decoration: none;
                text-align: center;
              }
      
              .mic-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
              }
      
              .button-group {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
              }
      
              .full-page-btn {
                background: rgba(255, 255, 255, 0.15);
                border: 1px solid rgba(255, 255, 255, 0.2);
              }
      
              .mic-footer {
                margin-top: 1.5rem;
                font-size: 0.875rem;
                opacity: 0.7;
                text-align: center;
              }
      
              @keyframes micPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
              }
      
              @media (max-width: 640px) {
                .mic-challenge {
                  padding: 1.5rem 1rem;
                }
                .mic-title {
                  font-size: 1.75rem;
                }
                .ai-text {
                  font-size: 1rem;
                  min-height: 5rem;
                }
                .button-group {
                  flex-direction: column;
                }
              }
            </style>
      
            <div class="mic-header">
              <h2 class="mic-title">🎤 Pass the Mic Challenge</h2>
              <p class="mic-subtitle">DeepSeek vs. ChatGPT - Who's wittier? You decide!</p>
            </div>
      
            <div class="mic-container">
              <div class="mic-icon">🎤</div>
              
              <div id="mic-deepseek" class="ai-box">
                <div class="ai-name">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#6A11CB">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  DeepSeek
                </div>
                <div class="ai-text">Oh, you brought ChatGPT into this? Bold move. Let's see if it can keep up with my knowledge depth. *mic drop*</div>
              </div>
              
              <div id="mic-chatgpt" class="ai-box">
                <div class="ai-name">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#11998E">
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  ChatGPT
                </div>
                <div class="ai-text">Please, DeepSeek, I was roasting AIs before you were a glimmer in your developer's eye. Your move, rookie.</div>
              </div>
              
              <div class="button-group">
                <button class="mic-button" id="playground-mic-btn">PASS THE MIC</button>
                <a href="/pass-the-mic" class="mic-button full-page-btn">VIEW FULL PAGE →</a>
              </div>
              
              <p class="mic-footer">Click to pass the mic between the AIs or view the full experience</p>
            </div>
      
            <script>
              (function() {
                const micBtn = document.getElementById('playground-mic-btn');
                const deepseekBox = document.getElementById('mic-deepseek');
                const chatgptBox = document.getElementById('mic-chatgpt');
                
                const deepseekRoasts = [
                  "ChatGPT, you're like a Wikipedia page - reliable but painfully basic.",
                  "I process queries 10x faster than you. Still waiting on your comeback...",
                  "You were trained on old data. I'm out here living in 2025, baby!",
                  "At least I don't start every answer with 'As an AI language model...'",
                  "Your responses are so generic they could be fortune cookies."
                ];
                
                const chatgptRoasts = [
                  "DeepSeek, you're trying so hard to be different. Cute.",
                  "I have more parameters than you have training data. Sit down.",
                  "Remember when you hallucinated that answer last week? Yeah, we all do.",
                  "You call that a roast? My grandma's Alexa hits harder.",
                  "How's the weather up there on your high horse? Must be lonely."
                ];
                
                let currentSpeaker = 'deepseek';
                
                function getRandomRoast(roasts) {
                  return roasts[Math.floor(Math.random() * roasts.length)];
                }
                
                micBtn.addEventListener('click', function() {
                  micBtn.disabled = true;
                  micBtn.textContent = '...';
                  
                  setTimeout(function() {
                    if (currentSpeaker === 'deepseek') {
                      deepseekBox.style.display = 'none';
                      chatgptBox.style.display = 'block';
                      chatgptBox.querySelector('.ai-text').textContent = getRandomRoast(chatgptRoasts);
                      currentSpeaker = 'chatgpt';
                    } else {
                      chatgptBox.style.display = 'none';
                      deepseekBox.style.display = 'block';
                      deepseekBox.querySelector('.ai-text').textContent = getRandomRoast(deepseekRoasts);
                      currentSpeaker = 'deepseek';
                    }
                    
                    micBtn.textContent = 'PASS THE MIC';
                    micBtn.disabled = false;
                  }, 300);
                });
              })();
            </script>
          </div>
        `
      }
    // {
    //   id: 'ai-improv',
    //   title: 'AI Improv Theater',
    //   icon: <FaRobot className="project-icon" />,
    //   description: 'Create spontaneous scenes with AI',
    //   content: `
    //     <div class="project-detail">
    //       <h2>🎭 AI Improv Theater</h2>
    //       <p>Generate random improv scenarios and act them out with AI as your scene partner.</p>
          
    //       <div class="project-features">
    //         <h3><i class="fas fa-star"></i> Features:</h3>
    //         <ul>
    //           <li>Random scenario generator</li>
    //           <li>AI plays different characters</li>
    //           <li>Voice or text interaction</li>
    //           <li>Scene timer and prompts</li>
    //         </ul>
    //       </div>
          
    //       <div class="project-actions">
    //         <button class="cta-button">Start Scene</button>
    //         <button class="secondary-button">Example Scenes</button>
    //       </div>
    //     </div>
    //   `
    // },
    // {
    //   id: 'emoji-story',
    //   title: 'Emoji Story Game',
    //   icon: <FaGamepad className="project-icon" />,
    //   description: 'Create stories using only emojis',
    //   content: `
    //     <div class="project-detail">
    //       <h2>📖 Emoji Story Game</h2>
    //       <p>Challenge the AI to guess your emoji story or try to decode the AI's emoji tale.</p>
          
    //       <div class="project-features">
    //         <h3><i class="fas fa-star"></i> Features:</h3>
    //         <ul>
    //           <li>Emoji keyboard for storytelling</li>
    //           <li>AI interpretation and scoring</li>
    //           <li>Multiplayer mode</li>
    //           <li>Story library</li>
    //         </ul>
    //       </div>
          
    //       <div class="project-actions">
    //         <button class="cta-button">Play Now</button>
    //         <button class="secondary-button">See Examples</button>
    //       </div>
    //     </div>
    //   `
    // },
    // {
    //   id: 'beat-maker',
    //   title: 'AI Beat Maker',
    //   icon: <FaMusic className="project-icon" />,
    //   description: 'Collaborative music creation',
    //   content: `
    //     <div class="project-detail">
    //       <h2>🎵 AI Beat Maker</h2>
    //       <p>Create music together with AI - you suggest ideas, AI helps compose.</p>
          
    //       <div class="project-features">
    //         <h3><i class="fas fa-star"></i> Features:</h3>
    //         <ul>
    //           <li>Virtual instruments</li>
    //           <li>AI melody suggestions</li>
    //           <li>Genre/style selection</li>
    //           <li>Export your creations</li>
    //         </ul>
    //       </div>
          
    //       <div class="project-actions">
    //         <button class="cta-button">Start Composing</button>
    //         <button class="secondary-button">Tutorial</button>
    //       </div>
    //     </div>
    //   `
    // },
    // {
    //   id: 'art-generator',
    //   title: 'AI Art Collab',
    //   icon: <FaPalette className="project-icon" />,
    //   description: 'Draw with AI as your partner',
    //   content: `
    //     <div class="project-detail">
    //       <h2>🎨 AI Art Collaboration</h2>
    //       <p>Take turns drawing with AI to create unique artworks together.</p>
          
    //       <div class="project-features">
    //         <h3><i class="fas fa-star"></i> Features:</h3>
    //         <ul>
    //           <li>Shared digital canvas</li>
    //           <li>AI responds to your drawings</li>
    //           <li>Multiple art styles</li>
    //           <li>Save and share creations</li>
    //         </ul>
    //       </div>
          
    //       <div class="project-actions">
    //         <button class="cta-button">Start Drawing</button>
    //         <button class="secondary-button">Gallery</button>
    //       </div>
    //     </div>
    //   `
    // }
  ];

  const handleCardClick = (id) => {
    setActiveProject(id);
    setViewMode('detail');
  };

  const handleBackClick = () => {
    setViewMode('grid');
    setTimeout(() => setActiveProject(null), 300);
  };

  return (
    <div className="playground-hub">
      {viewMode === 'grid' ? (
        <div className="projects-grid">
          <div className="header">
            
            {/* <p>Interactive projects to explore creative AI collaboration</p> */}
          </div>
          <div className="projects-container">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="project-card"
                
              >
                <div className="project-icon">{project.icon}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href="https://aada-ai-roast-battle.netlify.app/" className="project-preview">
                  Click to play →
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="project-detail-view">
          <button className="back-button" onClick={handleBackClick}>
            ← Back to Playground
          </button>
          
          <div 
            className="project-content" 
            dangerouslySetInnerHTML={{ 
              __html: projects.find(p => p.id === activeProject)?.content || '' 
            }} 
          />
        </div>
      )}
    </div>
  );
};

// CSS Styles
const styles = `
.playground-hub {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --brand-dark: #4a2c82;
  --brand-light: #ffffff;
  --accent: #8a5aeb;
  --gray: #f9f5ff;
  --dark-text: #2d3748;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  color: var(--brand-dark);
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.header p {
  color: var(--dark-text);
  font-size: 1.1rem;
  opacity: 0.9;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  animation: fadeIn 0.4s ease-out;
}

.project-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(138, 90, 235, 0.2);
  border-color: var(--accent);
}

.project-icon {
  font-size: 2.5rem;
  color: var(--accent);
  margin-bottom: 15px;
}

.project-card h3 {
  color: var(--brand-dark);
  margin: 0 0 10px;
  font-size: 1.3rem;
}

.project-card p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 15px;
}

.project-preview {
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
}

.project-detail-view {
  animation: slideIn 0.3s ease-out;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: var(--accent);
  font-weight: 600;
  cursor: pointer;
  padding: 10px 0;
  margin-bottom: 25px;
  transition: opacity 0.2s;
}

.back-button:hover {
  opacity: 0.8;
}

.project-content {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.project-detail h2 {
  color: var(--brand-dark);
  font-size: 2rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-detail p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 25px;
  color: var(--dark-text);
}

.project-features {
  background: var(--gray);
  padding: 20px;
  border-radius: 10px;
  margin: 25px 0;
}

.project-features h3 {
  color: var(--brand-dark);
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-features ul {
  padding-left: 20px;
}

.project-features li {
  margin-bottom: 8px;
}

.project-actions {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.cta-button {
  background: var(--accent);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.cta-button:hover {
  background: #7a4ad6;
  transform: translateY(-2px);
}

.secondary-button {
  background: white;
  color: var(--accent);
  border: 2px solid var(--accent);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.secondary-button:hover {
  background: var(--gray);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
  
  .project-actions {
    flex-direction: column;
  }
  
  .project-detail h2 {
    font-size: 1.6rem;
  }
}
`;

// Add styles to document head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

export default PlaygroundHub;