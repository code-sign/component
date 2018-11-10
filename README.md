# component
UI Component


UI Component 만들기

자주쓰는 UI Component 정의

프로젝트 성격에 따른 주요컬러, 서브컬러, 기본 폼 높이를 설정


---

## Link
[UI Component](https://code-sign.github.io/component/dist){:target="_blank"} 


## Guide

### npm 
```
npm i               // dev dependencies install
npm run dev         // dev run server
npm run build       // build with parcel bundler
```


### Project Ui Guide Settings / style.scss
```scss
/* project main color setting */
$mainColor  : Main color 
$lightColor : Sub color / light / Used for hover or active
$darkColor  : Sub color / dark / Used for hover or active
```


### Text & Form
```scss
$textColor  : Text default color
$formColor  : Form text default color
$formHeight : Form height (input, select, button ... )
```


### Radius & Speed
```scss
$radius : border-radius (input, button, select ...)
$speed  : motion transition speed
```


### Example Settings
```scss
/* project main color */
$mainColor  : lightsteelblue;
$lightColor : lighten($mainColor, 19%);
$darkColor  : darken($mainColor, 7%);

/* gray set */
$gray_2 : #222;
$gray_3 : #333;
$gray_4 : #444;
$gray_5 : #555;
$gray_6 : #666;
$gray_7 : #777;
$gray_a : #aaa;
$gray_b : #bbb;
$gray_c : #ccc;
$gray_d : #ddd;
$gray_e : #eee;
$gray_f : #f5f5f5;
$gray_custom : #f6f8fa;

/* Text & Form */
$textColor : $gray_2;
$formColor : $gray_7;
$formHeight : 50px;

/* Radius & Speed */
$radius : 4px;
$speed : .3s;
```


## UI Component
```
button
forms (Input, Radio, Checkbox, Selectbox)
layer
motion
tab
toggle
card
```



## History

### 10.24 start
parcel bundler script & dependencies setting

### 10.25 기본 UI 정의
heading, scss color, button(shape, size, color)


### 10.26 ui add - input
input form(radio, checkbox)

### 10.27 ui add - select, custom select
셀렉트 기본형 및 커스텀 타입 추가

### 10.28 ui add - layer 
normal, full, dialog, scroll 

### 10.29 ui add - motion 
Micro Interaction, focus, button click 

### 10.30 ui add - tab / tweenMax 부분 적용 
케이스 추가 및 모션타입 적용


### 10.31 $formHeight
폼 높이 일괄 변경 적용되도록 수정 (인풋, 버튼) vertical center 확인

### 11.01 ui add - hover, file
button hover, input file search

### 11.03 ui add - card & grid
grid col2 ~ col6, card type 추가

### 11.06 ui guide edit / add prism code hilighter 
guide 파일 수정, code view 추가, prism npm install

### 11.07 ui add - toggle / mobile js bug fixes 
code hilighter를 붙이면서 토글 UI 필요 - 토글 UI 추가

코드뷰가 너무 길어짐

모바일에서 js 멈춤 수정 위치 변경, 인풋, 라디오, 파일 위에 작성 (원인파악중)


### 11.08 add top navigation / select, toggle bug fixes / mixin add
탑 네비게이션 추가

toggle close 외부영역, 다른토글 클릭시 닫기 버그 수정

오픈토글 예외 케이스 추가 (코드뷰, 다른 토글클릭시 화면 이동때문)

반복코드 mixin 적용 include


### 11.09 mobile js bug fixes / css, js splitting / shadow add
모바일 외부영역 터치이벤트 추가

코드가 길어지면서 복잡해짐 > UI 단위로 scss, js코드 분할

js분할시 window.$ require

shadow 가이드 추가 및 정리

### tobe
slide

tab slide

list

icon button

table

calendar


### Bug list to fix
prism 주석 dev모드에선 정상 노출, build 후 안보임
