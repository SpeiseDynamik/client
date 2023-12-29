import { useRegForm } from '@/features/registration/hooks';
import { FieldController } from '@/components/form';
import Layout from '@/features/registration/components/layout';
import getTextField from '@/features/registration/components/getControllerTextField';

const RestaurantNameInput = getTextField({ label: 'Restaurant Name' });
const FirstNameInput = getTextField({ label: 'Your Name' });
const LastNameInput = getTextField({ label: 'Your Surname' });
const PhoneInput = getTextField({ label: 'Personal Phone' });
const BusinessEmailInput = getTextField({ label: 'Business E-Mail' });
const DescriptionInput = getTextField({ label: 'Restaurant Description' });

function InformationTabPanel(props) {
  const { initialState, onSubmit, ...layoutProps } = props;
  const { control, handleSubmit } = useRegForm(initialState, onSubmit);
  return (
    <Layout {...layoutProps} onSubmit={handleSubmit}>
      <FieldController
        name='restaurantName'
        control={control}
        render={RestaurantNameInput}
      />
      <FieldController
        name='firstName'
        control={control}
        render={FirstNameInput}
      />
      <FieldController
        name='lastName'
        control={control}
        render={LastNameInput}
      />
      <FieldController name='phone' control={control} render={PhoneInput} />
      <FieldController
        name='businessEmail'
        control={control}
        render={BusinessEmailInput}
      />
      <FieldController
        name='description'
        control={control}
        render={DescriptionInput}
      />
    </Layout>
  );
}

export default InformationTabPanel;
