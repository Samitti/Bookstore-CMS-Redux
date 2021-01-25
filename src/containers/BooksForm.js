import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../actions/index';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor(Math.random() * 100),
      title: '',
      category: categories[0],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addBook } = this.props;
    addBook(this.state);
    e.target.reset();

    this.setState({
      id: Math.floor(Math.random() * 100),
      title: '',
      category: 'categories[0]',
    });
  }

  render() {
    const { title, category } = this.state;
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <h4>Add New Book</h4>
        <label htmlFor="title">
          Title
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={event => this.handleChange(event)}
          />
        </label>
        <select id="category" name="category" value={category} onChange={event => this.handleChange(event)}>
          {categories.map(e => <option key={e} value={e}>{e}</option>)}
        </select>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addBook,
};

BookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
