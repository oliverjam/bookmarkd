import React from 'react';

// import styled from 'styled-components';
import { fetchBook } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Card from './utilities/Card';

function Book(props) {
  const { title, author, id, slug } = props.details;
  const url = `https://s3-eu-west-1.amazonaws.com/react-reader/${slug}.epub`;
  const cacheBook = () => props.fetchBook(url, id);
  return (
    <Card>
      <Link to={`/reader/${slug}`}><h2>{title}</h2></Link>
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
