import { useState } from 'react';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './index.css';

function App() {
    const [showDashboard, setShowDashboard] = useState(false);

    const toggleDashboard = () => {
        setShowDashboard(!showDashboard);
    };

    return (
        <div className="bg-black">
            <main className="flex justify-center w-[1920px] h-[1080px] relative">
                {showDashboard ? <Dashboard /> : <Login toggleDashboard={toggleDashboard} />}
            </main>
        </div>
    );
}

export default App;
