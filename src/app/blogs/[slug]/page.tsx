import {notFound} from "next/navigation";
import ArticleData from "@/data/dataBlog.json";
import Image from "next/image";

export default async function ArticlePage({params}: { params: { slug: string } }) {
    const {slug} = params;

    const article = ArticleData.find(
        (article) =>
            article.title
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/,/g, "")
                .replace(/[^a-z0-9\-]/g, "") === slug
    );

    if (!article) {
        notFound();
    }

    return (
        <main className="container">
            <div className="flex flex-wrap">
                <h1 className="w-full mb-6 text-3xl font-bold text-center text-dark lg:text-4xl">{article.title}</h1>
                <div className="w-full">
                    <div className="h-96 w-full relative rounded-lg overflow-hidden">
                        <Image src={article.image || "/images/default-image.jpg"} alt='article-img' layout="fill" objectFit="cover" className="rounded-lg"/>
                    </div>
                    <div className='flex gap-x-8 py-2'>
                        <p>Publish: {new Date(article.created_at).toLocaleDateString()}</p>
                        <p>Author: {article.author}</p>
                    </div>
                </div>
                <div className="w-full my-2">
                    {article.content.map((para, index) => (
                        <div key={index}>
                            <p className="mb-4 text-base font-medium text-justify text-secondry lg:text-lg indent-10">{para}</p>
                            {article.header[index] &&
                                <h2 className="mb-5 text-xl font-bold text-dark lg:text-2xl">{article.header[index]}</h2>}
                        </div>
                    ))}
                </div>
                <p className='my-2'>tags:</p>
                <div className='w-full flex flex-wrap gap-2'>
                    {article.tags.map((tag, index) => (
                        <div key={index} className="py-1 px-2 w-fit bg-primary text-white rounded-md">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
