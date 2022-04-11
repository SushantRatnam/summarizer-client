import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';

export default function SummarizedText({ text, onTextChange }) {
  return (
    <>
      <TextareaAutosize
        aria-label="maximum height"
        placeholder="App will summarize the text along with listing out important keywords from the audio/video"
        minRows={20}
        value={text}
        style={{
          width: 1000,
          backgroundColor: '#0E0E0E',
          color: '#fff',
          fontFamily: 'Inter',
          fontSize: '16px',
          textAlign: 'justify',
          letterSpacing: '1.5px',
          padding: '10px',
          lineHeight: '26px'

        }}
      />
      <br />
      <Button
        style={{ backgroundColor: '#63FFDA', color: '#0A192D', fontWeight: 600, margin: '10px' }}
        onClick={() => onTextChange('')}
        variant="contained"
      >
        Clear
      </Button>
    </>
  );
}
