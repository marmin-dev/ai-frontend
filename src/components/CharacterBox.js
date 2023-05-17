import { Children } from 'react';
import styled from 'styled-components';

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

export default CharacterBox;
