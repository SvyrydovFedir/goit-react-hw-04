import css from './App.module.css';

import { SearchBar } from './SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';
import { nanoid } from 'nanoid';
import { fetch } from './api';
import { ImageModal } from './ImageModal/ImageModal';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';


export const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [dataModal, setDataModal] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const searchImages = async newQuery => {
    setQuery(`${nanoid()}/${newQuery}`);
    setIsOpen(false);
    setLoading(true);
    setDataModal([]);
    setTotalPage(0);
    setError(false);
    setData([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  const openModal = items => {
    setDataModal(items);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchData() {
      setLoading(true);
      try {
        const fetchedData = await fetch(query.split('/')[1], page);
    
        setData([...data, ...fetchedData.results]);
        setTotalPage(fetchedData.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false); 
      }
    }
    fetchData();
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={searchImages} />
      {error && <ErrorMessage />}
      {data.length > 0 && <ImageGallery fetchResult={data} onClick={openModal} />}
      {loading && <Loader />}
      {data.length > 0 && !loading && totalPage !== page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <Toaster position="bottom-center" reverseOrder={false} />
        <ImageModal fetchResult={dataModal} modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};
