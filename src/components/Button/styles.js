import { SECONDARY_COLOR } from '../../lib/constants'

const styles = {
  button: {
    backgroundColor: 'white',
    width: '18rem',
    height: '2.75rem',
    textTransform: 'uppercase',
    border: '1px solid white',
    color: SECONDARY_COLOR,
    transitionDuration: '0.3s',
    boxShadow: `15px 15px 0 0 ${SECONDARY_COLOR}`,
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '18px',
    transiton: 'All 0.3s ease',
    '&:hover': {
      boxShadow: `0 0 0 0 ${SECONDARY_COLOR}`,
      transform: 'translate(0, 15px)'
    }
  }
};

export default styles;
