# Lonsily

- 배포 사이트: [Lonsily](https://lonsily.vercel.app/)
- 깃 허브: [GitHub](https://github.com/KDT3-miniproject-team1/frontend)
- 노션: [Notion](https://www.notion.so/1-285c65e1866f4944935980bcd53171a1)

## 📚 과제

[금융상품 쇼핑몰 만들기](https://mango-tower-9f1.notion.site/7670e6d5a49d489f806ea2fb271d4fcb)

## 🗓️ 개발 기간

- 2023.2.13 ~ 2023.2.24

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
  - eslint, prettier 사용을 통해 코드를 통일화하였습니다.
  - husky와 lint-staged를 이용한 pre-commit을 통해 린트를 자동화하였습니다.
  - github action을 통해 fork 한 레포지토리의 배포 자동화를 구현하였습니다.

#### 마이페이지 ( /mypage )

- 마이페이지 전체적인 레이아웃을 구성하였습니다.
- 마이페이지 내부 중첩 라우팅을 통한 페이지를 구성하였습니다.

#### 관심상품 ( /mypage/like )

- 관심 상품 출력, 추가, 삭제 기능을 구현하였습니다.
- 리덕스를 이용해 관심 상품을 관리하는 기능을 구현하였습니다.

#### 구매내역 (/mypage/order )

- 구매내역 출력, 추가, 삭제 기능을 구현하였습니다.

#### 유저정보 ( /mypage/user/password, /mypage/user)

- 비밀번호 인증을 통한 회원정보 수정 페이지 이동을 구현하였습니다.
- 회원정보 수정 기능을 구현하였습니다.

#### 권한별 라우트 구현

- PublicRouter, PrivateRouter를 통한 권한별 리다이렉트를 구현하였습니다.


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

 
