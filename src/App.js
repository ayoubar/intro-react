import { useState } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Card from './components/Card';
function App() {
  // state
  // destructing
  const [compteur, setCompteur] = useState(0);
  /*
    todo: compteur est une variable
    todo: setCompteur est une fonction qui change la valuer de la variable `compteur`
  */

  // todo  : une fonction pour incrementer la variable compteur
  const increment = () => {
    setCompteur(compteur + 1);
  };

  // todo : une fonction pour reinitailizez la variable `compteur`  a zero

  // JSX
  //props
  const name = 'Mohammed Harrat';
  const data = [
    {
      id: 1,
      name: 'mohammed',
    },

    {
      id: 2,
      name: 'anass',
    },

    {
      id: 3,
      name: 'ayoub',
    },
  ];

  const paragraphe = 'Lorem ipsum dolor sit amet ';
  return (
    <div className="container w-50 border border-danger mt-5">
      <button className="btn btn-primary" onClick={increment}>
        {' '}
        Increment
      </button>
      <button className="btn btn-danger">Reinitializer a zero </button>

      <p>valeur : {compteur} </p>
      {/* <NavBar title={'React js'} valueinput={'Anass'} />
      <div className="container">
        <Card p={paragraphe} title={'this is a title'} list={data} />
      </div>

      <h1 className="text-center">{'HELLO '}</h1>
      <p className="text-center"> {1 + 2 + 3}</p> */}
    </div>
  );
}
export default App;
