import React from 'react';
import styled from 'styled-components';
import { fetchBook } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from './utilities/Card';

function Book(props) {
  const { title, author, id, url } = props.details;
  const cacheBook = () => props.fetchBook(url, id);
  return (
    <Card>
      <h2>{title}</h2>
      <button onClick={cacheBook}>
        save offline ♥
      </button>
      <footer><cite>{author}</cite></footer>
    </Card>
  );
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBook }, dispatch);
export default connect(null, mapDispatchToProps)(Book);
