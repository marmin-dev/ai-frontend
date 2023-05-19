import { useState } from 'react';
import createQ from '../apiHandler/AiApiHandler';
import ChatPage from '../components/PageComponent';
import backgroundImage1 from '../public/char1/char1_1.png';
import backgroundImage2 from '../public/char1/char1-4.png';
import backgroundImage3 from '../public/char1/char1_3.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CharacterBox from '../components/CharacterBox';
import UiWindow from '../components/UiWindow';
import CharInput from '../components/CharInput';
import InputButton from '../components/Inputbutton';
import bg1 from '../public/backgrounds/bg1.png';

const AnnePage = () => {
  const [content, setContent] = useState('Hi!');
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1); // todo: import background image
  const [question, setQuestion] = useState('');
  // test data
  const data = { author: `${localStorage.username}`, question: question };
  const num = 1;
  // api handler => callback function <POST>
  const apiHandle = async () => {
    const inputElement = document.getElementById('hello');
    inputElement.readOnly = true;
    setContent('Anne is thinking.....');
    setBackgroundImage(backgroundImage3);
    try {
      const response = await createQ(num, data);
      const inputCha = document.getElementById('hello');
      inputCha.value = '';
      setContent(response.answer);
      setBackgroundImage(backgroundImage1);
      inputElement.readOnly = false;
    } catch (e) {
      setContent('Anne is broken. Please reload to save anne');
      setBackgroundImage(backgroundImage3);
    }
  };
  // Image change function
  const change12 = () => {
    setBackgroundImage(backgroundImage2);
  };
  // change input
  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };
  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      alert('유저 이름을 입력해주세요 \nplease set username');
      window.location.href = '/';
    }
  }, []);

  // Rendering
  return (
    <ChatPage backgroundImage={bg1}>
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
            <h3 className="char-name">Anne</h3>
            <p className="char-name">{content}</p>
            <CharInput
              id="hello"
              onClick={change12}
              className="text"
              placeholder="What you gonna say?"
              onChange={handleInputChange}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
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
export default AnnePage;
