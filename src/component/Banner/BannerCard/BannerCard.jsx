import "./BannerCard.css";

export function BannerCard({
  bannerData: { imageSrc, color, title, subTitle },
}) {
  return (
    <div style={{ background: color }} className="BannerCardContainer">
      <img src={imageSrc}></img>
      <div className="BannerCardTitle">{title}</div>
      <div className="BannerCardSubTitle">{subTitle}</div>
    </div>
  );
}
