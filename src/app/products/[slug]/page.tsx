import { notFound } from "next/navigation";
import ProductData from "@/data/dataProduct.json";
import Image from "next/image";
import PlaceholderImage from "@/components/icons/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string | null;
  category: string;
  specifications: {
    material: string;
    size: string;
    weight: string;
    color: string;
  };
  features: string[];
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function DetailProductPage({ params }: ProductPageProps) {
  const { slug } = await Promise.resolve(params);

  const product = ProductData.find(
    (product: Product) =>
      product.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/,/g, "")
        .replace(/[^a-z0-9\-]/g, "") === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <div className="h-96 lg:h-full relative rounded-lg overflow-hidden">
            {product.image ? (
              <Image src={product.image} alt={`${product.name} image`} layout="fill" objectFit="cover" className="rounded-lg" />
            ) : (
              <div className="flex flex-col items-center justify-center w-full h-full bg-stroke rounded-lg">
                <PlaceholderImage className="w-16 h-16 fill-gray" />
                <p className="text-gray">Gambar belum tersedia</p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full p-4 lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-xl font-bold text-dark lg:text-2xl">{product.name}</h1>
          <p className="text-lg">Kategori: {product.category}</p>
          <p className="text-lg">{product.description}</p>
          <p className="text-lg font-semibold">Harga: {product.price}</p>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-semibold">Spesifikasi:</h2>
            <ul className="list-none">
              <li>Bahan: {product.specifications.material}</li>
              <li>Ukuran: {product.specifications.size}</li>
              <li>Berat: {product.specifications.weight}</li>
              <li>Warna: {product.specifications.color}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-semibold">Fitur atau Keuanggulan:</h2>
            <ul className="list-disc px-6">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <button className="w-fit px-6 py-2 text-base font-semibold text-white transition duration-500 bg-primary rounded-lg hover:opacity-80 hover:shadow-lg">Konsultasi & Pesan</button>
        </div>
      </div>
    </main>
  );
}
