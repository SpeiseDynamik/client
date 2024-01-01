import { Alert, LoadingButton } from '@/components/base';
import { NavigateNext } from '@/components/icons';
import styles from './Layout.module.scss';

function Layout(props) {
  const { children, error, isPending, onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.alertWrap}>
        {error && (
          <Alert severity='error' variant='filled' className='Layout_alert'>
            {error.message}
          </Alert>
        )}
      </div>
      <div className={styles.header}>
        {"Let's get started to bring your business to new level"}
      </div>
      {children}
      <div className={styles.navButtons}>
        <LoadingButton
          loading={isPending}
          variant='contained'
          type='submit'
          size='large'
          endIcon={<NavigateNext />}
        >
          Next
        </LoadingButton>
      </div>
    </form>
  );
}

export default Layout;
