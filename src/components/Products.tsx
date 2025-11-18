import { Card } from "@/components/ui/card";

import foodEssentials from "@/assets/categories/food-essentials.jpg";
import homeCare from "@/assets/categories/home-care.jpg";
import personalCare from "@/assets/categories/personal-care.jpg";
import babyKids from "@/assets/categories/baby-kids.jpg";
import petCare from "@/assets/categories/pet-care.jpg";

const Products = () => {
  const categories = [
    {
      id: 1,
      title: "Food Essentials",
      image: foodEssentials,
      bgColor: "bg-background",
    },
    {
      id: 2,
      title: "Home Care",
      image: homeCare,
      bgColor: "bg-background",
    },
    {
      id: 3,
      title: "Personal Care",
      image: personalCare,
      bgColor: "bg-background",
    },
    {
      id: 4,
      title: "Baby and Kids",
      image: babyKids,
      bgColor: "bg-background",
    },
    {
      id: 5,
      title: "Pet Care",
      image: petCare,
      bgColor: "bg-background",
    },
  ];

  return (
    <section className="py-20 bg-[#C5D952]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`${category.bgColor} border-4 border-primary overflow-hidden cursor-pointer hover:shadow-soft transition-shadow group`}
            >
              <div className="relative h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="text-lg font-bold text-foreground text-center">
                  {category.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
