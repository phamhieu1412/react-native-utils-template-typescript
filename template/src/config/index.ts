const BASE_URL = 'http:127.0.0.1:8012';
const APP_NAME = 'My Theme';
const URL_IMAGE = 'http:127.0.0.1:8012/assets';

export type COLOR = {
  PRIMARY: string;
  SECONDARY: string;
  BUTTON: string;
  BUTTON_TEXT_COLOR: string;
  TEXT_COLOR: string;
  BACKGROUND_COLOR: string;
  HEADER_BG: string;
};

const COLORS: COLOR = {
  PRIMARY: '#FF3030',
  SECONDARY: '#F4A460',
  BUTTON: 'black',
  BUTTON_TEXT_COLOR: 'gray',
  TEXT_COLOR: 'black',
  BACKGROUND_COLOR: '#E8E8E8',
  HEADER_BG: 'black',
};

export { APP_NAME, BASE_URL, URL_IMAGE, COLORS };
