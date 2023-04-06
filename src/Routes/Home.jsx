import React from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContextGlobal();
  const {themeState} = useContextGlobal();
  console.log('-------stateDentist-------')
  console.log(state);

  return (
    <main className={themeState.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {
          state?.map(dentist => {
            return (
              <Link to={'/detail/' + dentist.id} key={dentist.id}>
                <Card
                  name={dentist.name}
                  username={dentist.username}
                  id={dentist.id}
                />
              </Link>
            )
          })
        }
      </div>
    </main>
  )
}

export default Home