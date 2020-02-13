import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, close, onSubmit, title, children }) => (
  <div className="modal-overlay" style={{ display: isOpen ? 'block' : 'none' }}>
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{ title }</h5>
            <button type="button" onClick={ close } className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            { children }
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={ onSubmit }>Submit</button>
            <button type="button" className="btn btn-secondary" onClick={ close } data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
};

Modal.defaultProps = {
  title: 'Modal title',
};

export default Modal;
