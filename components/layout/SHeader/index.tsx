import { originalSurfer } from '@/theme';
import { Utils } from '@/utils';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { useElementSize, useOnClickOutside, useToggle } from 'usehooks-ts';
import { Col, Row } from 'react-bootstrap';
import { IoIosSearch, IoIosClose } from 'react-icons/io'
import { FaSearch, FaBars, FaRegLightbulb } from 'react-icons/fa'
import styles from '@/styles/layout/_header.module.scss';

function SHeader() {

	const [searchRef, { width = 0 }] = useElementSize();

	const [isOpenHistory, toggleHistory] = useToggle();

	const router = useRouter();

	const historyDropdownRef = useRef(null);

	const handleClickHistoryOutside = () => {
		toggleHistory();
	}

	useOnClickOutside(historyDropdownRef, handleClickHistoryOutside)

	// id={is_show_mobile?'header':undefined}

	return (
		<header className={styles.header} style={{ backgroundImage: `url(${Utils.generateUrlImage('bg_header.jpg')})`, }}>
			<div className={"container"}>
				<Row className={'items-center'}>
					<Col md={3} sm={4} xs={5}>
						<div className={styles.navHeader}>
							<a>
								<img src={Utils.generateUrlImage('logo.png')} alt={'logo'} />
							</a>
						</div>
					</Col>
					<Col md={4} className={styles.display}>
						<div ref={historyDropdownRef} className={styles.wrapperSearch}>
							<input className={styles.inputSearch} placeholder={'Tìm truyện...'} />
							<IoIosSearch className={styles.iconWrapperSearch} size={20} />
							{/* <ItemSearch data={data}/> */}
						</div>
					</Col>
					<Col md={2} sm={4} xs={4} className={styles.light_chat}>
						<div className="dark-mode-switch">
							<FaRegLightbulb size={24} type="checkbox" className={styles.light} id="theme-toggle" />
						</div>
					</Col>
					<Col md={0} sm={4} xs={3}>
						<div className={styles.responsive_search}>
							<div><FaSearch size={23} className={styles.iconSearch} /></div>
							<div className={styles.bar}><FaBars size={23}/></div>
						</div>
					</Col>
				</Row>
			</div>
		</header>
	);
}

export default SHeader;