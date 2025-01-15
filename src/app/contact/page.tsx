'use client';
import {useState} from "react";

export default function ContactPage() {
    const [message, setMessage] = useState("");
    return (
        <main className="pt-32 pb-16">
            <div className="container">
                <h2 className="w-full mb-6 text-3xl font-bold text-center text-dark lg:text-4xl">
                    Kontak <span className="text-primary">Kami</span>
                </h2>
                <div className="w-full lg:w-1/2 border border-secondary p-4 rounded-lg">
                    <p className=" font-medium text-secondry md:text-lg text-center">Hubungi saya melalui form
                        berikut
                        ini.</p>
                    <form className="w-full flex flex-col gap-y-2 py-4">
                        <label htmlFor="name" className="text-base font-bold text-primary">
                            Nama
                        </label>
                        <input type="text" id="name" name="nama"
                               className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-secondary focus:ring-2 focus:border-secondary"
                               required/>
                        <label htmlFor="email" className="text-base font-bold text-primary">
                            Email
                        </label>
                        <input type="email" id="email" name="email"
                               className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-secondary focus:ring-2 focus:border-secondary"
                               required/>
                        <label htmlFor="message" className="text-base font-bold text-primary">
                            Pesan
                        </label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            name="pesan"
                            className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-secondary focus:ring-2 focus:border-secondary"
                            required
                        ></textarea>
                    </form>
                    <button
                        className="w-fit px-12 py-2 text-base font-semibold text-white transition duration-500 bg-primary rounded-lg hover:opacity-80 hover:shadow-lg">Kirim
                    </button>
                </div>
                <div className="w-full px-4 lg:w-1/2"></div>
            </div>
        </main>
    );
}
