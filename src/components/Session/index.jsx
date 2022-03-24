import {Link} from "react-router-dom";

import "./style.css";

export default function Session({session}) {
    const {weekday, date, showtimes} = session;
    return (
        <div className="Session">
            <h2>{`${weekday} - ${date}`}</h2>
            <div className="buttons">
                {showtimes.map(time => <Link to={`/sessao/${time.id}`}><button>{time.name}</button></Link>)}
            </div> 
        </div>
    )
}