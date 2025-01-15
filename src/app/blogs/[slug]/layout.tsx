import Link from "next/link";
import React from "react";
import ArticleData from "@/data/dataBlog.json";
import Image from "next/image";

export default function ArticleLayout({children, params,}: {
    children: React.ReactNode;
    params: { slug: string };
}) {
    const {slug} = params;

    const otherArticles = ArticleData.filter((article) => {
        const articleSlug = article.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/,/g, "")
            .replace(/[^a-z0-9\-]/g, "");
        return articleSlug !== slug;
    });

    return (
        <div className="flex flex-wrap pt-32 pb-16">
            <main className="w-full lg:w-2/3">{children}</main>
            <aside className="container w-full lg:w-1/3">
                <h2 className="text-lg font-bold my-4">Artikel Lainnya</h2>
                <div className='flex flex-col gap-y-8'>
                    {otherArticles.map((article) => (
                        <Link
                            href={`/blogs/${article.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")
                                .replace(/,/g, "")
                                .replace(/[^a-z0-9\-]/g, "")}`}
                            key={article.title}
                            className='bg-secondary p-3 rounded-lg'
                        >
                            <div className='flex flex-col gap-y-2'>
                                <div className="h-52 w-full relative rounded-lg overflow-hidden">
                                    <Image src={article.image || "/images/default-image.jpg"} alt='article-img' layout="fill" objectFit="cover" className="rounded-lg"/>
                                </div>
                                <h3 className="text-xl font-semibold">{article.title}</h3>
                                <span>{new Date(article.created_at).toLocaleDateString()}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </aside>
        </div>
    );
}
