import React from "react";
import * as Styles from "./styles";
import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Styles.HeaderContainer>
      <img src={Logo} alt="Logo" />
      <Styles.StepsContainer>
        <Styles.Step active>
          <div>
            <span>1</span>
          </div>
          <span>Sales Pipeline Settings</span>
        </Styles.Step>
        <Styles.Step active={false}>
          <div>
            <span>2</span>
          </div>
          <span>Opportunity Details Settings</span>
        </Styles.Step>
      </Styles.StepsContainer>
      <Styles.HeaderButton>
        <span>Next</span>
      </Styles.HeaderButton>
    </Styles.HeaderContainer>
  );
};

export default Header;
