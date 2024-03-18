import css from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  return (
    <div className={css.errorMessageBox}>
      <b>Oops, something went wrong...</b>
    </div>
  );
};
