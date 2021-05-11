import {Button, makeStyles} from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  btn: {

  }
}))

const HomePage = () => {
  const history = useHistory()

  const classes = useStyles()

  const goToForm = () => {
    history.push('/userData')
  }
  return (
    <div className={classes.wrapper}>
      <h1>Welcome!</h1>
      <Button onClick={() => goToForm()} >Proceed</Button>
    </div>
  )
}

export default HomePage