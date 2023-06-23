import "./App.css";
import { styled } from "styled-components";
import { useState } from "react";



function App() {

 

  const ButtonWrap = styled.div`
    margin: 0px;
  `

  const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;


  ${(props) => props.size === 'large' && `
    font-size: 20px;
    padding: 15px 30px;
  `}

  ${(props) => props.size === 'medium' && `
    font-size: 16px;
    padding: 10px 20px;
  `}

  ${(props) => props.size === 'small' && `
    font-size: 12px;
    padding: 8px 15px;
  `}
`;

  const Inputwrap = styled.div`
    display: flex;
    gap: 30px;
  `

  const SelectContainer = styled.div`
    position: relative; left: 0; top: 0;
    overflow: hidden;
    border: solid 1px #111;
    padding: 20px;
    background-color: #eee;
  `

  return (
    <>
      <div>
        <h1>Button</h1>
        <ButtonWrap>
          <Button size="large" onClick={()=>{
            alert("버튼을 만들어 보세요.")
          }}>Large Primary Button</Button>
          <Button size="medium">Medium</Button>
          <Button size="small">Small</Button>
        </ButtonWrap>
        <ButtonWrap>
        <Button size="large" onClick={()=>{
            let promptValue = prompt('어렵나요?')
            console.log(promptValue)
          }}>Large Primary Button</Button>
          <Button size="medium">Medium</Button>
          <Button size="small">Small</Button>
        </ButtonWrap>
      </div>
      <div>
        <h1>Input</h1>
        <Inputwrap>
          <label>이름</label>
          <input></input>
          <label>가격</label>
          <input></input>
          <button>저장</button>
        </Inputwrap>
      </div>
      <div>
        <h1>Modal</h1>
        <div>
          <button onClick={()=>{
            
          }}>open modal</button>
          <button>open modal</button>
        </div>
      </div>
      <SelectContainer>
        <h1>Select</h1>
        <div>
          <ul>
            <li value="리액트">리액트</li>
            <li value="자바">자바</li>
            <li value="스프링">스프링</li>
            <li value="리액트네이티브">리액트네이티브</li>
          </ul>
          <ul>
            <li value="리액트">리액트</li>
            <li value="자바">자바</li>
            <li value="스프링">스프링</li>
            <li value="리액트네이티브">리액트네이티브</li>
          </ul>
        </div>
      </SelectContainer>
    </>
  );
}

export default App;
