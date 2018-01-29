import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const Otsikko = (props) => {
    return (
      <div>
	<h1>{props.kurssi} </h1>
      </div>
    )
  }
  const Sisalto = (props) => {
    return (
      <div>
        <Osa osa="Reactin perusteet" tehtavia="10"/>
        <Osa osa="Tiedonv‰litys propseilla" tehtavia="7"/>
        <Osa osa="Komponenttien tila" tehtavia="14"/>
      </div>
    )
  }
  const Osa = (props) => {
    return (
      <div>
        <p> {props.osa} {props.tehtavia} </p>
      </div>
    )
  }
  const Yhteensa = (props) => {
    return (
      <div>
	<p>Yhteens‰ {props.osa1 + props.osa2 + props.osa3} teht‰v‰‰</p>
      </div>
    )
  }
   	   

  return (
    <div>    
      <Otsikko kurssi="Half Stack -sovelluskehitys" />
      <Sisalto/>
      <Yhteensa osa1={10} osa2={7} osa3={14}/>
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)