import React from "react";
import * as Styles from "./styles";
import Header from "../../Components/Header";
import Selector from "../../Components/Selector";
import Card from "../../Components/Card";
import { useDashboard } from "./hooks";

const Dashboard: React.FC = () => {
  const { currentPlan, handleChange, PLANS, ITEMS } = useDashboard();
  
  return (
    <>
      <Header />
      <Styles.MainContainer>
        <Styles.Title>
          Please select the type of sales pipeline that best fits to your
          company
        </Styles.Title>
        <Styles.SelectorContainer>
          {PLANS.map((plan) => (
            <Selector
              key={`selector-${plan.id}`}
              active={plan.id === currentPlan.id}
              label={plan.label}
              onClick={() => handleChange(plan.id)}
            />
          ))}
        </Styles.SelectorContainer>
        <Styles.CardsContainer>
          {currentPlan.itemsList.map((item) => {
            return (
              <Card
                label={ITEMS[item].label}
                primaryColor={ITEMS[item].primaryColor}
                secondaryColor={ITEMS[item].secondaryColor}
              />
            );
          })}
        </Styles.CardsContainer>
      </Styles.MainContainer>
    </>
  );
};

export default Dashboard;
