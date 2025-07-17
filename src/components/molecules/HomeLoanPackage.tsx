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

const commentList = [
  {
    name: "Nguyễn Kim Ngọc",
    comment: "Dịch vụ xử lý nhanh, không mất quá nhiều thời gian. Lần đầu vay online mà thấy dễ dàng và uy tín như vậy. Rất đáng tin cậy! Tôi rất hài lòng về X-Finance.",
    avatar: "/images/home/p1.png",
    position: "Nhân viên văn phòng"
  },
  {
    name: "Đoàn Văn Mạnh",
    comment: "App vay nhanh, thủ tục đơn giản, giải ngân cực kỳ nhanh chóng. Rất hài lòng!",
    avatar: "/images/home/p2.png",
    position: "Giám đốc kinh doanh"
  },
  {
    name: "Ngô Kiều Oanh",
    comment: "Giải ngân nhanh hơn cả tưởng tượng. Cứu cánh kịp thời lúc cần thiết. Dịch vụ khách hàng thân thiện, hỗ trợ tận tình 24/7. Vote 5 sao!",
    avatar: "/images/home/p3.png",
    position: "Nội trợ"
  },
  {
    name: "Cao Thanh Lâm",
    comment: "Hỗ trợ nhiệt tình, app dễ dùng, tiền về chỉ trong vài phút. Rõ ràng, minh bạch, không phát sinh phí linh tinh. Rất an tâm khi sử dụng.",
    avatar: "/images/home/p4.png",
    position: "Nhân viên văn phòng"
  }
];

export default function HomeLoanPackage() {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center">
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

      <div className="max-w-[840px] mt-20">
        <p className="font-bold text-4xl leading-14 text-center">
          <span className="text-[#C40000]">X-Finance</span> giải quyết vấn đề
          tài chính
        </p>
        <p className="font-bold text-4xl leading-14 text-center">
          cho người dùng
        </p>
        <div className="flex flex-row items-start justify-between mt-6 gap-4">
          <div className="p-6">
            <div className="px-8 py-8 rounded-full w-28 h-28 flex items-center justify-center">
              <Image
                src="/icons/home/percent.svg"
                alt="interest rate"
                width={48}
                height={48}
                className="w-full "
              />
            </div>
            <p className="font-bold text-lg leading-7 mb-4 text-justify">
              Lãi suất cho vay chỉ 5%/ tháng
            </p>
            <p className="font-light text-lg leading-7 text-justify">
              Lãi suất thấp, giải ngân nhanh trong ngày. Giúp bạn giải quyết tài
              chính mà không lo áp lực trả nợ.
            </p>
          </div>
          <div className="p-6">
            <div className="px-8 py-8 rounded-full w-28 h-28 flex items-center justify-center">
              <Image
                src="/icons/home/clock.svg"
                alt="interest rate"
                width={48}
                height={48}
                className="w-full "
              />
            </div>
            <p className="font-bold text-lg leading-7 mb-4 text-justify">
              Thời gian trả góp lên đến 24 tháng
            </p>
            <p className="font-light text-lg leading-7 text-justify">
              Kéo dài thời gian trả góp, giảm áp lực mỗi kỳ thanh toán. Tối ưu
              dòng tiền, phù hợp với thu nhập của bạn.
            </p>
          </div>
          <div className="p-6">
            <div className="px-8 py-8 rounded-full w-28 h-28 flex items-center justify-center">
              <Image
                src="/icons/home/approve.svg"
                alt="interest rate"
                width={48}
                height={48}
                className="w-full "
              />
            </div>
            <p className="font-bold text-lg leading-7 mb-4 text-justify">
              Chỉ với 3 phút phê duyệt
            </p>
            <p className="font-light text-lg leading-7 text-justify">
              Tiết kiệm thời gian, tối ưu trải nghiệm vay. Giải quyết tài chính
              tức thời, không rườm rà thủ tục.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-20">
        <Image
          src="/images/home/image1.jpg"
          alt="home image"
          width={1280}
          height={720}
          className="w-full h-[500px] object-cover"
        />
      </div>

      <div className="mt-20 max-w-[1164px] w-full mx-auto">
        <p className="font-bold text-4xl leading-14 text-center">
          Mọi người nói gì về <span className="text-[#C40000]">X-Finance</span>
        </p>

        <div>
          <div className="grid grid-cols-2 gap-6 mt-10">
            {commentList.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg flex flex-col items-start"
              >
                <div className="text-gray-800 text-start p-6 text-lg font-bold mb-4 relative">
                  {item.comment}
                  <div className="absolute top-0 left-0">
                    <Image
                      src="/icons/home/quote.svg"
                      alt="quote icon"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-center gap-4 mb-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-lg mb-2">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.position}</p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
