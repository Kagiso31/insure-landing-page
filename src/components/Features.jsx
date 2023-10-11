import FeatureCard from "../components/FeatureCard";
import { features } from "../constants";

const Features = () => {
  return (
    <section className="pt-36 pb-14 container mx-auto px-6 xl:px-0">
      <div className="py-12 relative before:content[''] before:absolute before:top-0 before:left-[50%] md:before:left-0 md:before:translate-x-0 before:-translate-x-1/2 before:block before:w-1/3 md:before:w-1/12 before:h-0.5 before:opacity-60 before:bg-neutral-grayish-violet-dark">
        <h2 className="font-serif text-5xl sm:text-6xl text-center md:text-left mb-20">
          We’re different
        </h2>
        <div className="flex flex-col flex-wrap md:flex-row sm:items-center gap-16 sm:gap-9 lg:gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
