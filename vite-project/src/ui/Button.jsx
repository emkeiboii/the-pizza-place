import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const styles = {
    primary: base + ' px-4 py-3 md:ox-6 md:py-4',
    small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
    secondary:
      'inline-block text-sm px-4 py-2.5 rounded-full border-2 border-red-300  font-semibold uppercase tracking-wide text-red-400 transition-all duration-300 hover:bg-red-200 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed md:py-3.5 ',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button to={to} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
