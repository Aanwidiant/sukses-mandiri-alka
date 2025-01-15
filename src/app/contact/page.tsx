"use client";
import { useState } from "react";
import Whatsapp from "@/components/icons/whatsapp";
import Mail from "@/components/icons/mail";
import Location from "@/components/icons/location";
import SocialMedia from "@/components/sosial-media/social-media";
import Modal from "@/components/modal/modal";

export default function ContactPage() {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fungsi untuk menutup modal
  const closeModal = () => setIsModalOpen(false);

  // Fungsi untuk membuka modal saat tombol Kirim diklik
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true); // Membuka modal
  };

  return (
    <main className="pt-32 pb-16 container lg:min-h-screen">
      <h2 className="w-full mb-6 text-3xl font-bold text-center text-dark lg:text-4xl">
        Kontak <span className="text-primary">Kami</span>
      </h2>
      <p className="font-medium text-center md:text-lg mb-6">Berikut beberapa cara menghubungi kami.</p>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="w-full lg:w-1/2 border-2 border-primary/25 p-4 rounded-lg bg-white">
          <h3 className="text-lg font-medium">Hubungi kami melalui form berikut ini.</h3>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-2">
            <label htmlFor="name" className="text-base font-bold text-primary">
              Nama
            </label>
            <input type="text" id="name" name="nama" className="w-full p-3 rounded-md bg-secondary/50 text-dark focus:outline-none focus:ring-primary focus:ring-2 border border-gray" required placeholder="Masukkan nama anda" />
            <label htmlFor="email" className="text-base font-bold text-primary">
              Email
            </label>
            <input type="email" id="email" name="email" className="w-full p-3 rounded-md bg-secondary/50 text-dark focus:outline-none focus:ring-primary focus:ring-2 border border-gray" required placeholder="Masukkan alamat email anda" />
            <label htmlFor="message" className="text-base font-bold text-primary">
              Pesan
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              name="pesan"
              className="w-full p-3 rounded-md text-dark focus:outline-none focus:ring-primary bg-secondary/50 focus:ring-2 border border-gray"
              rows={3}
              required
              placeholder="Tulis pesan anda disini"
            ></textarea>
            <div className="w-full flex justify-end">
              <button type="submit" className="px-8 py-2 mt-2 text-base font-semibold transition duration-300 ease-in-out text-white bg-primary rounded-md hover:shadow-md hover:shadow-primary w-fit">
                Kirim
              </button>
            </div>
          </form>
        </div>
        <div className="w-full h-fit lg:w-1/2 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-y-2.5 bg-white border-2 border-primary/25 p-4 rounded-lg ">
              <h3 className="text-lg font-medium">Atau bisa hubungi kami melalui:</h3>
              <div className="flex gap-x-3">
                <Whatsapp className="fill-primary w-8 h-8" />
                <p>0813-9340-5038</p>
              </div>
              <div className="flex gap-x-3">
                <Mail className="fill-primary w-8 h-8" />
                <p>suksesmandiri.alka@gmail.com</p>
              </div>
              <div className="flex gap-x-3">
                <Location className="stroke-primary stroke-2 w-8 h-8 flex-shrink-0" />
                <p className="flex flex-wrap">Jl. Pengasih-Wates, Kedung Galih RT 10/ RW 03, Pengasih, Kulon Progo, Yogyakarta</p>
              </div>
            </div>
            <div className=" bg-white border-2 border-primary/25 p-4 rounded-lg">
              <p className="mb-3 font-medium text-secondry text-lg">Serta ikuti kami di media sosial.</p>
              <div className="flex items-center">
                <SocialMedia fillColor="fill-dark" size="large" border="border-dark" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
}
