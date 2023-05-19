import "./Banner.css";

import { banner } from "./constant";
import { BannerCard } from "./BannerCard/BannerCard";

export function Banner() {
  return (
    <div className="BannerContainer">
      <div className="BannerLeftContainer">
        <div className="BannerBiggerContainer">
          <div className="BannerMainHeading">Quick</div>
          <div className="BannerTitle">delivery at</div>
          <div className="BannerSubTitle">your doorstep</div>
        </div>
        <div className="BannerSmallText">
          With just a few taps on your smartphone, you can order fresh produce,
          meats, dairy products, and pantry staples.
        </div>
      </div>
      <div className="BannerRight">
        <div className="BannerGrid">
          {banner.map((banner) => {
            return <BannerCard key={banner.title} bannerData={banner} />;
          })}
        </div>
      </div>
    </div>
  );
}
