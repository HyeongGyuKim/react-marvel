import React from "react";
import Slider from "react-slick";
import {useQuery} from "@tanstack/react-query";
import apiService from "../services/apiService.js";

function DashBoardSection2() {
    const {data: responseData} = useQuery({
        queryKey: ['apiService.getSection2'], queryFn: () => apiService.getSection2()
    });

    const settings = {
        dots: false, arrow:true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1,
    };

    return <div id="section_2" >
        <div className="s2_sliderWrap">
            <Slider {...settings}>
                {responseData?.data?.map((info) => {
                    return <>
                        <div className="s2_box">
                            <div className="s2_slide">
                                <img src={info.img} alt={info.title}/>
                            </div>
                            <div className="s2_slide_txt">
                                <p className="s2_slide_tit">{info.title}</p>
                                <p className="s2_slide_desc">{info.desc}</p>
                                <div className="s2_slide_etc">
                                    <div>
                                        <span>감독</span>
                                        <p>{info.director}</p>
                                    </div>
                                    <div>
                                        <span>출시일</span>
                                        <p>{info.date}</p>
                                    </div>
                                    <div>
                                        <span>출연진</span>
                                        <p>{info.actor}</p>
                                    </div>
                                </div>
                                <div className="s2_slide_video">
                                    <p>메인 예고편</p>
                                </div>
                            </div>
                        </div>
                    </>
                })}
            </Slider>
        </div>
    </div>;
}

export default DashBoardSection2;