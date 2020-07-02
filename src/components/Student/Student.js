import React, { Component } from 'react';
import Axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom'
import ClassList from '../ClassList/ClassList'

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount = () => {
    Axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(res => this.setState({ studentInfo: res.data }))
  }

  render() {
    // console.log(this.props.match)
    const { studentInfo } = this.state
    console.log(studentInfo)
    return (
      <div>
        <div className="box">
          <h1>Student</h1>
          <h1>{studentInfo.first_name} {studentInfo.last_name}</h1>
          <h3>{`Grade: ${studentInfo.grade}`}</h3>
          <h3>{`Email: ${studentInfo.email}`}</h3>
          <Link to={`/classlist/${studentInfo.class}`}>
            <button>ClassList</button>
          </Link>
        </div>

        <div>
          <Switch>
            <Route path='/classlist:class' component={ClassList} />
          </Switch>
        </div>
      </div>
    )
  }
}