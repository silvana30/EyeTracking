import {Button, makeStyles} from '@material-ui/core'
import axios from 'axios'
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

const StartButtonPage = () => {
  const history = useHistory()

  const classes = useStyles()

  const start = async () => {
    // history.push('/userData')
    const users = await axios.get('http://localhost:3001/users')
    console.log(users.data)
  }
  return (
    <div className={classes.wrapper}>
      <h4>If you click the button, the experiment will start</h4>
      <Button onClick={() => start()} >Start</Button>
    </div>
  )
}

export default StartButtonPage