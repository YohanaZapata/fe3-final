import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favState, themeState} = useContextGlobal();
  
  console.log('-------favoritos-------')
  console.log(favState)

  return (
    <div className={themeState.theme}>
      <h1>Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favState.map((fav) => {
          return(
            <Card
              key={fav.id}
              name={fav.name}
              username={fav.username} 
              id={fav.id}
            />
          )
        })}
      </div>
    </div>
  );
};

export default Favs;
