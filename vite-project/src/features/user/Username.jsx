import { useSelector } from 'react-redux';

function Username() {
  const userName = useSelector((state) => state.user.username);

  return (
    <div className="hidden text-sm font-semibold md:block">
      {userName !== '' ? userName : <p className=" drop-shadow-lg">👤</p>}
    </div>
  );
}

export default Username;
