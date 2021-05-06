import React from 'react'
import {Button} from '@material-ui/core'
import { useHistory } from 'react-router-dom'


const HomePage = () => {
  const history = useHistory()

  const goToForm = () => {
    history.push('/userData')
  }
  return (
    <div>
      <Button onClick={()=>goToForm()}>Proceed</Button>
    </div>
  )
}

export default HomePage