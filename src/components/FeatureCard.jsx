const FeatureCard = ({ title, body, icon }) => {
  return (
    <div className="flex-1 flex flex-col items-center md:items-start">
      <div className="text-center mb-10">{icon}</div>
      <h3 className="font-serif text-2xl text-center md:text-left mb-8">
        {title}
      </h3>
      <p className="text-center md:text-left text-neutral-grayish-violet-dark md:w-[36ch]">
        {body}
      </p>
    </div>
  );
};

export default FeatureCard;
