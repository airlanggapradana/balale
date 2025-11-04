import type { Metadata } from "next";
import StaffClient from "./StaffClient";

export const metadata: Metadata = {
  title: "Staff — Balale.id",
  description:
    "Tim internal Balale.id yang memastikan setiap inisiatif berjalan harmonis sesuai nilai budaya dan keberlanjutan.",
};

export default function Page() {
  return <StaffClient />;
}
