import Image from "next/image";
import Marker from "@/app/ui/marker";
import { fetchMarkers } from "../lib/data";

function IconGrid({
  x, y, size
}: {
  x: number, y: number, size: number
}) {
  let icons = [];
  for (let i = 0; i < size ** 2; i++) {
    const dx = i % size * 2;
    const dy = Math.floor(i / size) * 2;
    icons.push(
      <Marker
        posX={x + dx}
        posY={y + dy}
        icontype="8405db89-3b12-4033-889f-29b65df1e036"
      />
    );
  }

  return icons;
}

async function buildMarkerElements() {
  const markers = await fetchMarkers();
  // console.log(markers);
  let markerElements = markers.map((marker) => {
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
          <img
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
            priority="true"
          />
        </div>
        <IconGrid x={0} y={0} size={100} />
        {markers}
      </div>
    </>
  );
}