import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import Card from './utilities/Card';

function Book({ details }) {
  const { title, author, slug } = details;
  return (
    <Card>
      <Link to={`/reader/${slug}`}><h2>{title}</h2></Link>
      <footer><cite>{author}</cite></footer>
    </Card>
  );
}

export default Book;
