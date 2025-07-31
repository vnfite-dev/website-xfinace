"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type InputCustomProps = {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

export default function InputCustom({
  label,
  value,
  onChange,
  placeholder,
  className,
}: InputCustomProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <p className="absolute bg-accent text-sm font-bold -top-2.5 left-4">
        {label} <span className="text-main-color">*</span>
      </p>
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color p-5 text-[16px]"
      />
    </div>
  );
}
