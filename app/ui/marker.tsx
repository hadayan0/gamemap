import Image from "next/image";
import { fetchIcontype } from "@/app/lib/data";

const textBoxWidth = 150;
const textBoxHeight = 60;

function UndefinedIcon() {
  return (
    <div
      style={{
        width: 13,
        height: 13,
        backgroundColor: "white",
        borderRadius: 6,
      }}
    />
  );
}

async function Icon({
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
      style={{
        position: "absolute",
        top: -row[0].width / 2,
        left: -row[0].height / 2,
        maxWidth: row[0].width,
        maxHeight: row[0].height,
      }}
    />
  );
}


export default function Marker({
  posX, posY, icontype, text, textPosition, note
}: {
  posX: number,
  posY: number,
  icontype: string,
  text: string,
  textPosition: string,
  note: string,
}) {
  const baseStyle = {
    display: (text) ? "table-cell" : "none",
    width: textBoxWidth,
    height: textBoxHeight,
    position: "relative",
    backgroundColor: "rgba(255,80,100,0.2)",
    fontSize: 13
  };
  const positionStyle = _getPositionStyle(textPosition);
  return (
    <div
      style={{
        position: "absolute",
        top: 8 * posY,
        left: 8 * posX,
      }}
      title={note}
    >
      <Icon icontype={icontype} />
      <div style={{ ...baseStyle, ...positionStyle }} >
        {text}
      </div>
    </div>
  );

  function _getPositionStyle(textPosition: string) {
    const offset = 7;
    let positionStyle;
    switch (textPosition) {
      case "west":
        positionStyle = {
          left: -(textBoxWidth + offset),
          top: -textBoxHeight / 2,
          textAlign: "right",
          verticalAlign: "middle",
        };
        break;
      case "east":
        positionStyle = {
          left: offset,
          top: -textBoxHeight / 2,
          textAlign: "left",
          verticalAlign: "middle",
        };
        break;
      case "south":
        positionStyle = {
          left: -textBoxWidth / 2,
          top: offset,
          textAlign: "center",
          verticalAlign: "top",
        };
        break;
      case "north":
      default:
        positionStyle = {
          left: -textBoxWidth / 2,
          top: -(textBoxHeight + offset),
          textAlign: "center",
          verticalAlign: "bottom",
        };
        break;
    }
    return positionStyle;
  }
}