import Link from "next/link";
import { useSignOut, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.init.js";

const Header = ({ setIsOpenLogin, setIsOpenRegister }) => {
  const [signOut] = useSignOut(auth);
  const [user] = useAuthState(auth);
  function openLoginModal() {
    setIsOpenLogin(true);
  }
  function openRegisterModal() {
    setIsOpenRegister(true);
  }
  return (
    <header className="px-2 sm:px-3 md:px-5 py-3 bg-slate-100">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-700">Lets Make</h2>
        <ul className="flex items-center gap-4">
          <li>
            <Link
              href="/"
              className="cursor-pointer px-4 py-2 bg-slate-200 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            {user ? (
              <button
                type="button"
                onClick={() => signOut()}
                className="cursor-pointer px-4 py-2 bg-slate-200 rounded-md"
              >
                Sign Out
              </button>
            ) : (
              <button
                type="button"
                onClick={openLoginModal}
                className="cursor-pointer px-4 py-2 bg-slate-200 rounded-md"
              >
                Login
              </button>
            )}
          </li>
          <li>
            <button
              className="cursor-pointer px-4 py-2 bg-slate-200 rounded-md"
              onClick={openRegisterModal}
            >
              Register
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
