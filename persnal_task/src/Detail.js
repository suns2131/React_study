import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {useHistory} from "react-router-dom"

const Detail = (props) => {
    const [event_num, setEvnetnum] = useState(0)
    const parpam = useParams();
    const history = useHistory();
    const frist = React.useRef(null);
    const second = React.useRef(null);
    const thrid = React.useRef(null);
    const fourth = React.useRef(null);
    const fifth = React.useRef(null);

    
   //#region 클릭이벤트 함수목록
    const new_clickevent = (num) => {
        setEvnetnum(num);
        console.log('새로운 클릭이벤트 발생! : ' + num)
    }

    const change_circle = () => {
      switch(event_num)
      {
        case 1:
          frist.current.style.background = "yellow";
          second.current.style.background = "gray";
          thrid.current.style.background = "gray";
          fourth.current.style.background = "gray";
          fifth.current.style.background = "gray"; 
          break;
        case 2:
          frist.current.style.background = "yellow";
          second.current.style.background = "yellow";
          thrid.current.style.background = "gray";
          fourth.current.style.background = "gray";
          fifth.current.style.background = "gray";
          break;
        case 3:
          frist.current.style.background = "yellow";
          second.current.style.background = "yellow";
          thrid.current.style.background = "yellow";
          fourth.current.style.background = "gray";
          fifth.current.style.background = "gray";
          break;
        case 4:
          frist.current.style.background = "yellow";
          second.current.style.background = "yellow";
          thrid.current.style.background = "yellow";
          fourth.current.style.background = "yellow";
          fifth.current.style.background = "gray";
          break;
        case 5:
          frist.current.style.background = "yellow";
          second.current.style.background = "yellow";
          thrid.current.style.background = "yellow";
          fourth.current.style.background = "yellow";
          fifth.current.style.background = "yellow";
          break;
      }
    }
  //#endregion

  const keyupevent_fi = (e) => {
    console.log(e.key);
    setEvnetnum(e.key*1);
  }
    
  React.useEffect(() => {
      frist.current.addEventListener('click',() => {new_clickevent(1)});
      second.current.addEventListener('click',() => {new_clickevent(2)});
      thrid.current.addEventListener('click',() => {new_clickevent(3)});
      fourth.current.addEventListener('click',() => {new_clickevent(4)});
      fifth.current.addEventListener('click',() => {new_clickevent(5)});
      change_circle();
      return () =>{
        frist.current.removeEventListener('click',() => {new_clickevent(1)});
        second.current.removeEventListener('click',() => {new_clickevent(2)});
        thrid.current.removeEventListener('click',() => {new_clickevent(3)});
        fourth.current.removeEventListener('click',() => {new_clickevent(4)});
        fifth.current.removeEventListener('click',() => {new_clickevent(5)});
      }
  }, [event_num]);
    return (
        <DetailDesign>
        <div onKeyDown={keyupevent_fi} tabIndex="0" className="container">
            <h2>{parpam.days}요일 평점 남기기</h2>
            <div className="circle_line">
                <div ref={frist} style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
                <div ref={second} style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
                <div ref={thrid}  style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
                <div ref={fourth} style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
                <div ref={fifth}  style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
            </div>
            <div className="btn_line">
                <button onClick={() =>{history.push('/');}}>평점 남기기</button>
            </div>
            
        </div>
        </DetailDesign>
    );
};

const DetailDesign = styled.div`
  background-color: #E0F8EC;
  height: 100vh; /*vh : 화면기준*/
  width: 100vw;
  display: flex;

  .container {
    background-color: #fff;
    width: 50vw;
    max-width: 350px;
    height: 80vh;
    margin: auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 16px;
  }
  .circle_line{
    margin : auto;
    display : flex;
    flex-direction : row;
    align-content : center;    
    justify-content : center;
  }
 
  h2{
    text-align : center;
    color : #5858FA;
  }
  .btn_line{
    margin : 20px;
    display : flex;
    flex-direction : row;
    align-content : center;    
    justify-content : center;

    button{
        width : 25vw;
        height : 8vh;
        border-radius : 10px;
        background-color : #5858FA;
        border: 1px solid #ddd;
        color : white;
    }
  }
}
`;

export default Detail;