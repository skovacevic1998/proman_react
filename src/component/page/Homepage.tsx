import { HomeImageList } from "../util/HomeImageList"

export const Homepage: React.FC = () => {
  return (
    <>
      <div className="homepage_main">
        <div className="title">
          <h1>WELCOME TO INFO PAGE</h1>
        </div>
        <div className="homepage_image_list">
          <HomeImageList/>
        </div>
        <div className="homepage_info1">
          <h3>This page is used to view all available projects. The projects are based on the Spring and React programming frameworks.</h3>
        </div>
      </div>
    </>
  );
};
