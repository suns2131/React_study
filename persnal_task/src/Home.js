import React, { useState } from "react";
import styled from "styled-components";
import Grade_list from "./GradeList";
const Home = () => {
    //today.getDay()를 이용하여 오늘 요일을 포함하여 그 이전인덱스를 가지고있는 요일은 다른 배열로 분리한다. 
    //분리한 다른 배열을 concat을 이용하여 뒤에 붙인다.
    let today = new Date();
    let dayAr = ['일','월','화','수','목','금','토']
    let temp = dayAr.filter((e,i) => i >= today.getDay())
    let temp2 = dayAr.filter((e,i) => i < today.getDay())
    dayAr = temp.concat(temp2);
    const [grd_list,setlist] = useState(dayAr);
    return (
        <HomeDesign>
            <div className="container">
                <h2>내 일주일 평점 남기기!</h2>
                <Grade_list list = {grd_list}/>
            </div>     
        </HomeDesign>
    );
};

const HomeDesign = styled.div`
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

  h2{
    text-align : center;
    color : #5858FA;
  }

  .grd_list{
    background-color : transparent;
    margin : 10px;
    height : 50px;
    display: flex;
    
    button{
      margin : auto;
      width : 0px;
      height : 0px;
      border-left : 30px solid #5858FA;
      border-right : 20px solid transparent;
      border-top : 20px solid transparent;
      border-bottom : 20px solid transparent;
      
    }
  }
  .circle_line{
    margin : auto;
    display : flex;
  }

  h3{
    margin : auto;
  }
}
`;

export default Home;