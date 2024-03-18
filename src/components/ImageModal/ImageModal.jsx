import css from './ImageModal.module.css';

export const ImageModal = ({ fetchResult: { alt_description, urls } }) => {
  return (
    <div className={css.imageModal}>
      <img src={urls.regular} alt={alt_description} />
    </div>
  );
};
