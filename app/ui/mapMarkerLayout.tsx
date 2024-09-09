'use client';
import { useState } from "react";
import Image from "next/image";
import { GridToggle, Grid } from "@/app/ui/grid";

export function MapMarkerLayout({
  x, y, markers
}: {
  x: number, y: number, markers: React.ReactNode
}) {
  const [isGridVisible, setGridVisible] = useState(false);
  return (
    <>
      <GridToggle
        isGridVisible={isGridVisible}
        onChange={()=>setGridVisible(!isGridVisible)}
      />
      <div
        className="relative"
        style={{
          borderWidth: "3px",
          borderColor: "blue",
          borderStyle: "double",
          overflow: "hidden",
          width: 800+6,
          height: 1046+6,
        }}
      >
        <div
        >
          <Image
            src="/アデルカ渓谷.png"
            alt="アデルカ渓谷"
            width={800}
            height={1046}
            style={{
              position: "absolute",
              top: -2,
              left: -11,
              width: 800,
              height: 1046,
            }}
            priority={true}
          />
        </div>
        <Grid x={x} y={y} isGridVisible={isGridVisible} />
        {markers}
      </div>
    </>
  );
}