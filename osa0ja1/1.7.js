import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vasen: 0,
      oikea: 0,
      keski: 0,
      yht: 0
    }
  }

  klikVasen = () => {
    this.setState({
      vasen: this.state.vasen + 1,
      yht: this.state.yht + 1
    })
  }
  klikKeski = () => {
    this.setState({
      keski: this.state.keski + 1,
      yht: this.state.yht + 1
    })
  }

  klikOikea = () => {
    this.setState({
      oikea: this.state.oikea + 1,
      yht: this.state.yht + 1
    })
  }
  renderKeskiarvo() {
    let ka = 0;
    if (this.state.vasen + this.state.oikea + this.state.keski) {
        let sum = this.state.vasen - this.state.oikea
        ka = sum / (this.state.vasen + this.state.oikea + this.state.keski)
    }
        return (
            <div>
                <p>Keskiarvo {ka}</p>
            </div>
        )
    }
    renderProsentti() {
      let sum = this.state.vasen + this.state.keski + this.state.oikea
      let pros = this.state.vasen / sum
      return (
        <div>
          <p>Positiivisia {pros*100}%</p>
        </div>
      )
    }


  render() {
    return (
      <div>
        <h1> anna palautetta </h1>
        <div>          
          <button onClick={this.klikVasen}>hyvä</button>
          <button onClick={this.klikKeski}>neutraali</button>
          <button onClick={this.klikOikea}>huono</button>
          <h1>statistiikka </h1>
          <p>hyvä {this.state.vasen} </p>  
          <p>neutraali {this.state.keski}</p>
          <p>huono {this.state.oikea} </p>
          {this.renderKeskiarvo()} 
          {this.renderProsentti()}
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

