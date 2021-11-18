import React from "react";
import reactDom from "react-dom";

const modalRoot = document.getElementById('threekit-button-modal');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return reactDom.createPortal(
      this.props.children,
      this.el
    );
  }
}

export default Modal;