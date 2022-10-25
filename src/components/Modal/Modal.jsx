import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWrap } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalWrap>
          <img src={src} alt={alt} />
        </ModalWrap>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
