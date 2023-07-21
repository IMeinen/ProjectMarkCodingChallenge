import styled from "styled-components";

interface SelectorContainerStylesProps {
  active: boolean;
  iconActive: any;
  iconInactive: any;
}

export const SelectorContainer = styled.div<SelectorContainerStylesProps>`
  display: flex;
  width: 210px;
  height: 55.36px;
  
  align-items: center;
  justify-content: flex-start;
  padding: 0 14px 4px 14px;
  background-image: url(${props => props.active ? props.iconActive : props.iconInactive});
  background-repeat: no-repeat;
  margin: 0 5px;

  cursor: pointer;
  
  span{
    font-size: 16px;
    color: #333;
    margin-left: 13.5px;
  }
`;

