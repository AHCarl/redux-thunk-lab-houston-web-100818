import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>CatBook</h1>
              <CatList catPics={this.props.catPics}/>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({catPics: state.cats.pictures})

export default connect(mapStateToProps, {fetchCats})(App)

