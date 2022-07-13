import axios from 'axios';

const clientApi = () => ({
  cryptocurrencies: {
    getAll: () => axios.get('https://api.coincap.io/v2/assets'),
  },
});

export default clientApi();
