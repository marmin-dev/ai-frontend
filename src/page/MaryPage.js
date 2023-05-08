import { useState } from 'react';
import createQ from '../apiHandler/AiApiHandler';
import ChatPage from '../components/PageComponent';
import styled from 'styled-components';
import backgroundImage1 from '../public/char2/char1.png';
import backgroundImage2 from '../public/char2/char2.png';
import backgroundImage3 from '../public/char2/char3.png';
import { Link } from 'react-router-dom';

const CharacterBox = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* desktop environment */
  .logo_area {
    text-decoration: none;
    color: white;
    margin-top: 0px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  @media (min-width: 768px) {
    width: 550px;
    height: 760px;
  }
  @media (max-width: 768px) {
    height: 700px;
    width: 380px;
  }
`;
const UiWindow = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: auto;
  .char-name {
    color: white;
  }
  .input-button {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
    width: 550px;
  }
  @media (max-width: 768px) {
    justify-content: end;
    width: 380px;
  }
`;
const CharInput = styled.input`
  border: none;
  border-bottom: 2px solid white;
  color: white;
  background: none;
  width: 100%;
  font-size: 15px;
`;
const InputButton = styled.input`
  border: white 2px solid;
  width: 150px;
  height: 30px;
  align-self: center;
  background: none;
  margin-top: 10px;
  font-size: 15px;
  color: white;
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
const MaryPage = () => {
  const [content, setContent] = useState('Hi!');
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1); // todo: import background image
  const [question, setQuestion] = useState('');
  // test data
  const data = { author: 'author1', question: question };
  const num = 2;
  // api handler => callback function <POST>
  const apiHandle = async () => {
    setBackgroundImage(backgroundImage3);
    const response = await createQ(num, data);
    const inputCha = document.getElementById('hello');
    inputCha.value = '';
    setContent(response.answer);
    setBackgroundImage(backgroundImage1);
  };
  console.log(backgroundImage);
  // Image change function
  const change12 = () => {
    setBackgroundImage(backgroundImage2);
  };
  // change input
  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };

  // Rendering
  return (
    <ChatPage>
      <div>
        <CharacterBox backgroundImage={backgroundImage}>
          <p className="logo_area">
            <Link to="/" className="logo_area">
              ☖Home
            </Link>
            /
            <Link to="/logs" className="logo_area">
              Logs
            </Link>
          </p>
          <UiWindow>
            <h3 className="char-name">Mary</h3>
            <p className="char-name">{content}</p>
            <CharInput
              onClick={change12}
              className="text"
              placeholder="What you gonna say?"
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  apiHandle();
                }
              }}
            ></CharInput>
            <div className="input-button">
              <InputButton
                type="submit"
                value="말하기"
                onClick={apiHandle}
              ></InputButton>
            </div>
          </UiWindow>
        </CharacterBox>
      </div>
    </ChatPage>
  );
};
export default MaryPage;
