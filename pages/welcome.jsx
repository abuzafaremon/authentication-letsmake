import Link from "next/link";

const welcome = () => {
  return (
    <section className="flex justify-center items-center p-10">
      <div className="max-w-fit text-xl text-center">
        <p>Welcome to Lest Make</p>
        <p>This is a very secret page.</p>
        <p>If you are not logged in You can not see this page.</p>
        <Link href="/" className="border p-1 font-bold">
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default welcome;
