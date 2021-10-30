import { SECONDARY_COLOR } from '../../lib/constants'

const styles = {
  button: {
    color: SECONDARY_COLOR,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '18px',
    textTransform: 'uppercase',
    cursor: 'pointer',
    width: '18rem',
    height: '2.75rem',
    outline: "0",
    background: "#fff",
    border: "none",
    transition: "all .3s ease-out",
    transform: 'translate(-15px, 0)',
    boxShadow: `1px 1px 0 0 ${SECONDARY_COLOR},\n    2px 2px 0 0 ${SECONDARY_COLOR},\n    3px 3px 0 0 ${SECONDARY_COLOR},\n    4px 4px 0 0 ${SECONDARY_COLOR},\n    5px 5px 0 0 ${SECONDARY_COLOR},\n    6px 6px 0 0 ${SECONDARY_COLOR},\n    7px 7px 0 0 ${SECONDARY_COLOR},\n    8px 8px 0 0 ${SECONDARY_COLOR},\n    9px 9px 0 0 ${SECONDARY_COLOR},\n    10px 10px 0 0 ${SECONDARY_COLOR},\n    11px 11px 0 0 ${SECONDARY_COLOR},\n    12px 12px 0 0 ${SECONDARY_COLOR}`,
    '&:hover': {
      color: "#444",
      boxShadow: `1px 1px 0 0 ${SECONDARY_COLOR},\n    2px 2px 0 0 ${SECONDARY_COLOR},\n    3px 3px 0 0 ${SECONDARY_COLOR},\n    4px 4px 0 0 ${SECONDARY_COLOR},\n    5px 5px 0 0 ${SECONDARY_COLOR}`,
      transform: 'translate(0, 15px)'
    }
  }
};

export default styles;
