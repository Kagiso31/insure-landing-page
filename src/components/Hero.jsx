import Button from "../components/Button";
import heroImgDesktop from "../assets/images/image-intro-desktop.jpg";
import heroImgMobile from "../assets/images/image-intro-mobile.jpg";
import { patterns } from "../constants/assets";

const Hero = () => {
  return (
    <section className="relative bg-primary-violet-dark sm:pb-20">
      <div className="flex flex-col-reverse items-center sm:items-start md:px-4 lg:px-8 xl:px-0 sm:grid sm:grid-cols-2 xl:container mx-auto">
        <div className="sm:block flex flex-col items-center sm:translate-y-[18%] lg:translate-y-[155px] relative sm:pt-[72px] sm:pr-8 px-6 sm:px-0 py-20 sm:py-0 sm:before:content[''] sm:before:block sm:before:w-1/4 before:h-0.5 before:bg-neutral-gray-very-light before:absolute before:top-0 before:left-0">
          <h1 className="font-serif text-center sm:text-left text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-gray-very-light">
            Humanizing <br className="hidden xl:block" /> your insurance.
          </h1>
          <p className="text-center sm:text-left lg:text-lg text-neutral-gray-very-light my-9">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <Button text="View Plans" theme="dark" />

          <div className="sm:hidden absolute bottom-0 right-0 translate-y-1/2">
            {patterns.introRight.mobile}
          </div>
          <div className="sm:hidden absolute top-0 left-0">
            {patterns.introLeft.mobile}
          </div>
        </div>

        <div className="h-full">
          <img className="sm:hidden" src={heroImgMobile} />
          <img
            className="hidden sm:block translate-y-[24%] lg:translate-y-[155px] h-full"
            src={heroImgDesktop}
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 hidden sm:block">
        {patterns.introRight.desktop}
      </div>
      <div className="absolute bottom-0 left-0 sm:translate-y-[90%] md:translate-y-[80%] xl:translate-y-2/3 hidden sm:block">
        {patterns.introLeft.desktop}
      </div>
    </section>
  );
};

export default Hero;
