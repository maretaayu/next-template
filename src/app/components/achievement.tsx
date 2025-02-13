const achievementData = [
  {
    persentage: 90,
    description: "Design",
  },
  {
    persentage: 98,
    description: "Development",
  },
  {
    persentage: 98,
    description: "Project Management",
  },
  {
    persentage: 98,
    description: "Communication",
  },
];
function Achievement() {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 page-center w-3/4 text-white py-[80px]">
        {achievementData.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 text-left">
            <p className="text-2xl font-bold">{item.persentage}%</p>
            <p className="opacity-70 font-thin">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Achievement };
