import { TextField } from '@/components/base';

export default function getControllerTextField(props) {
  const { label } = props;
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
