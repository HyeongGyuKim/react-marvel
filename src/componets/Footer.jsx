import {useQuery} from "@tanstack/react-query";
import apiService from "../services/apiService.js";
import {Link} from "react-router-dom";

function Footer() {
    const {data: responseData} = useQuery({
        queryKey: ['apiService.footer'], queryFn: () => apiService.getFooter()
    });

    return(
        <footer id="footer">
            <div className="f_cont">
                <div className="f_top">
                    <img src="/dashboard/footer/f_marvel_logo.png" alt="footer_logo" />
                </div>
                <div className="f_middle">
                    <div className="f_middle_left">
                        <div className="f_middle_left_box1">
                            <dl>
                                <dt>상호명</dt>
                                <dd>마블 스튜디오</dd>
                            </dl>
                            <dl>
                                <dt>회장</dt>
                                <dd>아이작 펄머터</dd>
                            </dl>
                            <dl>
                                <dt>주소</dt>
                                <dd>서울특별시 강남구 테헤란로 501</dd>
                            </dl>
                        </div>
                        <div className="f_middle_left_box2">
                            <dl>
                                <dt>팩스</dt>
                                <dd>02.000.0000</dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd>marvel@gmail.com</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="f_middle_right">
                        <div className="f_middle_right_box1">
                            <a href="">
                                <img src="/dashboard/footer/marvel_insider.png" alt="marvel_insider" />
                                <div className="f_m_text">
                                    <p>MARVEL INSIDER</p>
                                    <span>Get Rewarded for being a Marvel Fan</span>
                                </div>
                            </a>
                        </div>
                        <div className="f_middle_right_box2">
                            <a href="">
                                <img src="/dashboard/footer/marvel_unlimited.png" alt="marvel_unlimited" />
                                <div className="f_m_text">
                                    <p>MARVEL UNLIMITED</p>
                                    <span>Access Over 30,000+ Digital Comics</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="f_sns">
                        <p className="f_sns_tit">FOLLOW MARVEL</p>
                        <ul className="social-links f_social">
                            {
                                responseData?.data?.map((info, i) => {
                                    return (
                                        <li className="f_social_img" key={i}>
                                            <Link to={info.href} target="_blank" aria-label={info.label}>
                                                <span className="icon--svg icon--svg--gray-fill icon--facebook " aria-hidden="true">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                                        <path d={info.path}></path>
                                                    </svg>
                                                </span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            <li className="f_social_img">
                                <Link target="_blank" aria-label="follow us on Twitch, opens a new window" to="https://www.twitch.tv/Marvel">
                                    <span className="icon--svg icon--svg--gray-fill" aria-hidden="true">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                            <path fill-opacity="0" d="M15.4 8.4l-2.5 2.5h-2.6L8 13.2v-2.3H5.1V1.3h10.3z"></path>
                                            <path d="M4.5 0L1.3 3.2v11.6h3.9V18l3.2-3.2H11L16.7 9V0H4.5zm10.9 8.4L12.8 11h-2.6L8 13.2V11H5.1V1.3h10.3v7.1z"></path>
                                            <path d="M12.2 3.5h1.3v3.9h-1.3zM8.7 3.5H10v3.9H8.7z"></path>
                                        </svg>
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="f_bottom">
                    <p className="f_copy">Copyright© 2024 Marvel All Rights Reserved.</p>
                    <ul className="f_menu">
                        <li><a href="">문의하기</a></li>
                        <li><a href="">이용약관</a></li>
                        <li><a href="">라이센스 계약</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;