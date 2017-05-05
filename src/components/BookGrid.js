import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Grid from './utilities/Grid';
import Book from './Book';

const mapStateToProps = state => ({
  books: state.books,
});

function BookGrid(props) {
  return (
    <Grid>
      {props.books.map(book => <li><Book details={book} /></li>)}
    </Grid>
  );
}

export default connect(mapStateToProps)(BookGrid);
