import styled from "styled-components";
import { hexToRgba } from "../../utils/hexToRGBA";

interface CardContainerStyleProps {
  primaryColor: string;
}

interface ProgressContainerStyleProps {
  secondaryColor: string;
}

interface InfoContainerStyleProps {
  primaryColor: string;
}

export const CardContainer = styled.div<CardContainerStyleProps>`
  display: flex;
  width: 222px;
  height: 458px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${(props) => props.primaryColor};
  background: ${(props) =>
    `linear-gradient(180deg, ${hexToRgba(
      props.primaryColor,
      1
    )} 0%,  ${hexToRgba(props.primaryColor, 0.2)} 100%)`};
  border-radius: 14px;
  margin: 0 7px;

  span {
    margin-top: 14px;
    margin-left: 14px;
    color: #46426d;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;

export const ProgressContainer = styled.div<ProgressContainerStyleProps>`
  width: 114px;
  height: 21.985px;
  border-radius: 10.5px;
  background-color: ${(props) => hexToRgba(props.secondaryColor,0.5)};
  margin-top: 17px;
  margin-left: 14px;

  div {
    width: 42px;
    height: 21.985px;
    border-radius: 10.5px;
    background-color: ${(props) => props.secondaryColor};
  }
`;

export const InfoContainer = styled.div<InfoContainerStyleProps>`
  width: 211.5px;
  height: 174.938px;
  border-radius: 10.5px;
  margin-left: 5.25px;
  margin-top: 9.42px;
  background: transparent;
  border: ${(props) => `1px solid ${props.primaryColor}`}; 
`;
