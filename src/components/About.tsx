import { Leaf, Award, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Fresh & Quality",
      description: "We source the freshest produce and quality products for our customers every single day"
    },
    {
      icon: Award,
      title: "Trusted Brand",
      description: "Serving communities across multiple countries with excellence and reliability"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority with exceptional service and competitive prices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Millennium Hypermarket</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of shopping at a hypermarket that truly cares about quality and service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-soft transition-shadow border-border bg-card">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
