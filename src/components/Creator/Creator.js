import React from 'react';
import styles from './Creator.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Creator extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    action: PropTypes.func.isRequired,
  };

  static defaultProps = {
    text: 'Add new item',
  };

  state = {
    value: '',
    visibleButtons: false,
    cancelButton: 'cancel',
    buttonVariant: 'danger',
  };

  handleChange = event => {
    // console.log(event);
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  };

  handleOK = () => {
    if(this.state.value != ''){
      this.props.action(this.state.value);
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }
  };

  handleCancel = event => {
    event.currentTarget.textContent == 'cancel' ? this.setState({cancelButton: 'confirm', buttonVariant: 'confirm'}) : this.setState({value: '',
      visibleButtons: false, cancelButton: 'cancel', buttonVariant: 'danger'});
  };

  render() {
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={this.props.text}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className={styles.buttons + (this.state.visibleButtons ? ' ' + styles.buttonsShown : '')}>
          <Button onClick={this.handleOK}>OK</Button>
          <Button onClick={this.handleCancel} variant={this.state.buttonVariant}>{this.state.cancelButton}</Button>
        </div>
      </div>
    );
  }
}

export default Creator;
