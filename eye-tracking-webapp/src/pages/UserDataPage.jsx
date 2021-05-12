import {Button, makeStyles, MenuItem, TextField} from '@material-ui/core'
import { Form, Formik } from 'formik'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '1rem'
  }
}))
const UserDataPage = () => {
  const classes = useStyles()
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

  const income = [
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
          email: '',
          age: 0,
          sex: 'M',
          occupation: ''
        }}
        onSubmit={async (values) => {
          const users = await axios.get('http://localhost:3001/users')
          console.log(users)
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className={classes.form}>
          <TextField
            id='firstName'
            name='firstName'
            label='First name'
            className={classes.input}
          />
          <TextField
            id='lastName'
            name='lastName'
            label='Last name'
            className={classes.input}
          />
          <TextField
            id='email'
            name='email'
            label='Email'
            type='email'
            className={classes.input}
          />
          <TextField
            id='age'
            name='age'
            label='Age'
            type='number'
            className={classes.input}
          />
          <TextField
            id='sex'
            select
            name='sex'
            label='Sex'
            className={classes.input}
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
          />
          <TextField
            id='income'
            select
            name='income'
            label='Income'
            className={classes.input}
          >
            {income.map(option => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button type='submit'>Submit</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserDataPage