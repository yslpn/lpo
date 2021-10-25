import breakpoints from '../../../../lib/breakpoints';

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: "100%",
    height: "100%",
    minHeight: '37rem',
    padding: '7rem 6rem',
    [breakpoints.down('800')]: {
      padding: '4rem 3rem',
    },
  },
  wrapper: {
    zIndex: 1,
  },
  bannerName: {
    fontWeight: 700,
    fontSize: '2.25rem',
    textAlign: 'right',
    textTransform: 'uppercase',
    lineHeight: '45px',
    marginBottom: '4.25rem',
    [breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      lineHeight: '1.5rem',
      textAlign: 'left',
    }
  },
  trusteeList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'end',
    [breakpoints.down('sm')]: {
      justifyContent: 'center',
    }
  },
  linesTop: {
    position: 'absolute',
    display: 'none',
    top: '-112px',
    left: 0,
    [breakpoints.down('lg')]: {
      display: 'block',
    },
    [breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  linesBottom: {
    position: 'absolute',
    display: 'block',
    bottom: '-25px',
    left: 0,
    [breakpoints.down('1600')]: {
      bottom: '-50px',
    },
    [breakpoints.down('1000')]: {
      display: 'none',
    },
  }
};

export default styles;
