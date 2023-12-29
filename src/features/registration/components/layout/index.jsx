import { Alert, LoadingButton } from '@/components/base';

function Layout(props) {
  const { children, error, isPending, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      {error && (
        <Alert severity='error' variant='filled' onClose={() => {}}>
          {error.message}
        </Alert>
      )}
      {children}
      <LoadingButton loading={isPending} variant='contained' type='submit'>
        Next
      </LoadingButton>
    </form>
  );
}

export default Layout;
