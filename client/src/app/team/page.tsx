import type { Metadata } from "next";
import ExpertTeamClient from "./ExpertTeamClient";

export const metadata: Metadata = {
  title: "Balale Expert Team — Balale.id",
  description:
    "Tim ahli Balale.id: kurator budaya, peneliti, desainer, dan pengembang teknologi yang berkolaborasi untuk pelestarian dan inovasi budaya Nusantara.",
};

export default function ExpertTeamPage() {
  return <ExpertTeamClient />;
}
