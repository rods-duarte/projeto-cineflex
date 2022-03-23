import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./../Header/";
import MoviesList from "./../MoviesList/";
import Sessions from "./../Sessions/";
import Seats from "./../Seats/";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MoviesList />} />
                <Route path="/filme" element={<Sessions />} />
                <Route path="/sessao" element={<Seats />} />
            </Routes>
            
        </BrowserRouter>
    )
}