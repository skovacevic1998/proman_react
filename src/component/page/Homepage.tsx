import { HomeImageList } from "../util/HomeImageList"

export const Homepage: React.FC = () => {
  return (
    <>
      <div className="homepage_main">
        <div className="homepage_title">
          <h1>Welcome to info page</h1>
        </div>
        <div className="homepage_image_list">
          <HomeImageList/>
        </div>
        <div className="homepage_info1">

        </div>
      </div>
    </>
  );
};
