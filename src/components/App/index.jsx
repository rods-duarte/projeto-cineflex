import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";

import Header from "./../Header/";
import Footer from "./../Footer/";
import MoviesPage from "./../MoviesPage/";
import SessionsPage from "./../SessionsPage/";
import SeatsPage from "./../SeatsPage/";

export default function App() {
    const [footer, setFooter] = useState({name: '', poster: '', date: ''});
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/filme/:id" element={<SessionsPage />} />
                <Route path="/sessao/:id" element={<SeatsPage />} />
            </Routes>
        </BrowserRouter>
    )
}