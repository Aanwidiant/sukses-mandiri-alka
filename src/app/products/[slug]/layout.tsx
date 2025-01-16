import React from "react";
import ProductData from "@/data/dataProduct.json";
import Card from "@/components/card/card";

interface Product {
  id: number;
  name: string;
  image: string | null;
}

type DetailProductLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
};

export default async function DetailProductLayout({ children, params }: DetailProductLayoutProps) {
  const { slug } = await params;

  const currentProduct = ProductData.find(
    (product: Product) =>
      product.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/,/g, "")
        .replace(/[^a-z0-9\-]/g, "") === slug
  );

  const otherProducts = ProductData.filter((product: Product) => product.id !== currentProduct?.id).slice(0, 4);

  return (
    <div className="flex flex-wrap pt-32 pb-16 min-h-screen">
      <main className="w-full">{children}</main>
      <div className="container w-full">
        <h2 className="text-xl font-bold my-4">Product Lainnya</h2>
        <div className="grid grid-cols-4 gap-6 w-full">
          {otherProducts.map((product) => (
            <Card
              key={product.id}
              type="product"
              title={product.name}
              buttonText="Detail Produk"
              link={`/products/${product.name
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/,/g, "")
                .replace(/[^a-z0-9\-]/g, "")}`}
              imageSrc={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
