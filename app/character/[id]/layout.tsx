import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character",
  description: "Generated by KanThin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
