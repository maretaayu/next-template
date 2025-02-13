import Image from "next/image";

type CardProps = {
  image: string;
  title: string;
  url: string;
};

function Card({ image, title, url }: CardProps) {
  return (
    <a
      href={url}
      className="font-bold text-black text-left flex flex-col gap-4"
    >
      <Image
        src={image}
        alt={title}
        className="rounded-2xl w-full"
        width={300}
        height={400}
      />
      <p>{title}</p>
    </a>
  );
}

export { Card };
