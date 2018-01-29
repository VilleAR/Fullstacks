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
	<p>{props.osa} {props.tehtavia} </p>
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
      <Sisalto osa="Reactin perusteet" tehtavia="10" />
      <Sisalto osa="Tiedonv‰litys propseilla" tehtavia="7" />
      <Sisalto osa="Komponenttien tila" tehtavia="14"/>
      <Yhteensa osa1={10} osa2={7} osa3={14}/>
    </div>
  )

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)