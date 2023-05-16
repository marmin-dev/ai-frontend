import axios from 'axios';

const createQ = async (num, data) => {
  try {
    const response = await axios.post(
      'https://api.sumsumai.click/api/v1/question/post/' + num,
      data,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default createQ;
