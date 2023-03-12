import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignOut,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.init.js";

export default function RegisterModal({ isOpenRegister, setIsOpenRegister }) {
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);
  const [signOut] = useSignOut(auth);
  async function handleRegister(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    await createUserWithEmailAndPassword(email, pass);
    await signOut();
    setIsOpenRegister(false);
  }

  return (
    <>
      <Transition appear show={isOpenRegister} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleRegister}>
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Register
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleRegister} className="grid gap-3">
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
                          Register
                        </button>
                      )}
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
