import {makeStyles} from '@material-ui/core/styles'
import Image from './img/logo192.png'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
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
    color: 'blue'
  },
  cardTitleTwo: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    
    color: 'yellow'
  }
  
}))

export default useStyles;