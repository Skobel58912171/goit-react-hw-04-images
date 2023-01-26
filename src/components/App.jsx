import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import fetchImagesWithQuery from 'services/api';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    isLoading: false,
    showModal: false,
    totalImages: 0,
    largeImgSrc: '',
    page: 1,

    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevQuery !== nextQuery || prevPage !== nextPage) {
      fetchImagesWithQuery(nextQuery, nextPage)
        .then(resp => {
          this.setState(({ images, totalImages }) => ({
            images: nextPage === 1 ? [...resp.hits] : [...images, ...resp.hits],
            totalImages: resp.totalHits,
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleSearch = searchQuery => {
    this.setState({ searchQuery, page: 1, isLoading: true });
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1, isLoading: true }));
  };
  render() {
    const { images, totalImages, isLoading } = this.state;
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
        <Searchbar onSubmit={this.handleSearch} />
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
          images.length < totalImages && (
            <Button onLoadMore={this.handleLoadMore} />
          )
        )}
      </div>
    );
  }
}
