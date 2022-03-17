import React, {useEffect, useRef, useState} from 'react'
import {Button, makeStyles} from '@material-ui/core'
import {ArrowForward} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  aoi: {
    width: '100px',
    height: '100px',
    position: 'absolute',
    top: '70px',
    left: '150px',
    border: 'solid',
    zIndex: -1
  },
  div: {
    overflow: 'hidden'
  },
  btn: {
    position: 'absolute',
    bottom: '10px',
    right: '10px'
  },
  img: {
    // width: '100%',
    height: '98vh'
    // objectFit: 'cover'
  }
}))

const PicturePage = () => {
  const classes = useStyles()
  const aoiRef = useRef(null)
  const wrapperRef = useRef(null)
  const imagesPathList = [
    {
      id: 0, url: '/emag.png', roi: {}
    },
    {id: 1, url: '/bootstrap.png'},
    {id: 2, url: '/ted.png'},
    {id: 3, url: '/utcn.png'}
  ]
  const [nextBtn, setNextBtn] = useState(null)
  const [currentImage, setCurrentImage] = useState(imagesPathList[0])
  const [endOfRecord, setEndOfRecord] = useState(false)

  const handleNext = () => {
    const index = imagesPathList.findIndex((item) => item.id === currentImage.id)
    if (index < imagesPathList.length - 1) {
      setCurrentImage(imagesPathList[index + 1])
      //TODO start new record post (currentImage, user)
      setNextBtn(null)
    } else {
      setEndOfRecord(true)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNextBtn((
        <Button
          variant="contained"
          color="primary"
          className={classes.btn}
          endIcon={<ArrowForward/>}
          onClick={handleNext}
        >
          Next
        </Button>))
      //TODO stop rec (currentImage, user)
    }, 8000);
    return () => clearTimeout(timer);
    //eslint-disable-next-line
  }, [nextBtn]);

  const rectangleElem = aoiRef.current?.getBoundingClientRect()
  const wrapperElem = wrapperRef.current?.getBoundingClientRect()
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight
  const screen = window.screen
  console.log('reclangle', rectangleElem)
  console.log('wrapper', wrapperElem)
  console.log('window W H', screenWidth, screenHeight)
  console.log('screen', screen)

  return (
    endOfRecord ?
      <div className={classes.div}>
        <h3>DONE</h3>
        <h6>Thank you for your time</h6>
      </div> :
      <div className={classes.div} ref={wrapperRef}>
        <div
          id="aoi"
          className={classes.aoi}
          ref={aoiRef}
          // style={{display: 'none'}}
        />
        <img src={currentImage?.url} alt="missing" className={classes.img}/>
        {nextBtn}
      </div>
  )
}
export default PicturePage