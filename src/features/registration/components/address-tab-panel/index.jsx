import { useRegForm } from '@/features/registration/hooks';
import { FieldController } from '@/components/form';
import Layout from '@/features/registration/components/layout';
import getTextField from '@/features/registration/components/get-controller-text-field';

const CountryInput = getTextField({ label: 'Country' });
const FullNamelInput = getTextField({ label: 'Full Name' });
const PhoneInput = getTextField({ label: 'Phone' });
const AddressInput = getTextField({ label: 'Address' });
const ZipCodeInput = getTextField({ label: 'Zip Code' });
const CityInput = getTextField({ label: 'City' });

function AddressTabPanel(props) {
  const { initialState, onSubmit, ...layoutProps } = props;
  const { control, handleSubmit } = useRegForm(initialState, onSubmit);
  return (
    <Layout {...layoutProps} onSubmit={handleSubmit}>
      <FieldController
        name='country'
        control={control}
        render={CountryInput}
        rules={{ required: true }}
      />
      <FieldController
        name='fullName'
        control={control}
        render={FullNamelInput}
      />
      <FieldController name='phone' control={control} render={PhoneInput} />
      <FieldController name='address' control={control} render={AddressInput} />
      <FieldController name='zipCode' control={control} render={ZipCodeInput} />
      <FieldController name='city' control={control} render={CityInput} />
    </Layout>
  );
}

export default AddressTabPanel;
