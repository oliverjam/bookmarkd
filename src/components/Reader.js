import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ReactReader /*, ReactReaderStyle*/ } from 'react-reader';
import { showSnackbarWithTimeout } from './../actions/snackbarActions';
import styled from 'styled-components';

import ReaderHeader from './ReaderHeader';
import { addBook, updateCurrentLocation } from '../actions';
import slugToTitle from './../lib/slugToTitle';

const ReaderPageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ReaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export class Reader extends Component {
  componentDidMount() {
    const added = this.props.user.books.some(
      book => book.slug === this.props.slug
    );
    !added
      ? this.props.showSnackbarWithTimeout(
          'Book added to Your Library and available offline'
        )
      : this.props.showSnackbarWithTimeout('Already added to your library');
    this.props.addBook({
      slug: this.props.slug,
    });
  }

  onLocationChange = location => {
    this.props.updateCurrentLocation({
      slug: this.props.slug,
      location,
    });
  };

  render() {
    const { books } = this.props.user;
    const indexOfCurrentBook = books.findIndex(
      book => book.slug === this.props.slug
    );

    const currentLocation = (books[indexOfCurrentBook] || {}).location;
    return (
      <ReaderPageContainer>
        <ReaderHeader />
        <ReaderContainer>
          <ReactReader
            url={`https://s3.eu-west-2.amazonaws.com/all-the-epubs/${this.props.slug}.epub`}
            title={slugToTitle(this.props.slug)}
            location={currentLocation}
            locationChanged={this.onLocationChange}
          />
        </ReaderContainer>
        {/* <EpubView
                  ref="reader"
                  url={`https://s3.eu-west-2.amazonaws.com/all-the-epubs/${this.props.slug}.epub`}
                  title={slugToTitle(this.props.slug)}
                  location={currentLocation}
                  locationChanged={this.onLocationChange}
                /> */}
      </ReaderPageContainer>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addBook,
      showSnackbarWithTimeout,
      updateCurrentLocation,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Reader);
