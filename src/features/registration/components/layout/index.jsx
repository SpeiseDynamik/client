import { Alert, LoadingButton } from '@/components/base';

function Layout(props) {
  const { children, errorMessage, isLoading, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      {errorMessage && (
        <Alert severity='error' variant='filled' onClose={() => {}}>
          {errorMessage}
        </Alert>
      )}
      {children}
      <LoadingButton loading={isLoading} variant='contained' type='submit'>
        Next
      </LoadingButton>
    </form>
  );
}

export default Layout;
