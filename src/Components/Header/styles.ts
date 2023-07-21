import styled from "styled-components";

interface StepStyleProps {
  active: boolean;
}

export const HeaderContainer = styled.div`
  display: flex;
  flex: 1;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding: 0px 16px;
`;

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Step = styled.div<StepStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 21px;

  div {
    width: 50px;
    height: 50px;
    border-radius: 17.5px;
    background: ${(props) => (props.active ? "#2d3748" : "#fff")};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3px;

    span {
      color: ${(props) => (props.active ? "#fff" : "#2d3748")};
      font-family: "Archivo";
      font-size: 17px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.35px;
    }
  }

  span {
    color: #2d3748;
    text-align: center;
    font-family: "Archivo Narrow", sans-serif;
    font-size: 10.5px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const HeaderButton = styled.div`
  display: inline-flex;
  padding: 13px 21px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 34px;
  background: #2462d1;

  span {
    color: #fff;
    font-family: "Archivo";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
