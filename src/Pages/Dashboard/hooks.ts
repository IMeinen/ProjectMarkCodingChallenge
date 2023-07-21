import { useState } from "react"

const PLANS = [
  {
    id: 0,
    label: 'Basic',
    itemsList: [0,1,2,3,4,5]
  },
  {
    id: 1,
    label: 'Advanced',
    itemsList: [0,1,2,3,4]
  },
  {
    id: 2,
    label: 'Expert',
    itemsList: [0,1,2,3]
  },
  {
    id: 3,
    label: 'Custom',
    itemsList: [0,1,2]
  },
]

const ITEMS = [
  {
    id: 0,
    label: 'LEAD',
    primaryColor: '#F7F1FF',
    secondaryColor: '#DABFFF',
  },
  {
    id: 1,
    label: 'RFP In Progress ',
    primaryColor: '#FEF6EF',
    secondaryColor: '#FFD6B3',
  },
  {
    id: 2,
    label: 'Submitted',
    primaryColor: '#E6F4FF',
    secondaryColor: '#99D1FF',
  },
  {
    id: 3,
    label: 'won',
    primaryColor: '#DEF5F7',
    secondaryColor: '#81DDE5',
  },
  {
    id: 4,
    label: 'lost',
    primaryColor: '#FFF2F6',
    secondaryColor: '#FFBFD2',
  },
  {
    id: 4,
    label: 'CLOSED',
    primaryColor: '#CBD5E0',
    secondaryColor: '#F2F7FA',
  }
]

export const useDashboard = () => {

  const [currentPlan,setCurrentPlan] = useState(PLANS[0]);

  const handleChange = (id:number) => {
    const newPlan = PLANS.find(plan => plan.id === id)
    setCurrentPlan(newPlan || PLANS[0]);
  }

  return {
    currentPlan,
    handleChange,
    PLANS,
    ITEMS
  }
}