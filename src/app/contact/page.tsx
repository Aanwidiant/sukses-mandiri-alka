export default function ContactPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container">
        <div className="w-full mx-auto mb-6 text-center">
          <h2 className="w-full mb-6 text-3xl font-bold text-center text-dark lg:text-4xl">
            Halaman <span className="text-primary">Blog</span>
          </h2>
          <div className="w-full lg:w-1/2">
            <p className=" font-medium text-md text-secondry md:text-lg">Hubungi saya melalui form berikut ini.</p>
            <form name="contact-form">
              <div className="w-full shadow-lg rounded-lg">
                <div className="w-full">
                  <label htmlFor="name" className="text-base font-bold text-primary">
                    Nama
                  </label>
                  <input type="text" id="name" name="nama" className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-secondary focus:ring-2 focus:border-secondary" required />
                </div>
                <div className="w-full px-4 mb-8">
                  <label htmlFor="email" className="text-base font-bold text-primary">
                    Email
                  </label>
                  <input type="email" id="email" name="email" className="w-full p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" required />
                </div>
                <div className="w-full px-4 mb-8">
                  <label htmlFor="message" className="text-base font-bold text-primary">
                    Pesan
                  </label>
                  {/* <textarea value="" id="message" name="pesan" className="w-full h-32 p-3 rounded-md bg-slate-200 text-dark focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" required>
                    {" "}
                  </textarea> */}
                </div>
                <div className="w-full px-4">
                  <button className="w-48 px-8 py-3 text-base font-semibold text-white transition duration-500 bg-primary rounded-2xl hover:opacity-80 hover:shadow-lg btn-kirim">Kirim</button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full px-4 lg:w-1/2"></div>
        </div>
      </div>
    </main>
  );
}
