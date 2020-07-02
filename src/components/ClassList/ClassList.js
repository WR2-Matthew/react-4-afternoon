import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(res => this.setState({ students: res.data }))
      .catch(err => console.log(`${err.data}`)) //not sure if this is right
  }

  render() {
    // console.log(this.props.match, 'match')
    // console.log(this.props.location, 'location')
    // console.log(this.props.history, 'history')
    // console.log(this.state.students)
    const { students } = this.state
    const mappedStudents = students.map((e, i) => {
      return (
        <Link key={i} to={`/student/${e.id}`} >
          <h3>{e.first_name} {e.last_name}</h3>
        </Link>

      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {mappedStudents}
        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    )
  }
}