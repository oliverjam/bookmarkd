import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchResults from './../components/SearchResults';

import Nav from './utilities/Nav';

const TopNavigation = styled(Nav)`
  color: blue;
`;

class TopNav extends Component {
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
    const searchResults = this.props.books.filter(book => {
      const searchTerm = this.state.value.toLowerCase();
      return (
        book.author.toLowerCase().includes(searchTerm) ||
        book.title.toLowerCase().includes(searchTerm)
      );
    });

    this.setState({
      searchResults,
    });
  };
  render() {
    return (
      <TopNavigation>
        <Link to="/">Bookmarkd</Link>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="search here"
        />
        {this.state.searchResults.length > 0 &&
          <SearchResults books={this.state.searchResults} />}
      </TopNavigation>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

export default connect(mapStateToProps)(TopNav);
