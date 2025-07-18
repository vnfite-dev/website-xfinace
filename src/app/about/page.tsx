import HeaderImageLayout from "@/components/molecules/HeaderImageLayout";
import Image from "next/image";

const aboutList = [
    "Vận hành theo mô hình P2P minh bạch, tuân thủ pháp luật",
    "Bảo mật cao, bảo vệ thông tin khách hàng",
    "Thế chấp tài sản linh hoạt, an toàn",
    "Giải ngân nhanh, thủ tục đơn giản",
    "Được người dùng đánh giá cao, phản hồi tích cực"
];

export default function AboutPage() {
    return (
        <HeaderImageLayout imageHead="/images/support/support-header.png">
            <div className="max-w-[1280px] w-full h-full flex flex-col items-start justify-start gap-4 mx-auto mb-10">
                <div>
                    <div>
                        <p>X-FINANCE</p>
                        <p>{`“Vay chất, sống thật”`}</p>
                        {aboutList.map((item, index) => (
                            <div key={index} className="mt-2">  
                            </div>
                        ))}
                    </div>
                    <Image
                        src="/images/about/about.png"
                        alt="about header"
                        width={472}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </HeaderImageLayout>
    )
}