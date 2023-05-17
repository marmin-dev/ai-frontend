import { useState } from 'react';
import createQ from '../apiHandler/AiApiHandler';
import ChatPage from '../components/PageComponent';
import backgroundImage1 from '../public/char2/char1.png';
import backgroundImage2 from '../public/char2/char2.png';
import backgroundImage3 from '../public/char2/char3.png';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CharacterBox from '../components/CharacterBox';
import UiWindow from '../components/UiWindow';
import CharInput from '../components/CharInput';
import InputButton from '../components/Inputbutton';
import bg2 from '../public/backgrounds/bg2.png';

const MaryPage = () => {
  const [content, setContent] = useState('Hi!');
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1); // todo: import background image
  const [question, setQuestion] = useState('');
  // test data
  const data = { author: `${localStorage.username}`, question: question };
  const num = 2;
  // api handler => callback function <POST>
  const apiHandle = async () => {
    const inputElement = document.getElementById('hello');
    inputElement.readOnly = true;
    setBackgroundImage(backgroundImage3);
    const response = await createQ(num, data);
    const inputCha = document.getElementById('hello');
    inputCha.value = '';
    setContent(response.answer);
    setBackgroundImage(backgroundImage1);
    inputElement.readOnly = false;
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

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (!username) {
      alert('유저 이름을 입력해주세요 \nplease set username');
      window.location.href = '/';
    }
  }, []);

  // Rendering
  return (
    <ChatPage backgroundImage={bg2}>
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
              id="hello"
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
