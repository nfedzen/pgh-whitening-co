import {makeStyles} from '@material-ui/core/styles'
import Image from './img/logo192.png'

const palette = {
  pinkLav: "#CDB4DB",
  pinkOrch: "#FFC8DD",
  pinkNade: "FFAFCC",
  blueUran: "BDE0FE",
  blueEyes: "A2D2FF"
}
 const pinkNade = "FFAFCC"

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#FFC8DD"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: '#A2D2FF'
  },
  buttons: {
    padding: '20px'
  },
  cardMedia: {
    height: '100%',
    width: '100%',
    // paddingTop: '40vh',
    alignItems: 'center',
    maxWidth: 'lg',

  },
  firstCard: {
    backgroundColor: 'primary',
    height: '50vh',
    marginTop: '50px'
  },
  cardTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: '25vh',
    color: '#A2D2FF',
    position: 'absolute'
  },
  cardTitleTwo: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    
    color: 'yellow'
  },
  fill: {
    paddingTop: '40px',
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  topImage: {
    flexShrink: '0',
    minWidth: '50%',
    minHeight: '50%',
    position: 'relative'
  }
  
}))

export default useStyles;