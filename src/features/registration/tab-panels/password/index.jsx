import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Stack } from '@/components/base';

function checkPassword(password) {
  // Check if the password has at least 8 characters
  if (password.length < 8) {
    return 'Password must have at least 8 characters';
  }

  // Check if the password contains at least one number
  if (!/\d/.test(password)) {
    return 'Password must contain at least one number';
  }

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return 'Password contains at least one lowercase letter';
  }

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
    return 'Password must contain at least one special character';
  }

  // If all conditions are met, the password is valid
  return true;
}

function PasswordTabPanel(props) {
  const { initialValues, onNext } = props;
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: initialValues.email,
      password: initialValues.password,
      reapetPassword: initialValues.password,
    },
  });
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <Controller
          name='email'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              size='small'
              label='E-Mail'
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              size='small'
              label='Password'
              fullWidth
              error={!!error}
              helperText={error ? error.message : null}
              {...field}
            />
          )}
          rules={{
            validate: (password) => {
              return checkPassword(password);
            },
          }}
        />
        <Controller
          name='reapetPassword'
          render={({ field, fieldState: { error } }) => {
            return (
              <TextField
                size='small'
                label='Repeat password'
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
                {...field}
              />
            );
          }}
          control={control}
          rules={{
            validate: (reapetPassword, { password }) => {
              return reapetPassword === password
                ? true
                : 'Passwords must match';
            },
          }}
        />
      </Stack>
      <Button type='submit'>Submit</Button>
    </form>
  );
}

export default PasswordTabPanel;
