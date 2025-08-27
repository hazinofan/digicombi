"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

const Spline = dynamic(
  () => import("@splinetool/react-spline").then((m) => m.default),
  { ssr: false }
) as ComponentType<{ scene: string; className?: string }>;

export default function SplineRobot({
  sceneUrl,
  className,
}: { sceneUrl: string; className?: string }) {
  return <Spline scene={sceneUrl} className={className} />;
}
