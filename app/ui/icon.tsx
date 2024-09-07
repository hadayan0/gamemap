import Image from "next/image";

function OneIcon({
  iconId
}: {
  iconId: string,
}) {
  let filename = "/"+iconId+".png";
  return (
    <Image
      src={filename}
      alt="青魂×３"
      width={13}
      height={13}
    />
  )
}

export default function MapIcon({
  posX, posY
}: {
  posX: number,
  posY: number,
})
{
  return (
    <div
      style={{
        position:"absolute",
        top:8*posY,
        left:8*posX,
      }}
    >
      <OneIcon iconId="b0"/>
    </div>
  );
}