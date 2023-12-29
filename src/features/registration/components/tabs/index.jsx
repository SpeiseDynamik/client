import { Tabs, Tab } from '@/components/base';

function RegTabs(props) {
  const { tabs, tabIdx, onTabChange } = props;
  return (
    <Tabs value={tabIdx} onChange={onTabChange}>
      {tabs.map((tab, idx) => {
        return <Tab key={idx} label={tab.title} disabled={idx > tabIdx} />;
      })}
    </Tabs>
  );
}

export default RegTabs;
