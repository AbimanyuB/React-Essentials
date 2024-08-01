import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton/TabButton.jsx";

function App() {
  const [tabContent, setTabContent] = useState('');

  const onSelect = (selectedTab) => {
    setTabContent(EXAMPLES[selectedTab]);
  };

  const isTabActive = (selectedTab) => {
    return tabContent?.title?.toLowerCase() === selectedTab
  }

  const TabContent = () => {
    if (tabContent) {
      return (
        <div id="tab-content">
          <h3>{tabContent.title}</h3>
          <p>{tabContent.description}</p>
          <pre>
            <code>{tabContent.code}</code>
          </pre>
        </div>
      )
    } else {
      return <p>Please Select a Topic</p>
    }
  }

  return (
    <div>
      <Header />
      <main style={{ borderRadius: 90 }}>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => (
              <CoreConcept {...data} key={data.title} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={isTabActive("components")} onSelect={() => onSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={isTabActive("jsx")} onSelect={() => onSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={isTabActive("props")} onSelect={() => onSelect("props")}>Props</TabButton>
            <TabButton isSelected={isTabActive("state")} onSelect={() => onSelect("state")}>State</TabButton>
          </menu>
        </section>
        <TabContent />
      </main>
    </div>
  );
}

export default App;
