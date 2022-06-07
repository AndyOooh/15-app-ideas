import ReactDOM from 'react-dom';

import Card from './Card';
import BackDrop from './BackDrop';
// import classes from './Modal.module.css';

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClickBackDrop={props.hideModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Card extraClasses={props.styles ? [...props.styles] : null}>{props.children}</Card>,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default Modal;
