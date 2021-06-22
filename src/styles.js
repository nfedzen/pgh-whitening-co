import {makeStyles} from '@material-ui/core/styles'
import { findByLabelText } from '@testing-library/dom';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  buttons: {
    color: "#fff"
  }
  
}))

export default useStyles;