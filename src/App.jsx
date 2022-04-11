import { useState } from 'react';
import './App.css';
import DataSource from './components/DataSource';
import SummarizedText from './components/SummarizedText';
import TextTypeTabs from './components/TextTypeTabs';

function App() {
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [fullText, setFullText] = useState();
  const [summarizedText, setSummarizedText] = useState();
  const [keywords, setKeywords] = useState();

  const handleSelectedChange = (event, newValue) => {
    setSelectedTab(newValue);
    if (newValue === 0) {
      setText(fullText);
    } else if (newValue === 1) setText(summarizedText);
    else setText(keywords);
  };

  return (
    <div className="App">
      <h1 className="header">SUMMARIZER</h1>
      <DataSource
        onTextChange={(text) => setText(text)}
        setFullText={setFullText}
        setSummarizedText={setSummarizedText}
        setKeywords={setKeywords}
        loading={loading}
        setLoading={setLoading}
        handleSelectedChange={handleSelectedChange}
      />
      <TextTypeTabs handleSelectedChange={handleSelectedChange} selectedTab={selectedTab} />
      <SummarizedText text={text} onTextChange={(text) => setText(text)} />
    </div>
  );
}

export default App;
