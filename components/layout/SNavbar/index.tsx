import React, { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import styles from '@/styles/layout/_navbar.module.scss'
import { FaHome, FaSearch } from 'react-icons/fa'
import path from "@/constants/path";
import { useOpenMenu } from "@/stores/useOpenMenu";
import { FaCloudUploadAlt, FaRegEye, FaSignal } from "react-icons/fa";
import { BiLike, BiRefresh } from "react-icons/bi";
// import ItemSearch from "./ItemSearch";

const menus = [
    { code: 'TH', name: 'TRUYỆN HOT', path: path.TRUYEN_HOT, },
    { code: 'TL', name: 'THỂ LOẠI', path: path.TIM_TRUYEN + '?sort=' + 0 },
    { code: 'FOLLOW', name: 'ĐANG THEO DÕI', path: path.THEO_DOI, },
    { code: 'RANK', name: 'XẾP HẠNG', path: path.TIM_TRUYEN },
    { code: 'FIND', name: 'TÌM TRUYỆN', path: path.TIM_KIEM_NANG_CAO },
    { code: "CT", name: 'CON TRAI', path: path.TRUYEN_CON_TRAI },
    { code: 'CG', name: 'CON GÁI', path: path.TRUYEN_CON_GAI },
    { code: 'APP', name: 'TẢI APP', path: path.APP }
]

const rank = [
    { value: '2', code: 'ALL', name: 'Top all', icon: <FaRegEye /> },
    { value: '7', code: 'FULL', name: 'Bình luận', icon: <FaSignal /> },
    { value: '3', code: 'MONTHS', name: 'Top tháng', icon: <FaRegEye /> },
    { value: '6', code: 'LIKE', name: 'Theo dõi', icon: <BiLike /> },
    { value: '4', code: 'WEEK', name: 'Top tuần', icon: <FaRegEye /> },
    { value: '0', code: 'UPDATE', name: 'Mới cập nhật', icon: <BiRefresh /> },
    { value: '5', code: 'DAY', name: 'Top ngày', icon: <FaRegEye /> },
    { value: '1', code: 'NEW', name: 'Truyện mới', icon: <FaCloudUploadAlt /> },
]


function SNavbar() {
    const [showGenre, setShowGenre] = useState(false);

    const [showRank, setShowRank] = useState(false);

    const { open, setOpen, act, setAct } = useOpenMenu(state => ({
        open: state.open,
        setOpen: state.setOpen,
        act: state.act,
        setAct: state.setAct,
    }))

    const showMegaMenu = (code: string) => {
        switch (code) {
            case 'TL':
                setShowGenre(!showGenre)
                break
            case 'RANK':
                setShowRank(!showRank);
                break
        }
    }

    const hideMegaMenu = (code: string) => {
        switch (code) {
            case 'TL':
                setShowGenre(false)
                break
            case 'RANK':
                setShowRank(false);
                break
        }
    }

    const renderMegaMenu = (code: string) => {
        switch (code) {
            case 'TL':
                return (
                    <>
                        <ul className={`${showGenre ? styles.megaMenuShow : styles.megaMenu}`} onMouseLeave={() => hideMegaMenu(code)}>
                            <li style={{ display: 'flex', flexWrap: 'wrap', marginLeft: "20px" }}>
                                <div className={styles.wrapperChild}>
                                    <ul className={styles.child}>
                                        <a className={styles.red} onClick={() => setOpen(false)}>Tất cả</a>
                                    </ul>
                                </div>
                                {/* {Array.isArray(cate) && (
                                    cate?.map((it, index) => (
                                        <div className={styles.wrapperChild} key={index} >
                                            <ul className={styles.child}
                                                onMouseOver={() => handleMouseOver(it?._id)}
                                                onMouseOut={() => handleMouseOut}
                                            >
                                                <Link
                                                    className={`${activeList.indexOf(it._id) > -1 && styles.red}`}
                                                    onClick={() => setOpen(false)}
                                                    to={path.TIM_TRUYEN + '-' + toSlug(it?.name) + '-' + it?._id + '?sort=0'}>
                                                    {it?.name}
                                                </Link>
                                            </ul>
                                        </div>
                                    ))
                                )} */}
                            </li>
                            {/* <li className={`${isHovering ? styles.desShow : styles.desHide}`}>
                                <p className={`${styles.tip} ${styles.separator}`}>{cate.find(v => v._id === id)?.description}</p>
                            </li> */}
                        </ul>
                    </>
                )
            case 'RANK':
                return (
                    <div className={`${showRank ? styles.rankShow : styles.rank}`} onMouseLeave={() => hideMegaMenu(code)}>
                        {rank.map((it, index) => (
                            <a onClick={() => {
                                setOpen(false)
                                // navigate({pathname: path.TIM_TRUYEN, search: createSearchParams({sort: it.value}).toString})
                            }} key={index}
                                className={`${it.code === 'FULL' ? styles.full : ''}`}
                                style={{ display: 'flex', gap: '5px' }}>
                                <span>{it.icon}</span><span>{it.name}</span>
                            </a>
                        ))}
                    </div>
                )
        }
    }

    const renderMenu = () => (
        menus.map(({ code, path, name }, index) => (
            <li key={index}
                className={`${code === "CT" || code === "CG" ? styles.hide : ''} ${act === code ? styles.act : ''}`}
                onMouseEnter={() => showMegaMenu(code)}
                onClick={() => {
                    showMegaMenu(code)
                    setAct(code)
                    if (code !== 'TL' && code !== 'RANK') {
                        // navigate(path)
                    }
                }}
                onMouseLeave={() => hideMegaMenu(code)}
            >
                {/* to={code === "TL" || code === 'RANK' ? '/tim-truyen' + '?sort=0' : path} */}
                <a
                    onClick={() => setOpen(false)}
                    className={`${styles.topLinkMega} ${code === "TL" || code === 'RANK' ? "dropdown-toggle" : ''}`}
                >
                    {name}
                </a>
                {renderMegaMenu(code)}
            </li>
        ))
    )

    return (
        <>
            <nav className={styles.mainNav}>
                <Container>
                    <ul className={styles.mainMenu}>
                        <li className={`${act === "HOME" ? styles.act : ''}`} onClick={() => {
                            setAct("HOME")
                        }}>
                            <a className={styles.topLinkMega}>
                                <FaHome size={20} />
                            </a>
                        </li>
                        {renderMenu()}
                        <li className={`${styles.hide} ${act === "GROUP" ? styles.act : ''}`} onClick={() => setAct("GROUP")}>
                            <a className={styles.topLinkMega} target={'_blank'} href={'https://www.facebook.com/profile.php?id=100086238262854'}>
                                GROUP
                            </a>
                        </li>
                    </ul>
                </Container>
            </nav>
            {/*nav mobile*/}
            <div className={`${open ? styles.navShow : styles.navHide}`}>
                <div className={styles.search_box}>
                    <div className={styles.input_group}>
                        <input type="text" className={`form-control ${styles.search_input}`} placeholder={"Tìm truyện..."} />
                        <span className={styles.box_icon}><FaSearch className={styles.icon} /></span>
                        {/* <ItemSearch data={data} /> */}
                    </div>
                </div>
                <div className={styles.module_content}>
                    <ul>
                        {renderMenu()}
                        <li className={`${styles.hide} ${act === "GROUP" ? styles.act : ''}`} onClick={() => setAct("GROUP")}>
                            <a className={styles.topLinkMega} target={'_blank'} href={'https://www.facebook.com/profile.php?id=100086238262854'}>
                                GROUP
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SNavbar;