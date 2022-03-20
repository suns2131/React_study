import React from "react";

const Nemo = (props) => {
    const [count, setConut] = React.useState(3);
    //첫번째인자는 수정하는 값, 두번쨰인자  setcount =  useState(3) 스테이트 초기값 설정 
    console.log(count);
    const nemo_cnt = Array.from({length : count}, (v, i)=> i);

    const addNemo = () => {
        setConut(count+1);
    }
    const removeNemo = () => {
        if(count > 0)
          setConut(count-1);
        else 
          window.alert("네모가 없어요!")
    }

    return (
        <div>
            {nemo_cnt.map(() => {
            return (
              <div 
              style={{
                width : "200px",
                height : "200px",
                backgroundColor : "#ddddff",
                margin : "10px"
                }}>
                nemo
              </div>
            );
          })}
  
          <div>
            <button onClick={addNemo}>하나 추가</button>
            <button onClick={removeNemo}>하나 빼기 </button>
          </div>
        </div>
    );
}

export default Nemo;