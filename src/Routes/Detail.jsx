import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {themeState} = useContextGlobal();

  const [dentist, setDentist] = useState([]);
  const {id} = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  console.log(url)

  useEffect(()=>{
    fetch(url)
    .then(response => response.json())
    .then(data => setDentist(data))
  },[])
  console.log(dentist);
  
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={themeState.theme}>
      <h1>Details</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentist.name}</td>
            <td>{dentist.email}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
      
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail