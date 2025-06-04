const Heading = ({ heading }) => {
    return (
      <div className="flex flex-col items-center my-6">
        <h1 className="font-moonwalkmiss text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide uppercase text-center">
          {heading}
        </h1>
      </div>
    );
  };
  
  export default Heading;