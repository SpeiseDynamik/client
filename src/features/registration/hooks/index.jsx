import { useReducer } from 'react';
import { useForm } from 'react-hook-form';

export function useRegForm(defaultValues, onSubmit) {
  const { control, handleSubmit } = useForm({
    defaultValues: { ...defaultValues },
  });

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
  };
}

const initTabsState = (tabs) => {
  return tabs.reduce((acc, tab) => {
    acc[tab.id] = tab.state;
    return acc;
  }, {});
};

const reducer = (state, { tab, data }) => {
  return {
    ...state,
    [tab]: {
      ...data,
    },
  };
};

export function useTabsState(tabs) {
  const [tabsState, dispatch] = useReducer(reducer, tabs, initTabsState);
  return {
    tabsState,
    setTabState: dispatch,
  };
}
