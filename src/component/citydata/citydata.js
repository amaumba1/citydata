import React, { Component} from 'react'
import axios from 'axios';


class CityData extends Component {
  state = {
    crimeData: []
  }

  componentDidMount() {
    this.fetchData()
  }

  //https://api.github.com/users
  //https://data.nola.gov/resource/j5wk-jv3p.json

  async fetchData() {
    const crimeData = await axios.get('https://data.nola.gov/resource/j5wk-jv3p.json')
    this.setState({ crimeData: crimeData})
  }

  renderCrimeData() {
    if (!this.state.crimeData.data) {
      return <div>Loading...</div>
    } 
     console.log(this.state.crimeData)
    let output = ''
      return this.state.crimeData.data.forEach((crime) => {
        output += <li>{crime.initialtypetext}</li>
        return output
    })
  }

  render() {
    return ( 
      <div>
        NOLA Data
        {this.renderCrimeData()}
      </div>
    )
  }
}

export default CityData