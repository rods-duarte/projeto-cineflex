import {Link} from "react-router-dom";

import "./style.css";

//TODO Enviar para a rota /filme/id 
export default function Movie({data}) {
    return (
        <li>
            <Link to={`/filme/${data.id}`} className="Movie">
                <img src={data.posterURL} alt={data.title} />
            </Link>
        </li>
    )
}