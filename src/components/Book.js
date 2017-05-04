import React from 'react';
import styled from 'styled-components';

import Card from './utilities/Card';

function Book({ details }) {
  const { title, author } = details;
  return (
    <Card>
      <h2>{title}</h2>
      <footer><cite>{author}</cite></footer>
    </Card>
  );
}

export default Book;
