import React, {useEffect, useState} from 'react'
import {Button, makeStyles} from '@material-ui/core'
import {ArrowForward} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  btn: {
    position: 'absolute',
    bottom: '10px',
    right: '10px'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}))

const PicturePage = () => {
  const classes = useStyles()
  const [nextBtn, setNextBtn] = useState(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextBtn((<Button
        variant='contained'
        color='primary'
        className={classes.btn}
        endIcon={<ArrowForward/>}
      >
        Next
      </Button>))
      //stop rec
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <img src='/emag.png' alt='missing image' className={classes.img}/>
      {nextBtn}
    </div>
  )
}
export default PicturePage