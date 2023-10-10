> 최근 수정: 23.10.10(화)

<p align="center"><a href="https://github.com/masters2023-2nd-project-02/second-hand/wiki"><img src="https://img.shields.io/badge/Second%20Hand-Wiki-007396?style=flat-square&logo=Wikipedia&logoColor=white"/><a/>

> 기존 팀 프로젝트를 개인 프로젝트로 리팩토링 및 기능을 추가 중입니다. 이를 기준으로 README를 작성하였습니다.

# 🔨 프로젝트 소개

## 🥕 세컨드 핸드

동네를 기준으로 중고 물품을 올리고 거래할 수 있는 당근마켓 클론 프로젝트

# 🔨 프로젝트 주요 기능

- 카카오 로그인을 통해 로그인할 수 있습니다.
- 현재 동네를 기준으로 등록된 상품을 볼 확인할 수 있습니다.
- 지원하는 동네에 한해서 유저의 동네를 변경할 수 있습니다.
- 상품을 카테고리 별로 확인할 수 있습니다.
- 각 상품의 상세정보를 확인할 수 있으며 좋아요를 눌러 찜할 수 있습니다.
- 사진과 함께 판매를 원하는 물품을 등록할 수 있습니다.
- 현재 유저가 판매중인 상품을 확인할 수 있습니다.
- 유저가 좋아요를 누른 상품을 확인할 수 있습니다.
- 상품에 대한 판매자와의 채팅을 할 수 있습니다.(리팩토링 후 구현 예정)

# 🔨 프로젝트 구조 및 기술 스택

## 1. 프로젝트 구조

```
📦
├─ .github
├─ .gitignore
├─ README.md
├─ be
├─ fe
│  ├─ .eslintrc.json
│  ├─ .gitignore
│  ├─ .prettierrc
│  ├─ .storybook
│  ├─ README.md
│  ├─ craco.config.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ assets
│  ├─ src
│  │  ├─ App.test.tsx
│  │  ├─ App.tsx
│  │  ├─ apis
│  │  │  ├─ api
│  │  │  └─ instances
│  │  ├─ assets
│  │  │  └─ Icons
│  │  ├─ components
│  │  │  ├─ Detail
│  │  │  │  ├─ DetailHeader
│  │  │  │  └─ DetailMain
│  │  │  ├─ Home
│  │  │  │  ├─ HomeCategory
│  │  │  │  │  ├─ HomeCategoryHeader
│  │  │  │  │  └─ HomeCategoryMain
│  │  │  │  ├─ HomeMain
│  │  │  │  │  ├─ HomeMainHeader
│  │  │  │  │  └─ HomeMainMain
│  │  │  │  ├─ TownSearching
│  │  │  │  │  ├─ TownSearchingFooter
│  │  │  │  │  ├─ TownSearchingHeader
│  │  │  │  │  └─ TownSearchingMain
│  │  │  │  └─ TownSetting
│  │  │  │     ├─ TownSettingFooter
│  │  │  │     ├─ TownSettingHeader
│  │  │  │     └─ TownSettingMain
│  │  │  ├─ Like
│  │  │  │  ├─ LikeHeader
│  │  │  │  └─ LikeMain
│  │  │  ├─ Loading
│  │  │  │  └─ Skeleton
│  │  │  │     ├─ SkeletonHeader
│  │  │  │     └─ SkeletonListItem
│  │  │  ├─ Login
│  │  │  │  ├─ LoginHeader
│  │  │  │  └─ LoginMain
│  │  │  ├─ Sale
│  │  │  │  ├─ SaleCategory
│  │  │  │  │  ├─ SaleCategoryHeader
│  │  │  │  │  └─ SaleCategoryMain
│  │  │  │  ├─ SaleHeader
│  │  │  │  └─ SaleMain
│  │  │  ├─ SalesHistory
│  │  │  │  ├─ SalesHistoryHeader
│  │  │  │  └─ SalesHistoryMain
│  │  │  ├─ atoms
│  │  │  │  ├─ Buttons
│  │  │  │  │  ├─ Button
│  │  │  │  │  └─ CircleButton
│  │  │  │  ├─ Chip
│  │  │  │  ├─ Icon
│  │  │  │  └─ Inputs
│  │  │  │     ├─ ImageInput
│  │  │  │     └─ TextInput
│  │  │  ├─ molecules
│  │  │  │  ├─ Carousel
│  │  │  │  ├─ Chips
│  │  │  │  ├─ Dialog
│  │  │  │  ├─ Dropdown
│  │  │  │  ├─ ImagePreviews
│  │  │  │  ├─ ListItem
│  │  │  │  ├─ Modal
│  │  │  │  ├─ Navbar
│  │  │  │  ├─ SegmentedControl
│  │  │  │  │  └─ SegmentedButton
│  │  │  │  ├─ StatusModal
│  │  │  │  └─ TabBars
│  │  │  │     ├─ ChatTabBar
│  │  │  │     ├─ DetailTabBar
│  │  │  │     ├─ MainTabBar
│  │  │  │     └─ SaleTabBar
│  │  │  └─ portals
│  │  ├─ constants
│  │  ├─ crawl
│  │  ├─ hooks
│  │  │  ├─ useCurrentLocation.ts
│  │  │  ├─ useCurrentRegion.ts
│  │  │  ├─ useIntersectionObserver.ts
│  │  │  └─ useOutsideClick.ts
│  │  ├─ index.tsx
│  │  ├─ pages
│  │  │  ├─ Auth
│  │  │  ├─ Detail
│  │  │  ├─ Home
│  │  │  │  ├─ HomeCategory
│  │  │  │  ├─ HomeMain
│  │  │  │  ├─ TownSearching
│  │  │  │  └─ TownSetting
│  │  │  ├─ Like
│  │  │  ├─ Loading
│  │  │  │  └─ Skeleton
│  │  │  ├─ Login
│  │  │  ├─ Ready
│  │  │  ├─ Sale
│  │  │  │  └─ SaleCategory
│  │  │  └─ SalesHistory
│  │  ├─ router
│  │  ├─ styles
│  │  ├─ type
│  │  └─ utils
│  │     ├─ convertPriceFormat.ts
│  │     ├─ getStatusWord
│  │     └─ getTimeAgo
│  ├─ tsconfig.json
│  └─ tsconfig.paths.json
└─ ios
```

©generated by [Project Tree Generator](https://woochanleee.github.io/project-tree-generator)

---

## 2. 주요 기술 스택

|   목적    |                        이름                         |   버전   |
| :-------: | :-------------------------------------------------: | :------: |
|   언어    |    [TypeScript](https://www.typescriptlang.org/)    |  ^4.9.5  |
|    UI     |             [React](https://react.dev/)             | ^18.2.0  |
|  스타일   | [styled-components](https://styled-components.com/) |  ^6.0.8  |
| 상태관리  | [Tanstack Query](https://tanstack.com/query/latest) | ^4.29.15 |
| 서버 통신 |          [Axios](https://axios-http.com/)           |  ^1.4.0  |
|  테스트   |       [Storybook](https://storybook.js.org/)        | ^7.0.20  |
| 환경 설정 |          [prettier](https://prettier.io/)           |  ^2.8.8  |
| 환경 설정 |            [eslint](https://eslint.org/)            | ^8.42.0  |

# 🔨 프로젝트 특이사항

현재 리팩토링 및 기능 추가 중으로 추후 작성 예정입니다.

> 팀 프로젝트 진행 중 작성한 README입니다.

# 💡 프로젝트 소개

코드스쿼드에서 진행한 그룹 프로젝트로, 동네를 기준으로 중고 물품을 올리고 거래할 수 있는 당근마켓 클론 프로젝트입니다.

# 🔨 프로젝트 주요 기능

- 카카오 로그인을 통해 로그인할 수 있습니다.
- 현재 동네를 기준으로 등록된 상품을 볼 확인할 수 있습니다.
- 지원하는 동네에 한해서 유저의 동네를 변경할 수 있습니다.
- 상품을 카테고리 별로 확인할 수 있습니다.
- 각 상품의 상세정보를 확인할 수 있으며 좋아요를 눌러 찜할 수 있습니다.
- 사진과 함께 판매를 원하는 물품을 등록할 수 있습니다.
- 현재 유저가 판매중인 상품을 확인할 수 있습니다.
- 유저가 좋아요를 누른 상품을 확인할 수 있습니다.
- 상품에 대한 판매자와의 채팅을 할 수 있습니다.(리팩토링 후 구현 예정)

# 👪 멤버 소개

| ![제이든](https://ca.slack-edge.com/T74H5245A-U04G7GJ0P2L-bacfbaf4a8b0-512) | ![훈딩](https://ca.slack-edge.com/T74H5245A-U04G7AA960G-8505f67ac0b2-512) | ![코어](https://ca.slack-edge.com/T74H5245A-U04FPGLJ1RT-8f62ed7aacda-512) | ![감자](https://ca.slack-edge.com/T74H5245A-U04FKNG54NN-2cc5a583b166-512) | ![에디](https://ca.slack-edge.com/T74H5245A-U04FJKH8R55-c7e7b5c2d3f9-512) | ![하림](https://ca.slack-edge.com/T74H5245A-U04FHTJNW90-b5bdb4a1a336-512) |
| :-------------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------: |
|             [**제이든(FE)**](https://github.com/JaydenLee1116)              |               [**훈딩(FE)**](https://github.com/hoongding)                |               [**코어(BE)**](https://github.com/meena2003)                |             [**감자(BE)**](https://github.com/leegyeongwhan)              |              [**에디(iOS)**](https://github.com/raindropiOS)              |               [**하림(iOS)**](https://github.com/harimrim)                |

# 🧾 기술 스택

## 공통

![Git](https://img.shields.io/badge/-Git-F05032?style=flat&logo=Git&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat&logo=GitHub&logoColor=white)

## Back-End

<img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white"/> <img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat&logo=SpringBoot&logoColor=white"/> <img src="https://img.shields.io/badge/AWS-FA7343?style=flat&logo=AmazonAWS&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white"/> ![IntelliJ IDEA](https://img.shields.io/badge/-IntelliJ%20IDEA-FF3850?style=flat&logo=IntelliJ%20IDEA&logoColor=white)

## Front-End

<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=flat&logo=react%20query&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/-Storybook-FF4785?style=flat&logo=Storybook&logoColor=white"/>

## iOS

![Xcode](https://img.shields.io/badge/-Xcode-1575F9?style=flat&logo=Xcode&logoColor=white)
![Swift](https://img.shields.io/badge/-Swift-FA7343?style=flat&logo=Swift&logoColor=white)
![UIKit](https://img.shields.io/badge/-UIKit-00599C?style=flat&logo=UIKit&logoColor=white)
![Combine](https://img.shields.io/badge/-Combine-FF7B17?style=flat&logo=Swift&logoColor=white)
