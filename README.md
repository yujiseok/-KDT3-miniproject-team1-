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

## 페이지

### 김지원

#### 장바구니 (/Cart)

- 장바구니 api를 이용해 장바구니 추가, 삭제, 전체 선택, 선택 주문 등의 기능을 구현했습니다.
- useCart 훅을 이용해 비지니스 로직과 ui 컴포넌트를 분리하고자 했습니다.
- 장바구니는 ItemList 컴포넌트를 재사용하고 있습니다. 다른 페이지와 다르게 추가 기능이 많아 오히려 ItemList가 복잡해진 느낌이 드는데 이 경우 ItemList를 import 해서 CartItem으로 만들어 쓰는 게 나았을까요? 아니면 CartItem을 새로 만들어 쓰는 게 나았을까요?

#### 상세정보 (/ProductDetail)

- 제품의 상세정보 api를 이용해 대출 상품에 대한 상세 정보를 제공합니다.
- DetailTitle 컴포넌트와 DetailContent 컴포넌트가 반복되고 있습니다. map처럼 객체도 효율적으로 데이터를 출력하는 방법이 있을까요?

#### 신청 완료(/CompleteOrder)

---

### 박정민

#### 메인 페이지 ( / )

- 회원
  - 사용자가 신청한 대출 정보들이 보임
  - 사용자가 회원가입 할 때 선택했던 가입목적을 토대로 추천하는 대출 상품들이 보임
- 비회원
  - 간단한 인사말과 회원가입, 로그인 버튼이 보임
  - 홈페이지 내에서 추천하는 대출 상품들이 보임

#### 검색 페이지 ( /search )

- 대출 상품의 이름을 기준으로 검색합니다.
- 상품의 이름과 은행의 이름으로 정렬

#### 헤더

- 돋보기 아이콘을 누르면 입력창이 나타남
- 검색할 키워드를 작성한 후 검색을 하면 검색 페이지로 넘어감
- 검색 결과가 없을 때는 “검색 결과가 존재하지 않습니다.”

#### 탭

- 회원: 메인, 검색, 관심상품, 마이페이지
- 비회원: 메인, 검색, 관심상품, 로그인페이지

---

### 방준우

api 해달라고 쪼는 역할 .. DB쪽 지식이 있어서 구체적으로 설명하려함

타스 린트 에러 잡고 찾느라 시간을 많이 썻다

zod 반영은 하루만에 끝났다

#### /login

피그마 디자인 기반으로

로그인 목적 , 로그인 시 홈으로 이동

- react hook form
- zod

#### /signup

피그마 디자인 기반으로

회원가입에 필요한 인터페이스와 form submit 을 만듬

- react hook form
- zod
  비밀번호 확인을 먼저쓰고 비밀번호를 쓰면 바로 검증이 안되는 문제가 있었음

---

### 유지석

- 전체 프로젝트 세팅을 진행하였습니다.
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

# 프로젝트 진행 순서

1. 주제 선정을 위한 전체 회의 , 파트 분담 , 초기 세팅
2. 선정된 주제에 대한 와이어 프레임 제작
3. API 기능 간략 명세를 위한 전체 회의
4. 디자인 피그마 작업 > [피그마](https://www.figma.com/file/THAqaplHYAwKuI8jaN8XUQ/%EA%B8%88%EC%9C%B5-%EC%83%81%ED%92%88-%EC%B6%94%EC%B2%9C-%EC%87%BC%ED%95%91%EB%AA%B0?node-id=94%3A46&t=ts9wJTCgl0UaF6Bb-1)
5. 페이지 레이아웃 제작
6. API 작업 중인 서버가 공유 ( 20일 )
7. 호출 과정에서 문제로 전체 회의 ( 22일 )
8. 호출 된 데이터 기반으로 다시 세팅 ( 23 일 )
9. 상태 공유 리덕스 persist (24일 )

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

  <br>

- **김지원**

  - 백엔드와의 협업이 처음이고 서버와 db에 대한 지식이 부족해 소통하는 것이 어려웠습니다. 서버와 db 공부에 대한 필요성을 느꼈습니다.
  - 타입을 지정하는 것이 익숙하지 않아 힘들었습니다. 특히 공통적으로 사용되는 타입들에서 오류가 잦았습니다.
  - 기획과 디자인이 어려웠습니다 .. 더 예쁘게 만들지 못 한 부분이 조금 아쉽습니다 ..

  <br>

- **박정민**

  - 응답 값이 같은 구조이여도 key 값이 일치하지 않는 경우가 있어서 처음 프로젝트를 시작할 때 명세서를 더 꼼꼼히 작성해야 겠다고 생각했다.
  - typescript를 이번 프로젝트를 통해 처음 사용해 보았는데 공부해야 할 것 들이 많이 보였다.
  - 프론트엔드와 백엔드의 소통은 아주 많이 중요하다

  <br>

- **방준우**
  - react hook form, zod, redux, toolkit, ts ,persist 공부 열심히 했다
  - react-hooks-form 단일 사용과 zod 사용의 차이를 알 수 있었음
  - 린트 어렵다
  - axios 인터셉터나 axios Hooks를 만들어보려했는데 타입 에러등이 많았고 고도화 지식이 부족해서 쓰이진 못했다
  - http status 의 논쟁 포인트를 알 수 있었고 협의점 도출이 필요함을 알게 됨
  - https나 즉시 배포 과정을 미리 준비하는게 이로울듯하다
  - form을 html 네이티브로 만들려다가 react form hook을 적용하게 됬고 zod로 업데이트를 하면서 좋은 경험이 됬다
