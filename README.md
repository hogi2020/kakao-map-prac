# React + Vite 카카오맵 프로젝트

## 프로젝트 소개
이 프로젝트는 React와 Vite를 기반으로 구축된 웹 애플리케이션으로, 카카오맵 API를 활용한 지도 서비스와 Firebase를 이용한 사용자 인증 기능을 제공합니다.

<br/>

## 주요 기능
- 카카오맵 멀티마커 표시
- 사용자 인증 (Firebase)
- 반응형 레이아웃
- 공지사항 게시판

<br/>

## 기술 스택
- React 18
- Vite
- React Router Dom
- React Bootstrap
- Kakao Maps SDK
- Firebase

<br/>

### 필수 조건
- Node.js 14.18+ 또는 16+
- npm 또는 yarn
- Kakao Developers 계정 및 API 키
- Firebase 프로젝트 설정

<br/>

### 환경 변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 다음 값들을 설정해야함!
> VITE_KAKAO_JS_KEY = "your-kakao-js-key"

<br/>

### 프로젝트루트/
> ├── src/ <br/>
> │ ├── components/ <br/>
> │ │ ├── auth/ <br/>
> │ │ ├── include/ <br/>
> │ │ ├── kakao/ <br/>
> │ │ └── pages/ <br/>
> │ ├── App.jsx <br/>
> │ └── main.jsx <br/>
> ├── index.html <br/>
> ├── .env <br/>
> └── package.json <br/>

<br/>

### 주요 컴포넌트
- `KakaoPage`: 카카오맵 표시 페이지
- `MultiMarker`: 카카오맵 멀티마커 컴포넌트
- `LoginPage`: 사용자 인증 페이지
- `NoticePage`: 공지사항 페이지
- `Header/Footer`: 공통 레이아웃 컴포넌트

<br/>

### 라우팅
- `/`: 홈페이지
- `/login`: 로그인 페이지
- `/kmap`: 카카오맵 페이지
- `/notice/list`: 공지사항 목록

<br/>

### 참고 사항
- Kakao Maps SDK는 index.html에서 로드됩니다
- 환경 변수는 반드시 `VITE_` 접두사로 시작해야 합니다
- Bootstrap을 사용하여 반응형 디자인이 적용되어 있습니다