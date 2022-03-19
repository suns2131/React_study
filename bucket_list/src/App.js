import logo from './logo.svg';
// import './style.css';
import React from 'react';
import styled from "styled-components";
import BucketLIst from './BucketList';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        list : ["영화관 가기", "매일 책 읽기", "맛집 가기"],
      }
      this.text = React.createRef();
  }
componentDidMount(){
  
}
  render(){
    console.log(this.text)
    console.log(this.text.current)
    console.log(this.state.list)
    return (
      <div className='App'>
        <MyStyled>
          <div className='container'>
            <h1>내 버킷 리스트</h1>
            <hr className='line'/>
            <BucketLIst list_a = {this.state.list}/>
          </div>  
        </MyStyled>
        <div>
          <input type="text" ref={this.text} onChange={() => {
            // console.log(this.text.current.value)
          }}/>
        </div>   
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <BucketLIst/>
//     </div>
//   );
// }

const MyStyled = styled.div`
  background-color: #eee;
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
  h1 {
    color:darkblue;
    text-align: center;
  }
  hr{
    margin: 16px 0px; /*두개로 줄떄는 좌우, 상하 순임. */
  }
  .wish_list {
    padding: 16px;
    margin: 8px;
    background-color: #eadd;
    &:hover{
      background-color : red;
    };
  }
}
`;
/* 스타일 컴포넌트에서 나 자신 지칭 & , 자식요소 스타일에는 안에서 태그명 선언해서 하면됨. */ 

export default App;