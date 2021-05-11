import {Button, makeStyles, TextField} from '@material-ui/core'
import {Form, Formik} from 'formik'

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
          await new Promise((r) => setTimeout(r, 500));
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
            name='sex'
            label='Sex'
            className={classes.input}
          />
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