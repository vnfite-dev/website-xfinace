import { Button } from "@/components/ui/button";
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

export default function HomeLoanPackage() {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center p-4">
      <div className="max-w-[700px]">
        <p className="font-bold text-4xl leading-14 text-center">
          Các gói vay online của{" "}
          <span className="text-[#C40000]">X-Finance</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
          {loanPackagesList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start p-4 rounded-lg max-w-44"
            >
              <div className="p-6 bg-main-color rounded-full h-20 w-20 flex items-center justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="w-14 h-14"
                />
              </div>
              <p className="text-lg text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 w-full">
        <p className="font-bold text-4xl leading-14 text-center">
          Bạn đang gặp khó khăn về tài chính{" "}
        </p>
        <p className="font-bold text-4xl leading-14 text-center">
          <span className="text-[#C40000]">X-Finance</span> sẽ giúp bạn
        </p>
        <div className="bg-main-color w-full relative mt-20 h-[600px]">
          <div className="mt-20 absolute -top-[200px] right-1/2">
            <Image
              src="/images/about/about.png"
              alt="about header"
              width={574}
              height={653}
            />
          </div>
          <div className="text-white text-justify font-light max-w-[500px] absolute left-1/2 top-1/12 px-6">
            <p className="font-bold text-2xl mb-6">Giới thiệu về X-Finance</p>
            <p className="mb-6">{`"X-Finance là ứng dụng tài chính hiện đại, chuyên cung cấp dịch vụ vay vốn thế chấp tài sản một cách nhanh chóng, minh bạch và an toàn. Với quy trình xét duyệt đơn giản, giải ngân linh hoạt và lãi suất cạnh tranh, X-Finance mang đến giải pháp tài chính hiệu quả cho cá nhân và doanh nghiệp đang cần vốn gấp.`}</p>
            <p>{`Chúng tôi cam kết bảo mật thông tin khách hàng tuyệt đối, thẩm định minh bạch và hỗ trợ tận tâm 24/7. Dù bạn cần vay thế chấp nhà, xe, hoặc tài sản giá trị khác, X-Finance luôn sẵn sàng đồng hành cùng bạn trên hành trình vượt qua khó khăn tài chính và phát triển bền vững."`}</p>
            <Button className="h-12 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-md font-bold leading-none bg-[#1F2937] hover:bg-gray-800 cursor-pointer shadow-custom mt-10">
              <span className="leading-none">Đăng ký ngay</span>
              <Image
                src={"/icons/home/arrow_right.svg"}
                alt="download android"
                width={24}
                height={24}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
