import React from 'react';
import Modal from '../Modal';

const availableCategories = [
  { label: 'Financial', value: 'financial' },
  { label: 'Technology', value: 'technology' },
  { label: 'World', value: 'world' },
];

class EditModal extends React.Component {
  state = {
    title: '',
    shortDescription: '',
    category: '',
  };

  componentDidUpdate(prevProps) {
    const { newsItem } = this.props;
    if (newsItem && !prevProps.newsItem) {
      // This is an editing modal and state values must be populated
      const { title, shortDescription, category } = newsItem;
      this.setState({ title, shortDescription, category });
    }

    if (prevProps.newsItem && !newsItem) {
      this.setState({ title: '', shortDescription: '', category: '' });
    }
  }

  onInputChange(e) {
    this.setState({ [ e.target.name ]: e.target.value });
  }

  renderForm() {
    const { title, shortDescription, category } = this.state;
    return (
      <form action="" className="form form-horizontal">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={ title }
            onChange={ e => this.onInputChange(e) }
            className="form-control"
            name="title" />
        </div>
        <div className="form-group">
          <label htmlFor="shortDescription">Short description</label>
          <input
            type="text"
            value={ shortDescription }
            onChange={ e => this.onInputChange(e) }
            className="form-control"
            name="shortDescription" />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select name="category" value={ category } className="form-control" onChange={ e => this.onInputChange(e) }>
            { availableCategories.map(ac => <option key={ ac.value } value={ ac.value }>{ ac.label }</option>) }
          </select>
        </div>
      </form>
    )
  }

  render() {
    const { title, isOpen, close, onSubmit, newsItem } = this.props;
    return (
      <Modal
        title={ title }
        isOpen={ isOpen }
        close={ close }
        onSubmit={ () => {
          const id = newsItem ? newsItem.id : 0;
          onSubmit({ id, title: this.state.title, shortDescription: this.state.shortDescription, category: this.state.category })
        } }>
        { this.renderForm() }
      </Modal>
    )
  }
}

export default EditModal;
