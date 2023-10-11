import Button from "../components/Button";
import { patterns } from "../constants/assets";

const CTA = () => {
  return (
    <section className="container mx-auto px-6 xl:px-0 flex justify-center items-center pt-24 pb-36">
      <div className="relative bg-primary-violet-dark w-full py-[70px] px-11">
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between gap-11 items-center">
          <h2 className="font-serif text-[2.4rem] lg:text-6xl text-center md:text-left text-neutral-gray-very-light">
            Find out more <br className="hidden md:block" /> about how we work
          </h2>
          <Button text="How we work" theme="dark" />
        </div>
        <div className="md:hidden absolute top-0 right-0">
          {patterns.howWeWork.mobile}
        </div>
        <div className="absolute top-0 right-0 hidden md:block">
          {patterns.howWeWork.desktop}
        </div>
      </div>
    </section>
  );
};

export default CTA;
