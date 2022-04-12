import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

export default function SummarizedText({ textArea, setTextArea }) {
  return (
    <>
      <TextareaAutosize
        aria-label="maximum height"
        placeholder="App will summarize the text along with listing out important keywords from the audio/video"
        minRows={20}
        value={textArea}
        style={{
          width: 1000,
          backgroundColor: '#0E0E0E',
          color: '#a8b6da',
          fontFamily: 'Inter',
          fontSize: '16px',
          textAlign: 'justify',
          letterSpacing: '1.5px',
          padding: '10px',
          lineHeight: '28px',
          borderRadius: '10px'
        }}
      />
      <br />
      <Button
        style={{ backgroundColor: '#63FFDA', color: '#0A192D', fontWeight: 600, margin: '10px' }}
        onClick={() => setTextArea('')}
        variant="contained"
      >
        Clear
      </Button>
    </>
  );
}
