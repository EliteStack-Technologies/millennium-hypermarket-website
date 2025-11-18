import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import chilliPowder from "@/assets/products/chilli-powder.jpg";
import milk from "@/assets/products/milk.jpg";
import nescafe from "@/assets/products/nescafe.jpg";
import oats from "@/assets/products/oats.jpg";
import redLabelTea from "@/assets/products/red-label-tea.jpg";

import hairOils from "@/assets/categories/hair-oils.jpg";
import appliances from "@/assets/categories/appliances.jpg";
import cosmetics from "@/assets/categories/cosmetics.jpg";

const Products = () => {
  const newArrivals = [
    {
      id: 1,
      name: "Chilli Powder",
      category: "Staples & Spices",
      image: chilliPowder,
      isNew: true,
    },
    {
      id: 2,
      name: "Milk",
      category: "Dairy Products",
      image: milk,
      isNew: true,
    },
    {
      id: 3,
      name: "Nescafe",
      category: "Grocery",
      image: nescafe,
      isNew: true,
    },
    {
      id: 4,
      name: "Quicker Oats",
      category: "Grocery",
      image: oats,
      isNew: true,
    },
    {
      id: 5,
      name: "Red Label Tea",
      category: "Grocery",
      image: redLabelTea,
      isNew: true,
    },
  ];

  const categories = [
    {
      id: 1,
      title: "Hair Oils",
      image: hairOils,
      bgColor: "bg-purple-100",
    },
    {
      id: 2,
      title: "Appliances",
      subtitle: "SMART COOKS",
      image: appliances,
      bgColor: "bg-white",
    },
    {
      id: 3,
      title: "Blue Heaven",
      subtitle: "COLOR DIVERSITY LIP COLOR",
      image: cosmetics,
      bgColor: "bg-gradient-to-r from-gray-100 to-gray-200",
    },
  ];

  return (
    <section className="py-20 bg-[#C5D952]">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="new-arrival" className="w-full">
          <TabsList className="bg-transparent border-b border-foreground/20 rounded-none h-auto p-0 mb-8">
            <TabsTrigger
              value="new-arrival"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-6 py-3 text-lg font-semibold text-foreground"
            >
              New Arrival
            </TabsTrigger>
            <span className="text-foreground/40 text-lg px-4">|</span>
            <TabsTrigger
              value="bestseller"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-6 py-3 text-lg font-semibold text-foreground"
            >
              Bestseller
            </TabsTrigger>
            <span className="text-foreground/40 text-lg px-4">|</span>
            <TabsTrigger
              value="featured"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none px-6 py-3 text-lg font-semibold text-foreground"
            >
              Featured Category
            </TabsTrigger>
          </TabsList>

          <TabsContent value="new-arrival" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {newArrivals.map((product) => (
                <Card
                  key={product.id}
                  className="border-4 border-primary bg-background hover:shadow-soft transition-shadow overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-square bg-background p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                    {product.isNew && (
                      <Badge className="absolute top-2 right-2 bg-[#FFE500] text-foreground hover:bg-[#FFE500] font-bold rounded-full w-14 h-14 flex items-center justify-center text-xs">
                        NEW
                      </Badge>
                    )}
                  </div>
                  <div className="p-4 bg-background">
                    <p className="text-xs text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bestseller" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {newArrivals.map((product) => (
                <Card
                  key={product.id}
                  className="border-4 border-primary bg-background hover:shadow-soft transition-shadow overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-square bg-background p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 bg-background">
                    <p className="text-xs text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="featured" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
              {newArrivals.map((product) => (
                <Card
                  key={product.id}
                  className="border-4 border-primary bg-background hover:shadow-soft transition-shadow overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-square bg-background p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 bg-background">
                    <p className="text-xs text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-bold text-foreground">
                      {product.name}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Categories */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`${category.bgColor} border-none overflow-hidden cursor-pointer hover:shadow-soft transition-shadow`}
            >
              <div className="relative h-64 flex items-center justify-center p-6">
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  {category.subtitle && (
                    <p className="text-sm text-muted-foreground">
                      {category.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
