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
    width: '30px',
    alignSelf: 'center'

  }
}))

const StartButtonPage = () => {
  const history = useHistory()

  const classes = useStyles()

  const start = async () => {
    // window.location = 'https://www.emag.ro/'+ '&output=embed'
    history.push('/framePage')

    const users = await axios.get('http://localhost:3001/users')
    console.log(users.data)
  }
  return (
    <div className={classes.wrapper}>
      <h4>If you click the button, the experiment will start
        <br />
        <br />
        Follow the dots that will appear on the window
        </h4>
      <Button className={classes.btn} onClick={() => start()} >Start</Button>
    </div>
  )
}

export default StartButtonPage