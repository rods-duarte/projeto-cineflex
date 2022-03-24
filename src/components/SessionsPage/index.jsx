import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import Session from "../Session";

import "./style.css";


//TODO Deve receber o parametro id do componente Movie 
export default function SessionsPage() {
    const [data, setData] = useState({title: '', posterURL: '', days: []});
    const {id} = useParams();
    

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
        .then(response => {
            const {title, posterURL, days} = response.data;
            setData({title: title, posterURL: posterURL, days: days});
            
        })
    }, []);

    return (
        <main className="SessionsPage">
            <h1>Selecione o horario</h1>
            <ul>
                {data.days.map(session => <Session session={session}/>)}
            </ul>
            <footer>
                <div className="poster">
                    <img src={data.posterURL} alt={data.title} />
                </div>
                <span>{data.title}</span>
            </footer>
        </main>
    )
}