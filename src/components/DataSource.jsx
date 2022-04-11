import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import axios from 'axios';
import { withStyles, makeStyles, createStyles } from '@material-ui/core/styles';
import { UploadFile } from '@mui/icons-material';

const CssTextField = withStyles({
  root: {
    marginBottom: '10px',
    '& label.Mui-focused': {
      color: '#63FFDA',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#63FFDA',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#CCD7F5',
      },
      '&:hover fieldset': {
        borderColor: '#CCD7F5',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#63FFDA',
      },
    },
  },
})(TextField);

function DataSource({
  onTextChange,
  setSummarizedText,
  setFullText,
  loading,
  setLoading,
  setKeywords,
  handleSelectedChange,
}) {
  const [source, setSource] = useState('youtube');
  const [inputUrl, setInputUrl] = useState('');
  const [inputUrlError, setinputUrlError] = useState(false);
  const [fileUpload, setFileUpload] = useState();

  const Input = styled('input')({
    display: 'none',
  });

  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {},
      margin: {
        margin: theme.spacing(1),
      },
    })
  );
  const classes = useStyles();

  // const response = {
  //   data: {
  //     textObj: {
  //       fullText:
  //         "Not content with just launching under twelve hour twelve point one. Google has made the March pixel feature drop the first such release of twenty twenty two. So here are some of the top new features exclusive to Google Pixel. Thanks for watching five Google here on Youtube. Remember thumbs up. Hit subscribe and then tap the bell icon to be among the first watch our upcoming videos. Okay. So like Andrew twelve l or twelve point one as it seems to be known for non tablet and foldable devices. The Pixel six and six pro are gonna have to wait a couple of weeks for this ot to roll out, which of course, we know it's a bit annoying given quite a few of the features are exclusive to the flagship duo No matter though, we do have the low down and here's all of the top new features for the pixel three in newer, including one or two we think you'll love. The popular night site mode from the pixel camera is now breaking free from the Google Camera app. And it's actually gonna be available for the first time in a third party app. Snapchat is gonna be the first app to have direct access to the long exposure night mode and the larger fifteen megapixel sensor will add an extra dimension to low like photos not possible prior with the basic snapchat viewfinder. It isn't yet live as the much twenty twenty security patch. We'll roll out the pixel feature drop for the eligible Pixel six and six pro in the coming weeks When available, a new crescent moon icon will appear in the top right corner photo menu that will instantly show a live preview of just how night can help you out. Tapping the short button though once this is activated, we'll take the long exposure photo as it does on the Google camera app. For you to send on to your contacts. The impressive live caption feature is also expanding even further with new accessibility options available Thanks to the March Pixel feature drop. When you're in a phone call, enabling the live caption mode reveals a new keyboard button on Pixel six and six pro. With this keyboard active, you'll be able to type out responses that will be read aloud to the caller on the other end as an added feature that allows people to communicate in multiple ways, this is yet another the fantastic application of an already solid feature they you might not have even given a second thought too. It is useful for all kinds of people including those that are hard of hearing or with hearing related impairments but just simply those not able to talk or not wanting to talk at that moment in time. Although initially available on Galaxy s twenty two series devices, pixel smartphones are set to gain the ability to host Youtube watch parties or more simply the ability to watch along together with youtube videos when using Europe This feature just expands the screen sharing option that is already available and allows you to launch Youtube app and share video and audio over a dual call Anyone in the call can watch along in real time with the controls available to the host or the person screen sharing that said it isn't quite available or rolled out widely just yet. This is just an example of how it works on the s twenty two series. Just open the screen sharing option. You'll see Youtube and then you can initiate the screen sharing option from the little. Floating bubble. If you do use g as your default text entry option on your pixel, then there are new fully custom stickers that can effectively create when responding to contact. It's similar to the emoji kitchen feature in that it's context aware able to pick out text and create stickers based upon that text message in. For example, typing happy birthday and maybe the contact name may offer up a quick emoji to help so. There are potentially unlimited stickers that you can create and send to contact. Of course, that is all gonna be depending on your messages that you send. Sadly though, the custom G boss stickers are only actually available on the keyboard when using the Us English language option. We are hoping though that Google will expand the option to more regions very soon. That's this expansion beyond the... Awesome emoji kitchen feature is one that we can perceive being very very popular. If you catch your mind back, you might remember that really neat bluetooth battery level. Tracker widget that was showcased in the initial Android twelve developer announcement. Well, the good news is it's finally available with the March pixel feature drop to all devices. No word though on why it took until twenty twenty two to actually come to Fruition. You'll find this new widget living under the settings service widget panel and this neat, widget will track the battery level of any supported devices including actually your smartphone and the case which is charging these devices if available. The best thing though is that this widget will work with most bluetooth accessories that report battery to your system and that means game pads and headphones alongside all kinds of extras could eventually be tracked via this dynamic home screen widget. It is long overdue and I have to say in instead of all the features available. This is definitely my favorite. The next gen persistent At glance widget which is in the pixel launch has also now been expanded to include the ability to give heads up information of the battery levels of pet Bluetooth devices, earthquake alerts and even a safety check countdown from the personal safety app. There is also a new prompt for you to disable alarms if your calendar has a holiday or vacation denoted. When dialing a toll free business number, Google will now transcribe the phone tree as well as the automated prompts and this will do so in real time and it will display options as text buttons on your screen. This is powered by a du duplex technology which Google has used for a while and this automatically starts right after your call connects. The direct my call feature lets you tap instead of having to interact with a dial pad, though common actions like the Asterisk and pound key and zero to nine are displayed as a carousel at the bottom of the screen when you are connected. Wait times is another new feature. And this is slightly different and that it will denote the projected times, you'll need to wait to speak to someone when calling a toll free number in the Us. It is a similar feature to what has existed with physical wait times in Google Maps but quite a while now, but with a slight twist, as we mentioned frustrating that these are limited to the Us up present, but we you hope to see them come to more regions in the future. The popular in built Google Recorder app may have just gained a new look of paint with some extra material tweaks and a dedicated quick settings tile, but it's leveled up with a two new languages being supported. The older recorder is now capable of transcribing Italian Spanish, but only on the Pixel six and six pro so we'll have to wait a little bit longer to get those updates. On top of that, the language expansion continues with the ability to use the simple assistant quick phrases on Pixel six six pro in Spanish Italian and French. And basically, these are tasks with that will work without the usual knowledge keyword, which you'll see on screen now. These work with things such as alarms and timer, so you can just say stop rather than having to use that assistant key for first and then ask to stop directly. So this will help save a lot of time especially for those of you in those three new language. There's also some new additions to Pixel curated culture wallpaper people collection which celebrate the international women's day this year with three brand new wallpapers from Uk based Illustrator man back. Each new wallpaper revolves around female characters and fat, bold colors ex zoo from the latest selection which can be found as we mentioned in the curated culture section of the wallpapers app on all eligible pixel devices right Now including those without latest updates, you don't actually need to install it on your device to get these and dollar on your. As we said right the top of this video, the major frustration here is at the March pixel phi drop he's actually delayed for the flagship Pixel six and six pro. It could be mainly due to the differences between Qualcomm and the tend of chip, but actually, we simply don't know at this stage. There's still of course, plenty between this Ot and Android twelve point one or twelve l. So if you do wanna learn more than check out that video via the link down in the description below, But of top of that, we just wanna know what you have or of as your favorite new feature or what features you're looking forward to if you are a Pixel six owner that have arrived as part of this pixel feature. The first one of twenty twenty two. I'm hoping for another three more before the year is up. Be sure is know down in the comment sections below, and of course, you can find our special pixel feature drop more papers. Down there too. Until next time though, this is Damian with ninety five Google saying thanks for watching, and I will speak to you later.",
  //       summarizedText: {
  //         id: 'b67a7dce-5ab1-4c16-9397-345ed4962d43',
  //         output:
  //           "Google has made the March pixel feature drop the first such release of twenty twenty two.\nSo here are some of the top new features exclusive to Google Pixel.\nThe Pixel six and six pro are gonna have to wait a couple of weeks for this ot to roll out, which of course, we know it's a bit annoying given quite a few of the features are exclusive to the flagship duo No matter though, we do have the low down and here's all of the top new features for the pixel three in newer, including one or two we think you'll love.\nWe'll roll out the pixel feature drop for the eligible Pixel six and six pro in the coming weeks When available, a new crescent moon icon will appear in the top right corner photo menu that will instantly show a live preview of just how night can help you out.\nThe impressive live caption feature is also expanding even further with new accessibility options available Thanks to the March Pixel feature drop.\nAlthough initially available on Galaxy s twenty two series devices, pixel smartphones are set to gain the ability to host Youtube watch parties or more simply the ability to watch along together with youtube videos when using Europe This feature just expands the screen sharing option that is already available and allows you to launch Youtube app and share video and audio over a dual call Anyone in the call can watch along in real time with the controls available to the host or the person screen sharing that said it isn't quite available or rolled out widely just yet.\nIf you do use g as your default text entry option on your pixel, then there are new fully custom stickers that can effectively create when responding to contact.\nWell, the good news is it's finally available with the March pixel feature drop to all devices.\nYou'll find this new widget living under the settings service widget panel and this neat, widget will track the battery level of any supported devices including actually your smartphone and the case which is charging these devices if available.\nAnd this is slightly different and that it will denote the projected times, you'll need to wait to speak to someone when calling a toll free number in the Us. It is a similar feature to what has existed with physical wait times in Google Maps but quite a while now, but with a slight twist, as we mentioned frustrating that these are limited to the Us up present, but we you hope to see them come to more regions in the future.\nEach new wallpaper revolves around female characters and fat, bold colors ex zoo from the latest selection which can be found as we mentioned in the curated culture section of the wallpapers app on all eligible pixel devices right Now including those without latest updates, you don't actually need to install it on your device to get these and dollar on your.\nSo if you do wanna learn more than check out that video via the link down in the description below, But of top of that, we just wanna know what you have or of as your favorite new feature or what features you're looking forward to if you are a Pixel six owner that have arrived as part of this pixel feature.",
  //       },
  //       taggedText: {
  //         id: 'ceb2668a-8736-4a8f-be08-7ccd3f9c2c5b',
  //         output:
  //           'new features\npixel feature\ndevices\ndevice\nwidget\navailable\ngoogle\napp\nactually\nyoutube\nquick\noptions\noption\ntime\ntimes\nstickers\nlike\nwallpaper\nwallpapers\ntext\nphotos\nphoto\nright\nfree\nbluetooth battery\nwait\npeople\nlive\nliving\nvideos\nvideo\nbit\nnight\nincluding\ninclude\nlanguage\nlanguages\nmode\nscreen\nassistant\nrelated\nslightly\nslight\nlatest\nitalian\nfrustrating\nknowledge\nfrustration\nwanna\naware\nduplex\nbased\nsnapchat\nbutton\nbuttons\nset\nsettings\nemoji\ng\nexposure\nextra\nextras\npad\nhappy\ngame pads\nmaterial',
  //       },
  //     },
  //   },
  // };

  // const getData = () => {
  //   return Promise.resolve(response);
  // };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setinputUrlError(false);
    const isUrl = ['youtube', 'uri'].some((el) => el === source);
    if (isUrl) {
      const regexCheck = inputUrl.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gim
      );
      if (!regexCheck) {
        setinputUrlError(true);
        return;
      }
      axios
        .get(
          `https://sratnam-summarizer-server.herokuapp.com/uri/?youtubeUrl=${encodeURIComponent(
            inputUrl
          )}`
        )
        // getData()
        .then((res) => {
          onTextChange(res.data.textObj.fullText);
          setFullText(res.data.textObj.fullText);
          setSummarizedText(res.data.textObj.summarizedText.output);
          let keywords = res.data.textObj.taggedText.output;
          keywords = keywords
            .split('\n')
            .map((keyword) => keyword[0].toUpperCase() + keyword.slice(1))
            .join(', ');
          setKeywords(keywords);
          //set fullText as selected tab
          handleSelectedChange(null, 0);
        })
        .finally(() => setLoading(false));
    } else {
      let formData = new FormData();
      formData.append('file', fileUpload);
      // axios
      //   .post('http://localhost:4000/file', {
      //     body: formData,
      //   })
      fetch('https://sratnam-summarizer-server.herokuapp.com/file', {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          onTextChange(res.textObj.fullText);
          setFullText(res.textObj.fullText);
          setSummarizedText(res.textObj.summarizedText.output);
          let keywords = res.textObj.taggedText.output;
          keywords = keywords
            .split('\n')
            .map((keyword) => keyword[0].toUpperCase() + keyword.slice(1))
            .join(', ');
          setKeywords(keywords);
          //set fullText as selected tab
          handleSelectedChange(null, 0);
        })
        .finally(() => setLoading(false));
    }
  };

  const GreenRadio = withStyles({
    root: {
      color: '#63FFDA',
      '&$checked': {
        color: '#63FFDA',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <form onSubmit={handleSubmit}>
      <FormControl className={classes.root}>
        <h2 className="form-label" id="demo-row-radio-buttons-group-label">
          Choose source
        </h2>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
          }}
        >
          <FormControlLabel value="youtube" control={<GreenRadio />} label="YouTube" />
          <FormControlLabel
            value="upload"
            control={<GreenRadio />}
            label="Upload File (video/audio)"
          />
        </RadioGroup>
        {['youtube', 'uri'].some((el) => el === source) && (
          <CssTextField
            className={classes.margin}
            sx={{
              input: {
                color: '#CCD7F5',
                borderRadius: '10px',
              },
            }}
            InputLabelProps={{
              style: { color: '#CCD7F5' },
            }}
            required
            fullWidth
            id="outlined"
            label="Enter URL"
            variant="outlined"
            onChange={(e) => setInputUrl(e.target.value)}
            error={inputUrlError}
          />
        )}
        {source === 'upload' && (
          <label htmlFor="contained-button-file">
            <Input
              accept="audio/*, video/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file && file.size < Math.pow(10, 8)) setFileUpload(e.target.files[0]);
                else alert('File should be less than 100MB');
              }}
            />
            <Button
              style={{
                backgroundColor: '#63FFDA',
                color: '#0A192D',
                fontWeight: 600,
                marginTop: '10px',
              }}
              variant="contained"
              component="span"
            >
              Upload
            </Button>
            <IconButton aria-label="delete" onClick={() => setFileUpload(null)}>
              <DeleteIcon style={{ fill: '#63FFDA' }} />
            </IconButton>
            {fileUpload && <p>{fileUpload.name}</p>}
          </label>
        )}
        {loading && <p>Please wait...</p>}
        <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          style={{
            backgroundColor: '#63FFDA',
            color: '#0A192D',
            fontWeight: 600,
            marginTop: '10px',
          }}
        >
          Submit
        </LoadingButton>
      </FormControl>
    </form>
  );
}

export default DataSource;
