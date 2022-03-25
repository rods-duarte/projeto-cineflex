import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import SeatIcon from "./../SeatIcon/";

import "./style.css";

export default function SeatsPage({ setSuccessData }) {
  const [data, setData] = useState({ //dados para construcao do layout
    seats: [],
    movie: { title: "", posterURL: "" },
    day: { weekday: "" },
    name: "",
  });
  const [postObj, setPostObj] = useState({ //dados a serem enviados a api
    ids: [],
    name: '',
    cpf: ''
  })
  const { id } = useParams();
  console.log(postObj);

  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`
      )
      .then((response) => {
        setData({ ...response.data });
      });
  }, []);

  function inputValidation() {
    const validateName = postObj.name.length > 0;
    const validateCpf = postObj.cpf.length === 11;
    const validateSeats = postObj.ids.length > 0;
    
    return validateName && validateCpf && validateSeats 
  }

  return (
    <main className="SeatsPage">
      <h1>Selecione os assentos</h1>
      <ul>
        {data.seats.map((seat) => (
          <SeatIcon
            data={{ ...seat, isSelected: false }}
            postObj={postObj}
            setPostObj={setPostObj}
          />
        ))}
      </ul>
      <div className="sub">
        <div>
          <div className="selected"></div>
          <span>Selecionado</span>
        </div>
        <div>
          <div className="available"></div>
          <span>Disponivel</span>
        </div>
        <div>
          <div className="unavailable"></div>
          <span>Indisponivel</span>
        </div>
      </div>
      <div className="inputs">
        <h2>Nome do Comprador: </h2>
        <input
          type="text"
          placeholder="Digite seu nome..."
          onChange={(event) => setPostObj({ ...postObj, name: event.target.value })}
        />
        <h2>CPF do Comprador: </h2>
        <input
          type="number"
          placeholder="Digite seu CPF..."
          onChange={(event) => setPostObj({ ...postObj, cpf: event.target.value })}
        />
      </div>
      <button onClick={() => {
        if(inputValidation()) {
          setSuccessData({time: data.name, seats: [...postObj.ids], user: postObj.name, cpf: postObj.cpf, movie: {...data.movie}, day: {...data.day}});
          axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many`, postObj);
          
        } else {
          alert(`Dados Invalidos`);
        }}}>Reservar Assento(s)</button>
      <footer>
        <div className="poster">
          <img src={data.movie.posterURL} alt={data.movie.title} />
        </div>
        <div className="sessionInfo">
          <span>{data.movie.title}</span>
          <span>{`${data.day.weekday} - ${data.name}`}</span>
        </div>
      </footer>
    </main>
  );
}
