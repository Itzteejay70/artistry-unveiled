import heroPattern from "@/assets/poster.jpg";

const HeroSection = () => {
  return (
    <section
      className="h-screen w-full bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroPattern})` }}
    />
  );
};

export default HeroSection;