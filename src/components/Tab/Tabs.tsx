import { useState } from "react";
import styled from "styled-components";
import { TabsEnums } from "./typeTabs";
const tabsEnums: TabsEnums = {
  HOME: {
    name: "首页",
    key: 1,
    url:''
  },
  TIMELINE: {
    name: "时间轴",
    key: 2,
    url:''
  },
  ABOUT: {
    name: "关于",
    key: 3,
    url:''
  },
};
export default function Tabs() {
  const [state, setState] = useState(tabsEnums.HOME.key);
  const handleSetState = (key: number) => {
    setState(key);
  }
  return (
    <ButtonContainer>
      {Object.values(tabsEnums).map((tab) => (
        <Button
          onClick={() => handleSetState(tab.key)}
          active={state === tab.key ? 1 : null}
          key={tab.key}
        >
          {tab.name}
        </Button>
      ))}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #424242;
  background-color: #000;
  border-radius: 1000px;
  /* Del width */
  width: 300px;
  user-select: none;
  overflow: hidden;
`;

const Button = styled.div<{ active: number | null }>`
  flex: 1;
  height: 30px;
  line-height: 30px;
  text-align: center;
  overflow: hidden;
  border-radius: 15px 6px 15px 6px;
  font-weight: 700;
  transition: all 0.3s linear;
  color: ${(props) => (props.active ? "#000000" : "#ffffff")};
  transform: skewX(-10deg)${(props) => (props.active ? "scale(1.04)" : "")};
  background: ${(props) => (props.active ? "#ffde3e" : "transparent")};
  cursor: pointer;
`;
