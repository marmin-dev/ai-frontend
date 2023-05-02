import { useEffect, useState } from 'react';
import createQ from '../apiHandler/AiApiHandler';
import ChatPage from '../components/PageComponent';
import styled from 'styled-components';
import backgroundImage1 from '../public/char1/back1.jpg';
import backgroundImage2 from '../public/char1/back2.jpg';
import backgroundImage3 from '../public/char1/back3.jpeg';

const CharacterBox = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;

  /* desktop environment */
  @media (min-width: 768px) {
    display: flex;
  }
`;

const AnnePage = () => {
  const [content, setContent] = useState('waiting...');
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1); // todo: import background image
  // test data
  const data = { author: 'author1', question: '뭐해?' };
  const num = 1;
  // api handler => callback function <POST>
  const apiHandle = async () => {
    const response = await createQ(num, data);
    console.log(response);
  };
  console.log(backgroundImage);
  // Image change function
  const changeBackgroundImage = () => {
    if (backgroundImage === backgroundImage1) {
      setBackgroundImage(backgroundImage2);
    } else if (backgroundImage === backgroundImage2) {
      setBackgroundImage(backgroundImage3);
    } else if (backgroundImage === backgroundImage3) {
      setBackgroundImage(backgroundImage1);
    }
  };
  // Rendering
  return (
    <ChatPage>
      <div>
        <CharacterBox backgroundImage={backgroundImage}>
          <p>안녕하세용</p>
        </CharacterBox>
      </div>
    </ChatPage>
  );
};
export default AnnePage;
