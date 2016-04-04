import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectMovie} from '../actions/index';
import {bindActionCreators} from 'redux';

class MovieList extends Component {
  renderList() {
    return this.props.movies.map((movie) => {
      return (
        <li onClick={() => this.props.selectMovie(movie)} key={movie.title} className="list-group-item">{movie.title}</li>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <ul className="list group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  }
}

// anything returned from this function will end up as propd
// on the movielist container
function mapDispatchToProps(dispatch) {
  // whenever select movie is called, the result should be passed
  // to all our reducers
  return bindActionCreators({selectMovie: selectMovie}, dispatch);
}

// promote movielist from a component to a container - it needs to know
// aboutthis new dispatch method, selectMovie. Make it available
// as a prop
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);