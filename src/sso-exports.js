/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
    "aws_project_region": process.env.VUE_APP_PROJ_REG,
    "aws_cognito_identity_pool_id": process.env.VUE_APP_COG_IDP,
    "aws_cognito_region": process.env.VUE_APP_PROJ_REG,
    "aws_user_pools_id": process.env.VUE_APP_USER_POOL_ID,
    "aws_user_pools_web_client_id": process.env.VUE_APP_USER_POOL_WEB_CLIENT_ID,
    "oauth": {
        "domain": process.env.VUE_APP_DOMAIN,
        "scope": ["email", "openid", "profile"],
        "redirectSignIn": process.env.VUE_APP_REDIRECT_URL,
        "redirectSignOut": process.env.VUE_APP_REDIRECT_URL,
        "responseType": 'token',
    },
    "aws_cognito_username_attributes": [],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};


export default awsmobile;
