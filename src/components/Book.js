import React from 'react';

import styled from 'styled-components';
import { fetchBook } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardFooter, CardButton } from './base/Card';

import randomSvg from '../lib/randomBackground';

const Footer = styled.footer`
  font-size: 0.8rem;
  height: 20%;
  padding: ${props => props.theme.spaceS}
`;

const Button = styled.button`
  margin-top: 0.8rem;
  border: none;
  background-color: ${props => props.theme.secondary};
  padding: calc(${props => props.theme.spaceS} / 2);
  box-shadow: 0 1px 1px ${props => props.theme.bgDark};
  border-radius: 2px;
  `;

function Book(props) {
  const { title, author, id, slug, saved } = props.details;
  const url = `https://s3-eu-west-1.amazonaws.com/react-reader/${slug}.epub`;
  const cacheBook = () => props.fetchBook(url, id);
  const bgImageNumber = author[0].toUpperCase().charCodeAt(0) - 65;
  console.log(randomSvg.length);

  return (
    <Card style={{ backgroundImage: `${randomSvg[bgImageNumber]}` }}>
      <CardTitle>
        <Link to={`/reader/${slug}`}>
          {title.split(' ').length > 8
            ? title.split(' ').slice(0, 8).join(' ') + '...'
            : title}
        </Link>
      </CardTitle>
      <p>{author}</p>
      <CardFooter>
        <CardButton onClick={cacheBook}>
          {saved ? 'saved ✔' : 'Save offline ↓'}
        </CardButton>
      </CardFooter>
    </Card>
  );
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBook }, dispatch);
export default connect(null, mapDispatchToProps)(Book);
