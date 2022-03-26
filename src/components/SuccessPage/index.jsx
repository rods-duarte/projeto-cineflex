import {Link} from "react-router-dom";

import "./style.css";

export default function SuccessPage({ data }) {
    data.seats = data.seats.sort((a,b) => a > b ? 1 : -1);
  function formatCpf(cpf) {
    return `
    ${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6,9)}-${cpf.slice(9, 11)}
    `;
  }
  return (
    <main className="SuccessPage">
      <h1>Pedido feito com sucesso !</h1>
      <div>
        <h2>Filme e Sessao</h2>
        <span>{data.movie.title}</span>
        <span>{`${data.day.date} - ${data.time}`}</span>
      </div>
      <div>
        <h2>Ingressos</h2>
        {data.seats.map((id) => (
          <span>{`Assento - ${id}`}</span>
        ))}
      </div>
      <div>
        <h2>Comprador</h2>
        <span>{`Nome: ${data.name}`}</span>
        <span>{`CPF: ${formatCpf(data.cpf)}`}</span>
      </div>
      <Link to="/">
          <button>Voltar para Home</button>
      </Link>
    </main>
  );
}
