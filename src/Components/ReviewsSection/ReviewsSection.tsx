import StarsImgs from "../../assets/Imgs/ReviewsSection/StarsImg.webp";
import ReviewerLogo from "../../assets/Imgs/ReviewsSection/Reviewerlogo.webp";
import ReviewerMiniLogo from "../../assets/Imgs/ReviewsSection/Reviewericon.webp";
import Verification from "../../assets/Imgs/ReviewsSection/VerifiedCheck.webp";
import { useLanguage } from "../Language/LanguageContext";
import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { useState } from "react";
function ReviewsSection() {
    const {texts} = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
    const handleToggle = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index));
};
  return (
    <>
        <section className="ReviewGeneral">
            <div className="ReviewHeadline">
                <p>{texts.ReviewsSection.ReviewTitle}</p>
                <p>{texts.ReviewsSection.ReviewSubtitle}</p>
                <p>{texts.ReviewsSection.ReviewDescription}</p>
            </div>
            <main className="ReviewsItemsContain">
                <div className="RatingWidgetLeft">
                    <p>{texts.ReviewsSection.RatingWidget.Title}</p>
                    <section className="StarsGroup">
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                    </section>
                    <p>{texts.ReviewsSection.RatingWidget.RatingBased} <span>{texts.ReviewsSection.RatingWidget.RatingCount}</span></p>
                    <img className="ReviewerLogo" src={ReviewerLogo} loading="lazy" alt="Reviewer Logo" width={200}  />
                </div>
                <div className="ReviewSlider">
                    <Swiper className="Swiper" modules={[Navigation, Pagination, Autoplay]} pagination={{clickable: true, el: '.custom-bullet-pagination', bulletClass: 'custom-bullet', bulletActiveClass: 'custom-bullet-active'}} spaceBetween={0} autoplay={{delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true}} loop={true} slidesPerView={3} navigation breakpoints={{0: {slidesPerView: 1,}, 829:{slidesPerView:2}, 1125:{slidesPerView:3}}}>
                        {texts.ReviewsSection.ReviewsCards.map((values, index) =>{
                        const isExpanded = expandedIndex === index;
                        return (
                        <SwiperSlide key={index}>
                            <div className="Card">
                                <div className={`ReviewCards ${isExpanded ? 'expanded' : ''}`} >
                                <header className="ReviewHeadInfo">
                                    <div className="ReviewProfile">
                                        <img src={values.ProfilePicture} alt="ProfilePicture" loading="lazy" width={40} height={40} />
                                        <div className="ReviewPersonInfo">
                                            <p>{values.PersonName}</p>
                                            <span>{values.PublicationDate}</span>
                                        </div>
                                    </div>
                                    <img src={ReviewerMiniLogo} alt="ReviewerMiniLogo" loading="lazy" width={25} height={25}  />
                                </header>
                                <section className="RatingPerson">
                                    <div className="StarsCalification">
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                    </div>
                                    <img src={Verification} loading="lazy" alt="Verification Button" width={25} height={25} />
                                </section>
                                <article>
                                    <span className="ShortDescription">{values.MainDescription}</span>
                                    <p className="OpinionPerson">
                                        {values.Opinion}
                                    </p>
                                </article>
                            </div>
                            <aside className="ReadMore" onClick={() => handleToggle(index)}>
                                <p>{isExpanded ? texts.ReviewsSection.TextView.ReadLess : texts.ReviewsSection.TextView.ReadMore}</p>
                            </aside>
                            </div>  
                        </SwiperSlide>
                        )
                        })}
                        <div className="custom-bullet-pagination"></div>
                    </Swiper>
                    
                    
                </div>
            </main>
            
        </section>
    </>
    
  )
}

export default ReviewsSection