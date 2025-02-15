import React, { useState } from 'react';

import { $LoginMain, $LoginButtonWrapper, $LoginButton, $ProfileImage } from './LoginMain.style';
import Icon from '@atoms/Icon';
import { AUTH } from '@constants/API';

const LoginMain = () => {
  const [accessToken, setAccessToken] = useState<string | null>(sessionStorage.getItem('accessToken'));

  const handleKaKaoLoginBtnClick = () => {
    const clientId = process.env.REACT_APP_OAUTH_KAKAO_CLIENT_ID as string;

    window.location.href = AUTH.KAKAO_LOGIN_URL(clientId);
  };
  const handleGithubLoginBtnClick = () => {
    const scope = 'user';
    const clientId = process.env.REACT_APP_OAUTH_GITHUB_CLIENT_ID as string;

    window.location.href = AUTH.GITHUB_LOGIN_URL(clientId, scope);
  };
  const handleKaKaoLogoutBtnClick = () => {
    setAccessToken(null);
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('imgUrl');
  };

  return (
    <$LoginMain>
      <$ProfileImage>
        <Icon name="camera" width={40} height={35} />
      </$ProfileImage>
      <$LoginButtonWrapper>
        {sessionStorage.getItem('accessToken') ? (
          <$LoginButton onClick={handleKaKaoLogoutBtnClick} color="#000" backgroundColor="#f7e10d">
            <Icon name="kakao" width={40} height={40} />
            카카오 로그아웃하기
          </$LoginButton>
        ) : (
          <>
            <$LoginButton onClick={handleKaKaoLoginBtnClick} color="#000" backgroundColor="#f7e10d">
              <Icon name="kakao" width={40} height={40} />
              카카오로 로그인하기
            </$LoginButton>
            <$LoginButton onClick={handleGithubLoginBtnClick} color="#fff" backgroundColor="#000">
              <Icon name="github" width={40} height={40} />
              깃허브로 로그인하기
            </$LoginButton>
          </>
        )}
      </$LoginButtonWrapper>
    </$LoginMain>
  );
};

export default LoginMain;
