import React from 'react';

import styled from 'styled-components';
import { fetchBook } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Card from './base/Card';
import Title from './base/Title';

const Footer = styled.footer`
  font-size: 0.8rem;
  overflow: scroll;
  height: 20%;
`;

const Button = styled.button`
  margin-top: 0.8rem;
`;

function Book(props) {
  const { title, author, id, slug } = props.details;
  const url = `https://s3-eu-west-1.amazonaws.com/react-reader/${slug}.epub`;
  const cacheBook = () => props.fetchBook(url, id);
  return (
    <Card>
      <Title>
        <Link to={`/reader/${slug}`}>
          {title.split(' ').length > 8
            ? title.split(' ').slice(0, 8).join(' ') + '...'
            : title}
        </Link>
      </Title>
      <Footer><cite>{author}</cite></Footer>
      <Button onClick={cacheBook}>
        save offline ♥
      </Button>
    </Card>
  );
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBook }, dispatch);
export default connect(null, mapDispatchToProps)(Book);
