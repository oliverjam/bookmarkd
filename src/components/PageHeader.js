import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchResults from './../components/SearchResults';

import Header from './base/Header';
import SearchBar from './base/SearchBar';

class PageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      searchResults: [],
    };
  }
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
    // Return no results for an empty search
    if (event.target.value === '') {
      this.setState({ searchResults: [] });
      return;
    }
    const searchTerm = event.target.value.toLowerCase() || '';
    const searchResults = this.props.books.filter(book => {
      const author = book.author || '';
      const title = book.title || '';
      return (
        author.toLowerCase().includes(searchTerm) ||
        title.toLowerCase().includes(searchTerm)
      );
    });
    this.setState({
      searchResults,
    });
  };

  render() {
    return (
      <Header>
        <Link to="/">Bookmarkd</Link>
        <SearchBar>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="search here"
          />
        </SearchBar>
        {this.state.searchResults.length > 0 &&
          <SearchResults books={this.state.searchResults} />}
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(PageHeader);
