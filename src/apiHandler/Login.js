import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const onSuccess = (response) => {
    // Google 로그인 성공
    const { tokenId } = response;
    // tokenId를 서버로 전송하여 JWT 토큰을 발급받음
  };

  const onFailure = (response) => {
    // Google 로그인 실패
  };

  return (
    <GoogleLogin
      clientId=""
      buttonText="Google 로그인"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default Login;
