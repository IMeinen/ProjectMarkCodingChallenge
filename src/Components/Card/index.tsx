import React from "react";
import * as Styles from "./styles";

export interface CardProps {
  label: string;
  primaryColor: string;
  secondaryColor: string;
}

const Card: React.FC<CardProps> = ({
  label,
  primaryColor,
  secondaryColor,
}: CardProps) => {
  return (
    <Styles.CardContainer
      primaryColor={primaryColor}
    >
      <span>{label}</span>
      <Styles.ProgressContainer secondaryColor={secondaryColor}>
        <div/>
      </Styles.ProgressContainer>
      <Styles.InfoContainer primaryColor={secondaryColor}></Styles.InfoContainer>
    </Styles.CardContainer>
  );
};

export default Card;
