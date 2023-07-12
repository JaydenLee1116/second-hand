package com.secondhand.oauth;

import com.secondhand.oauth.dto.AccessTokenResponseDTO;
import com.secondhand.oauth.dto.OAuthInfoResponse;
import com.secondhand.oauth.dto.OAuthMemberInfoDTO;
import com.secondhand.oauth.dto.req.OAuthLoginParams;

import java.io.IOException;

public interface Oauth {
    OAuthProvider oAuthProvider();

    AccessTokenResponseDTO getToken(OAuthLoginParams params);

    OAuthInfoResponse getUserInfo(String accessToken);
}
