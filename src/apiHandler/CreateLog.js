import axios from 'axios';

const CreateLog = async (author, charMo) => {
  try {
    // deployment
    // const response = await axios.get(
    //   `https://api.sumsumai.click/api/v1/question/${author}/${charMo}`,
    // );
    // development
    const response = await axios.get(
      `http://localhost:80/api/v1/question/${author}/${charMo}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default CreateLog;
