"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import Image from "next/image";
import { useEffect, useState } from "react";
import {
  CarIcon,
  MotobikeIcon,
  RedbookIcon,
} from "../../../public/icons/DynamicIcon";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import InputCustom from "@/components/molecules/InputCustom";
import Link from "next/link";

type SelectOption = {
  id: string;
  title: string;
  icon: React.ReactNode | string;
  description?: string;
};

type Info = {
  phoneNumber: string;
  commune: string;
  city: string;
  shop: string;
};

const LoanPackageOptions = [
  {
    id: "1",
    title: "Thế chấp đăng ký xe máy",
    icon: <MotobikeIcon color="#9CA3A0" size={32} />,
    description: "Khách hàng không cần để lại xe máy khi sử dụng gói vay này.",
  },
  {
    id: "2",
    title: "Thế chấp đăng ký oto",
    icon: <CarIcon color="#9CA3AF" size={32} />,
    description: "Khách hàng không cần để lại ô tô khi sử dụng gói vay này.",
  },
  {
    id: "3",
    title: "Thế chấp sổ đỏ",
    icon: <RedbookIcon color="#9CA3AF" size={32} />,
    description: "Khách hàng có thể vay tiền bằng cách thế chấp sổ đỏ.",
  },
];

const formatMoney = (value: number) => {
  return value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
  });
};

export default function ServiceRegister() {
  const [selectedOption, setSelectedOption] = useState<SelectOption>({
    id: "0",
    title: "Loại dịch vụ",
    icon: "",
    description: "Vui lòng chọn loại dịch vụ để tiếp tục.",
  });
  const [moneyList, setMoneyList] = useState<number>(5000000);
  const [termList, setTermList] = useState<number>(3);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const [info, setInfo] = useState<Info>({
    phoneNumber: "",
    commune: "",
    city: "",
    shop: "",
  });

  useEffect(() => {
    const interestRate = 0.05; // Giả sử lãi suất là 5%
    const totalAmount = moneyList + moneyList * interestRate * termList;
    const monthly = totalAmount / (termList * 12);
    setMonthlyPayment(monthly);
  }, [moneyList, termList]);

  return (
    <div className="w-full px-4 md:px-6 lg:px-8 py-4">
      <div className="flex flex-col sm:flex-row gap-x-6">
        <div className="w-full sm:w-1/2 px-4 sm:px-0">
          <p className="text-[16px] md:text-xl font-bold mb-4">Loại dịch vụ</p>
          <Select
            onValueChange={(value) => {
              const selected = LoanPackageOptions.find(
                (option) => option.id === value
              );
              if (selected) {
                setSelectedOption(selected);
              }
            }}
          >
            <SelectTrigger
              className="w-full max-w-[350px]"
              icon={selectedOption.icon}
            >
              {/* <SelectValue placeholder="Loại dịch vụ" /> */}
              <SelectValue placeholder="Loại dịch vụ">
                {selectedOption.title}
              </SelectValue>
            </SelectTrigger>
            <SelectContent key={selectedOption?.id}>
              {LoanPackageOptions.map((option, index) => (
                <SelectItem key={index} value={option.id}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="mt-4 text-xs sm:text-sm text-main-color">
            {selectedOption.description}
          </p>

          <p className="text-[16px] md:text-xl font-bold mt-6 sm:mt-8 mb-4">
            Số tiền bạn cần vay
          </p>
          <p className="text-[16px] md:text-xl font-bold leacenter text-center text-main-color">
            {formatMoney(moneyList)}
          </p>
          <Slider
            defaultValue={[5000000]}
            max={50000000}
            min={5000000}
            step={1000000}
            className="max-w-[450px] w-full mx-auto mt-4"
            onValueChange={(value) => {
              setMoneyList(value[0]);
            }}
          />
          <div className="flex flex-row justify-between mt-4 text-sm md:text-[16px]">
            <p>{formatMoney(5000000)}</p>
            <p>{formatMoney(50000000)}</p>
          </div>

          <p className="text-[16px] md:text-xl font-bold mt-6 sm:mt-8 mb-4">
            Kỳ hạn vay
          </p>
          <p className="text-[16px] md:text-xl font-bold leacenter text-center text-main-color">
            {termList} tháng
          </p>
          <Slider
            defaultValue={[3]}
            max={24}
            min={3}
            step={3}
            className="max-w-[450px] w-full mx-auto mt-4"
            onValueChange={(value) => {
              setTermList(value[0]);
            }}
          />
          <div className="flex flex-row justify-between mt-4 text-sm md:text-[16px]">
            <p>3 tháng</p>
            <p>24 tháng</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mt-14 sm:mt-0 rounded-xl shadow-md">
          <p className="text-lg md:text-xl font-bold">Số tiền trả hằng tháng</p>
          <p className="text-sm md:text-lg italic text-muted-foreground mb-4 sm:mb-10">
            (Số tiền dự tính tham khảo)
          </p>
          <p className="text-3xl md:text-5xl font-bold ">
            {formatMoney(monthlyPayment)}
          </p>
          <Button className="w-32  h-9 md:w-36 md:h-14 mt-6 md:mt-20 bg-grad cursor-pointer text-sm md:text-xl leading-none rounded-2xl">
            <span>Vay ngay</span>
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-lg md:text-xl lg:text-2xl text-center font-bold px-4 py-4">
          Thông tin đăng ký
        </p>
        <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-0 w-full mt-6">
          <InputCustom
            label="Số điện thoại"
            value={info.phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInfo({ ...info, phoneNumber: e.target.value })
            }
            placeholder="Nhập số điện thoại"
            className=""
          />
          <InputCustom
            label="Phường/xã"
            value={info.commune}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInfo({ ...info, commune: e.target.value })
            }
            placeholder="Nhập phường/xã"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 px-4 sm:px-0 w-full mt-6">
          <InputCustom
            label="Thành phố"
            value={info.city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInfo({ ...info, city: e.target.value })
            }
            placeholder="Nhập thành phố"
          />
          <InputCustom
            label="Cửa hàng"
            value={info.shop}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInfo({ ...info, shop: e.target.value })
            }
            placeholder="Nhập cửa hàng"
          />
        </div>
        <p className="text-xs sm:text-sm mt-4 px-4 sm:px-0 text-muted-foreground">
          Tôi đồng ý với các{" "}
          <Link href="/" target="_blank" className="text-[#3B82F6]">
            Chính sách bảo mật
          </Link>{" "}
          và{" "}
          <Link href="/" target="_blank" className="text-[#3B82F6]">
            Điều khoản của X-Finance
          </Link>
        </p>
        <div className="flex items-center justify-center mt-4">
          <Button className="w-40 h-9 md:w-52 md:h-14 bg-grad cursor-pointer text-sm md:text-xl leading-none rounded-2xl mx-auto">
            <span>Xác nhận</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
