# 나의 일주일 평점은? 


## 📌 프로젝트 소개

리액트를 사용하여 나의 일주일 평점을 확인할 수 있는 간단한 웹페이지입니다.

### 기술스택 소개
<p align="center">
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/js-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> 
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">
<img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=black">
<hr>

### 주요 기능 

1. 일주일의 평점을 랜덤한 정수(1~5)를 적용하여 평점 표시 
2. 일주일의 가장 상단은 오늘 요일기준으로 표시 
3. 버튼을 통한 페이지 이동 
4. 평점 남기기 페이지에서 클릭버튼을 통해서 평점을 등록
5. 키보드 입력을 통해 평점 입력 기능
<hr>

### 프로젝트 중 어려웠던 기능

<strong>input 입력창 없이 키보드 입력 이벤트 처리</strong><br>
<p>
문제<br>
상세페이지에서 div 태그에 keyup 이벤트를 붙였지만,
확인과정에서 keyup 이벤트가 반응하지 않았음. 

해결<br>
구글링하여 검색한 결과, div 태그는 포커스가 가지 않는 요소로 
키보드 이벤트를 발생시키기 위해서는 포커스를 부여해야 합니다. 
그래서 TabIndex 속성을 사용하여 div태그에 포커스를 부여하여 keyup 이벤트를 
발생하게하여 처리하였다. 
</p>



