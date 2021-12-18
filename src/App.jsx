import React from "react";
import RButton from "./RButton";
import styled from "styled-components";
import { Button } from "antd";

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
`;

// 얘는 안됨
const MyButton = styled(RButton)`
  width: 200px;
  height: 100px;
`;

const SRButton = styled.button`
  width: 200px;
  height: 25px;
  margin: 10px;

  outline: none;
  border: ${(props) => (props.isBorder ? "1px solid #999" : "none")};
  border-radius: 5px;

  transition: 0.5s;

  &:hover {
    background-color: skyblue;
    color: #fff;
    cursor: pointer;
  }
`;

//antd Button의 css 들어있음
const CustomButton = styled(Button)`
  box-shadow: 3px 3px 3px #999;
`;

const SR2 = styled(SRButton)`
  color: red;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <RButton />

        <SRButton>BUTTON</SRButton>
        <SRButton isBorder={true}>TRUE BUTTON</SRButton>
        <SRButton isBorder={false}>FALSE BUTTON</SRButton>

        <Button size="small" type="primary">
          antd Button
        </Button>

        <CustomButton size="small" type="primary">
          CustomButton
        </CustomButton>

        <SR2>so what TY zz</SR2>

        <Wrapper>
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
        </Wrapper>
        <hr />
        <hr />
        <Wrapper direction="row">
          <div>a</div>
          <div>b</div>
          <div>c</div>
          <div>d</div>
        </Wrapper>
      </div>
    );
  }
}

export default App;
