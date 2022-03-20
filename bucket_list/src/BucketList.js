// 리액트 패키지를 불러옵니다.
import React from 'react'; 

const BucketList = ({list}) => {
const [counts,setCount] = React.useState(0);
const my_wrap = React.useRef(null); //REF선언 맨처음에 가지고있을 값선언 
let my_list = list;
// window.setTimeout(() => {
//     console.log(my_wrap);
// },1000); 
// //두번째 인자만큼의 시간이 흐른 후에 첫번째 인자로 넘겨준 함수를 실행하라는 윈도우 내장함수 .. 밀리세컨드 기준

const add_memo = () => {

  my_list.push(my_wrap.current.value)
  setCount(counts+1);
   console.log("myref : " + my_wrap.current.value);
   console.log("my_list : " + my_list);
}

return (
<div>
  {my_list.map((list_a, index) => {
  return (
  <div  className='wish_list' key={index}>
      {list_a}
  </div>);
  })}       
  <div className="input_text">
    <input type="text" ref={my_wrap}/>
    <button onClick={add_memo}>추가하기</button>
  </div>
</div>
);
}
export default BucketList;