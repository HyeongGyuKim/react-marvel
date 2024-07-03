import {useQuery} from "@tanstack/react-query";
import apiService from "../../services/apiService.js";

function DashBoardSection3() {
    const {data: responseData} = useQuery({
        queryKey: ['apiService.getSection3'], queryFn: () => apiService.getSection3()
    });

    console.log("responseData", responseData);

    return (
        <>
            <section id="section_3">
                <div className="s3_box">
                    <div className="s3_top">
                        <div className="s3_top_left">
                            <h3>MARVEL</h3>
                            <h4>QUICK MENU</h4>
                        </div>
                        <div className="s3_top_right">
                            {
                                responseData?.data?.quickMenu?.map((info, i) => {
                                    return (
                                        <div className="s3_top_right_whiteBox" key={i}>
                                            <div className="top_list">
                                            <span>
                                                <a href="sub/introduction.html" className="empty_box">
                                                    <div className="top_list_img top_list_img_white">
                                                        <img src={info.img} alt={info.alt} />
                                                    </div>
                                                    <h4 className="top_empty_box_title">{info.title}</h4>
                                                    <p className="top_empty_box_content">{info.content}</p>
                                                    <p className="top_empty_box_detail">
                                                        자세히보기
                                                        <i className="fa-solid fa-angle-right"></i>
                                                    </p>
                                                </a>
                                            </span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="s3_bottom">
                        {
                            responseData?.data?.enjoy?.map((info, i) => {
                                return (
                                    <div className="s3_bottom_box" key={i}>
                                        <div className="top_list">
                                            <span>
                                                <a href="sub/game.html" className="empty_box">
                                                    <div className="top_list_img">
                                                        <img src={info.img} alt={info.alt} />
                                                    </div>
                                                    <h4 className="empty_box_title ">{info.title}</h4>
                                                    <pre className="empty_box_content">{info.content}</pre>
                                                    <p className="empty_box_detail">
                                                        자세히보기
                                                        <i className="fa-solid fa-angle-right"></i>
                                                    </p>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default DashBoardSection3;