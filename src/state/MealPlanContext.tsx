import { createContext, useContext, useState } from 'react';
import type { PropsWithChildren } from 'react';

import { MOCK_MEAL_PLAN } from '../data/mockMealPlan';
import type { DayPlan } from '../data/types';

type MealPlanCtx = {
  plan: DayPlan[];
  source: 'ai' | 'mock';
  setPlan: (plan: DayPlan[], source: 'ai' | 'mock') => void;
};

const MealPlanContext = createContext<MealPlanCtx>({
  plan: MOCK_MEAL_PLAN,
  source: 'mock',
  setPlan: () => undefined,
});

export function MealPlanProvider({ children }: PropsWithChildren) {
  const [plan, setPlanState] = useState<DayPlan[]>(MOCK_MEAL_PLAN);
  const [source, setSource] = useState<'ai' | 'mock'>('mock');

  const setPlan = (p: DayPlan[], s: 'ai' | 'mock') => {
    setPlanState(p);
    setSource(s);
  };

  return (
    <MealPlanContext.Provider value={{ plan, source, setPlan }}>
      {children}
    </MealPlanContext.Provider>
  );
}

export function useMealPlan(): MealPlanCtx {
  return useContext(MealPlanContext);
}
