import { useState } from "react";

import "./style.css";

//? testar: talvez funcione seatList.includes(id) ao inves de isSelected
export default function SeatIcon({ data, postObj, setPostObj }) {
  const { isAvailable, name, id } = data;
  const [isSelected, setIsSelected] = useState(false);
  const css = isAvailable
    ? isSelected
      ? "selected"
      : "available"
    : "unavailable";

  // seleciona/desseleciona poltronas
  function pickSeat() {
    if (!isAvailable) {
      alert(`Poltrona invalida !`);
      return;
    }

    if (!isSelected) {
      setIsSelected(true);
      setPostObj({ ...postObj, ids: [...postObj.ids, id] });
    } else {
      setIsSelected(false);
      setPostObj({
        ...postObj,
        ids: postObj.ids.filter((selectedId) => selectedId !== id),
      });
    }
  }

  return (
    <div
      id={id}
      onClick={() => {
        pickSeat();
      }}
      className={`SeatIcon ${css}`}
    >
      {name}
    </div>
  );
}
