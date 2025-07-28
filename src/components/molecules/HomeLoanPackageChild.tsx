import Image from "next/image";

const loanPackagesList = [
  {
    title: "Thế chấp đăng ký xe máy",
    icon: "/icons/home/motobike.svg",
  },
  {
    title: "Thế chấp đăng ký oto",
    icon: "/icons/home/car.svg",
  },
  {
    title: "Thế chấp sổ đỏ",
    icon: "/icons/home/redbook.svg",
  },
  {
    title: "Khác",
    icon: "/icons/home/other.svg",
  },
];

export default function HomeLoanPackageChild() {
  return (
    <div className="max-w-[700px] mx-auto">
      <p className="font-bold text-lg sm:text-2xl md:text-4xl leading-8 sm:leading-14 text-center">
        Các gói vay online của{" "}
        <span className="text-main-color">X-Finance</span>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-4 md:mt-8">
        {loanPackagesList.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start p-4 rounded-lg max-w-44"
          >
            <div className="p-2 md:p-6 bg-main-color rounded-full w-14 h-14 md:h-24 md:w-24 flex items-center justify-center mb-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </div>
            <p className="text-md md:text-lg text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
