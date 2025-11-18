import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-supermarket.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Fresh Quality, Every Day
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Your trusted destination for premium groceries and everyday essentials across India, Oman, and UAE
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore Products
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
              Find a Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
