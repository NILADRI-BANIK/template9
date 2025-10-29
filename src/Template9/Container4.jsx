import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../components/Hooks/axios";

import commentIcon from "../assets/images/Comment.png";
import shareIcon from "../assets/images/Share.png";
import { redirectToSocialMedia } from "../components/Hooks/RedirectToSocialMedia";
import LikeBtn from "../components/LikeButton/LikeBtn";
import { defaultPostData } from "../redux/store";
import style from "./Template9.module.scss";

const ActiveCard = ({ data }) => {

	return (
		<>
			<div className={style.activeContainer}>
				<div className={style.imageSection}>
					{data?.mediaType === "image" ? <img src={data?.mediaUrl[0]} alt="" /> : <video src={data?.mediaUrl[0]}></video>}
				</div>
				<div className={style.details}>
					<div className={style.upper}>
						<div className={style.profileLogo}>
							<img src={data?.userId?.ProfilePic} alt="" />
						</div>
						<div className={style.nameUsername}>
							<div className={style.name}>{data?.userId?.username}</div>
							<div className={style.userName}>{data?.userId?.displayName}</div>
						</div>
					</div>
					<div className={style.below}>
						<div className={style.desc}>{data?.caption}</div>
						<LikeBtn data={data} Icon={style.like} LikeIcon={style.LikeIcon} Text={style.likeCount} />
						<div className={style.icons}>
							<div className={style.comment}>
								<div className={style.commentIcon}>
									<img src={commentIcon} alt="" />
								</div>
								<div className={style.commentCount}>{data?.Comments?.length}</div>
							</div>
							<div className={style.shareIcon}>
								<img src={shareIcon} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

function Container4() {
	const navigate = useNavigate();
	const { userId } = useSelector((state) => state.auth);
	const [postData, setPostData] = useState([]);

	// for carousel
	const [active, setActive] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const percent = 0.071;
	const section = useRef(null);
	const [padding, setPadding] = useState(0);
	const handleSlideChanged = ({ item }) => {
		setActiveIndex(item);
	};

	useEffect(() => {
		if (userId === "") return setPostData(defaultPostData);
		axios
			.get(`/post/${userId}`)
			.then(({ data }) => {
				if (data.length === 0) {
					setPostData(defaultPostData);
					setActive(defaultPostData[0]);
				} else {
					setPostData(data);
					setActive(data[0]);
				}
			})
			.catch((e) => {
				console.log(e);
			});
	}, [userId]);

	const syncState = () => {
		const { current } = section;
		if (current) {
			setPadding(current.offsetWidth * percent);
		}
	};

	useEffect(syncState, []);

	const handleGallery = () => {
		if (redirectToSocialMedia()) return window.open(process.env.REACT_APP_SOCIAL_MEDIA_URL, "_self");
		navigate("/Gallery");
	};

	return (
		<div className={style.container4}>
			<div className={style.header}>
				<div className={style.mygallery}>My Gallery</div>
				<div className={style.viewall} onClick={handleGallery}>
					View All
				</div>
			</div>
			{/* slider section for mobile view */}
			<div className={style.mobileView}>
				<div className={style.ActiveSlide}>
					<ActiveCard data={active} />
				</div>
				<div className={style.smallContainer}>
					{postData.map((post, i) => (
						<SmallCards key={i} data={post} setActive={setActive} />
					))}
				</div>
			</div>

			{/* slider section for desktop view */}
			<div className={style.desktopView}>
				<div ref={section}>
					<AliceCarousel
						infinite
						mouseTracking
						// paddingRight={padding}
						onResized={syncState}
						onSlideChange={handleSlideChanged}
						autoPlay={true}
						autoPlayInterval={3000}
						disableButtonsControls>
						{postData.slice(0, 5).map((data, index) => (
							<div className="item" data-value="1" key={index}>
								<ActiveCard data={data} />
							</div>
						))}
					</AliceCarousel>
				</div>
			</div>
		</div>
	);
}

export default Container4;

const SmallCards = ({ data, setActive }) => {
	return (
		<>
			<div className={style.cardContainer} onClick={() => setActive(data)}>
				{data?.mediaType === "image" ? <img src={data?.mediaUrl[0]} alt="" /> : <video src={data?.mediaUrl[0]}></video>}
			</div>
		</>
	);
};
