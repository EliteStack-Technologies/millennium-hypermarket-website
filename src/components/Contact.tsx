import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const addresses = [
    {
      country: "India",
      location: "Near Corporation Office, Palluruthy Veli, Palluruthy Kochi, India"
    },
    {
      country: "Oman",
      location: "Bousher, opp sultan Qaboos stadium, Muscat, Oman"
    },
    {
      country: "Oman",
      location: "Millennium Hypermarket LLC ميلينيوم هايبرماركت, Muscat, Oman مسقط"
    },
    {
      country: "UAE",
      location: "Muroor Road, Opp. Zayed University, Abu Dhabi, United Arab Emirates"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <Card className="p-8 border-border bg-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Phone</h3>
                <p className="text-muted-foreground">Mobile: 096057 88111</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-border bg-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Email</h3>
                <a 
                  href="mailto:info@millenniumhypermarket.com" 
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  info@millenniumhypermarket.com
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-border bg-card md:col-span-2 lg:col-span-1">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Visit Us</h3>
                <p className="text-muted-foreground">Multiple locations across India, Oman & UAE</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Address Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {addresses.map((address, index) => (
            <Card key={index} className="p-6 border-border bg-card hover:shadow-soft transition-shadow">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-accent">{address.country}</h4>
                  <p className="text-muted-foreground leading-relaxed">{address.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
