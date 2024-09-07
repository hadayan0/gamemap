import Image from "next/image";
import MapIcon from "@/app/ui/icon";

export default function Page() {
  return (
    <>
      <p>
        Hello, world!
      </p>
      <div
        className="relative"
        style={{
          borderWidth:"3px",
          borderColor:"blue",
          borderStyle:"double",
          overflow:"hidden",
          width:916,
          height:997,
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
              position:"absolute",
              top:-50,
              left:-100,
            }}
          />
        </div>
        <MapIcon posX={44} posY={28}/>
      </div>
    </>
  );
}