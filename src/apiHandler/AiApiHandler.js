import axios from 'axios';

const createQ = async (num, data) => {
  try {
    // deployment
    // const response = await axios.post(
    //   'https://api.sumsumai.click/api/v1/question/post/' + num,
    //   data,
    // );
    // development
    const response = await axios.post(
      'http://localhost:80/api/v1/question/post/' + num,
      data,
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default createQ;
