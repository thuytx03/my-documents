import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        Documents
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Các tài liệu cần lưu lại và ghi nhớ sẽ được tổng hợp và chia sẻ tại đây. Các tài liệu này sẽ hoàn toàn công khai.
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Bắt đầu
        </Link>
      </div>
    </div>
  );
}