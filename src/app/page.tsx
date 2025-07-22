import HomeLoanPackage from "@/components/molecules/HomeLoanPackage";
import HomeCounter from "@/components/molecules/HomeCounter";
import HomeTitle from "@/components/molecules/HomeTitle";
import HomePartner from "@/components/molecules/HomePartner";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto mb-32">
      <HomeTitle />
      <HomeCounter />
      <HomeLoanPackage />
      <HomePartner />
    </div>
  );
}
