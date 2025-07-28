import AboutInfo from "@/components/molecules/AboutInfo";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Giới thiệu | X-Finance",
  description: "Giới thiệu về X-Finance - Nền tảng cho vay có thế chấp của VNFITE",
};

const aboutList = [
  "Vận hành theo mô hình P2P minh bạch, tuân thủ pháp luật",
  "Bảo mật cao, bảo vệ thông tin khách hàng",
  "Thế chấp tài sản linh hoạt, an toàn",
  "Giải ngân nhanh, thủ tục đơn giản",
  "Được người dùng đánh giá cao, phản hồi tích cực",
];

export default function AboutPage() {
  return (
    <div className="max-w-[1280px] w-full h-full flex flex-col items-start justify-start gap-4 mx-auto mb-10">
      <div className="w-full flex flex-row items-center justify-between px-8 mt-4 sm:mt-10 mb-6 gap-4">
        <div>
          <p className="font-bold text-xl sm:text-3xl lg:text-5xl leading-8 sm:leading-10 lg:leading-16 text-main-color">
            X-FINANCE
          </p>
          <p className="font-bold text-xl sm:text-3xl lg:text-5xl leading-8 sm:leading-10 lg:leading-16 text-[#1F2937]">{`“Vay chất, sống thật”`}</p>
          {aboutList.map((item, index) => (
            <div
              key={index}
              className="mt-4 flex flex-row items-center gap-2 text-[#374151] text-sm sm:text-[16px] lg:text-lg"
            >
              <Image
                src="/icons/about/checkpoint.svg"
                alt="checkpoint"
                width={24}
                height={24}
              />
              <p>{item}</p>
            </div>
          ))}
          <div className="flex flex-row items-center w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[450px] gap-1 sm:gap-4 mt-8">
            <Button className="h-9 sm:h-10 lg:h-12 w-36 sm:w-44 lg:w-52 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[13px] lg:text-[16px] font-bold leading-none bg-[#1F2937] hover:bg-gray-800 cursor-pointer shadow-custom">
              <Image
                src={"/icons/chplay.svg"}
                alt="download android"
                width={24}
                height={24}
              />
              <span className="leading-none">Download Android</span>
            </Button>
            <Button className="h-9 sm:h-10 lg:h-12 w-36 sm:w-44 lg:w-52 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-[10px] sm:text-[13px] lg:text-[16px] font-bold leading-none bg-main-color hover:bg-[#A40000] cursor-pointer shadow-custom">
              <Image
                src={"/icons/applestore.svg"}
                alt="download android"
                width={24}
                height={24}
                className="mb-1"
              />
              <span className="leading-none">Download IOS</span>
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex w-[60%] lg:w-[45%] relative z-10">
          <div className="w-[250px] md:w-[320px] lg:w-[435px] bg-main-color rounded-full aspect-[1/1] mx-auto"></div>
          <Image
            src="/images/about/about.png"
            alt="about header"
            width={472}
            height={600}
            className="w-[80%] h-auto object-cover absolute -top-[20%] right-[10%] bottom-0 mx-auto"
          />
        </div>
      </div>

      <div className="w-full">
        <p className="font-bold text-lg sm:text-2xl md:text-4xl leading-6 md:leading-14 text-center mt-4 sm:mt-8 lg:mt-12">
          Giới thiệu về <span className="text-main-color">X-Finance</span>
        </p>
        <AboutInfo />
      </div>
    </div>
  );
}
