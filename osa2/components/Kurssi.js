import React from 'react'

 const Kurssi = (props) => {
    return (   
      <div>
      <Otsikko kurssi={props.kurssi}/>  
      {props.kurssi.osat.map(osa=><Osa key={osa.id} osa={osa}/>)} 
      <Yhteensa kurssi={props.kurssi}/>   
           
      </div>   
      
    )
  } 

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
export default Kurssi
