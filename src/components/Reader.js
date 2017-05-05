import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ReactReader } from 'react-reader';
import styled from 'styled-components';

const ReaderContainer = styled.div`
  height: 100vh;
  position: relative;
  border: 1px solid black;
`;

class Reader extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ReaderContainer>
        <ReactReader
          url={`https://s3-eu-west-1.amazonaws.com/react-reader/${this.props.slug}.epub`}
          title={'Alice in wonderland'}
          location={'epubcfi(/6/2[cover]!/6)'}
          locationChanged={epubcifi => console.log(epubcifi)}
        />
      </ReaderContainer>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Reader);
