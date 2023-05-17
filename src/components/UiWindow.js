import styled from 'styled-components';

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
    /* height: 200px; */
  }
  @media (max-width: 768px) {
    justify-content: end;
    width: 380px;
    /* height: 200px; */
  }
`;

export default UiWindow;
