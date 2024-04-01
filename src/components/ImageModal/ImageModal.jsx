import css from './ImageModal.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const ImageModal = ({ fetchResult: { alt_description, urls }, modalIsOpen, closeModal }) => {

  if (!urls) {
    return null;
  }

  return (
    <div className={css.imageModal}>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={css.modalWindow}
      >
      <img src={urls.regular} alt={alt_description} />
      </Modal>
    </div>
  );
};
