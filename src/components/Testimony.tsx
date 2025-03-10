import Image from "next/image";

function Testimony() {
  return (
    <div className="py-[80px] flex flex-col md:flex-row justify-between gap-12 items-center">
      <Image
        src="/TestimonyImage.png"
        width={192}
        height={192}
        alt="Testimony Image"
        className="rounded-full"
      />
      <div className="flex flex-col gap-6 text-left">
        <p className="text-lg">
          Working with this platform has been a game-changer for my career. Its
          intuitive, visually stunning, and truly showcases my work in the best
          light.
        </p>
        <div className="flex flex-col">
          <p className="font-bold">Alex Johnson</p>
          <p>Freelance Developer</p>
        </div>
      </div>
    </div>
  );
}

export { Testimony };
