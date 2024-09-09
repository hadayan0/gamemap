import Marker from "@/app/ui/marker";
import { MapMarkerLayout } from "@/app/ui/mapMarkerLayout";
import { fetchMarkers } from "@/app/lib/data";

async function buildMarkerElements() {
  const markers = await fetchMarkers();
  // console.log("markers=");
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

export default function Page() {
  const markers = buildMarkerElements();
  return (
    <>
      <MapMarkerLayout x={800} y={1046} markers={markers}/>
    </>
  );
}