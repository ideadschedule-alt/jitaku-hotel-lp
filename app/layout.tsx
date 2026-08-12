import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "自宅ホテル化計画｜眠るたび、わたしに還る部屋。",
  description: "リビングから寝室までの内装デザイン・工事と、家具、ホテル仕様のリネン・アメニティを一体で届けるリノベーションサービス。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
