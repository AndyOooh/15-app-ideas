import { useState } from 'react';

import classes from './AddUser.module.css';
import Card from '../../UI/Card';

const AddUser = props => {
  console.log('AddUser');
  const [enteredName, setenteredName] = useState('');
  const [enteredAge, setenteredAge] = useState('');
  console.log('enteredName', enteredName);
  console.log('enteredAge', enteredAge);

  const nameIsValid = enteredName.trim().length > 2;
  const ageIsValid = enteredAge >= 18;
  const formIsValid = nameIsValid && ageIsValid;

  // let nameIstouched = false;
  // let ageIstouched = false;
  const [nameIstouched, setNameIstouched] = useState(false);
  const [ageIstouched, setAgeIstouched] = useState(false);

  const nameHasError = nameIstouched && !nameIsValid;
  const ageHasError = ageIstouched && !ageIsValid;

  console.log('nameIsValid', nameIsValid);
  console.log('ageIsValid', ageIsValid);
  console.log('formIsValid', formIsValid);

  console.log('nameIstouched', nameIstouched);
  console.log('ageIstouched', ageIstouched);
  console.log('nameHasError', nameHasError);
  console.log('ageHasError', ageHasError);

  const nameChangeHandler = e => {
    setenteredName(e.target.value);
  };

  const ageChangeHandler = e => {
    setenteredAge(e.target.value);
  };

  const onBlurHandler = event => {
    console.log('onBlur');
    if (event.target.name === 'name') {
      setNameIstouched(true);
    } else if (event.target.name === 'age') {
      setAgeIstouched(true);
    }
    console.log('nameIstouched', nameIstouched);
    console.log('ageIstouched', ageIstouched);
    return;
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log('subHandler');
    props.onAddUser(enteredName, enteredAge);
  };

  const nameInputClasses = nameHasError ?  'invalid' : '';
  const ageInputClasses = ageHasError ? 'invalid' : '';

  return (
    <Card extraClasses={[classes.card]}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='name'>Name</label>
        <div className={classes[nameInputClasses]}>
          <input
            id='name'
            name='name'
            placeholder='Your Name'
            onBlur={onBlurHandler}
            onChange={nameChangeHandler}
          ></input>
          {nameHasError && <p>Name must be minimum 3 characters long</p>}
        </div>
        <label htmlFor='age'>Age (Years)</label>
        <div className={classes[ageInputClasses]}>
          <input
            id='age'
            name='age'
            placeholder='Your Age'
            onChange={ageChangeHandler}
            onBlur={onBlurHandler}
          ></input>
          {ageHasError && <p>You must be minimum 18 years old</p>}
        </div>
        <button type='submit' disabled={!formIsValid}>
          Add User
        </button>
      </form>
    </Card>
  );
};
export default AddUser;
