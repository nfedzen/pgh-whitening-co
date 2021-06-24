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
  firstContainer: {
    height: '120px'
  },
  firstCard: {
    height: '150px',
    maxWidth:'md'
  }
  
}))

export default useStyles;