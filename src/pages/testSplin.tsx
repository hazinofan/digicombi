"use client";
import dynamic from "next/dynamic";
import SplineRobot from "../../components/SplineRobot";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function TestSpline() {
  return (
    <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
      <SplineRobot
        sceneUrl="https://prod.spline.design/mr5HIUUkmAe93obW/scene.splinecode"
        className="w-full h-full rounded-xl"
      />
    </div>
  );
}


