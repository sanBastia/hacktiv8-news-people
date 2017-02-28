import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Release2 } from './Release2.js'
import { Release5 } from './Release5.js'
import { SearchForm } from './SearchForm.js'
import { SearchApi } from './SearchApi.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Starwars } from './Starwars.js'

const App = () => (
  <Router>
    <div>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Welcome to React</h2>
      </div>
      <br/>
      <nav>
        <div className='nav-wrapper grey darken-4'>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/'> Home
              </Link>
            </li>
            <li>
              <Link to='/people'> People
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route exact path='/' component={Home} />
      <Route path='/people' component={People} />
    </div>
  </Router>
)

const data_number1 = [1, 2, 3]
const data_number2 = [{
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0
}, {
  title: 'Redux',
  url: 'https://github.com/reactjs/redux',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1
}]

class Home extends Component {

  constructor () {
    super()
    this.state = {
      data_number1: data_number1,
      data_number2: data_number2,
      data_API: [],
      currentSearch: '',
      currentApiSearch: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleApiChange = this.handleApiChange.bind(this)
  }
  handleChange (event) {
    this.setState({
      currentSearch: event.target.value
    })
  }

  handleApiChange (event) {
    this.setState({
      currentApiSearch: event.target.value
    })

    this.fetchNews(this.state.currentApiSearch)
  }

  componentDidMount () {
    this.fetchNews('')
  }

  fetchNews (keyword) {
    let url = `http://hn.algolia.com/api/v1/search?query=${keyword}`
    const that = this
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        console.log(data)
        let temp = []
        data.hits.map((hint) => {
          return temp.push({
            title: hint.title,
            author: hint.author,
            url: hint.url
          })
        })
        that.setState({
          data_API: temp
        })
      })
  }
  render () {
    return (
      <div className='App'>
        <fieldset>
          <legend>
            Release #2:
          </legend>
          <Release2 datanumber2={this.state.data_number2} currentSearch={this.state.currentSearch} />
          <SearchForm handleChange={this.handleChange} />
        </fieldset>
        <br/>
        <fieldset>
          <legend>
            Release #5:
          </legend>
          <Release5 dataApi={this.state.data_API} currentApiSearch={this.state.currentApiSearch} />
          <SearchApi handleApiChange={this.handleApiChange} />
        </fieldset>
      </div>
    )
  }
}

class People extends Component {
  constructor () {
    super()
    this.state = {
      people: []
    }
  }
  componentWillMount () {
    this.fetchNews()
  }

  fetchNews () {
    let url = `http://swapi.co/api/people/`
    const that = this
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        let temp = []
        data.results.map((people) => {
          return temp.push({
            name: people.name,
            height: people.height,
            gender: people.gender
          })
        })
        that.setState({
          people: temp
        })
      })
  }

  render () {
    return (
      <div className='People'>
        <fieldset>
          <legend>
            #Starwars
          </legend>
          <Starwars dataApi={this.state.people} />
        </fieldset>
      </div>
    )
  }

}

export default App
