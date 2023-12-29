import PasswordTabPanel from '@/features/registration/components/password-tab-panel';
import InformationTabPanel from '@/features/registration/components/information-tab-panel';

const Components = {
  passwordTab: PasswordTabPanel,
  informationTab: InformationTabPanel,
};

function TabPanel({ tab, onNext, ...props }) {
  const handleNext = (data) => {
    onNext({
      data,
      tab,
    });
  };
  const Component = Components[tab];

  return <Component {...props} onNext={handleNext} />;
}

export default TabPanel;
