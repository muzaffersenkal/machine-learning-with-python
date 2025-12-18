import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const lectures = [
    {
      id: 'lecture_1_python_intro',
      title: 'Python Introduction',
      description: 'Learn the fundamentals of Python programming and take your first steps into data analysis and machine learning',
    },
    {
      id: 'lecture_2_numpy_pandas',
      title: 'NumPy and Pandas',
      description: 'Master NumPy and Pandas libraries to perform efficient operations on data with speed and effectiveness',
    },
    {
      id: 'lecture_4_pandas_part2',
      title: 'Pandas Data Analysis',
      description: 'Practice data cleaning, grouping, and transformation operations in Pandas',
    },
    {
      id: 'lecture_4_visualization',
      title: 'Data Visualization with Matplotlib & Seaborn',
      description: 'Transform data into meaningful and impressive visualizations using Matplotlib and Seaborn',
    },
    {
      id: 'lecture_5_ml_intro_part1',
      title: 'Introduction to Machine Learning - Part 1',
      description: 'Discover fundamental concepts and algorithms of machine learning and AI',
    },
    {
      id: 'lecture_6_ml_intro_part2',
      title: 'Introduction to Machine Learning - Part 2',
      description: 'Apply machine learning algorithms on real datasets and create data-driven solutions',
    },
  ];

  const handleLectureClick = (lectureId) => {
    navigate(`/viewer?lecture=${lectureId}`);
  };

  const [lecturesExpanded, setLecturesExpanded] = useState(true);

  return (
    <div className="homepage-container">
      <div className="sidebar">
        <div className="sidebar-header">
          <img src={`${import.meta.env.BASE_URL}turkcell_logo.webp`} alt="Turkcell" className="turkcell-logo" />
          <div className="project-name">Machine Learning with Python</div>
        </div>
        <div className="sidebar-section">
          <div className="section-title">EXPLORER</div>
          <div className="file-tree">
            <div className="folder-item open">
              <span className="folder-icon">📂</span>
              <span className="folder-name">ml-with-python</span>
            </div>
            <div className="file-item active indent-1">
              <span className="file-icon">📄</span>
              <span className="file-name">README.md</span>
            </div>
            <div 
              className={`folder-item indent-1 ${lecturesExpanded ? 'open' : ''}`}
              onClick={() => setLecturesExpanded(!lecturesExpanded)}
            >
              <span className="folder-icon">{lecturesExpanded ? '📂' : '📁'}</span>
              <span className="folder-name">lectures</span>
            </div>
            {lecturesExpanded && lectures.map((lecture, index) => (
              <div
                key={lecture.id}
                className="file-item indent-2"
                onClick={() => handleLectureClick(lecture.id)}
              >
                <span className="file-icon">📘</span>
                <span className="file-name">{lecture.title}</span>
              </div>
            ))}
            <div className="file-item indent-1">
              <span className="file-icon">📦</span>
              <span className="file-name">requirements.txt</span>
            </div>
          </div>
        </div>
      </div>

      <div className="code-editor">
        <div className="code-header">
          <span className="filename">README.md</span>
          <span className="file-path">ml-with-python</span>
        </div>
        
        <div className="readme-content">
          <div className="readme-inner">
            <div className="readme-header">
              <img src={`${import.meta.env.BASE_URL}turkcell_logo.webp`} alt="Turkcell" className="readme-logo" />
              <h1>Machine Learning with Python</h1>
            </div>
            
            <p className="readme-subtitle">
              A comprehensive journey from Python fundamentals to Machine Learning mastery
            </p>

            <h2>📚 Course Overview</h2>
            <p>
              Master the complete journey from Python programming fundamentals to advanced Machine Learning algorithms. 
              This course is designed to take you from a beginner to a confident ML practitioner, covering everything 
              from basic Python syntax to implementing real-world machine learning solutions.
            </p>
            <p>
              Each lecture features interactive step-by-step trace visualization, allowing you to see exactly how code 
              executes line by line. Watch variables transform, data flow through algorithms, and ML models train in 
              real-time. Understand not just what the code does, but how and why it works.
            </p>

            <h2>📖 Course Curriculum</h2>
            <p>
              Seven comprehensive modules that build upon each other, taking you from Python fundamentals to 
              implementing Machine Learning algorithms. Access the lectures from the <strong>lectures</strong> 
              folder in the left sidebar:
            </p>
            
            <ul className="lectures-list-readme">
              {lectures.map((lecture, index) => (
                <li key={lecture.id}>
                  <span 
                    className="lecture-link"
                    onClick={() => handleLectureClick(lecture.id)}
                  >
                    <strong>{index + 1}. {lecture.title}</strong>
                  </span>
                  <br />
                  <span className="lecture-desc">{lecture.description}</span>
                </li>
              ))}
            </ul>

            <h2>🎯 How to Use</h2>
            <ol>
              <li>Start with <strong>Python Introduction</strong> to build your foundation (or jump to any topic if you're already familiar)</li>
              <li>Click on any lecture from the <strong>lectures</strong> folder in the sidebar</li>
              <li>Watch the interactive trace viewer as it executes code line by line</li>
              <li>Use arrow keys (←→) to step through the code and observe how data flows through algorithms</li>
              <li>Experiment with keyboard shortcuts to control the pace and dive deeper into functions</li>
            </ol>

            <h2>⌨️ Keyboard Shortcuts</h2>
            <ul>
              <li><code>→</code> or <code>l</code> - Step forward</li>
              <li><code>←</code> or <code>h</code> - Step backward</li>
              <li><code>j</code> - Step over forward (skip into functions)</li>
              <li><code>k</code> - Step over backward</li>
              <li><code>u</code> - Step out of function</li>
              <li><code>R</code> - Toggle raw code view</li>
              <li><code>A</code> - Toggle animation mode</li>
            </ul>

            <h2>💡 Key Features</h2>
            <ul>
              <li>✨ <strong>Interactive Execution</strong> - Watch ML algorithms execute step by step and understand how they learn</li>
              <li>🔍 <strong>Variable Tracking</strong> - See data transformations, model parameters, and predictions in real-time</li>
              <li>📊 <strong>Inline Visualization</strong> - View data distributions, decision boundaries, and training progress directly</li>
              <li>🎨 <strong>Syntax Highlighting</strong> - Professional code display with Python and ML library syntax coloring</li>
              <li>📚 <strong>Rich Content</strong> - Full Markdown and LaTeX support for mathematical formulas and ML concepts</li>
              <li>⚡ <strong>Navigation Controls</strong> - Jump between functions, debug algorithms, and control execution flow</li>
              <li>🎯 <strong>Complete Learning Path</strong> - From Python basics to implementing production-ready ML models</li>
            </ul>

            <div className="readme-footer">
              <p>🚀 Ready to begin your Machine Learning journey? Select a lecture from the lectures folder on the left!</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#8b949e' }}>
                From Python basics to ML mastery - every expert was once a beginner. Let's build your AI future together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

