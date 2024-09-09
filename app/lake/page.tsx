import Image from "next/image";
import Marker from "@/app/ui/marker";
import { fetchMarkers } from "../lib/data";

function Grid({
  x, y
}: {
  x: number, y: number
}) {
  return (
    <div
      style={{
        position:"absolute",
        left: 0,
        top: 0,
        width: x,
        height: y,
        backgroundImage: "URL('/grid.png')",
      }}
    />
  )
}

async function buildMarkerElements() {
  const markers = await fetchMarkers();
  // console.log(markers);
  const markerElements = markers.map((marker) => {
    return (
      <Marker
        key={marker.id}
        posX={marker.posx}
        posY={marker.posy}
        icontype={marker.icontype}
        text={marker.text}
        textPosition={marker.position}
        note={marker.note}
      />
    );
  });
  return markerElements;
}

export default async function Page() {
  const markers = await buildMarkerElements();
  return (
    <>
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
        <Grid x={800} y={1046} />
        {markers}
      </div>
    </>
  );
}