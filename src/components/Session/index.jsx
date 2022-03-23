

//TODO criar componente
export default function Session({data}) {
    return (
        <div className="Session">
            <h2>{`${data.weekday} - ${data.date}`}</h2>
        </div>
    )
}