import Image from "next/image";
import Link from "next/link";

type CardProps = {
  thumbnail: string;
  title: string;
  url: string;
  subtitle?: string;
  description?: string;
};

function Card({ thumbnail, title, url, subtitle, description }: CardProps) {
  return (
    <div>
      <Link href={url}>
        <Image src={thumbnail} alt={title} width={270} height={225} />
        <div className="mt-3">
          <h3 className="text-left font-bold text-black">{title}</h3>
          {subtitle && <p className="text-left">{subtitle}</p>}
          {description && <p className="text-left opacity-50">{description}</p>}
        </div>
      </Link>
    </div>
  );
}

export default Card;
