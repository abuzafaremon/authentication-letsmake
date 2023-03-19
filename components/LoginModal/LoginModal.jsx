import { auth } from "@/firebase/firebase.init";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function LoginModal({ isOpenLogin, setIsOpenLogin }) {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();
  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    signInWithEmailAndPassword(email, pass);
  }

  if (user) {
    setIsOpenLogin(false);
    router.push("/welcome");
  }
  const closeModal = () => {
    setIsOpenLogin(false);
  };

  return (
    <>
      <Transition appear show={isOpenLogin} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleLogin}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 border rounded-full w-7 h-7 bg-slate-800 text-white"
                  >
                    X
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Login
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleLogin} className="grid gap-3">
                      <div className="grid gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder="Enter Your Email"
                          className="border py-1 px-2 outline-none rounded-md"
                        />
                      </div>
                      <div className="grid gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          required
                          placeholder="Enter Your Password"
                          className="border py-1 px-2 outline-none rounded-md"
                        />
                      </div>
                      {loading ? (
                        <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                          Loading...
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Login
                        </button>
                      )}
                      <span>{error?.message}</span>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
