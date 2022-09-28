
# 소스 다운로드
```
git clone https://github.com/progh2/loyaltypoint.git
cd loyaltypoint
```

# 실행 전 설정
## 관련 패키지 설치
아래 명령을 실행해서 실행에 필요한 패키지를 설치한다.
```
npm install 
```

## Auth Token 발급
1. 루니버스 사이트에 회원 가입 후 다음 2가지 권한이 있는 IAM User를 생성한다.
  - API & Key Management
  - LoyaltyPoint Management
1. 생성한 IAM User로 로그인한다.
1. Loyalty Point 메뉴로 가서 튜터리얼을 클릭, 실습을 따라하며 Auth Token을 발급받는다. 
1. index.html 파일의 authtoken 변수에 넣어준다.

# 실행 방법
아래 명령을 실행해서 서버를 실행 후 `https://localhost:3000` 에 접속한다.
```
node index.js
```