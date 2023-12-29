import { useRegForm } from '@/features/registration/hooks';
import { checkPassword } from '@/utils/validators';
import { FieldController } from '@/components/form';
import Layout from '@/features/registration/components/layout';
import getTextField from '@/features/registration/components/getControllerTextField';

const EmailInput = getTextField({ label: 'Email' });
const PasswordInput = getTextField({ label: 'Password' });
const ReapetPasswordInput = getTextField({ label: 'Repeat password' });

function PasswordTabPanel(props) {
  const { initialValues, onNext, ...layoutProps } = props;
  const { control, handleSubmit } = useRegForm(initialValues, onNext);

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
