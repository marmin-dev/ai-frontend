import styled from 'styled-components';
import ChatPage from '../components/PageComponent';
import { Link } from 'react-router-dom';
import image1 from '../public/char1/char1_1.png';
import image2 from '../public/char2/char1.png';
import image3 from '../public/char3/char1.png';
import image4 from '../public/char4/char1.png';

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
`;

const CharTitle = styled.h3`
  color: black;
  text-align: center;
  margin-top: 5px;
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

const SelectPage = () => {
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
                <CharDescription>Description of Anne</CharDescription>
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
                <CharDescription>Description of Mary</CharDescription>
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
                <CharDescription>수희 설명</CharDescription>
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
                <CharDescription>예지 설명</CharDescription>
              </CharLink>
            </CharInfo>
          </SelectChar>
          {/* Login Area */}
          <div className="login_area">
            <Link to={'/'}>
              <LoginBtn>Login With Google</LoginBtn>
            </Link>
          </div>
        </div>
      </SelectBox>
    </ChatPage>
  );
};
export default SelectPage;
