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
      value: '',
      label: '<1500 RON'
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
            labelId="demo-simple-select-label"
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
            id='occupation'
            name='occupation'
            label='Occupation'
            multiline
            className={classes.input}
          />
          <Button type='submit'>Submit</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default UserDataPage