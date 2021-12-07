import {Button, makeStyles, MenuItem, TextField} from '@material-ui/core'
import { Formik } from 'formik'
import axios from 'axios'
import { useHistory } from 'react-router'

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start'
  },
  input: {
    marginBottom: '1rem'
  },
  btn: {
    width: '35px',
    alignSelf: 'center'

  }
}))
const UserDataPage = () => {
  const classes = useStyles()

  const history = useHistory()

  const genders = [
    {
      value: 'male',
      label: 'Male'
    },
    {
      value: 'female',
      label: 'Female'
    },
    {
      value: 'other',
      label: 'Other',
    },
    {
      value: 'none',
      label: 'Prefer not to say'
    }
  ]

  const incomeList = [
    {
      value: 'interval1',
      label: '< 1500 RON'
    },
    {
      value: 'interval2',
      label: '1501-2500 RON'
    },
    {
      value: 'interval3',
      label: '2501-3500 RON'
    },
    {
      value: 'interval4',
      label: '> 3500 RON'
    }
  ]

  return (
    <div>
      <h3>We'd like to meet you</h3>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          age: 0,
          sex: 'male',
          education: '',
          income: 'interval1'
        }}
        onSubmit={async (values) => {
          const users = await axios.post('http://localhost:3001/users',values)
          console.log(users)
          history.push('/startPage')
        }}
      >
        {props =>
        (
          <form className={classes.form} onSubmit={props.handleSubmit}>
            <TextField
              id='firstName'
              name='firstName'
              label='First name'
              className={classes.input}
              onChange={props.handleChange}
            />
            <TextField
              id='lastName'
              name='lastName'
              label='Last name'
              className={classes.input}
              onChange={props.handleChange}
            />
            <TextField
              id='age'
              name='age'
              label='Age'
              type='number'
              className={classes.input}
              onChange={props.handleChange}
            />
            <TextField
              id='sex'
              select
              name='sex'
              label='Sex'
              defaultValue='male'
              className={classes.input}
              onChange={props.handleChange}
            >
              {genders.map(gender => (
                <MenuItem value={gender.value} key={gender.value}>
                  {gender.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id='education'
              name='education'
              label='Education'
              multiline
              className={classes.input}
              onChange={props.handleChange}
            />
            <TextField
              id='income'
              select
              name='income'
              label='Income'
              defaultValue='interval1'
              className={classes.input}
              onChange={props.handleChange}
            >
              {incomeList.map(option => (
                <MenuItem value={option.value} key={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button className={classes.btn} type='submit'>Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default UserDataPage