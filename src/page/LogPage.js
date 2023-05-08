import styled from 'styled-components';
import ChatPage from '../components/PageComponent';
import { useState } from 'react';
import createLog from '../apiHandler/CreateLog';

const CharacterBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
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
const CharSelector = styled.select`
  background-color: black;
  color: white;
  height: 30px;
  font-size: 17px;
`;

const LogPage = () => {
  const [charMo, setCharMo] = useState('Anne');
  const [user, setuser] = useState('author1');
  const [content, setContent] = useState({});

  const apiHandle = async () => {
    const response = await createLog(user, charMo);
    setContent(response);
    console.log(response);
  };

  const handleCharChange = (event) => {
    setCharMo(event.target.value);
    apiHandle();
  };
  console.log(createLog);
  return (
    <ChatPage>
      <CharacterBox>
        <CharSelector onChange={handleCharChange}>
          <option value="anne">Anne</option>
          <option value="anne">Mary</option>
          <option value="anne">수희</option>
          <option value="anne">예지</option>
        </CharSelector>
      </CharacterBox>
    </ChatPage>
  );
};
export default LogPage;
