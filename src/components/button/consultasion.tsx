"use client";

import Whatsapp from "@/components/icons/whatsapp";

interface ConsultasionButtonProps {
    product: {
        name: string;
        description: string;
    };
}

export default function ConsultasionButton({ product }: ConsultasionButtonProps) {
    const sendMessage = () => {
        const message = `Halo, saya tertarik dengan produk "${product.name}".\n\nDeskripsi: ${product.description}\n\nApakah saya boleh bertanya - tanya mengenai produk tersebut dahulu?`;
        const whatsappURL = `https://wa.me/6281393405038?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <button
            onClick={sendMessage}
            className="px-4 py-2.5 text-base font-semibold transition duration-300 ease-in-out text-white bg-primary rounded-md hover:shadow-md hover:shadow-primary w-fit inline-flex gap-x-3"
        >
            <Whatsapp className="fill-white w-6 h-6" />
            Konsultasi & Pesan
        </button>
    );
}
