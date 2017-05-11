import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageLayout from './../components/PageLayout';
import Book from './Book';
import { RowItem, Row } from './base/Row';
import { SectionTitle } from './base/Section';
import uuid from 'uuid/v4';

class MyLibrary extends Component {
  render() {
    const { myBooksSlugs } = this.props;
    const slugs = myBooksSlugs.map(book => book.slug);
    const myBooks = this.props.books.filter(book => {
      return slugs.includes(book.slug);
    });
    return (
      <PageLayout>
        <SectionTitle>My Library</SectionTitle>
        <Row>
          {myBooks.length > 0 &&
            myBooks.map(book => {
              return (
                <RowItem key={uuid()}>
                  <Book details={book} />
                </RowItem>
              );
            })}
        </Row>
      </PageLayout>
    );
  }
}

function mapStateToProps(state) {
  return {
    myBooksSlugs: state.user.books,
    books: state.books,
  };
}

export default connect(mapStateToProps)(MyLibrary);
