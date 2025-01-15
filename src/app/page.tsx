import Link from "next/link";

export default function Home() {
    return (
        <main className="flex py-32 f lg:pb-0 lg:h-screen lg:items-center">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                    </div>
                    <div className="px-4 lg:w-1/2 flex flex-col gap-y-4 justify-center">
                        <h1 className="text-base font-semibold text-dark md:text-2xl">
                            Selamat datang di website, <span
                            className="block text-4xl font-bold text-primary lg:text-5xl mt-4">Sukses <span
                            className="text-dark">Mandiri</span></span>
                        </h1>
                        <h2 className="text-lg font-medium text-dark lg:text-2xl">Alumunium & Kaca</h2>
                        <p className="font-normal leading-relaxed text-dark lg:text-lg">
                            Menerima pesanan: kusen, pintu, jendela, rolling dor, folding gate, kitchen set,
                            rak piring, berbagai macam etalase, bevel kaca, slep halus.
                        </p>
                        <Link href="/contact"
                              className="px-8 py-3 text-base font-semibold transition duration-300 ease-in-out text-white bg-primary rounded-md hover:shadow-md hover:shadow-dark w-fit">Hubungi
                            Kami</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
