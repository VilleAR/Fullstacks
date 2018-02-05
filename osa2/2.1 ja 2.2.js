import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Osa = ({osa}) => {
  console.log(osa)
  return (
    <li>{osa.nimi} {osa.tehtavia}</li>
  )
}
const Yhteensa = (props) => {
  const tehtavat = [props.kurssi.osat.tehtavia]
  let sum = 0
  props.kurssi.osat.forEach(osa => {
    sum = sum + osa.tehtavia
  });
  
  return(
    <p>yhteensä {sum} tehtävää</p>
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
  }
 
  
  const Kurssi = (props) => {
    return (   
      <div>
      <Otsikko kurssi={kurssi}/>  
      {props.kurssi.osat.map(osa=><Osa key={osa.id} osa={osa}/>)} 
      <Yhteensa kurssi={kurssi}/>         
      </div>
    )
  } 

  return (
    <div>
      <Kurssi kurssi={kurssi}/>
    </div>
  )
}

ReactDOM.render(
  <App kurssi/>,
  document.getElementById('root')
)