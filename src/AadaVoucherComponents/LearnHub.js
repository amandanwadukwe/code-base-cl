import React, { useState } from 'react';
import { FaCode, FaEnvelope, FaSearch, FaChevronLeft } from 'react-icons/fa';

const LearnHub = () => {
  const [activeGuide, setActiveGuide] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'detail'

  const guides = [
    {
        id: 'inspect-guide',
        title: 'Inspect & Alter Websites',
        icon: <FaSearch className="guide-icon" />,
        content: `
            
      
            <div class="container">
              <div class="hero">
                <h1>How to Inspect & Change Any Website</h1>
                <p>No coding experience needed!</p>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-door-open"></i> Step 1: Open Developer Tools</h2>
                <ol>
                  <li><strong>Right-click</strong> anywhere on a webpage</li>
                  <li>Select <strong>"Inspect"</strong> from the menu</li>
                  <li>Or use keyboard shortcuts: 
                    <ul>
                      <li><strong>Windows/Linux:</strong> Ctrl+Shift+I or F12</li>
                      <li><strong>Mac:</strong> Cmd+Opt+I</li>
                    </ul>
                  </li>
                </ol>
                <div class="tip">
                  <strong><i class="fas fa-lightbulb"></i> Tip:</strong> Try this right now on this page!
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-mouse-pointer"></i> Step 2: Explore the Elements</h2>
                <ol>
                  <li>In the panel that opens, click the <strong>Elements/Inspector</strong> tab</li>
                  <li>Hover over code to highlight page sections</li>
                  <li>Click the <i class="fas fa-mouse-pointer"></i> <strong>element picker</strong> (top-left) to select visible elements</li>
                </ol>
                <div class="warning">
                  <strong><i class="fas fa-exclamation-triangle"></i> Note:</strong> Changes are temporary - refreshing the page will undo them.
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-edit"></i> Step 3: Edit Text & Styles</h2>
                <p><strong>To change text:</strong></p>
                <ol>
                  <li>Right-click text on page → "Inspect"</li>
                  <li>Double-click the text in the code</li>
                  <li>Type your changes → Press Enter</li>
                </ol>
      
                <p><strong>To change colors/sizes:</strong></p>
                <ol>
                  <li>Select an element</li>
                  <li>Look at the <strong>Styles</strong> panel on the right</li>
                  <li>Click any value to edit it (try changing colors!)</li>
                </ol>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-flask"></i> Fun Experiments to Try</h2>
                <ul>
                  <li>Change headlines on news sites</li>
                  <li>Make buttons gigantic</li>
                  <li>Hide page elements by adding <code>display: none</code> in styles</li>
                  <li>Edit product prices (just for fun!)</li>
                </ul>
                <div class="tip">
                  <strong><i class="fas fa-lightbulb"></i> Pro Tip:</strong> Right-click in the Elements panel to add, delete, or copy elements.
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-shield-alt"></i> Important Notes</h2>
                <div class="warning">
                  <p><strong><i class="fas fa-exclamation-triangle"></i> These changes only appear on your computer</strong> - others can't see them.</p>
                  <p><strong>Don't use this to try altering real websites permanently</strong> - that would be hacking (and illegal).</p>
                  <p>This is a great learning tool to understand how websites work!</p>
                </div>
              </div>
            </div>
      
            <style>
              .inspect-guide {
                --brand-dark: #022350;
                --brand-light: #ffffff;
                --accent: #4299e1;
                --gray: #f7fafc;
                --dark-text: #2d3748;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                color: var(--dark-text);
                line-height: 1.7;
                min-height: 100vh;
                position: relative;
              }
              
              .tech-logo {
                position: absolute;
                top: 25px;
                left: 25px;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              
              .tech-logo svg {
                width: 28px;
                height: 28px;
                fill: var(--brand-dark);
              }
              
              .tech-logo span {
                font-weight: 700;
                color: var(--brand-dark);
                font-size: 1.1rem;
                letter-spacing: -0.5px;
              }
              
              .container {
                margin:auto 40px;
                background: var(--brand-light);
               
                overflow: hidden;
              }
              
              .hero {
                background: var(--brand-dark);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              
              .hero h1 {
                font-size: 2.2rem;
                margin-bottom: 10px;
                font-weight: 700;
              }
              
              .hero p {
                opacity: 0.9;
                font-weight: 300;
              }
              
              .method {
                padding: 30px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
              }
              
              .method h2 {
                color: var(--brand-dark);
                margin-bottom: 15px;
                font-size: 1.4rem;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              
              .method h2 i {
                color: var(--accent);
              }
              
              .method ol, .method ul {
                padding-left: 20px;
                margin-bottom: 20px;
              }
              
              .method li {
                margin-bottom: 8px;
              }
              
              .warning {
                background: #fff8e6;
                border-left: 4px solid #ffc107;
                padding: 16px;
                margin: 20px 0;
                border-radius: 0 4px 4px 0;
              }
              
              .tip {
                background: #ebf8ff;
                border-left: 4px solid var(--accent);
                padding: 16px;
                margin: 20px 0;
                border-radius: 0 4px 4px 0;
              }
              
              code {
                background: #f0f0f0;
                padding: 2px 4px;
                border-radius: 3px;
                font-family: monospace;
              }
              
              @media (max-width: 768px) {
                .container {
                  margin: 60px 15px 30px;
                }
                
                .tech-logo {
                  top: 15px;
                  left: 15px;
                }
                
                .hero h1 {
                  font-size: 1.8rem;
                }
              }
            </style>
      </div>
        `
      },
      {
        id: 'email-guide',
        title: 'Create Branded Emails',
        icon: <FaEnvelope className="guide-icon" />,
        content: `
          <div class="email-guide">
           
            <div class="container">
              <div class="hero">
                <h1>Create Branded Emails in Gmail</h1>
                <p>Using Your Browser's Inspect Tool</p>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-envelope-open"></i> Step 1: Prepare Your HTML</h2>
                <ol>
                  <li>Find a simple HTML email template (search "free HTML email template")</li>
                  <li>Copy the entire HTML code</li>
                  <li>Or create your own with this basic structure:</li>
                </ol>
                <div class="code-block">
      &lt;div style="background: #f7fafc; padding: 20px; font-family: Arial;"&gt;<br>
      &nbsp;&nbsp;&lt;div style="background: #1a365d; color: white; padding: 20px; text-align: center;"&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Your Company&lt;/h1&gt;<br>
      &nbsp;&nbsp;&lt;/div&gt;<br>
      &nbsp;&nbsp;&lt;div style="padding: 20px;"&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Your email content goes here!&lt;/p&gt;<br>
      &nbsp;&nbsp;&lt;/div&gt;<br>
      &lt;/div&gt;
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-magic"></i> Step 2: Insert HTML into Gmail</h2>
                <ol>
                  <li>Open Gmail and click "Compose"</li>
                  <li>Right-click in the email body → "Inspect"</li>
                  <li>In the Elements panel, find the <code>&lt;div&gt;</code> with class <code>editable</code></li>
                  <li>Right-click it → "Edit as HTML"</li>
                  <li>Paste your HTML code</li>
                  <li>Click outside the editor to see your styled email</li>
                </ol>
                <div class="tip">
                  <strong><i class="fas fa-lightbulb"></i> Tip:</strong> If it doesn't work perfectly, try simpler HTML or use tables for layout (many email clients prefer tables)
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-paint-brush"></i> Step 3: Customize Your Design</h2>
                <p>Use the inspect tool to tweak your email:</p>
                <ol>
                  <li>Right-click any element → "Inspect"</li>
                  <li>Change colors in the Styles panel (try <code>background-color</code> and <code>color</code>)</li>
                  <li>Adjust spacing with <code>padding</code> and <code>margin</code></li>
                  <li>Modify fonts with <code>font-family</code> and <code>font-size</code></li>
                </ol>
                <div class="warning">
                  <strong><i class="fas fa-exclamation-triangle"></i> Note:</strong> Email HTML is different from regular websites - stick to basic styles and tables for best results across email clients.
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-paper-plane"></i> Step 4: Send a Test Email</h2>
                <ol>
                  <li>Always send a test email to yourself first</li>
                  <li>Check how it looks on both desktop and mobile</li>
                  <li>Make adjustments as needed</li>
                  <li>When satisfied, send to your recipients</li>
                </ol>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-rocket"></i> Pro Tips</h2>
                <ul>
                  <li>Keep designs simple - many email clients block advanced CSS</li>
                  <li>Use inline styles (style="...") instead of separate CSS</li>
                  <li>For images, upload them online and use full URLs</li>
                  <li>Table-based layouts often work best for emails</li>
                  <li>Test in multiple email clients (Gmail, Outlook, Apple Mail)</li>
                </ul>
                <div class="tip">
                  <strong><i class="fas fa-lightbulb"></i> Time Saver:</strong> Once you create an email design you like, save the HTML code to reuse later!
                </div>
              </div>
            </div>
      
            <style>
              .email-guide {
                --brand-dark: #1a365d;
                --brand-light: #ffffff;
                --accent: #3182ce;
                --gray: #f7fafc;
                --dark-text: #2d3748;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                color: var(--dark-text);
                line-height: 1.7;
                min-height: 100vh;
                position: relative;
              }
              
              .tech-logo {
                position: absolute;
                top: 25px;
                left: 25px;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              
              .tech-logo svg {
                width: 28px;
                height: 28px;
                fill: var(--brand-dark);
              }
              
              .tech-logo span {
                font-weight: 700;
                color: var(--brand-dark);
                font-size: 1.1rem;
                letter-spacing: -0.5px;
              }
              
              .container {
               
                margin: auto 40px;
                background: var(--brand-light);
                
                overflow: hidden;
              }
              
              .hero {
                background: var(--brand-dark);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              
              .hero h1 {
                font-size: 2.2rem;
                margin-bottom: 10px;
                font-weight: 700;
              }
              
              .hero p {
                opacity: 0.9;
                font-weight: 300;
              }
              
              .method {
                padding: 30px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
              }
              
              .method h2 {
                color: var(--brand-dark);
                margin-bottom: 15px;
                font-size: 1.4rem;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              
              .method h2 i {
                color: var(--accent);
              }
              
              .method ol, .method ul {
                padding-left: 20px;
                margin-bottom: 20px;
              }
              
              .method li {
                margin-bottom: 8px;
              }
              
              .code-block {
                background: #1a365d;
                color: white;
                padding: 12px;
                border-radius: 6px;
                font-family: monospace;
                margin: 10px 0;
                overflow-x: auto;
              }
              
              .warning {
                background: #fff8e6;
                border-left: 4px solid #ffc107;
                padding: 16px;
                margin: 20px 0;
                border-radius: 0 4px 4px 0;
              }
              
              .tip {
                background: #ebf8ff;
                border-left: 4px solid var(--accent);
                padding: 16px;
                margin: 20px 0;
                border-radius: 0 4px 4px 0;
              }
              
              code {
                background: #f0f0f0;
                padding: 2px 4px;
                border-radius: 3px;
                font-family: monospace;
              }
              
              @media (max-width: 768px) {
                .container {
                  margin: 60px 15px 30px;
                }
                
                .tech-logo {
                  top: 15px;
                  left: 15px;
                }
                
                .hero h1 {
                  font-size: 1.8rem;
                }
              }
            </style>
          </div>
        `
      },
      {
        id: 'html-css-guide',
        title: 'HTML & CSS Basics',
        icon: <FaCode className="guide-icon" />,
        content: `
          <div class="html-css-guide">
            <div class="container">
              <div class="hero">
                <h1>HTML & CSS Crash Course</h1>
                <p>Learn the building blocks of every website</p>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-cubes"></i> What is HTML?</h2>
                <p>HTML (HyperText Markup Language) is the skeleton of every webpage. It defines the structure and content.</p>
                
                <div class="visual-guide">
                  <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="HTML">
                  <div>
                    <p><strong>Think of HTML like a house frame:</strong></p>
                    <ul>
                      <li>Walls = paragraphs & headings</li>
                      <li>Doors = links</li>
                      <li>Windows = images</li>
                    </ul>
                  </div>
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-code"></i> Basic HTML Tags</h2>
                <p>Tags are the building blocks of HTML. They look like this: <code>&lt;tagname&gt;content&lt;/tagname&gt;</code></p>
                
                <div class="example">
      &lt;!DOCTYPE html&gt;
      &lt;html&gt;
      &lt;head&gt;
          &lt;title&gt;My Page&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
          &lt;h1&gt;Main Heading&lt;/h1&gt;
          &lt;p&gt;A paragraph of text.&lt;/p&gt;
          &lt;img src="photo.jpg" alt="A photo"&gt;
          &lt;a href="https://example.com"&gt;Click me!&lt;/a&gt;
      &lt;/body&gt;
      &lt;/html&gt;
                </div>
      
                <div class="comparison">
                  <div class="comparison-box">
                    <h3>Common Tags</h3>
                    <ul>
                      <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> - Headings</li>
                      <li><code>&lt;p&gt;</code> - Paragraph</li>
                      <li><code>&lt;a&gt;</code> - Link</li>
                      <li><code>&lt;img&gt;</code> - Image</li>
                      <li><code>&lt;div&gt;</code> - Container box</li>
                    </ul>
                  </div>
                  <div class="comparison-box">
                    <h3>What They Do</h3>
                    <ul>
                      <li>Create text structure</li>
                      <li>Add clickable links</li>
                      <li>Insert pictures</li>
                      <li>Group content</li>
                      <li>Build page layout</li>
                    </ul>
                  </div>
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-paint-brush"></i> What is CSS?</h2>
                <p>CSS (Cascading Style Sheets) makes HTML look pretty. It controls colors, fonts, spacing, and layout.</p>
                
                <div class="visual-guide">
                  <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS">
                  <div>
                    <p><strong>Think of CSS like home decoration:</strong></p>
                    <ul>
                      <li>Paint = colors</li>
                      <li>Furniture = spacing</li>
                      <li>Lighting = visual effects</li>
                    </ul>
                  </div>
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-bullseye"></i> Targeting Elements: Classes & IDs</h2>
                
                <div class="example">
      &lt;!-- HTML --&gt;
      &lt;div class="banner" id="main-banner"&gt;Welcome!&lt;/div&gt;
      
      &lt;!-- CSS --&gt;
      .banner { /* Targets ALL elements with class="banner" */
          background: blue;
      }
      #main-banner { /* Targets ONLY the element with id="main-banner" */
          font-size: 24px;
      }
                </div>
      
                <div class="comparison">
                  <div class="comparison-box">
                    <h3>Classes (.)</h3>
                    <ul>
                      <li>Reusable - many elements can share a class</li>
                      <li>For styling multiple similar items</li>
                      <li>Example: <code>.button</code>, <code>.header</code></li>
                    </ul>
                  </div>
                  <div class="comparison-box">
                    <h3>IDs (#)</h3>
                    <ul>
                      <li>Unique - only one per page</li>
                      <li>For specific single elements</li>
                      <li>Example: <code>#main-nav</code>, <code>#contact-form</code></li>
                    </ul>
                  </div>
                </div>
                
                <div class="warning">
                  <strong><i class="fas fa-exclamation-triangle"></i> Remember:</strong> IDs are like social security numbers (unique to one person), while classes are like job titles (many people can share the same title).
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-magic"></i> Basic CSS Properties</h2>
                <p>Here are some common things you can style:</p>
                
                <div class="example">
      /* Change text color */
      p {
          color: red;
      }
      
      /* Adjust font size */
      h1 {
          font-size: 32px;
      }
      
      /* Add background color */
      body {
          background-color: lightgray;
      }
      
      /* Control spacing */
      div {
          margin: 10px;
          padding: 20px;
      }
                </div>
              </div>
      
              <div class="method">
                <h2><i class="fas fa-rocket"></i> Try It Yourself!</h2>
                <ol>
                  <li>Right-click any webpage and select "Inspect"</li>
                  <li>Find HTML elements in the Elements tab</li>
                  <li>Try changing some CSS properties in the Styles panel</li>
                  <li>Notice how the page changes instantly (only for you!)</li>
                </ol>
                <div class="tip">
                  <strong><i class="fas fa-lightbulb"></i> Pro Tip:</strong> Play with colors, fonts, and sizes to see immediate results. It's the best way to learn!
                </div>
              </div>
            </div>
      
            <style>
              .html-css-guide {
                --brand-dark: #2d3748;
                --brand-light: #ffffff;
                --accent: #4fd1c5;
                --gray: #f7fafc;
                --dark-text: #1a202c;
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                color: var(--dark-text);
                line-height: 1.7;
                min-height: 100vh;
                position: relative;
              }
              
              .tech-logo {
                position: absolute;
                top: 25px;
                left: 25px;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              
              .tech-logo svg {
                width: 28px;
                height: 28px;
                fill: var(--brand-dark);
              }
              
              .tech-logo span {
                font-weight: 700;
                color: var(--brand-dark);
                font-size: 1.1rem;
                letter-spacing: -0.5px;
              }
              
              .container {
               
                margin: auto 40px;
                background: var(--brand-light);
               
                overflow: hidden;
              }
              
              .hero {
                background: var(--brand-dark);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              
              .hero h1 {
                font-size: 2.2rem;
                margin-bottom: 10px;
                font-weight: 700;
              }
              
              .hero p {
                opacity: 0.9;
                font-weight: 300;
              }
              
              .method {
                padding: 30px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.05);
              }
              
              .method h2 {
                color: var(--brand-dark);
                margin-bottom: 15px;
                font-size: 1.4rem;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              
              .method h2 i {
                color: var(--accent);
              }
              
              .visual-guide {
                display: flex;
                align-items: center;
                gap: 20px;
                margin: 20px 0;
                padding: 15px;
                background: #edf2f7;
                border-radius: 8px;
              }
              
              .visual-guide img {
                width: 48px;
                height: 48px;
              }
              
              .example {
                background: #f8f9fa;
                border-left: 4px solid var(--accent);
                padding: 16px;
                margin: 15px 0;
                border-radius: 0 4px 4px 0;
                font-family: 'Courier New', monospace;
                overflow-x: auto;
              }
              
              .comparison {
                display: flex;
                gap: 20px;
                margin: 20px 0;
              }
              
              .comparison-box {
                flex: 1;
                padding: 15px;
                border-radius: 8px;
                background: #f8f9fa;
              }
              
              .warning {
                background: #fff8e6;
                border-left: 4px solid #ffc107;
                padding: 16px;
                margin: 20px 0;
                border-radius: 0 4px 4px 0;
              }
              
              .tip {
                background: #ebf8ff;
                border-left: 4px solid var(--accent);
                padding: 16px;
                margin: 20px 0;
                border-radius: 0 4px 4px 0;
              }
              
              code {
                background: #f0f0f0;
                padding: 2px 4px;
                border-radius: 3px;
                font-family: monospace;
              }
              
              @media (max-width: 768px) {
                .container {
                  margin: 60px 15px 30px;
                }
                
                .tech-logo {
                  top: 15px;
                  left: 15px;
                }
                
                .hero h1 {
                  font-size: 1.8rem;
                }
                
                .comparison {
                  flex-direction: column;
                }
                
                .visual-guide {
                  flex-direction: column;
                  text-align: center;
                }
              }
            </style>
          </div>
        `
      }
  ];

  const handleCardClick = (id) => {
    setActiveGuide(id);
    setViewMode('detail');
  };

  const handleBackClick = () => {
    setViewMode('grid');
    setTimeout(() => setActiveGuide(null), 300); // Wait for animation
  };

  return (
    <div className="learn-hub-container">
      {viewMode === 'grid' ? (
        <div className="guides-grid">
          {guides.map((guide) => (
            <div 
              key={guide.id}
              className="guide-card"
              onClick={() => handleCardClick(guide.id)}
            >
              <div className="guide-card-header">
                {guide.icon}
                <h3>{guide.title}</h3>
              </div>
              <div className="guide-preview">
                Click to learn more...
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="guide-detail-view">
          <button className="back-button" onClick={handleBackClick}>
            <FaChevronLeft /> All Modules
          </button>
          
          <div className="breadcrumb">
            Learning Hub / {guides.find(g => g.id === activeGuide)?.title}
          </div>
          
          <div className="guide-content-container">
            <div 
              className="guide-content" 
              dangerouslySetInnerHTML={{ 
                __html: guides.find(g => g.id === activeGuide)?.content || '' 
              }} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnHub;

// CSS Styles
const styles = `
.learn-hub-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --brand-dark: #022350;
  --brand-light: #ffffff;
  --accent: #4A90E2;
  --gray: #f5f7fa;
  --dark-text: #2d3748;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  animation: fadeIn 0.4s ease-out;
}

.guide-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.guide-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.guide-card-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.guide-icon {
  color: var(--accent);
  font-size: 1.5rem;
}

.guide-card h3 {
  color: var(--brand-dark);
  margin: 0;
  font-size: 1.2rem;
}

.guide-preview {
  color: #666;
  font-size: 0.9rem;
}

.guide-detail-view {
  animation: slideIn 0.3s ease-out;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: var(--accent);
  font-weight: 600;
  cursor: pointer;
  padding: 10px 0;
  margin-bottom: 15px;
  transition: opacity 0.2s;
}

.back-button:hover {
  opacity: 0.8;
}

.breadcrumb {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.guide-content-container {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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
  .guides-grid {
    grid-template-columns: 1fr;
  }
  
  .guide-content-container {
    padding: 20px;
  }
}
`;

// Add styles to document head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);