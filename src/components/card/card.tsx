import Image from "next/image";
import Link from "next/link";

interface CardProps {
    type: "blog" | "product";
    title: string;
    description: string;
    imageSrc?: string;
    buttonText: string;
    link: string;
}

export default function Card({type, title, description, imageSrc, buttonText, link}: CardProps) {
    const gridClasses = type === "blog" ? "col-span-6 md:col-span-3 lg:col-span-2" : "col-span-4 md:col-span-2 lg:col-span-1";

    return (
        <div
            className={`p-4 rounded-lg shadow-xl bg-secondary ${gridClasses} hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col justify-between`}>
            <Link href={link}>
                <div className="h-52 w-full relative rounded-lg overflow-hidden">
                    {imageSrc ? (
                        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg"
                               priority={type === "blog"}/>
                    ) : (
                        <div
                            className="h-full w-full flex items-center justify-center text-white font-bold bg-primary">No
                            Image</div>
                    )}
                </div>
                <h3 className="mt-5 mb-3 text-xl font-semibold text-dark">{title}</h3>
                <p className="mb-5 text-base font-medium text-gray-600">{description}</p>
            </Link>
            <div className="w-full flex justify-end">
                <button
                    className="px-8 py-3 text-base font-semibold text-white bg-primary rounded-xl hover:shadow-lg">{buttonText}</button>
            </div>
        </div>
    );
}
