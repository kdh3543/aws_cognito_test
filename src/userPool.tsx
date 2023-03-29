import { CognitoUserPool } from "amazon-cognito-identity-js";

const userPoolData = {
  UserPoolId: "ap-northeast-2_TOWabjNar",
  ClientId: "2mvj3a9e2st6m68m1jlc03sggb",
};

export default new CognitoUserPool(userPoolData);
