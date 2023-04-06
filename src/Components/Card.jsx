import React,{useEffect, useState} from "react";
import dentistImg from '../imagenes/doctor.jpg';
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {

  const {favDispatch} = useContextGlobal();
  const [dentist, setDentist] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(data => setDentist(data))
  },[])

  const addFav = () => {
    favDispatch({ type: "ADD_FAV", payload: dentist });
  };
  
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img style={{width:'200px'}} src={dentistImg} alt="doctor image" />
        <h5>{name}</h5>
        <p>{username}</p>
        <p>id : {id}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
