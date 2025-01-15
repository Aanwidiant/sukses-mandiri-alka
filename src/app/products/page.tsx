import Card from "@/components/card/card";

export default function ProductsPage() {
    return (
        <main className="pt-32 pb-16">
            <div className="container">
                <div className="max-w-xl mx-auto mb-6 text-center">
                    <h2 className="w-full mb-6 text-3xl font-bold text-center text-dark lg:text-4xl">
                        Produk <span className="text-primary">Kami</span>
                    </h2>
                    <p className="font-medium text-md text-secondry md:text-lg">Berikut ini adalah beberapa produk yang
                        kami buat.</p>
                </div>

                <div className="grid grid-cols-4 gap-6 w-full">
                    <Card type="product" title="Nama Produk" description="Deskripsi singkat produk"
                          buttonText="Detail Produk" link='/products/123'
                    />
                </div>
            </div>
        </main>
    );
}
