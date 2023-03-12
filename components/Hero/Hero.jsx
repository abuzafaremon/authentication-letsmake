import Image from "next/image";
import cat from "../../public/cat.jpg";

const Hero = ({ setIsOpenLogin }) => {
  function openLoginModal() {
    setIsOpenLogin(true);
  }
  return (
    <section className="px-2 sm:px-3 md:px-5 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="text-slate-800">
          <h2 className="text-5xl mb-3">Welcome to Lets Make</h2>
          <p className="text-lg mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea,
            possimus quos sed saepe, eaque exercitationem quibusdam eum rerum
            recusandae esse, eveniet eos architecto sit atque iure porro impedit
            non laudantium.
          </p>
          <button
            onClick={openLoginModal}
            className="bg-slate-200 px-4 py-2 rounded-lg font-bold"
          >
            Get Started
          </button>
        </div>
        <div className="relative w-full h-auto">
          <Image src={cat} alt="Picture of the author" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
