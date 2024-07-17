import Header from "../../componets/Header.jsx";
import {useQuery} from "@tanstack/react-query";
import apiService from "../../services/apiService.js";
import {Link} from "react-router-dom";
import Footer from "../../componets/Footer.jsx";
import {useEffect, useRef, useState} from "react";

function Toy() {
    const {data: sideMenu} = useQuery({
        queryKey: ['apiService.getToySideMenu'], queryFn: () => apiService.getToySideMenu()
    });

    const {data: product} = useQuery({
        queryKey: ['apiService.getToyProduct'], queryFn: () => apiService.getToyProduct()
    });

    const [openMenus, setOpenMenus] = useState({});
    const menuRefs = useRef({});

    const handleMenuClick = (menuId) => {
        setOpenMenus(prevState => ({
            ...prevState,
            [menuId]: !prevState[menuId]
        }));
    };

    useEffect(() => {
        Object.keys(openMenus).forEach(menuId => {
            const menuElement = menuRefs.current[menuId];
            if (menuElement) {
                if (openMenus[menuId]) {
                    menuElement.style.maxHeight = `${menuElement.scrollHeight}px`;
                } else {
                    menuElement.style.maxHeight = '0px';
                }
            }
        });
    }, [openMenus]);

    return (
        <>
            <Header />
            <div id="toy_container">
                <section className="section_1">
                    <div className="blackBg"></div>
                    <div className="s1_textBox">
                        <h4>Toy & Collectibles</h4>
                        <p>Discover new ways to show love for your favorite characters.</p>
                    </div>
                </section>
                <section className="section_2">
                    <div className="s2_left">
                        {sideMenu?.data?.map((info, i) => (
                            <div className="menu_name" key={i}>
                                <div className="menu_box" onClick={() => handleMenuClick(i)}>
                                    <p>{info.menu}</p>
                                    {openMenus[i] ? (
                                        <i className="fa-solid fa-minus"></i>
                                    ) : (
                                        <i className="fa-solid fa-plus"></i>
                                    )}
                                    <i className="fa-solid fa-plus"></i>
                                    <i className="fa-solid fa-minus"></i>
                                </div>
                                <div
                                    className={`menu_slider ${openMenus[i] ? 'active' : ''}`}
                                    ref={el => menuRefs.current[i] = el}
                                >
                                    {info?.child?.map((tit, j) => (
                                        <Link to="" key={j}>
                                            <span>{tit.title}<i className="fa-solid fa-angle-right"></i></span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="s2_right">
                        <div className="allSelect">
                            <input type="checkbox" id="allChecked" className="check" onClick='selectAll(this)' />
                            <label htmlFor="allChecked" className="onofflabel">
                                <span>전체선택</span>
                            </label>
                        </div>
                        <div className="s2_right_wrap">
                            {
                                product?.data?.map((info, i) => {
                                    return (
                                        <div className="s2_right_box" key={i}>
                                            <div className="s2_etc">
                                                <input type="checkbox" className="check" name="select_check" />
                                            </div>
                                            <Link to="">
                                                <div className="s2_imgBox">
                                                    <img src={info.defaultImg} alt={info.defaultAlt} className="img1" />
                                                    <img src={info.changeImg} alt={info.changeAlt} className="img2" />
                                                </div>
                                                <div className="s2_textBox">
                                                    <p className="s2_friday "><i className="fa-solid fa-tags"></i>{info.label}</p>
                                                    <p className="s2_title ">{info.title}</p>
                                                    <div className="s2_price">
                                                        <p className="price">{info.price}</p>
                                                        <p className="discount">{info.discount}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="wish"></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Toy;