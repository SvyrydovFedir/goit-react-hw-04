import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';

export const ImageGallery = ({ fetchResult, onClick }) => {
  return (
    <ul className={css.photoCard}>
      {fetchResult.map(item => (
        <li
          key={item.id}
        >
          <ImageCard param={item} onClick={() => {
            onClick(item);
          }} />
        </li>
      ))}
    </ul>
  );
};
