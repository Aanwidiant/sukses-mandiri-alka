import Image from "next/image";
import teamData from "@/data/dataTeam.json";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-16">
      <div className="container text-justify flex flex-col gap-y-10">
        <div className="flex flex-wrap">
          <h2 className="w-full mb-6 text-3xl font-bold text-center text-dark lg:text-4xl">
            Tentang <span className="text-primary">Kami</span>
          </h2>
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="mb-5 text-xl font-semibold text-dark lg:text-2xl">Kami Sukses Mandiri Aluminium Kaca.</h4>
            <p className="text-base text-dark lg:text-lg">
              Sebuah usaha menengah yang didedikasikan untuk merancang dan menyediakan solusi terbaik dalam produk-produk aluminium dan kaca. Dengan menggabungkan pengalaman bertahun-tahun dalam industri ini dengan kreativitas tanpa batas,
              kami telah membangun reputasi yang solid dalam memberikan layanan berkualitas tinggi dan produk berkualitas unggul kepada pelanggan kami. Kami memiliki keahlian dalam pembuatan beragam produk, mulai dari kusen, pintu, jendela,
              rolling door, hingga folding gate, kitchen set, rak piring, etalase, bevel kaca, dan slep halus. Setiap proyek kami dijalankan dengan perhatian terhadap detail dan kebutuhan unik pelanggan kami. Dukungan dari tim profesional
              kami, yang berkomitmen tinggi terhadap keunggulan dan kepuasan pelanggan, menjadikan kami mitra yang diandalkan dalam memenuhi kebutuhan aluminium dan kaca Anda.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <h4 className="mb-5 text-xl font-semibold text-dark lg:text-2xl">Visi kami.</h4>
            <p className="mb-5 text-base text-secondry lg:text-lg">Menjadi pemimpin dalam industri aluminium dan kaca, dengan fokus pada inovasi, kualitas, dan kepuasan pelanggan.</p>
            <h4 className="mb-5 text-xl font-semibold text-dark lg:text-2xl">Misi kami.</h4>
            <ol className="mb-5 ml-5 text-base list-decimal text-secondry lg:text-lg">
              <li>Menyediakan produk berkualitas tinggi dan layanan instalasi yang profesional.</li>
              <li>Berinovasi untuk solusi yang lebih efisien dan ramah lingkungan.</li>
              <li>Memastikan kepuasan pelanggan dengan layanan yang responsif dan personal.</li>
              <li>Menegakkan standar etika bisnis tinggi untuk hubungan jangka panjang yang saling menguntungkan.</li>
            </ol>
          </div>
        </div>
        <h2 className="w-full text-3xl font-bold text-center text-dark lg:text-4xl">
          Tim <span className="text-primary">Kami</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          {teamData.map((member: TeamMember, index: number) => (
            <div key={index} className="rounded-lg bg-secondary p-6 flex gap-x-6 items-center mx-6">
              <div className="h-24 w-24 bg-white rounded-full overflow-hidden">
                {member.image ? <Image src={member.image} alt={member.name} width={96} height={96} className="h-full w-full object-cover" /> : <div className="flex items-center justify-center h-full text-sm text-gray-500">No Image</div>}
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-xl font-semibold">{member.name}</span>
                <span className="font-light">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
