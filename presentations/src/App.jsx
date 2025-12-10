import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import HomePage from './HomePage';
import TraceViewer from './TraceViewer';

function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/machine-learning-with-python/' : '/'}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewer" element={<TraceViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;