import HeaderImageLayout from "@/components/molecules/HeaderImageLayout";
import HomeLoanPackageChild from "@/components/molecules/HomeLoanPackageChild";

export const metadata = {
  title: "Dịch vụ",
  description: "Dịch vụ cho vay thế chấp - X-Finance",
};

export default function ServicesPage() {
    return (
        <HeaderImageLayout imageHead="/images/services/background.png">
            <div className="max-w-[1280px] w-full h-full flex flex-col items-start justify-start gap-4 mx-auto mb-10">
                <HomeLoanPackageChild />
                <div className="w-full mx-auto">
                    <p className="text-2xl text-center font-bold">Thủ tục và các giấy tờ cần chuẩn bị</p>
                    <div>
                        <div>
                            <p>Thủ tục</p>
                            
                        </div>
                        <div>
                            <p>Chuẩn bị</p>
                        </div>
                    </div>
                </div>
            </div>
        </HeaderImageLayout>
    )
}