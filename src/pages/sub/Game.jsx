import Header from "../../componets/Header.jsx";
import {useQuery} from "@tanstack/react-query";
import apiService from "../../services/apiService.js";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import Footer from "../../componets/Footer.jsx";

function Game() {
    const {data: gameSection1} = useQuery({
        queryKey: ['apiService.getGameSection1'], queryFn: () => apiService.getGameSection1()
    });

    const {data: gameSection2} = useQuery({
        queryKey: ['apiService.getGameSection2'], queryFn: () => apiService.getGameSection2()
    });

    const [onHover, setOnHover] = useState(false);
    const [showImgBox, setShowImgBox] = useState(true);

    const handelMouseEnter = () => {
        setOnHover(true);
    }

    const handelMouseLeave = () => {
        setOnHover(false);
    }

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            console.log(position);
            if (position <= 3500) {
                setShowImgBox(true);
            } else {
                setShowImgBox(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <div id="game_container">
                <section className="section_1">
                    <div className="section_1_bg"></div>
                    <div className="section_1_title">
                        <h3>GAMES</h3>
                        <p>Marvel의 다양한 게임을 만나보세요!</p>
                    </div>
                    <div className="section_1_content">
                        <div className={`s1_content_wrap ${!onHover ? "heartbeat" : ""}`} onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave}>
                            {
                                gameSection1?.data?.map((info, i) => {
                                    return (
                                        <div className="s1_box" key={i}>
                                            <Link to="">
                                                <img src={info.img} alt={info.alt} />
                                                <p className="comics_title">{info.title}</p>
                                                <span className="comics_h_name ">{info.date}</span>
                                            </Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
                <section className="section_2">
                    <div className="s2_main_title">
                        <p className="">ALL GAMES</p>
                    </div>
                    <div className="s2_wrap">
                        {
                            gameSection2?.data?.map((info, i) => {
                                return (
                                    <div className="s2_box" key={i}>
                                        <div className="s2_imgBox">
                                            <Link to="">
                                                <div className="s2_img">
                                                    <img src={info.img} alt={info.alt} />
                                                </div>
                                                <div className="s2_title">
                                                    <p>{info.title}</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="s2_hoverBox">
                                            <div className="s2_hoverBg"></div>
                                            <Link to="" className="s2_hoverContent">
                                                <img src="/sub/game/plus.svg" alt="plusButton" />
                                                <p>자세히보기</p>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
            <Footer />
            {
                showImgBox &&
                <div className="img_box" style={{display: "block"}}>
                    <img src="/sub/game/controlr.png" alt="controlr" />
                </div>
            }
        </>
    )
}

export default Game;