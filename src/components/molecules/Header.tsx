import ButtonCustom from "@/components/molecules/ButtonCustom";
import Link from "next/link";

export default function Header() {
    const tab = [
        {
            name: "Giới thiệu",
            href: "/",
        },
        {
            name: "Dịch vụ",
            href: "/about",
        },
        {
            name: "Tin tức",
            href: "/contact",
        },
        {
            name: "Hỗ trợ",
            href: "/support",
        }
    ];

    return (
        <header
            suppressHydrationWarning={false}
            // className="min-h-[200px] md:min-h-[550px] md:max-h-fit"
        >
            <div className="max-w-[1280px] flex items-center justify-between p-2 bg-red-200 text-black mx-auto">
                <h3 className="text-xl font-bold">X-Finance</h3>
                <div className="w-[50%] flex items-center justify-between">
                    {tab.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-md font-bold hover:text-red-500 transition-colors p-4"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <ButtonCustom
                    title="Tải ứng dụng"
                    icon={false}
                    iconBeforeText={false}
                    color="red-custom"
                />
            </div>
        </header>
    )
}