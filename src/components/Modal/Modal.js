import React from "react";
import styles from './Modal.scss';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    return(
      <div className={styles.component} id='overlay'>
        <div className={styles.modal} id='myModal'>
          <div className={styles['btn-close js--close-modal']}>x</div>

          <h4>Witaj w modalu!</h4>
          <p>Lorem ipsum dolor sit amet...</p>

          <button className={styles['js--close-modal']}>Okay</button>
        </div>
      </div>
    )
  }
}

export default Modal;