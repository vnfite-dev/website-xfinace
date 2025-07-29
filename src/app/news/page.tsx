import HeaderImageLayout from "@/components/molecules/HeaderImageLayout";
import "./StyleNews.css";
import FeatureNews from "@/components/newsmodules/FeatureNews";
import XFinaceNews from "@/components/newsmodules/XFinaceNews";
import YoutubeShort from "../about/YoutubeShort";
export default function NewsPage() {
  return (
    <HeaderImageLayout imageHead="/images/support/support-header.png">
      <FeatureNews />
      <XFinaceNews />
      {/* <div className="max-w-[1280px] w-full h-full flex flex-col items-start justify-start gap-2 mx-auto mb-10">
      <div className="bg-red w-full">
      <p className="font-bold text-lg sm:text-2xl md:text-4xl leading-6 md:leading-14 text-center mt-4 sm:mt-8 lg:mt-12">
          <span className="text-main-color">X-Finance</span>{" "}
          và khách hàng
        </p>
        <YoutubeShort />
      </div>
      </div> */}
    </HeaderImageLayout>
  );
}