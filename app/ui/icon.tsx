import Image from "next/image";
import { fetchIcontype } from "@/app/lib/data";

function UndefinedIcon() {
  return (
    <div
      style={{
        width: 13,
        height: 13,
        textSize: 13,
        backgroundColor: "white",
        borderRadius: 6,
      }}
    />
  );
}

async function OneIcon({
  icontype
}: {
  icontype: string,
}) {
  const row = await fetchIcontype(icontype);
  if (row === null) {
    return <UndefinedIcon />;
  }
  return (
    <Image
      src={row[0].url}
      alt={row[0].alt}
      width={row[0].width}
      height={row[0].height}
    />
  );
}

export default function MapIcon({
  posX, posY, icontype
}: {
  posX: number,
  posY: number,
  icontype: string,
}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 8 * posY,
        left: 8 * posX,
      }}
    >
      {/* <OneIcon iconId="959c1fb8-7654-4c6b-9bb1-de8d971051ec" /> */}
      {/* <OneIcon icontype="cabc4141-fe0f-4f83-adc0-04c0a5993246" /> */}
      <OneIcon icontype={icontype} />
    </div>
  );
}