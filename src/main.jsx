import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import Participants from './pages/Participants/Participants.jsx';
import BoardEvents from './pages/BoardEvents/BoardEvents.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/participants" element={<Participants/>}/>
            <Route path="/events" element={<BoardEvents/>}/>
        </Routes>
    </BrowserRouter>
)
