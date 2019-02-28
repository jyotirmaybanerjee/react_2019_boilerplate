import  React from 'react';
import PropTypes from 'prop-types';

export class Textarea extends React.Component {

  static defaultProps = {
    value: '',
  };

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
  }

  componentWillReceiveProps() {
    const {value} = this.props;
      this.setState({
        value,
      });
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  render () {
    const {id, name} = this.props;
    const {value} = this.state;
    return (
      <textarea
        id={id}
        name={name} 
        defaultValue={value} 
        onChange={this.handleChange}
      />
    );
  }
}
