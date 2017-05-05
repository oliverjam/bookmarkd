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
    this.props.addBook({
      slug: this.props.slug,
    });
  }

  onLocationChange = location => {
    this.props.updateCurrentLocation({ slug: this.props.slug, location });
  };

  render() {
    const { books } = this.props.user;
    const currentLocation = books[0] ? books[0].location : '';

    return (
      <ReaderContainer>
        <ReactReader
          url={`https://s3-eu-west-1.amazonaws.com/react-reader/${this.props.slug}.epub`}
          title={'Alice in wonderland'}
          location={currentLocation}
          locationChanged={this.onLocationChange}
        />
      </ReaderContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addBook, updateCurrentLocation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
