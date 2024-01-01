import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useTabsState } from '@/features/registration/hooks';
import { validateRegistration } from '@/api';
import TabPanel from '@/features/registration/components/tab-panel';
import Tabs from '@/features/registration/components/tabs';
import styles from '@/styles/Registration.module.scss';

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
  const tabId = tabs[tabIdx].id;
  const { tabsState, setTabState } = useTabsState(tabs);
  const { mutate, isPending, error } = useMutation({
    mutationFn: validateRegistration,
    onSuccess: () => setTabIdx((idx) => idx + 1),
  });

  const handleTabChange = (_, idx) => setTabIdx(idx);
  const handleSubmit = (data) => {
    mutate(data);
    setTabState(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftPart}>
        <Tabs tabs={tabs} tabIdx={tabIdx} onTabChange={handleTabChange} />
        <TabPanel
          tabId={tabId}
          initialState={tabsState[tabId]}
          isPending={isPending}
          error={error}
          onSubmit={handleSubmit}
        />
      </div>
      <div className={styles.rightPart}>V</div>
    </div>
  );
}

export default RegistrationPage;
