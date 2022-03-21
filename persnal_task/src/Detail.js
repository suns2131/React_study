import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import {useHistory} from "react-router-dom"

const Detail = (props) => {
    const parpam = useParams();
    const history = useHistory();
    const frist = React.useRef(1);
    const second = React.useRef(2);
    const thrid = React.useRef(3);
    const fourth = React.useRef(4);
    const fifth = React.useRef(5);

    const keyupevent_fi = (e) => {
      console.log(e.key);
      console.log('첫번째 동그라미 ');
   }
   //#region 클릭이벤트 함수목록
    const clickevent_fi = () => {
       frist.current.style.background = "yellow";
       second.current.style.background = "gray";
       thrid.current.style.background = "gray";
       fourth.current.style.background = "gray";
       fifth.current.style.background = "gray";
    }
   
    const clickevent_se = () => {
       frist.current.style.background = "yellow";
       second.current.style.background = "yellow";
       thrid.current.style.background = "gray";
       fourth.current.style.background = "gray";
       fifth.current.style.background = "gray";
    }
    const clickevent_th = () => {
      frist.current.style.background = "yellow";
       second.current.style.background = "yellow";
       thrid.current.style.background = "yellow";
       fourth.current.style.background = "gray";
       fifth.current.style.background = "gray";
    }
    const clickevent_fo = () => {
      frist.current.style.background = "yellow";
       second.current.style.background = "yellow";
       thrid.current.style.background = "yellow";
       fourth.current.style.background = "yellow";
       fifth.current.style.background = "gray";
    }
    const clickevent_fif = () => {
      frist.current.style.background = "yellow";
       second.current.style.background = "yellow";
       thrid.current.style.background = "yellow";
       fourth.current.style.background = "yellow";
       fifth.current.style.background = "yellow";
    }
  //#endregion
    
  
  React.useEffect(() => {
      frist.current.addEventListener("click",clickevent_fi);
      second.current.addEventListener("click",clickevent_se);
      thrid.current.addEventListener("click",clickevent_th);
      fourth.current.addEventListener("click",clickevent_fo);
      fifth.current.addEventListener("click",clickevent_fif);
  
      return () =>{
        frist.current.removeEventListener("click",clickevent_fi);
        second.current.removeEventListener("click",clickevent_se);
        thrid.current.removeEventListener("click",clickevent_th);
        fourth.current.removeEventListener("click",clickevent_fo);
        fifth.current.removeEventListener("click",clickevent_fif);
      }
  }, []);
    return (
        <DetailDesign>
        <div onKeyDown={keyupevent_fi} className="container">
            <h2>{parpam.days}요일 평점 남기기</h2>
            <div className="circle_line">
                <div ref={frist} style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
                <div ref={second} style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
                <div ref={thrid}  style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
                <div ref={fourth} style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
                <div ref={fifth} style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />
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