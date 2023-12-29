import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useTabsState } from '@/features/registration/hooks';
import { validateRegistration } from '@/api';
import TabPanel from '@/features/registration/components/tab-panel';
import Tabs from '@/features/registration/components/tabs';

const tabs = [
  {
    id: 'passwordTab',
    title: 'Password',
    state: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  },
  {
    id: 'informationTab',
    title: 'Information',
    state: {
      restaurantName: '',
      firstName: '',
      lastName: '',
      phone: '',
      businessEmail: '',
      description: '',
    },
  },
  {
    id: 'otherTab',
    title: 'Other',
    state: {},
  },
];

function RegistrationPage() {
  const [tabIdx, setTabIdx] = useState(0);
  const handleTabChange = (_, idx) => setTabIdx(idx);
  const { tabsState, setTabState } = useTabsState(tabs);
  const { mutate, isPending, error } = useMutation({
    mutationFn: validateRegistration,
    onSuccess: () => setTabIdx((idx) => idx + 1),
  });

  const handleNextClick = (data) => {
    mutate(data);
    setTabState(data);
  };

  return (
    <div>
      <h1>Registration</h1>
      <Tabs tabs={tabs} tabIdx={tabIdx} onTabChange={handleTabChange} />
      <TabPanel
        tab={tabs[tabIdx].id}
        initialValues={tabsState[tabs[tabIdx].id]}
        isLoading={isPending}
        errorMessage={error?.message}
        onNext={handleNextClick}
      />
    </div>
  );
}

export default RegistrationPage;
