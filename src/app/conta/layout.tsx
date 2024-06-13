import ContaHeader from "@/components/conta/conta-header";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha Conta",
};

export default function ContaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  );
}
