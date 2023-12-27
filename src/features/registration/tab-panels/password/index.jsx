import { useForm, Controller } from 'react-hook-form';
import { checkPassword } from '@/utils/validators';
import { TextField, Button, Stack } from '@/components/base';

function getInput(label) {
  return function Input({ field, fieldState: { error } }) {
    return (
      <TextField
        size='small'
        label={label}
        fullWidth
        error={!!error}
        helperText={error ? error.message : null}
        {...field}
      />
    );
  };
}

const EmailInput = getInput('E-Mail');
const PasswordInput = getInput('Password');
const ReapetPasswordInput = getInput('Repeat password');

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
        <Controller name='email' control={control} render={EmailInput} />
        <Controller
          name='password'
          control={control}
          render={PasswordInput}
          rules={{
            validate: (password) => {
              return checkPassword(password);
            },
          }}
        />
        <Controller
          name='reapetPassword'
          control={control}
          render={ReapetPasswordInput}
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
