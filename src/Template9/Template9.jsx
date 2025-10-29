import React, { useEffect, useState } from "react";
import setting from "../assets/images/Setting.svg";
import Container1 from "./Container1";
import Container2 from "./Container2";
import Container3 from "./Container3";
import Container4 from "./Container4";
import styles from "./Template9.module.scss";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import AboutMe from "../components/AboutMe/AboutMe";
import HomeButton from "../components/HomeButton/HomeButton";
import Lodging from "../components/Lodging/Lodging";
import NavBar from "../components/NavBar/NavBar";
import Rating from "../components/Rating/Rating";
import Container5 from "./Container5";
import "./Template9.scss";

const Template9 = () => {
	document.documentElement.style.setProperty("--base-font-size", "100%");
	const [width, setWidth] = useState(window.innerWidth);
	const [height, setHeight] = useState(window.innerHeight);
	const { user, templateData, isLoading, currentUserId, userId } = useSelector((state) => state.auth);
	const { state } = useLocation();

	useEffect(() => {
		function handelResize() {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		}
		window.addEventListener("resize", handelResize);
		return () => window.removeEventListener("resize", handelResize);
	}, [width, height]);

	if (width < 1728) document.documentElement.style.setProperty("--base-font-size", "90%");
	if (width < 1500) document.documentElement.style.setProperty("--base-font-size", "80%");
	if (width < 1420 && height < 600) document.documentElement.style.setProperty("--base-font-size", "65%");
	if (width < 1250) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 1150) document.documentElement.style.setProperty("--base-font-size", "65%");
	if (width < 1024) document.documentElement.style.setProperty("--base-font-size", "85%");
	if (width < 1024 && height < 600) document.documentElement.style.setProperty("--base-font-size", "60%");
	if (width < 900) document.documentElement.style.setProperty("--base-font-size", "75%");
	if (width < 800) document.documentElement.style.setProperty("--base-font-size", "70%");
	if (width < 700) document.documentElement.style.setProperty("--base-font-size", "60%");
	if (width < 600) document.documentElement.style.setProperty("--base-font-size", "55%");
	if (width < 500) document.documentElement.style.setProperty("--base-font-size", "50%");

	const [editable, setEditable] = useState(true);
	const [showNav, setShowNav] = useState(false);
	const [showRating, setShowRating] = useState(false);
	const [ratingData, setRatingData] = useState("");
	const [showAboutMe, setShowAboutMe] = useState(false);
	const [name, setName] = useState("");
	const [coverImage1, setCoverImage1] = useState("");
	const [coverImage1Mobile, setCoverImage1Mobile] = useState("");
	const [coverImage2, setCoverImage2] = useState("");
	const [coverImage2Mobile, setCoverImage2Mobile] = useState("");
	const [coverImage3, setCoverImage3] = useState("");
	const [coverImage3Mobile, setCoverImage3Mobile] = useState("");
	const [coverDesc, setCoverDesc] = useState("");

	const [introImg1, setIntroImg1] = useState("");
	const [introImg1Mobile, setIntroImg1Mobile] = useState("");
	const [introImg2, setIntroImg2] = useState("");
	const [introImg2Mobile, setIntroImg2Mobile] = useState("");
	const [introImg3, setIntroImg3] = useState("");
	const [introImg3Mobile, setIntroImg3Mobile] = useState("");
	const [introImg4, setIntroImg4] = useState("");
	const [introImg4Mobile, setIntroImg4Mobile] = useState("");
	const [introImg5, setIntroImg5] = useState("");
	const [introImg5Mobile, setIntroImg5Mobile] = useState("");

	const [postCount, setPostCount] = useState("");
	const [followers, setFollowers] = useState("");
	const [followings, setFollowings] = useState("");
	const [introText, setIntroText] = useState("");
	const [shortMessage, setShortMessage] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [liveIn, setLiveIn] = useState("");
	const [schooling, setSchooling] = useState("");
	const [profession, setProfession] = useState("");

	const [coverImg1Position, setCoverImg1Position] = useState("");
	const [coverImg2Position, setCoverImg2Position] = useState("");
	const [coverImg3Position, setCoverImg3Position] = useState("");
	const [introImg1Position, setIntroImg1Position] = useState("");
	const [introImg2Position, setIntroImg2Position] = useState("");
	const [introImg3Position, setIntroImg3Position] = useState("");
	const [introImg4Position, setIntroImg4Position] = useState("");
	const [introImg5Position, setIntroImg5Position] = useState("");

	useEffect(() => {
		// if (user === null) return;
		if (state?.viewMode) setEditable(false);
		if (templateData === null) return;
		setRatingData(user?.Rating === undefined ? "0" : user?.Rating);
		setName(user?.username === "" || user?.username === undefined ? templateData?.name : user?.username);
		setCoverImage1(templateData?.coverImage1);
		setCoverImage1Mobile(templateData?.coverImage1Mobile);
		setCoverImage2(templateData?.coverImage2);
		setCoverImage2Mobile(templateData?.coverImage2Mobile);
		setCoverImage3(templateData?.coverImage3);
		setCoverImage3Mobile(templateData?.coverImage3Mobile);
		setCoverDesc(templateData?.coverDesc);
		setIntroImg1(templateData?.introImg1);
		setIntroImg1Mobile(templateData?.introImg1Mobile);
		setIntroImg2(templateData?.introImg2);
		setIntroImg2Mobile(templateData?.introImg2Mobile);
		setIntroImg3(templateData?.introImg3);
		setIntroImg3Mobile(templateData?.introImg3Mobile);
		setIntroImg4(templateData?.introImg4);
		setIntroImg4Mobile(templateData?.introImg4Mobile);
		setIntroImg5(templateData?.introImg5);
		setIntroImg5Mobile(templateData?.introImg5Mobile);
		setPostCount(user?.postCount || "0");
		setFollowers(user?.followersData?.length || "0");
		setFollowings(user?.followingData?.length || "0");
		// setIntroText(templateData?.introText);
		setIntroText(user?.bio === "" ? templateData?.introText : user?.bio);
		setShortMessage(templateData?.shortMessage);
		setEmail(user?.email === "" || user?.email === undefined ? "James.test@mail.co" : user?.email);
		setPhone(user?.mobile_number === "" || user?.mobile_number === undefined ? "+91 323 323 3245" : user?.mobile_number);
		setLiveIn(templateData?.aboutMe?.liveIn);
		setSchooling(templateData?.aboutMe?.schooling);
		setProfession(templateData?.aboutMe?.profession);
		setCoverImg1Position(templateData?.coverImg1Position);
		setCoverImg2Position(templateData?.coverImg2Position);
		setCoverImg3Position(templateData?.coverImg3Position);
		setIntroImg1Position(templateData?.introImg1Position);
		setIntroImg2Position(templateData?.introImg2Position);
		setIntroImg3Position(templateData?.introImg3Position);
		setIntroImg4Position(templateData?.introImg4Position);
		setIntroImg5Position(templateData?.introImg5Position);
	}, [user, templateData]);

	const templateUpdatedData = {
		name,
		coverImage1,
		coverImage1Mobile,
		coverImage2,
		coverImage2Mobile,
		coverImage3,
		coverImage3Mobile,
		introImg1,
		introImg1Mobile,
		introImg2,
		introImg2Mobile,
		introImg3,
		introImg3Mobile,
		introImg4,
		introImg4Mobile,
		introImg5,
		introImg5Mobile,
		introText,
		shortMessage,
		coverImg1Position,
		coverImg2Position,
		coverImg3Position,
		introImg1Position,
		introImg2Position,
		introImg3Position,
		introImg4Position,
		introImg5Position,
		aboutMe: {
			email,
			phone,
			liveIn,
			schooling,
			profession,
		},
		hireMe: {
			hireable: false,
		},
	};

	return (
		<>
			{isLoading && <Lodging />}
			<NavBar
				editable={editable}
				setEditable={setEditable}
				showNav={showNav}
				setShowNav={setShowNav}
				templateUpdatedData={templateUpdatedData}
			/>
			{showRating && <Rating setShowRating={setShowRating} setRatingData={setRatingData} />}
			{showAboutMe && (
				<AboutMe
					editable={editable}
					setShowAboutMe={setShowAboutMe}
					email={email}
					setEmail={setEmail}
					phone={phone}
					setPhone={setPhone}
					liveIn={liveIn}
					setLiveIn={setLiveIn}
					schooling={schooling}
					setSchooling={setSchooling}
					profession={profession}
					setProfession={setProfession}
				/>
			)}

			<div className={styles.Template9Wrapper} id="Temp9">
				{!showNav && currentUserId === userId && user && !state.viewMode && (
					<img src={setting} alt="" className={styles.Setting} onClick={() => setShowNav(true)} />
				)}

				<div className={styles.Template9}>
					<HomeButton {...{ templateUpdatedData }} />
					<Container1
						editable={editable}
						name={name}
						setName={setName}
						coverImage1={coverImage1}
						coverImage1Mobile={coverImage1Mobile}
						setCoverImage1={setCoverImage1}
						setCoverImage1Mobile={setCoverImage1Mobile}
						coverImage2={coverImage2}
						coverImage2Mobile={coverImage2Mobile}
						setCoverImage2={setCoverImage2}
						setCoverImage2Mobile={setCoverImage2Mobile}
						coverImage3={coverImage3}
						coverImage3Mobile={coverImage3Mobile}
						setCoverImage3={setCoverImage3}
						setCoverImage3Mobile={setCoverImage3Mobile}
						coverDesc={coverDesc}
						setCoverDesc={setCoverDesc}
						postCount={postCount}
						followers={followers}
						followings={followings}
						setShowRating={setShowRating}
						ratingData={ratingData}
						coverImg1Position={coverImg1Position}
						coverImg2Position={coverImg2Position}
						coverImg3Position={coverImg3Position}
						setCoverImg1Position={setCoverImg1Position}
						setCoverImg2Position={setCoverImg2Position}
						setCoverImg3Position={setCoverImg3Position}
					/>
					<Container2
						editable={editable}
						introText={introText}
						setIntroText={setIntroText}
						introImg1={introImg1}
						introImg1Mobile={introImg1Mobile}
						setIntroImg1={setIntroImg1}
						setIntroImg1Mobile={setIntroImg1Mobile}
						introImg2={introImg2}
						introImg2Mobile={introImg2Mobile}
						setIntroImg2={setIntroImg2}
						setIntroImg2Mobile={setIntroImg2Mobile}
						setShowAboutMe={setShowAboutMe}
						introImg1Position={introImg1Position}
						introImg2Position={introImg2Position}
						setIntroImg1Position={setIntroImg1Position}
						setIntroImg2Position={setIntroImg2Position}
					/>
					<Container3
						editable={editable}
						introImg3={introImg3}
						introImg3Mobile={introImg3Mobile}
						setIntroImg3={setIntroImg3}
						setIntroImg3Mobile={setIntroImg3Mobile}
						introImg4={introImg4}
						introImg4Mobile={introImg4Mobile}
						setIntroImg4={setIntroImg4}
						setIntroImg4Mobile={setIntroImg4Mobile}
						introImg5={introImg5}
						introImg5Mobile={introImg5Mobile}
						setIntroImg5={setIntroImg5}
						setIntroImg5Mobile={setIntroImg5Mobile}
						introImg3Position={introImg3Position}
						introImg4Position={introImg4Position}
						introImg5Position={introImg5Position}
						setIntroImg3Position={setIntroImg3Position}
						setIntroImg4Position={setIntroImg4Position}
						setIntroImg5Position={setIntroImg5Position}
					/>
					<Container4 editable={editable} shortMessage={shortMessage} setShortMessage={setShortMessage} />
					<Container5 editable={editable} shortStory={shortMessage} setShortStory={setShortMessage} />
				</div>
			</div>
		</>
	);
};

export default Template9;
