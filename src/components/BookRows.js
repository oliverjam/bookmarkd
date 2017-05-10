import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Grid from './base/Grid';
import Book from './Book';
import uuid from 'uuid/v4';

const mapStateToProps = state => ({
  books: state.books,
});

const Row = styled.div`
  height: 25%;
  width: 100%;
`;

class BookRows extends Component {
  getGenres = () => [...new Set(this.props.books.map(book => book.genre))];

  createGenresArr = genre =>
    this.props.books.filter(book => book.genre === genre);

  getBooksSeparatedByGenre = () =>
    this.getGenres().reduce((accumulator, genre) => {
      accumulator[genre] = this.createGenresArr(genre);
      return accumulator;
    }, {});

  render() {
    const myBooks = this.getBooksSeparatedByGenre();
    return (
      <div>
        {Object.keys(myBooks).map(genre => (
          <Row>
            <h2>{genre}</h2>
            {myBooks[genre].map(genredBook => <Book details={genredBook} />)}
          </Row>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(BookRows);
