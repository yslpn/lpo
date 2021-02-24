import { MAIN_COLOR } from '../../../../../../lib/constants';

const styles = () => ({
  container: {
    width: "100%",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    padding: '0.5rem',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%'
  },
  title: {
    fontFamily: 'Museo Sans Cyrl',
    weight: 700,
    color: MAIN_COLOR
  },
  description: {
    color: 'white',
    fontSize: '0.875rem',
  }
});

export default styles;
