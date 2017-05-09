import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
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
  };

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="search here"
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(Search);
