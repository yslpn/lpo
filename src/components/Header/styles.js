import { MAIN_COLOR } from '../../lib/constants';

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: "100%",
    height: "8.5rem",
    borderBottom: '1px solid black',
  },
  logoBlock: {
    display: 'flex',
    marginLeft: '3rem',
  },
  logoText: {
    fontSize: '1.375rem',
    textTransform: 'uppercase',
    width: '1rem',
  },
  marked: {
    color: MAIN_COLOR,
  },
  nav: {
    height: '100%',
    width: '100%',
  },
  navList: {
    display: 'flex',
    alignItems: 'center',
  },
  navItem: {
    margin: '0 1rem',
  }
});

export default styles;
