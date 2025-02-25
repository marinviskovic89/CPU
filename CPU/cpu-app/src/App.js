import './App.css';
import CpuList from "./components/CpuList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CpuDetails from "./components/CpuDetails";
import CpuEdit from "./components/CpuEdit";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<CpuList />} />
            <Route path="/edit/:id" element={<CpuEdit />} />
            <Route path="/details/:id" element={<CpuDetails />} />
        </Routes>
      </Router>
  );
}

export default App;
