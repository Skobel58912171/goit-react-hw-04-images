import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import fetchImagesWithQuery from 'services/api';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchImages() {
      if (searchQuery === '') {
        return;
      }
      try {
        const data = await fetchImagesWithQuery(searchQuery, page);
        // console.log(data);
        setImages(prevImages => [...prevImages, ...data.hits]);
        setTotalImages(data.totalHits);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = searchQuery => {
    setIsLoading(true);
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    setIsLoading(true);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        textAlign: 'center',
        fontSize: 15,
        color: '#010101',
      }}
    >
      <Searchbar onSubmit={handleSearch} />
      {images && <ImageGallery images={images} />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {isLoading ? (
        <Loader />
      ) : (
        images.length !== 0 &&
        images.length < totalImages && <Button onLoadMore={handleLoadMore} />
      )}
    </div>
  );
};

// page === 1 ? [...resp.hits] :
