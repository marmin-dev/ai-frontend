import axios from 'axios';

const CreateLog = async (author, charMo) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/question/${author}/${charMo}`,
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export default CreateLog;
