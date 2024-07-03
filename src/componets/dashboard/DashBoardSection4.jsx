import {useQuery} from "@tanstack/react-query";
import apiService from "../../services/apiService.js";
import Slider from "react-slick";

function DashBoardSection4() {
    const {data: responseData} = useQuery({
        queryKey: ['apiService.getSection4'], queryFn: () => apiService.getSection4()
    });

    const settings = {
        dots: true, arrow:true, infinite: true, speed: 300, slidesToShow: 4, slidesToScroll: 4, pauseOnHover: true, adaptiveHeight: true,
    };

    console.log("responseData", responseData);

    return(
        <>
            <section id="section_4">
                <div className="s4_box">
                    <div className="s4_top">
                        <div className="s4_top_top">
                            <h4>MARVEL NEWS</h4>
                            <a href="sub/news.html">
                                뉴스 전체보기
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        <div className="s4_top_bottom">
                            <Slider {...settings}>
                                {
                                    responseData?.data?.map((info, i) => {
                                        return (
                                            <div className="news_list" key={i}>
                                                <span>
                                                    <a className="empty_box">
                                                        <div className="news_list_img top_list_img_white">
                                                            <img src={info.img} alt="" />
                                                        </div>
                                                    </a>
                                                </span>
                                                <div className="news_contents">
                                                    <h4>{info.title}</h4>
                                                    <a>
                                                        <p>{info.desc}</p>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                    <div className="s4_bottom">
                        <div className="s4_bottom_top">
                            <h4>Social Channel</h4>
                        </div>
                        <div className="s4_bottom_bottom">
                            <div className="s4_bottom_left">
                                <div className="top_list">
                                    <span>
                                        <a href="https://www.youtube.com/c/marvel" className="empty_box"
                                           target="_blank">
                                            <div className="top_list_img">
                                                <img src="/dashboard/section_4/marvel_youtube.PNG" alt="" />
                                            </div>
                                            <h4 className="empty_box_title ">Marvel Channel</h4>
                                            <p className="empty_box_content">마블 Youtube 바로가기</p>
                                            <img src="/dashboard/section_4/youtube_icon.png" alt="" className="youtube_icon" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div className="s4_bottom_right">
                                <div className="top_list">
                                    <span>
                                        <a href="https://www.marvel.com/" className="empty_box" target="_blank">
                                            <div className="top_list_img">
                                                <img src="/dashboard/section_4/marvel_homepage.PNG" alt="" />
                                            </div>
                                            <h4 className="empty_box_title ">Marvel Homepage</h4>
                                            <p className="empty_box_content">마블 공식 홈페이지 바로가기</p>
                                            <img src="/dashboard/section_4/homepage_icon.svg" alt="" className="homepage_icon" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashBoardSection4;