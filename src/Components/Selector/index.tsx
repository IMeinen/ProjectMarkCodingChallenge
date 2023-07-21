import React from "react";
import * as Styles from "./styles";
import CheckBoxActive from "../../assets/checkbox-active.svg";
import CheckBoxInactive from "../../assets/checkbox-inactive.svg";
import SelectorSVGActive from "../../assets/selector-box-active.svg";
import SelectorSVGInactive from "../../assets/selector-box-inactive.svg";

interface SelectorProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Selector: React.FC<SelectorProps> = ({
  label,
  active,
  onClick,
}: SelectorProps) => {
  return (
    <Styles.SelectorContainer
      onClick={onClick}
      active={active}
      iconActive={SelectorSVGActive}
      iconInactive={SelectorSVGInactive}
    >
      <img src={active ? CheckBoxActive : CheckBoxInactive} alt="checkbox" />
      <span>{label}</span>
    </Styles.SelectorContainer>
  );
};

export default Selector;
