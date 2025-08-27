"use client";

import Spline from "@splinetool/react-spline";

type Props = {
  sceneUrl: string;
  className?: string;
};

export default function SplineRobot({ sceneUrl, className }: Props) {
  return (
    <div className={className}>
      <Spline scene={sceneUrl} />
    </div>
  );
}
