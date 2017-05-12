import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import Book from './Book';
import { Section, SectionTitle } from './base/Section';
import { Row, RowItem } from './base/Row';
import randomSvg from '../lib/randomBackground';

const mapStateToProps = state => ({
  books: state.books,
});

export class BookRows extends Component {
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
          <Section key={uuid()}>
            <SectionTitle>
              {genre.replace(genre[0], genre[0].toUpperCase())}
            </SectionTitle>
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
          </Section>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(BookRows);
