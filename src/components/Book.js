import React from 'react';

// import styled from 'styled-components';
// import { fetchBook } from '../actions';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';
import { Card, CardLink, CardBody, CardTitle } from './base/Card';

import randomSvg from '../lib/randomBackground';

function Book(props) {
  const { title, author, slug } = props.details;
  // const url = `https://s3-eu-west-2.amazonaws.com/all-the-epubs/${slug}.epub`;
  // const cacheBook = () => props.fetchBook(url, id);
  const bgImageNumber = author[0].toUpperCase().charCodeAt(0) - 65;
  const colours = ['#480B13', ' #39092B', '#4C260B', '#093D09'];

  return (
    <Card
      style={{
        backgroundImage: `${randomSvg[bgImageNumber]}`,
        backgroundColor: `${colours[Math.round(bgImageNumber / 6.5)]}`,
      }}
    >
      <CardLink to={`/reader/${slug}`}>
        <CardBody>
          <CardTitle>
            {title.split(' ').length > 8
              ? title.split(' ').slice(0, 8).join(' ') + '...'
              : title}
          </CardTitle>
          <p>{author}</p>
        </CardBody>
      </CardLink>
      {/* <CardFooter>
          <CardButton onClick={cacheBook}>
            {saved ? 'saved ✔' : 'Save offline ↓'}
          </CardButton>
        </CardFooter> */}
    </Card>
  );
}
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ fetchBook }, dispatch);
// export default connect(null, mapDispatchToProps)(Book);
export default Book;
