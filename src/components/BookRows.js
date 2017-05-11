import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import Book from './Book';
import { Row, RowItem } from './base/Row';
import randomSvg from '../lib/randomBackground';

const mapStateToProps = state => ({
  books: state.books,
});

const GenreTitle = styled.h2`
  padding: ${props => props.theme.spaceS}
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
            <GenreTitle>
              {genre.replace(genre[0], genre[0].toUpperCase())}
            </GenreTitle>
            <Row>
              {myBooks[genre].map(genredBook => (
                <RowItem key={uuid()}>
                  <Book
                    details={genredBook}
                    bgNumber={Math.floor(Math.random() * randomSvg.length)}
                  />
                </RowItem>
              ))}
            </Row>
          </div>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(BookRows);
