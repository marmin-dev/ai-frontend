import styled from 'styled-components';
import ChatPage from '../components/PageComponent';
import { useState } from 'react';
import CreateLog from '../apiHandler/CreateLog';
import { Link, useNavigate } from 'react-router-dom';

const CharacterBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  /* desktop environment */
  .logo_area {
    text-decoration: none;
    color: black;
    margin-top: 0px;
    @media (min-width: 768px) {
      font-size: 25px;
    }
    @media (max-width: 768px) {
      font-size: 25px;
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
const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const CharSelector = styled.select`
  background-color: black;
  color: white;
  height: 30px;
  font-size: 17px;
  margin-left: 20px;
  width: 300px;
`;

const ListBox = styled.div`
  background-color: none;
  border: 1px solid black;
  @media (min-width: 768px) {
    width: 550px;
    font-size: 12px;
  }
  @media (max-width: 768px) {
    width: 380px;
    font-size: 10px;
  }
  .author {
    font-style: bold;
  }
`;

// component
const LogPage = () => {
  const [charMo, setCharMo] = useState('anne');
  const [user, setuser] = useState(`${localStorage.username}`);
  const [contents, setContents] = useState([]);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  const apiHandle = async () => {
    const response = await CreateLog(user, charMo);
    // const objectList = JSON.parse(response);
    setContents(response);
  };
  const handleCharChange = (event) => {
    setCharMo(event.target.value);
    apiHandle();
  };
  apiHandle('anne');
  return (
    <ChatPage>
      <CharacterBox>
        <NavDiv>
          <Link onClick={handleGoBack} className="logo_area">
            Back
          </Link>
          <CharSelector onChange={handleCharChange}>
            <option value="anne">Anne</option>
            <option value="mary">Mary</option>
            <option value="수희">수희</option>
            <option value="예지">예지</option>
          </CharSelector>
        </NavDiv>
        {contents.map((content) => (
          <ListBox key={content.id}>
            <p>Q:{content.question}</p>
            <p>
              <b>{content.charMo}</b>
            </p>
            <p>A:{content.answer}</p>
          </ListBox>
        ))}
      </CharacterBox>
    </ChatPage>
  );
};
export default LogPage;
