import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();

    if (query === '') {
      toast.error('EMPTY STRING');
      return;
    }

    onSearch(query);
    e.target.reset();
  };

  const handleScroll = e => {
    console.dir(e);
  };

  return (
    <>
      <header onScrollCapture={handleScroll} className={css.headerBox}>
        <form className={css.headerForm} onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">
            <IoSearchOutline />
          </button>
        </form>
      </header>
    </>
  );
};
