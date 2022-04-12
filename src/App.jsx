import { useState, useEffect } from 'react';
import './App.css';
import DataSource from './components/DataSource';
import SummarizedText from './components/SummarizedText';
import TextTypeTabs from './components/TextTypeTabs';

function App() {
  const [textArea, setTextArea] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);
  const [fullText, setFullText] = useState();
  const [summarizedText, setSummarizedText] = useState();
  const [keywords, setKeywords] = useState();

  const handleSelectedChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  useEffect(() => {
    if (selectedTab === 0) setTextArea(fullText);
    else if (selectedTab === 1) setTextArea(summarizedText);
    else setTextArea(keywords);
  }, [selectedTab]);

  useEffect(() => {
    setTextArea(fullText);
  }, [fullText]);

  return (
    <div className="App">
      <h1 className="header">SUMMARIZER</h1>
      <DataSource
        setTextArea={setTextArea}
        fullText={fullText}
        setFullText={setFullText}
        setSummarizedText={setSummarizedText}
        setKeywords={setKeywords}
        loading={loading}
        setLoading={setLoading}
        handleSelectedChange={handleSelectedChange}
      />
      <TextTypeTabs handleSelectedChange={handleSelectedChange} selectedTab={selectedTab} />
      <SummarizedText textArea={textArea} setTextArea={setTextArea} />
    </div>
  );
}

export default App;
