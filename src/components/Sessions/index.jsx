import {useState, useEffect} from "react";
import axios from "axios";

import Session from "./../Session/";

import "./style.css";


//TODO Deve receber o parametro id do componente Movie 
export default function Sessions() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${ID_AQUI}/showtimes`)
        .then(response => setData([...response.data]))
    }, []);

    return (
        <main className="Sessions">
            <h1>Selecione o horario</h1>
            <ul>
                {data.days.map(session => <Session data={session} />)}
            </ul>
        </main>
    )
}