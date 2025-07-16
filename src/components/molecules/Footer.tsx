import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FF4142] text-white py-14 px-12">
      <div className="max-w-[1280px] w-full mx-auto flex flex-row items-start justify-between">
        <div className="flex flex-col gap-8 w-[25%] xl:w-[30%]">
          <p className="font-bold text-4xl leading-14 uppercase">X-FINANCE</p>
          <div className="font-light text-md">
            Chúng tôi tự hào nhà cung cấp các khoản vay nhanh chóng, linh hoạt,
            sử dụng tài sản đảm bảo để hỗ trợ khách hàng giải quyết nhu cầu tài
            chính một cách an toàn và hiệu quả.
          </div>
          <p className="font-bold text-md">xfinance.com.vn</p>
        </div>

        <div className="gap-8 flex flex-col items-start justify-start h-full w-[25%] xl:w-[30%]">
          <div className="mb-8 gap-4 flex flex-col">
            <p className="font-bold text-xl leading-7">Địa chỉ</p>
            <p className="font-light text-md leading-6">
              Số nhà 4B, Vương Thừa Vũ, Phường Khương Đình, Hà Nội
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl leading-7 mb-2">Giờ làm việc</p>
            <p className="font-light text-md leading-6">
              Thứ 2 đến thứ 6: 8.00am - 5.00pm
            </p>
            <p className="font-light text-md leading-6">
              Thứ 7: 8.00am - 12.00pm
            </p>
            <p className="font-light text-md leading-6">Chủ nhật: Nghỉ</p>
          </div>
        </div>

        <div className="w-[40%] xl:w-[30%]">
          <div>
            <p className="font-bold text-xl leading-7 mb-4">Cài đặt Ứng dụng</p>
            <p className="font-light text-md leading-6">
              Từ App Store hoặc Google Play
            </p>
            <div className="flex flex-row items-center justify-start gap-4 mt-4">
              <div className="h-32 w-32 bg-white"></div>
              <div className="flex flex-col items-start justify-between h-32">
                <Button className="h-12 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-md font-bold leading-none bg-[#1F2937] hover:bg-gray-800 cursor-pointer shadow-custom">
                  <Image
                    src={"/icons/chplay.svg"}
                    alt="download android"
                    width={24}
                    height={24}
                  />
                  <span className="leading-none">Download Android</span>
                </Button>
                <Button className="h-12 w-full rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-md font-bold leading-none bg-grad hover:bg-[#FF6262] cursor-pointer shadow-custom mt-2">
                  <Image
                    src={"/icons/applestore.svg"}
                    alt="download android"
                    width={24}
                    height={24}
                  />
                  <span className="leading-none">Download IOS</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-4 mt-8">
            <Image
              src={"/icons/whatsapp.svg"}
              alt="whatsapp"
              width={32}
              height={32}
            />
            <p className="font-bold text-2xl leading-9">0123 456 789</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
