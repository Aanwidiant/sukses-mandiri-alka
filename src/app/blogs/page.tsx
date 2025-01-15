import Card from "@/components/card/card";
import Articles from "@/data/dataBlog.json";

export default function BlogPage() {
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <main className='pt-32 pb-16'>
      <div className="container">
        <div className="w-full mx-auto mb-6 text-center">
          <h2 className="w-full mb-6 text-3xl font-bold text-center text-dark lg:text-4xl">
            Halaman <span className="text-primary">Blog</span>
          </h2>
          <p className=" font-medium text-md text-secondry md:text-lg">Berikut ini adalah beberapa artikel dan blok yang kami tulis. Semoga menambah wawasan.</p>
        </div>

        <div className="grid grid-cols-6 gap-6 w-full">
          {Articles.map((article) => (
            <Card
              key={article.title}
              type="blog"
              title={article.title}
              description={truncateText(article.content[0], 10)}
              buttonText="Baca Artikel"
              link={`/blogs/${article.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/,/g, "")
                .replace(/[^a-z0-9\-]/g, "")}`}
              imageSrc={article.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
