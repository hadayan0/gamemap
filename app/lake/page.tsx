import Image from "next/image";
import MapIcon from "@/app/ui/icon";

function Icon9x9({
  x, y
}: {
  x: number, y: number
}) {
  let icons = [];
  for (let i = 0; i < 9; i++) {
    const dx = i % 3 * 2;
    const dy = Math.floor(i / 3) * 2;
    icons.push(
      <MapIcon
        posX={x + dx}
        posY={y + dy}
        icontype="94d32272-a7da-4f3d-9950-b444b53b48b9"
      />
    );
  }

  return icons;
}

export default function Page() {
  return (
    <>
      <p>
        Hello, world!
      </p>
      <div
        className="relative"
        style={{
          borderWidth: "3px",
          borderColor: "blue",
          borderStyle: "double",
          overflow: "hidden",
          width: 916,
          height: 997,
        }}
      >
        <div
        >
          <Image
            src="/lake_2.png"
            alt="リタニアム地底湖 地下２階"
            width={916}
            height={997}
            style={{
              position: "absolute",
              top: -49,
              left: -103,
            }}
          />
        </div>
        <MapIcon
          posX={42}
          posY={28}
          icontype="959c1fb8-7654-4c6b-9bb1-de8d971051ec"
        />
        <MapIcon
          posX={44}
          posY={28}
          icontype="cabc4141-fe0f-4f83-adc0-04c0a5993246"
        />
        <MapIcon
          posX={46}
          posY={28}
          icontype="e2782382-f3c7-410a-9499-0aa33101e44f"
        />
        <Icon9x9 x={42} y={20} />
      </div>
    </>
  );
}