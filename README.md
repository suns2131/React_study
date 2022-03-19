# React_study

## HTML 정리 
 ### 요소
 - HTML에서 시작과 종료태그로 나타내지는 모든 명령어<br>
   ex) div, p, h1,... 등<br> 

 ### 태그
 - 정의된 요소의 시작하고 끝을 내는 도구로 태그라고 지칭. <br>
   ex) <> , </>
 
 ### 속성 
 - 요소의 시작태그안에서 사용하는 구체화된 명령어 체계 <br>
   > \< p **align = "center">** \</p>
 ### DOM(Document Object Model)
 - 문서 객체 모델 <br>
    - 문서 객체모델이란?
    > HTML, XML 문서에 접근하기 위한 일종의 인터페이스<br> 
    > 문서내의 모든 요소를 객체로 정의하고 요소에 대한 접근 방법을 제공함.  
 - 구조 
    - 트리 구조로 구성되어 있습니다. 
    - 같은 계층에 존재할 경우 형제 관계, 계층이 다르면 부모 자식 관계형태를 가집니다.
<img src="http://www.tcpschool.com/lectures/img_js_htmldom.png"
width= "500" height = "300">
    - DOM 구조 확인법 
    ```js
    //현재 html 문서의 DOM 전체 구조 조회 
    document
    //DOM 구조 중 body의 내용 확인 (document와 자식관계)
    document.body
    //하위 요소에 접근하는 방법1(ChildNodes)
    //현재 요소의 자식 노드의 전체 Nodelist를 반환한다. 
    //요소노드 뿐만 아니라 비요소 노드도 포함한 전체를 가져온다.
    document.body.childNodes

    //하위 요소에 접근하는 방법2(Children)
    //현재 요소의 자식노드 중 요소 노드만 포함하여 반환한다.
    document.body.children
    ```
 ### 기타 
  - Document 관련 속성은 Document MDN 참고하면되는데, MDN에서 휴지통 아이콘을 가지고 있는 속성은 현재 사용되지 않는 속성이니 유의할 것. 

## CSS 정리 
 ### Selector(선택자)
  - 스타일을 적용할 대상을 선택하기 위해 선택자를 사용함.
  - 선택자의 종류 
    - 전체 : 스타일을 적용할 대상이 HTML 문서 전체로 설정
    ```js
    <style>
      * { background-color : blue}
    <style>
    ```
    - HTML 요소 
    
    - ID 
    - class
    - Group 
    - 요소의 특정 상태(수도 클래스)

 ### Gird 시스템 
 ### CSS 사칙연산 

## 자바스크립트 정리 

