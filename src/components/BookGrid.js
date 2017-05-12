import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import Grid from './base/Grid';
import Book from './Book';
import uuid from 'uuid/v4';

const mapStateToProps = state => ({
  books: state.books,
});

export function BookGrid(props) {
  return (
    <Grid>
      {props.books
        .map(book => <li key={uuid()}><Book details={book} /></li>)
        .slice(0, 10)}
    </Grid>
  );
}

export default connect(mapStateToProps)(BookGrid);
