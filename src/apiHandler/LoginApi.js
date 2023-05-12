import axios from 'axios';

const loginApi = async () => {
  try {
    const response = await axios.get('http://localhost:8080/oauth2/user');
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default loginApi;
