import React from "react";

const Text = (props) => {
const text = React.useRef(null);
const hoverEvent = () => {
    text.current.style.background = "blue";
};
//리액트 훅 라이프 사이클중 didMonut, update, Unmont 합쳐놓은거
//첫 렌더링시 무조건 실행 
//의존성 배열의 요소 변경시에만 동작함.
React.useEffect(() => {
    text.current.addEventListener("mouseover",hoverEvent);

    return () =>{
        text.current.removeEventListener("mouseover",hoverEvent);
    }
}, []);
return (
//컴포넌트 Unmont 동작 부분.
<h1 ref={text}>텍스트입니다!</h1>
)
}

export default Text;