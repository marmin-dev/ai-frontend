import styled from 'styled-components';

const PageTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #faefbb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ChatPage = ({ children }) => {
  return <PageTemplateBlock>{children}</PageTemplateBlock>;
};
export default ChatPage;
