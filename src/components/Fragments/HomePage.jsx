import BannerTop from "../Beranda/BannerTop";
import CourseSection from "../Beranda/CourseSection";
import CourseCategory from "../Beranda/CourseCategory";
import ProductPage from "../Beranda/Products";
import NewsLetter from "../Beranda/NewsLetter";

const HomePage = () => {
  return (
      <div className=" py-16 px-[120px]">
        <BannerTop></BannerTop>
        <CourseSection></CourseSection>
        <CourseCategory></CourseCategory>
        <ProductPage></ProductPage>
        <NewsLetter></NewsLetter>
      </div>
  );
};

export default HomePage;
