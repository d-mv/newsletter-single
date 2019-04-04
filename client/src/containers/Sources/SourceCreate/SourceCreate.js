import React from 'react';

import style from './SourceCreate.module.scss';

class SourceCreate extends React.Component {
  constructor(props) {
    super(props);

    if (props.source) {
      this.state = {
        name: props.source.name,
        url: props.source.url,
        home: props.source.home
      };
    } else {
      this.state = {
        name: '',
        url: '',
        home: ''
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let change = {};
    let field = event.target.name;
    change[field] = event.target.value;
    this.setState(change);
  }
  handleSubmit(event) {
    event.preventDefault();
    // form values
    const values = {
      name: event.target[0].value,
      url: event.target[1].value,
      home: event.target[2].value
    };
    // if module mode Update
    if (this.props.mode === 'Update') {
      // are these old values?
      const oldValues =
        values.name === this.props.source.name &&
        values.url === this.props.source.url &&
        values.home === this.props.source.home;
      // if no, then process
      if (!oldValues) {
        const query = { id: this.props.source._id, values: values };
        this.props.toggleEditSource();
        this.props.updateSource(query);
        // otherwise, just close
      } else {
        this.props.toggleEditSource();
      }
      // if module mode Create
    } else if (this.props.mode === 'Create') {
      this.props.toggle();
      this.props.create(values);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.createForm}>
        <label>
          <div className={style.labelTitle}>Name</div>
          <input
            className={style.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className={style.labelTitle}>URL</div>
          <input
            type="text"
            name="url"
            value={this.state.url}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <div className={style.labelTitle}>Homepage</div>
          <input
            type="text"
            name="home"
            value={this.state.home}
            onChange={this.handleChange}
          />
        </label>
        <div className={style.center}>
          <button
            className={style.submit}
            as="input"
            type="submit"
            value="Submit"
          >
            {this.props.mode}
          </button>
        </div>
      </form>
    );
  }
}

export default SourceCreate;
