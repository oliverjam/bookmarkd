import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReactReader } from 'react-reader';
import styled from 'styled-components';

import { addBook, updateCurrentLocation } from '../actions';

const ReaderContainer = styled.div`
  height: 100vh;
  position: relative;
  border: 1px solid black;
`;

class Reader extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.addBook({
      slug: this.props.slug,
      // location:
    });
  }

  onLocationChange = location => {
    // console.log(location);
    this.props.updateCurrentLocation({ slug: this.props.slug, location });
  };

  render() {
    return (
      <ReaderContainer>
        <ReactReader
          url={`https://s3-eu-west-1.amazonaws.com/react-reader/${this.props.slug}.epub`}
          title={'Alice in wonderland'}
          location={'epubcfi(/6/2[cover]!/6)'} // TODO figure out serving first page
          locationChanged={this.onLocationChange}
        />
      </ReaderContainer>
    );
  }
}
//
// const mapStateToProps => state {
//   user:
// }

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addBook, updateCurrentLocation }, dispatch);
};

export default connect(null, mapDispatchToProps)(Reader);
