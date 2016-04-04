import React, {Component} from 'react';
import {connect} from 'react-redux';

class MovieDetail extends Component {
  render() {
    if (!this.props.movie) {
      return <div>select a book to get started</div>
    }

    return (
      <div>
        <h2>Movie Detail</h2>
        <p>{this.props.movie.title}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    movie: state.activeMovie
  }
}

export default connect(mapStateToProps)(MovieDetail);