import React from "react";
import { useHistory } from "react-router-dom";
//Math.ceil(Math.random()*5)
const Grade_list = ({list}) => {
    const grade = list; //부모 컨테이너에서 리스트를 전달받음.
    const move = useHistory();
    return (
     <div>
         {grade.map((list,idx) => {
             const ran_nums = Math.ceil(Math.random()*5);
             console.log(list + '  ' + ran_nums)
             return (
                 <div className="grd_list" key={idx}>
                      <h3>{list}</h3>
                      <div className="circle_line">
                        {ran_nums > 0 ? <div style={{margin: "5px",width: "30px",background: "yellow",height: "30px", borderRadius:"250px"}} /> : 
                        <div style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />}
                        {ran_nums > 1 ? <div style={{margin: "5px",width: "30px",background: "yellow",height: "30px", borderRadius:"250px"}} /> : 
                        <div style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />}
                        {ran_nums > 2 ? <div style={{margin: "5px",width: "30px",background: "yellow",height: "30px", borderRadius:"250px"}} /> : 
                        <div style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />}
                        {ran_nums > 3 ? <div style={{margin: "5px",width: "30px",background: "yellow",height: "30px", borderRadius:"250px"}} /> : 
                        <div style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />}
                        {ran_nums > 4 ? <div style={{margin: "5px",width: "30px",background: "yellow",height: "30px", borderRadius:"250px"}} /> : 
                        <div style={{margin: "5px",width: "30px",background: "gray",height: "30px", borderRadius:"250px"}} />}
                      </div>
                      <button onClick={() =>{
                            move.push('/detail/' + list);
                        }}/>
                 </div>
                
             );
         })}
     </div>
    );

}
export default Grade_list;