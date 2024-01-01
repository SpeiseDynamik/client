import { useRegForm } from '@/features/registration/hooks';
import { checkPassword } from '@/utils/validators';
import { FieldController } from '@/components/form';
import Layout from '@/features/registration/components/layout';
import getTextField from '@/features/registration/components/get-controller-text-field';

const EmailInput = getTextField({ label: 'Email' });
const PasswordInput = getTextField({ label: 'Password', type: 'password' });
const ReapetPasswordInput = getTextField({
  label: 'Repeat password',
  type: 'password',
});

function PasswordTabPanel(props) {
  const { initialState, onSubmit, ...layoutProps } = props;
  const { control, handleSubmit } = useRegForm(initialState, onSubmit);

  return (
    <Layout {...layoutProps} onSubmit={handleSubmit}>
      <FieldController name='email' control={control} render={EmailInput} />
      <FieldController
        name='password'
        control={control}
        render={PasswordInput}
        rules={{
          validate: (password) => {
            return checkPassword(password);
          },
        }}
      />
      <FieldController
        name='repeatPassword'
        control={control}
        render={ReapetPasswordInput}
        rules={{
          validate: (repeatPassword, { password }) => {
            return repeatPassword === password ? true : 'Passwords must match';
          },
        }}
      />
    </Layout>
  );
}

export default PasswordTabPanel;
