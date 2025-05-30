import StarsImgs from "../../assets/Imgs/ReviewsSection/StarsImg.webp";
import ReviewerLogo from "../../assets/Imgs/ReviewsSection/Reviewerlogo.webp";
import ReviewerMiniLogo from "../../assets/Imgs/ReviewsSection/Reviewericon.webp";
import Verification from "../../assets/Imgs/ReviewsSection/VerifiedCheck.webp";
import { useLanguage } from "../Language/LanguageContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from "react";
function ReviewsSection() {
    const {texts} = useLanguage();
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleToggle = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };
  return (
    <>
        <section className="ReviewGeneral">
            <div className="ReviewHeadline">
                <p>{texts.ReviewsSectionn.ReviewTitle}</p>
                <p>{texts.ReviewsSectionn.ReviewSubtitle}</p>
                <p>{texts.ReviewsSectionn.ReviewDescription}</p>
            </div>
            <main className="ReviewsItemsContain">
                <div className="RatingWidgetLeft">
                    <p>{texts.ReviewsSectionn.RatingWidget.Title}</p>
                    <section className="StarsGroup">
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                        <img src={StarsImgs} loading="lazy" alt="Stars" width={30} height={30} />
                    </section>
                    <p>{texts.ReviewsSectionn.RatingWidget.RatingBased} <span>{texts.ReviewsSectionn.RatingWidget.RatingCount}</span></p>
                    <img className="ReviewerLogo" src={ReviewerLogo} loading="lazy" alt="Reviewer Logo" width={200}  />
                </div>
                <div className="ReviewSlider">
                    <Swiper className="Swiper" modules={[Navigation, Pagination]} pagination={{clickable: true, el: '.custom-bullet-pagination', bulletClass: 'custom-bullet', bulletActiveClass: 'custom-bullet-active'}} spaceBetween={0} slidesPerView={3} navigation breakpoints={{0: {slidesPerView: 1,}, 829:{slidesPerView:2}, 1125:{slidesPerView:3}}}>
                        {texts.ReviewsSectionn.ReviewsCards.map((values, index) =>{
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
                                    <div>
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                        <img src={StarsImgs} loading="lazy" alt="Stars" width={17} height={17} />
                                    </div>
                                    <img src={Verification} loading="lazy" alt="Verification Button" width={25} height={25} />
                                </section>
                                <article>
                                    <p className="OpinionPerson">
                                        {values.Opinion}
                                    </p>
                                </article>
                            </div>
                            <aside className="ReadMore" onClick={() => handleToggle(index)}>
                                <p>{isExpanded ? 'Read Less' : '... Read More'}</p>
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