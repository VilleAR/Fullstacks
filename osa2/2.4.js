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

  let sum = 0
  props.kurssi.osat.forEach(osa => {
    sum = sum + osa.tehtavia
  });
  let tehtavat2 =[]
  props.kurssi.osat.forEach(osa => {
    tehtavat2.push(osa.tehtavia)
  })
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum2 = (tehtavat2.reduce(reducer));
  
  return(
    <div>
      <p>yhteensä {sum2} tehtävää</p>
    </div>
  )
}

const App = () => {
  const kurssit = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

 
  
  const Kurssi = (props) => {
    return (   
      <div>
      <Otsikko kurssi={props.kurssi}/>  
      {props.kurssi.osat.map(osa=><Osa key={osa.id} osa={osa}/>)} 
      <Yhteensa kurssi={props.kurssi}/>   
           
      </div>   
      
    )
  } 

  return (
    <div>
      {kurssit.map(kurssi=><Kurssi key={kurssi.id} kurssi={kurssi}/>)}     
    </div>
  )
}

ReactDOM.render(
  <App kurssi/>,
  document.getElementById('root')
)