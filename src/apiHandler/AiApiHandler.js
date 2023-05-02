import axios from 'axios';

const createQ = async (data, num) => {
  try {
    const response = await axios.post(
      'http://localhost:8080/api/v1/question/post/' + num,
      data,
    );
    let result = response.data;
    return result;
  } catch (e) {
    console.log(e);
  }
};
export default createQ;
