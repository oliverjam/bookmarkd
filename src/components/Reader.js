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

// location={'epubcfi(/6/2[cover]!/6)'} // TODO figure out serving first page
class Reader extends Component {
  componentDidMount() {
    this.props.addBook({
      location: 'epubcfi(/6/10[chapter_002]!/4/2/16/1:120)',
      slug: this.props.slug,
    });
  }

  // componentWillReceiveProps() {
  //   const currentLocation = (this.props.user.books.find(
  //     book => book.slug === this.props.slug
  //   ) || {}).location;

  // this.setState({
  //   // location: currentLocation,
  //   location: 'epubcfi(/6/10[chapter_002]!/4/2/16/1:120)',
  // });
  // }

  onLocationChange = location => {
    // console.log('location change', location);
    // this.props.updateCurrentLocation({ slug: this.props.slug, location });
  };

  render() {
    // const { books } = this.props.user;
    // const home = 'epubcfi(/6/2[cover]!/6)';
    // const location = books[0] && books[0].location ? books[0].location : home;
    // console.log('location', location);
    return (
      <ReaderContainer>
        <ReactReader
          url={`https://s3-eu-west-1.amazonaws.com/react-reader/${this.props.slug}.epub`}
          title={'Alice in wonderland'}
          location={'epubcfi(/6/2[cover]!/6)'} // TODO figure out serving first page
          // location={location}
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
