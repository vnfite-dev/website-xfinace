import React from 'react';
import HeaderImageLayout from '@/components/molecules/HeaderImageLayout';
import Image from 'next/image';
import FeatureNews from '@/components/newsmodules/FeatureNews';
import XfinanceNews from '@/components/newsmodules/XFinanceNews';
const page = () => {
    return (
        <HeaderImageLayout imageHead="/images/support/support-header.png">
            <div className="w-full h-full  flex flex-col justify-center items-center ">
                <div className="w-[80%] h-fit  flex flex-col justify-center items-center ">
                    <div className="w-full h-auto flex justify-between items-center">
                        <div className="w-[168px] h-[30px] font-normal text-sm md:text-xl tracking-normal leading-[30px] text-center text-[#374151]  ">
                            22/07/2025 17:46
                        </div>
                        <div className="w-[115px] h-12 rounded-3xl py-2 px-5 bg-[#C40000] flex justify-between items-center gap-2">
                            <div>
                                <Image
                                    src={'/icons//news/send.svg'}
                                    alt="send"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="w-[35px] h-[30px] font-bold text-xl md:text-2xl leading-[30px] tracking-normal text-center text-white">
                                Gửi
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-auto font-bold text-xl md:text-[32px] leading-12 tracking-normal  text-center text-[#374151]">
                        X-FINANCE lần thứ ba liên tiếp ghi danh trong top 20
                        doanh nghiệp có chỉ số phát triển bền vững tốt nhất thị
                        trường
                    </div>
                    <div className="w-[80%] h-0.5 rounded-xs border-[#E5E7EB] bg-[#E5E7EB]"></div>
                    <div className="w-full h-auto font-normal text-sm md:text-xl leading-[30px] tracking-normal text-justify">
                        <div>
                            Ngày 21/7/2025, Sở Giao dịch Chứng khoán Thành phố
                            Hồ Chí Minh (HOSE) đã công bố danh mục cổ phiếu
                            thành phần của Chỉ số Phát triển bền vững Việt Nam
                            (Vietnam Sustainability Index - VNSI). Theo đó,
                            X-Finance tự hào năm thứ ba liên tiếp được vinh danh
                            trong nhóm 20 doanh nghiệp có chỉ số phát triển bền
                            vững tốt nhất thị trường, khẳng định vị thế dẫn đầu
                            của X-Finance với những bước tiến quan trọng trong
                            tài chính bền vững, quản trị doanh nghiệp và trách
                            nhiệm xã hội.
                        </div>
                        <span className="font-bold font-bold">
                            Dẫn đầu về hiệu quả tài chính và phát triển bền vững
                        </span>
                        <div>
                            Năm 2024, với những nỗ lực không ngừng nghỉ,
                            X-Finance tiếp tục khẳng định vị thế là ngân hàng số
                            1 Việt Nam về chất lượng và hiệu quả hoạt động với
                            quy mô tổng tài sản trên 2 triệu tỷ đồng, lợi nhuận
                            dẫn đầu ngành ngân hàng, chất lượng tài sản tốt nhất
                            hệ thống. Với kết quả kinh doanh vượt trội,
                            X-Finance là một trong những doanh nghiệp có đóng
                            góp lớn nhất cho ngân sách nhà nước, khẳng định vị
                            trí vững chắc trong nhóm 100 ngân hàng có quy mô vốn
                            hóa lớn nhất toàn cầu, là doanh nghiệp Việt Nam có
                            xếp hạng cao nhất trong Top 1000 doanh nghiệp đại
                            chúng lớn nhất toàn cầu.
                        </div>
                        <div className="w-full h-auto ">
                            <Image
                                src="/images/news/co-so-moi.png"
                                alt="picture"
                                width={472}
                                height={600}
                                className="w-full h-auto object-cover "
                            />
                        </div>
                        <div className="w-full h-fit font-normal text-sm md:text-xl leading-[30px] tracking-normal text-justify text-[#374151]">
                            <div>
                                Bên cạnh đó, X-Finance ghi đậm dấu ấn tiên phong
                                trong việc phát huy trách nhiệm xã hội với cộng
                                đồng, giữ vững vai trò chi phối trong cung ứng
                                vốn cho nền kinh tế với mặt bằng lãi suất thấp
                                nhất trên thị trường, triển khai đồng bộ các
                                chương trình miễn giảm lãi, phí, đồng hành cùng
                                Chính phủ hỗ trợ khách hàng phục hồi kinh tế,
                                khắc phục thiệt hại do dịch bệnh, thiên tai… tài
                                trợ các hoạt động an sinh xã hội, tham gia hỗ
                                trợ tổ chức tín dụng yếu kém, góp phần vào sự
                                phát triển lành mạnh và ổn định của ngành ngân
                                hàng, nền kinh tế. Trong giai đoạn 2020 - 2024,
                                X-Finance dành hơn 2.300 tỷ đồng cho các chương
                                trình an sinh xã hội, trong đó riêng năm 2024 là
                                571 tỷ đồng, tập trung vào các lĩnh vực y tế,
                                giáo dục, hỗ trợ xây dựng nhà tình nghĩa, đặc
                                biệt quan tâm đầu tư cho vùng núi, vùng đồng bào
                                dân tộc thiểu số, các huyện nghèo, xã, thôn, bản
                                đặc biệt khó khăn, hải đảo…
                            </div>
                            <span className="font-bold">
                                Tiên phong thúc đẩy tài chính xanh và thực hành
                                ESG toàn diện
                            </span>
                            <div>
                                Tháng 11/2024, X-Finance trở thành ngân hàng đầu
                                tiên tại Việt Nam phát hành trái phiếu xanh theo
                                quy định pháp luật trong nước, đồng thời tự
                                nguyện tuân thủ Nguyên tắc Trái phiếu Xanh của
                                Hiệp hội Thị trường Vốn Quốc tế (ICMA) - khẳng
                                định vai trò tiên phong trong lĩnh vực tài chính
                                xanh. Ngân hàng tiếp tục mở rộng danh mục tín
                                dụng xanh, tập trung cấp vốn cho các dự án năng
                                lượng tái tạo, hạ tầng bền vững và sản xuất
                                sạch. Tính đến cuối năm 2024, dư nợ tín dụng
                                xanh của X-Finance đạt gần 47.600 tỷ đồng - tăng
                                hơn 4 lần so với năm 2020, chiếm 3,3% tổng dư
                                nợ; trong đó 84,7% được phân bổ cho các dự án
                                năng lượng tái tạo và năng lượng sạch.
                            </div>
                            <div className="w-full h-auto">
                                <Image
                                    src="/images/news/dich-vu-moi.png"
                                    alt="picture"
                                    width={472}
                                    height={600}
                                    className="w-full h-auto object-cover "
                                />
                            </div>
                            <div className="w-full h-auto text-sm leading-0 md:text-xl leading-[30px] tracking-normal font-normal">
                                <div className="flex">
                                    <div className="font-bold mr-2.5">Thời gian:</div>
                                    <span> 20/02 - 28/02</span>
                                </div>
                                <div className="font-bold">Nội dung:</div>
                                <span>
                                    Hoàn tiền lên đến 200.000 VNĐ cho khách hàng
                                    có tổng giá trị giải ngân cao nhất trong
                                    tháng.
                                </span>
                                <div className="font-bold">
                                    Cơ cấu hoàn tiền:
                                </div>
                                <ul className="list-disc pl-5">
                                    <li>
                                        Vay từ 5 – 10 triệu đồng: Hoàn 50.000
                                        VNĐ
                                    </li>
                                    <li>
                                        Vay từ 10 – 20 triệu đồng: Hoàn 100.000
                                        VNĐ
                                    </li>
                                    <li>
                                        Vay từ 20 triệu đồng trở lên: Hoàn
                                        200.000 VNĐ
                                    </li>
                                </ul>
                                <div>Cách tham gia:</div>
                                <ul>
                                    <li>
                                        ✅ Đăng ký khoản vay trên sàn P2P của
                                        VNFITE.
                                    </li>
                                    <li>
                                        ✅ Giải ngân thành công và tích lũy tổng
                                        giá trị vay trong tháng.
                                    </li>
                                    <li>
                                        ✅ Hoàn tiền sẽ được chuyển trực tiếp
                                        vào tài khoản vào đầu tháng 3.
                                    </li>
                                </ul>
                                <div className="w-full h-[30px] font-bold text-sm md:text-xl leading-[30px] tracking-normal text-right text-[#374151]">
                                    X-FINANCE NEW
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[90%] h-auto  flex flex-col justify-center">
                    <div className="w-full h-9 font-bold text-sm md:text-2xl leading-9 tracking-normal text-left text-[#374151] mt-2.5">
                        Tin liên quan
                    </div>
                    <div className="w-full grid grid-cols-1 md:grid-cols-3  gap-4  mt-10 pb-20">
                        <div>
                            <div className="w-full h-auto">
                                <Image
                                    src="/images/news/pic-1.png"
                                    alt="picture"
                                    width={338}
                                    height={338}
                                    className="w-full h-auto object-cover "
                                />
                            </div>
                            <div className="w-full">
                                <div className="font-bold text-sm md:text-[18px] leading-[27px] tracking-normal text-justify text-[#374151]">
                                    Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH,
                                    X-Finance hợp tác với tập đoàn ABC đánh dấu
                                    bước ngoặt trong ngành ABC song
                                </div>
                                <div className="flex">
                                    <Image
                                        src={'/icons/news/time.svg'}
                                        alt="time"
                                        width={24}
                                        height={24}
                                    />
                                    <div className=" h-6 font-normal text-sm md:text-[16px] leading-6 tracking-normal text-[#4B5563]">
                                        12:20 12/12/2025
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full h-auto">
                                <Image
                                    src="/images/news/pic-2.png"
                                    alt="picture"
                                    width={338}
                                    height={338}
                                    className="w-full h-auto object-cover "
                                />
                            </div>
                            <div className="w-full">
                                <div className="font-bold text-sm md:text-[18px] leading-[27px] tracking-normal text-justify text-[#374151]">
                                    Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH,
                                    X-Finance hợp tác với tập đoàn ABC đánh dấu
                                    bước ngoặt trong ngành ABC song
                                </div>
                                <div className="flex">
                                    <Image
                                        src={'/icons/news/time.svg'}
                                        alt="time"
                                        width={24}
                                        height={24}
                                    />
                                    <div className=" h-6 font-normal text-sm md:text-[16px] leading-6 tracking-normal text-[#4B5563]">
                                        12:20 12/12/2025
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-full h-auto">
                                <Image
                                    src="/images/news/pic-3.png"
                                    alt="picture"
                                    width={338}
                                    height={338}
                                    className="w-full h-auto object-cover "
                                />
                            </div>
                            <div className="w-full">
                                <div className="font-bold text-sm md:text-[18px] leading-[27px] tracking-normal text-justify text-[#374151]">
                                    Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH,
                                    X-Finance hợp tác với tập đoàn ABC đánh dấu
                                    bước ngoặt trong ngành ABC song
                                </div>
                                <div className="flex">
                                    <Image
                                        src={'/icons/news/time.svg'}
                                        alt="time"
                                        width={24}
                                        height={24}
                                    />
                                    <div className=" h-6 font-normal text-sm md:text-[16px] leading-6 tracking-normal text-[#4B5563]">
                                        12:20 12/12/2025
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderImageLayout>
    );
};

export default page;
