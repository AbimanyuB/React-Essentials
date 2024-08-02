import { useState } from "react";

import TabContent from "../TabContent/TabContent";
import TabButton from "../TabButton/TabButton";
import Tabs from "../Tabs/Tabs";
import Section from "../Section/Section";

import { EXAMPLES } from "../../data";

export default function Examples() {
  const [tabContent, setTabContent] = useState("");

  const onSelect = (selectedTab) => {
    setTabContent(EXAMPLES[selectedTab]);
  };

  const isTabActive = (selectedTab) => {
    return tabContent?.title?.toLowerCase() === selectedTab;
  };

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={isTabActive("components")}
              onClick={() => onSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={isTabActive("jsx")}
              onClick={() => onSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={isTabActive("props")}
              onClick={() => onSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={isTabActive("state")}
              onClick={() => onSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        <TabContent content={tabContent} />
      </Tabs>
      <menu></menu>
    </Section>
  );
}
