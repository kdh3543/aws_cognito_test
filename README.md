### Amazon Cognito로 회원가입, 로그인 테스트
#### TypeScript, Next.js로 테스트
---


필요한 package: amazon-cognito-identity-js

##### 순서
1. Amazon Cognito에 사용자 풀 생성(email, password로 생성)
2. 프로젝트 파일의 src directory에 userPool.tsx에 CognitoUserPool을 생성

![image](https://user-images.githubusercontent.com/91539013/228475194-ceccdb0e-ab02-4d03-8d50-a91e20bcc76a.png)

3. 회원가입 페이지(index.tsx)에 회원가입 기능 구현

  회원가입시 userPool에 있는 CognitoUserPool의 signUp메소드 사용
  
  로그인 이메일, 비밀번호 인자로 넣고 결과값 return
  
  ![image](https://user-images.githubusercontent.com/91539013/228477875-8510491f-9e0d-4b03-a7ee-67ca4835f572.png)

  
4. 이메일에서 인증코드 받은 다음 verify.tsx에서 이메일과 인증코드 입력 후 인증 확인

  인증을 받아야 로그인 가능
  
  인증할 때에도 userPool에 있는 CognitoUserPool에서의 Pool과 인증받을 이메일을 데이터로 묶어 amazon-cognito-identity-js의 CognitoUser에 입력
  
  안에 포함된 confirmRegistration 함수에 코드 넣고 결과값 return
  
  ![image](https://user-images.githubusercontent.com/91539013/228477772-44810fea-7bc1-4e1b-826b-34f0253631cc.png)

5. 로그인할 때 login.tsx에서 로그인 시도

  amazon-cognito-identity-js에 들어있는 AuthenticationDetails, CognitoUser 사용
  
  CognitoUser에 로그인 이메일과 userPool(사용자 풀) 입력
  
  AuthenticationDetails에 인증할 로그인 이메일과 비밀번호 입력
  
  CognitoUser에 있는 authenticateUser함수에 이메일, 비밀번호 입력 후 성공 시 결과값 반환
  
  ![image](https://user-images.githubusercontent.com/91539013/228478863-621dce27-04ed-4108-afbd-57444fda951f.png)



