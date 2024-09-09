
export function GridToggle({
  isGridVisible,
  onChange,
}: {
  isGridVisible: boolean,
  onChange: () => void,
}) {
  return (
    <label
      className="inline-flex items-center cursor-pointer"
    >
      <input
        id="isVisibleToggle"
        type="checkbox"
        checked={isGridVisible}
        className="sr-only peer"
        onChange={onChange}
      />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      {/* <oinput type="checkbox" /> */}
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        グリッドを表示する
      </span>
    </label>
  );
}

export function Grid({
  x, y, isGridVisible
}: {
  x: number, y: number, isGridVisible: boolean
}) {
  return (
    <div
      style={{
        position:"absolute",
        left: 0,
        top: 0,
        width: x,
        height: y,
        backgroundImage: isGridVisible? "URL('/grid.png')": "none",
        mixBlendMode: "lighten",
      }}
    />
  );
}