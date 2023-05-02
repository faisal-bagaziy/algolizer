import Theme from '../models/Theme';

const light: Theme = {
  name: 'light',
  navbar: {
    background: '#0D1924',
    foreground: 'white',
  },
  sidebar: {
    background: '#FF',
    foreground: '#33332D',
  },
  canvas: {
    background: '#E1E1E1',
    foreground: '',
  },
  nodeActive: {
    background: '#02E095',
    foreground: 'white',
  },
  nodeInactive: {
    background: '#33332D',
    foreground: 'white',
  },
  edge: {
    background: '#33332D',
  },
  slider: {
    background: '#02E095',
    foreground: '#0D1929',
  },
};

export default light;
