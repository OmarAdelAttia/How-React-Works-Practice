import { useState } from 'react';
// styles
import './Tabbed.scss';
// types
import type { ContentItemProps } from '../../models/ContentItemProps';
// components
import DifferentContent from '../DifferentContent/DifferentContent';
import TabContent from '../TabContent/TabContent';
import Tab from '../Tab/Tab';

export default function Tabbed({ content }: { content: ContentItemProps[] }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? <TabContent item={content.at(activeTab)} /> : <DifferentContent />}
    </div>
  );
}
