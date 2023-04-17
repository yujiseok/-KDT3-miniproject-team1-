# Lonsily

- 배포 사이트: [Lonsily](https://lonsily.vercel.app/)
- 깃 허브: [GitHub](https://github.com/KDT3-miniproject-team1/frontend)
- 노션: [Notion](https://www.notion.so/1-285c65e1866f4944935980bcd53171a1)

## 📚 과제

[금융상품 쇼핑몰 만들기](https://mango-tower-9f1.notion.site/7670e6d5a49d489f806ea2fb271d4fcb)

## 🗓️ 개발 기간

- 2023.2.13 ~ 2023.2.24

## 📖 깃 커밋 컨벤션

- Feat: 새로운 기능 추가
- Env: 개발 환경 관련 설정
- Docs: 문서 추가/수정
- Refactor: 코드 리팩토링 (더 효율적인 코드로 변경 등)
- Rename: 파일 및 폴더명 수정
- Remove: 파일 삭제

## 🧰 기술 스택

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 설명

- 패스트캠퍼스의 핀테크 미니 프로젝트로 진행된 프로젝트입니다.
- 금융상품 중에서 대출 상품들을 추천해 주는 사이트입니다.
- 로그인을 하지 않아도 상품들을 살펴보실 수 있습니다.

## 기능 구현

#### 전체 프로젝트 세팅
  - CRA - TypeScript - Redux-Toolkit 템플릿을 활용하여 프로젝트 초기화를 하였습니다.
  - eslint, prettier 를 통해 코드를 통일화하였습니다.
  - husky와 lint-staged를 이용한 pre-commit을 통해 린트를 자동화하였습니다.
  - github action을 통해 fork 한 레포지토리의 배포 자동화를 구현하였습니다.

#### 마이페이지 ( /mypage )

<div align="center">
  <img src="https://user-images.githubusercontent.com/83855636/220902609-d05a6a25-c87d-4254-a6c8-eb37fa6a0d37.png" width="300" height="400"/>
</div>

- 마이페이지 전체적인 레이아웃을 구성하였습니다.
  - 중첩 라우팅을 통해 공통 레이아웃을 공유하도록 하였습니다.
- Redux-Toolkit을 활용하여 유저 정보를 조회할 수 있도록 하였습니다.
#### 관심상품 ( /mypage/like )
<div align="center">
  <img src="https://user-images.githubusercontent.com/83855636/219589810-f70852be-fe35-47a4-8795-ee69498540e2.gif" width="300" height="450"/>
</div>

- 관심상품 출력, 추가, 삭제 기능을 구현하였습니다.
  - react-query의 useQuery 훅을 사용하여 관심상품 데이터 조회 기능을 구현하였습니다.
  - react-query의 useMutation 훅과 queryClient를 사용하여 삭제 기능을 구현하였습니다.
- Redux-Toolkit를 이용해 관심상품을 관리하는 기능을 구현하였습니다.
  
#### 구매내역 (/mypage/order )

- 구매내역 출력, 추가, 삭제 기능을 구현하였습니다.
  - react-query의 useQuery 훅을 사용하여 구매내역 데이터 조회 기능을 구현하였습니다.
  - react-query의 useMutation 훅과 queryClient를 사용하여 삭제 기능을 구현하였습니다.

#### 유저정보 ( /mypage/user/password, /mypage/user)
<div align="center">
  <img src="https://user-images.githubusercontent.com/83855636/220310013-38fb80ae-3e78-4995-b2fe-7a0a24833f9f.png" width="300" height="400"/>
  <img src="https://user-images.githubusercontent.com/83855636/219300410-36c09f5c-f520-4a37-8ff1-f963faad2f89.gif" width="300" height="400"/>
</div>

- 비밀번호 인증을 통한 유저정보 수정 페이지 이동을 구현하였습니다.
- 유저정보 수정 기능을 구현하였습니다.
  - TextFiled 컴포넌트를 생성해 중복되는 코드를 줄이고 재사용성을 높였습니다. 
  - zod와 react-hook-form을 활용하여 각 인풋 필드 별로 유효성 검사를 진행하였습니다.
  - isSubmitting 속성을 활용해 중복 제출을 방지하였습니다.

#### 권한별 라우트 구현

- PublicRouter와 PrivateRouter를 통해 유저의 토큰 여부에 따른 리다이렉트 처리를 구현하였습니다.
  
#### axios interceptors를 활용한 인증 로직 구현

- interceptors.request를 활용해, 요청 시 토큰 인증이 필요한 api 엔드포인트에 토큰을 Authorization에 주입하는 로직을 구현하였습니다.
  -  반복되는 코드를 줄였습니다.
- interceptors.response를 활용해, 응답 시 인증이 만료된 사용자일 경우 새로운 토큰을 발급하여  Authorization에 주입하는 로직을 구현하였습니다.


## 마주한 문제


#### http와 https

Vercel을 이용해 배포를 진행하였는데, 배포 주소는 암호화된 https이고 백엔드 서버의 주소는 암호화되지않은 http로 `Mixed content` 에러가 발생하였습니다.
제출 2시간 전에 발견한 문제여서 프론트와 백엔드 모두 적잖이 당황하고 서로 의견 충돌이 발생하였습니다. 
백엔드 측은 2시간 안에 해결하긴 어렵다는 의견과 프론트 측에서 해결할 수 있는지 문의하였습니다.
결과물 제출하기 위해 제가 시도한 해결법은 다음과 같습니다.

1. upgrade-insecure-requests 추가
`<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">`
메타 태그에 위와 같은 태그를 추가하여 에러 해결을 시도하였으나, 여전히 에러는 사라지지 않았습니다. 

2. 브라우저 안전하지 않은 콘텐츠 설정
두 번째로 시도한 해결법은 브라우저 자체의 설정을 바꾸는 것이었습니다.
안전하지 않은 콘텐츠 설정을 허용으로 바꾸어 https를 사용하지 않도록 하였습니다. 
그 결과 http 서버 통신이 가능하게 되었습니다. 

<div align="center">
  <img src="https://user-images.githubusercontent.com/83855636/232403008-d96889ca-3ec4-4bea-bc99-eb4efd66716d.png" width="300" height="400"/>
</div>


위의 에러를 해결하며, 팀원들과의 소통의 필요성과 http 프로토콜의 중요성을 알게 되었습니다.

## 회고

- **유지석**

  - 백엔드와 같이 하는 첫 협업이다 보니 서로 소통하는데 힘들었고, 기능을 구현하기에 시간이 촉박했습니다.
  - 하드 스킬도 중요하지만 소프트 스킬이 얼마나 중요한지 알게 되었던 프로젝트입니다.
  - ui를 통일하지 못하여 프로젝트의 통일감이 떨어진 것 같아서 아쉽습니다.
  - 컴포넌트를 어떻게 재사용하면 좋을지
  - 렌더링 최적화 과정이 미흡했던 것 같습니다.
  - 기획부터 구현까지 하려니 어디서부터 손을 대야 할지 갈피를 못 잡았던 것 같습니다.
  - jwt의 경우 어떻게 처리해야 하는지 더 자세히 알고 싶습니다.
  - 성공, 실패 등의 분기 처리가 미흡한 점이 아쉽습니다.
  - 이번 프로젝트를 통해 필요한 기능이 무엇인지, 어떤 데이터가 필요한지, 배포를 하기 위해선 어떤 작업이 필요한지 등 요구사항을 명확히 해야 한다는 점을 알게 되었습니다.
  - 내가 작성한 코드가 아닌 다른 사람의 코드를 잘 읽는 것이 무척이나 중요하다는 것을 알게 되었고, 알기 쉬운 코드를 작성하는 것이 얼마나 어려운 것인지 알게 되었습니다.

 
## 😃 팀원

<table>

<tbody>

<tr>

<td align="center"><a href="https://github.com/yujiseok"><img src="https://avatars.githubusercontent.com/u/83855636?v=4" width="100px;" alt=""/><br /><sub><b>유지석(팀장)</b></sub></a><br /></td>

<td align="center"><a href="https://github.com/zwonkim"><img src="https://avatars.githubusercontent.com/u/103507999?v=4" width="100px;" alt=""/><br /><sub><b>김지원</b></sub></a><br /></td>

<td align="center"><a href="https://github.com/plou102"><img src="https://avatars.githubusercontent.com/u/107393773?v=4" width="100px;" alt=""/><br /><sub><b>박정민</b></sub></a><br /></td>

<td align="center"><a href="https://github.com/mineclover"><img src="https://avatars.githubusercontent.com/u/61359316?v=4" width="100px;" alt=""/><br /><sub><b>방준우</b></sub></a><br /></td>

</tbody>

</table>
