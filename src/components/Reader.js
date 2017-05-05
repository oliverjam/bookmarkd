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
  state = {
    location: '',
  };

  componentDidMount() {
    this.props.addBook({
      slug: this.props.slug,
    });
  }

  componentWillReceiveProps() {
    const currentLocation = (this.props.user.books.find(
      book => book.slug === this.props.slug
    ) || {}).location;

    this.setState({
      // location: currentLocation,
      location: 'epubcfi(/6/10[chapter_002]!/4/2/16/1:120)',
    });
    // console.log(currentLocation);
  }

  onLocationChange = location => {
    // console.log(location);
    this.props.updateCurrentLocation({ slug: this.props.slug, location });
  };

  render() {
    const loc = 'epubcfi(/6/10[chapter_002]!/4/2/16/1:120)';
    console.log(this.state.location === loc);
    return (
      <ReaderContainer>
        <ReactReader
          url={`https://s3-eu-west-1.amazonaws.com/react-reader/${this.props.slug}.epub`}
          title={'Alice in wonderland'}
          // location={'epubcfi(/6/2[cover]!/6)'} // TODO figure out serving first page
          location={this.state.location} // TODO figure out serving first page
          // location={loc} // TODO figure out serving first page
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
