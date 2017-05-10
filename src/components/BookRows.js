import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Grid from './base/Grid';
import Book from './Book';
import uuid from 'uuid/v4';

const mapStateToProps = state => ({
  books: state.books,
});

const Row = styled.ul`
  height: 25%;
  width: 100%;
  display:flex;
  overflow-x:scroll;
  margin: ${props => props.theme.spaceM};
`;

const BookList = styled.li`
  list-style-type: none;
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
          <div key={uuid()}>
            <h2>{genre}</h2>
            <Row>
              {myBooks[genre].map(genredBook => (
                <BookList key={uuid()}><Book details={genredBook} /></BookList>
              ))}
            </Row>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(BookRows);
