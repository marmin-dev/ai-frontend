import styled from 'styled-components';
import ChatPage from '../components/PageComponent';
import { Link } from 'react-router-dom';
import image1 from '../public/char1/char1_1.png';
import image2 from '../public/char2/char1.png';
import image3 from '../public/char3/char1.png';
import image4 from '../public/char4/char1.png';
import { useState } from 'react';
import loginApi from '../apiHandler/LoginApi';

const SelectBox = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;

  /* desktop environment */
  .logo_area {
    text-decoration: none;
    color: white;
    @media (min-width: 768px) {
      font-size: 25px;
    }
  }

  .box_area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .login_area {
    display: flex;
    flex-direction: column;
    align-items: center;
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

const HeaderSelect = styled.h1`
  color: black;
`;

const SelectChar = styled.div`
  display: flex;
  border: solid 1px black;
  @media (min-width: 768px) {
    width: 550px;
    height: 130px;
  }
  @media (max-width: 768px) {
    width: 380px;
    height: 120px;
  }
`;

const CharInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  justify-content: flex-start;
`;

const CharTitle = styled.h3`
  margin-left: 0px;
  padding: 0px;
  color: black;
  text-align: center;
  margin-top: 5px;
  width: fit-content;
`;

const CharDescription = styled.p`
  color: black;
  text-align: center;
`;

const LoginBtn = styled.button`
  border-radius: 25px;
  height: 50px;
  width: 300px;
  background: none;
  margin: auto;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
const CharLink = styled(Link)`
  text-decoration: none;
  direction: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageArea = styled.div`
  .char_img {
    @media (min-width: 768px) {
      height: 130px;
    }
    @media (max-width: 768px) {
      height: 120px;
    }
  }
`;

const CharInput = styled.input`
  border: none;
  border-bottom: 2px solid black;
  color: black;
  background: none;
  width: 100%;
  font-size: 15px;
  margin-bottom: 3px;
`;

const SelectPage = () => {
  const [username, setUsername] = useState('default');

  const onInputChange = (event) => {
    setUsername(event.target.value);
  };
  const localUsernameSet = () => {
    localStorage.setItem('username', username);
  };

  return (
    <ChatPage>
      <SelectBox>
        <HeaderSelect>Select Character</HeaderSelect>
        <div className="box_area">
          {/* char1 */}
          <SelectChar>
            <ImageArea>
              <img src={image1} className="char_img" />
            </ImageArea>
            <CharInfo>
              <CharLink to={'/anne'}>
                <CharTitle>Anne</CharTitle>
                <CharDescription>Hello It's Annnnnnne!</CharDescription>
              </CharLink>
            </CharInfo>
          </SelectChar>
          {/* char2 */}
          <SelectChar>
            <ImageArea>
              <img src={image2} className="char_img" />
            </ImageArea>
            <CharInfo>
              <CharLink to={'/mary'}>
                <CharTitle>Mary</CharTitle>
                <CharDescription>Hi I'm Mary</CharDescription>
              </CharLink>
            </CharInfo>
          </SelectChar>
          {/* char3 */}
          <SelectChar>
            <ImageArea>
              <img src={image3} className="char_img" />
            </ImageArea>
            <CharInfo>
              <CharLink to={'/suhee'}>
                <CharTitle>수희</CharTitle>
                <CharDescription>
                  안녕하세요! 저는 수희라고 해요
                </CharDescription>
              </CharLink>
            </CharInfo>
          </SelectChar>
          {/* char4 */}
          <SelectChar>
            <ImageArea>
              <img src={image4} className="char_img" />
            </ImageArea>
            <CharInfo>
              <CharLink to={'/yeji'}>
                <CharTitle>예지</CharTitle>
                <CharDescription>안녕! 나는 예지야!</CharDescription>
              </CharLink>
            </CharInfo>
          </SelectChar>
          {/* Login Area */}
          <div className="login_area">
            <CharInput
              placeholder="Username 입력해주세요"
              onChange={onInputChange}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  localUsernameSet();
                }
              }}
            ></CharInput>
            <LoginBtn onClick={localUsernameSet}>SetUsername!</LoginBtn>
          </div>
        </div>
      </SelectBox>
    </ChatPage>
  );
};
export default SelectPage;
