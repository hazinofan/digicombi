"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function SplineRobot({
  sceneUrl,
  className,
}: {
  sceneUrl: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Spline scene={sceneUrl} />
    </div>
  );
}
