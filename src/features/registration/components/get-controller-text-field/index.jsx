import { useState } from 'react';
import { TextField } from '@/components/base';
import styles from './styles.module.scss';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

export default function getControllerTextField(props) {
  const { label, required = false, multiline = false, type = 'text' } = props;

  return function Input({ field, fieldState: { error } }) {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const inputOptions =
      type === 'password'
        ? {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }
        : {};

    return (
      <div className={styles.fieldWrap}>
        <TextField
          label={label}
          required={required}
          multiline={multiline}
          minRows={2}
          maxRows={4}
          fullWidth={true}
          error={!!error}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          helperText={error ? error.message : null}
          InputProps={inputOptions}
          {...field}
        />
      </div>
    );
  };
}
