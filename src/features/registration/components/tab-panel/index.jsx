import PasswordTabPanel from '@/features/registration/components/password-tab-panel';
import InformationTabPanel from '@/features/registration/components/information-tab-panel';
import AddressTabPanel from '@/features/registration/components/address-tab-panel';

const Components = {
  passwordTab: PasswordTabPanel,
  informationTab: InformationTabPanel,
  addressTab: AddressTabPanel,
};

function TabPanel({ tabId, onSubmit, ...props }) {
  const handleSubmit = (data) => {
    onSubmit({
      data,
      tab: tabId,
    });
  };
  const Component = Components[tabId];

  return <Component {...props} onSubmit={handleSubmit} />;
}

export default TabPanel;
