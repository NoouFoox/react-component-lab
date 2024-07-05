import styled from "styled-components";
import { Icon } from "@iconify-icon/react";

export default function Card() {
  return (
    <CardContainer>
      <Image src="https://cdn.pixabay.com/photo/2023/11/01/11/24/path-8357201_1280.jpg"></Image>
      <BottomContainer>
        <BottomHr />
        <BottomTitle>标题</BottomTitle>
        <ButtonContainer>内容</ButtonContainer>
      </BottomContainer>
      <LookNum>
        <Icon icon="mdi:eye" />
        <span style={{marginLeft:'5px'}}>101</span>
      </LookNum>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  width: 250px;
  position: relative;
  border: 3px solid #000000;
  border-radius: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const LookNum = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold; 
`;
const Image = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

const BottomContainer = styled.div`
  min-height: 10px;
  max-height: 250px;
  background-color: #222222;
  padding: 10px;
`;
const BottomHr = styled.hr`
  border-top: none;
  border-color: #303030;
`;
const BottomTitle = styled.div`
  color: #e0e0e0;
  font-size: 16px;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  color: #a6a6a4;
  font-size: 13px;
  font-weight: 500;
`;
