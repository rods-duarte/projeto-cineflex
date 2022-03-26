import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./../Header/";
import MoviesPage from "./../MoviesPage/";
import SessionsPage from "./../SessionsPage/";
import SeatsPage from "./../SeatsPage/";
import SuccessPage from "./../SuccessPage";

export default function App() {
  const [successData, setSuccessData] = useState({}); // Dados a serem renderizados na tela de sucesso

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/filme/:id" element={<SessionsPage />} />
        <Route
          path="/sessao/:id"
          element={<SeatsPage setSuccessData={setSuccessData} />}
        />
        <Route  
          path="/sucesso"
          element={<SuccessPage data={successData}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
