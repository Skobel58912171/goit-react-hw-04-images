import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const apiKey = '31597784-263cd57eb2ec667d9660f1eac';

const fetchImagesWithQuery = async (searchQuery, page) => {
  const resp = await axios.get(
    `?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=50`
  );

  return resp.data;
};

export default fetchImagesWithQuery;
