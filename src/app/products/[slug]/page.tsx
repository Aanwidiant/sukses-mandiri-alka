import {notFound} from "next/navigation";
import ProductData from "@/data/dataProduct.json";
import Image from "next/image";
import PlaceholderImage from "@/components/icons/image";
import ConsultasionButton from "@/components/button/consultasion";

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

type DetailProductPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function DetailProductPage({ params }: DetailProductPageProps) {
    const { slug } = await params;

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
                    <div className="h-96 lg:h-full relative rounded-lg overflow-hidden group cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
                        {product.image ? (
                            <Image src={product.image} alt={`${product.name} image`} layout="fill" objectFit="cover"
                                   className="rounded-lg"/>
                        ) : (
                            <div
                                className="flex flex-col items-center justify-center w-full h-full bg-stroke rounded-lg gap-y-4 group-hover:scale-110">
                                <PlaceholderImage className="w-16 h-16 fill-gray"/>
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
                    <ConsultasionButton product={product}/>
                </div>
            </div>
        </main>
    );
}
