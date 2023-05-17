import "./Loader.css";

export function Loader({ height, size }) {
  return (
    <div className="HomeLoaderContainer" style={{ height }}>
      <div className="Loarder" style={{ height: size, width: size }}></div>
    </div>
  );
}
