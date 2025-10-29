import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import style from "./Template9.module.scss";
import TextArea from "./Textarea";

import ImageRender from "../components/EditingTool/ImageRender";
import FollowButton from "../components/GlobalButtons/FollowButton";
import MessageButton from "../components/GlobalButtons/MessageButton";
import { redirectToSocialMedia } from "../components/Hooks/RedirectToSocialMedia";

function Container1({
	editable,
	name,
	setName,
	coverImage1,
	coverImage1Mobile,
	setCoverImage1,
	setCoverImage1Mobile,
	coverImage2,
	coverImage2Mobile,
	setCoverImage2,
	setCoverImage2Mobile,
	coverImage3,
	coverImage3Mobile,
	setCoverImage3,
	setCoverImage3Mobile,
	coverDesc,
	setCoverDesc,
	followers,
	followings,
	setShowRating,
	ratingData,
	coverImg1Position,
	coverImg2Position,
	coverImg3Position,
	setCoverImg1Position,
	setCoverImg2Position,
	setCoverImg3Position,
}) {
	const { userId, currentUserId, width, height } = useSelector((state) => state.auth);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		if (name === "") return;
		setFirstName(name.split(" ")[0]);
		setLastName(name.split(" ")[1]);
	}, [name]);

	useEffect(() => {
		setName(`${firstName} ${lastName}`);
	}, [firstName, lastName]);

	const handleRating = () => {
		if (redirectToSocialMedia()) return window.open(process.env.REACT_APP_SOCIAL_MEDIA_URL, "_self");
		setShowRating(true);
	};

	return (
		<div className={style.container1}>
			<div className={style.image_container}>
				{!editable && (
					<ImageUpload
						className={style.CoverImage1Icon}
						setImage={setCoverImage1}
						setImageMobile={setCoverImage1Mobile}
						image={coverImage1}
						imageMobile={coverImage1Mobile}
						activeId={"coverImg1Position"}
						initialPosition={coverImg1Position}
						setInitialPosition={setCoverImg1Position}
					/>
				)}
				{!editable && (
					<ImageUpload
						className={style.CoverImage2Icon}
						setImage={setCoverImage2}
						setImageMobile={setCoverImage2Mobile}
						image={coverImage2}
						imageMobile={coverImage2Mobile}
						activeId={"coverImg2Position"}
						initialPosition={coverImg2Position}
						setInitialPosition={setCoverImg2Position}
					/>
				)}
				{!editable && (
					<ImageUpload
						className={style.CoverImage3Icon}
						setImage={setCoverImage3}
						setImageMobile={setCoverImage3Mobile}
						image={coverImage3}
						imageMobile={coverImage3Mobile}
						activeId={"coverImg3Position"}
						initialPosition={coverImg3Position}
						setInitialPosition={setCoverImg3Position}
					/>
				)}
				<div className={style.coverImage1}>
					<ImageRender initialPosition={coverImg1Position} editable={editable} currentId={"coverImg1Position"}>
						{width < 931 && height > 600 ? (
							<img src={coverImage1Mobile} alt={"coverImage"} />
						) : (
							<img src={coverImage1} alt={"coverImage"} />
						)}
					</ImageRender>
				</div>
				<div className={style.coverImage2}>
					<ImageRender initialPosition={coverImg2Position} editable={editable} currentId={"coverImg2Position"}>
						{width < 931 && height > 600 ? (
							<img src={coverImage2Mobile} alt={"coverImage2"} />
						) : (
							<img src={coverImage2} alt={"coverImage2"} />
						)}
					</ImageRender>
				</div>
				<div className={style.coverImage3}>
					<div className={style.Overlay3}></div>
					<ImageRender initialPosition={coverImg3Position} editable={editable} currentId={"coverImg3Position"}>
						{width < 931 && height > 600 ? (
							<img src={coverImage3Mobile} alt={"coverImage3"} />
						) : (
							<img src={coverImage3} alt={"coverImage3"} />
						)}
					</ImageRender>
				</div>
			</div>

			<div className={style.nameDesc}>
				{!editable && <img src={EditTextIcon} alt="" className={style.EditTextIcon} />}
				<div className={style.name}>
					<div className={style.fullName}>
						<div className={style.suf}>I'm</div>
						{/* <TextArea className={style.firstName} readOnly={editable} value={firstName} setValue={setFirstName} /> */}
						<div
							className={style.firstName}
							style={{
								fontSize: lastName?.length > 9 ? (lastName?.length > 12 ? "7.5rem" : "9rem") : "11.49563rem",
							}}>
							{firstName}
						</div>
						<div
							className={style.surName}
							style={{
								fontSize: lastName?.length > 8 ? (lastName?.length > 12 ? "6.5rem" : "8rem") : " 9.49738rem",
							}}>
							{lastName ? lastName : ""}
						</div>
					</div>
				</div>
				<TextArea className={style.desc} readOnly={editable} value={coverDesc} setValue={setCoverDesc} />
			</div>

			<div className={style.buttons}>
				{userId === currentUserId ? (
					<button
						onClick={() => {
							window.open(`${process.env.REACT_APP_SOCIAL_MEDIA_URL}/FollowList`, "_self");
						}}>
						<p>{followings}</p>
						<span style={{ color: "red" }}>Follo</span>wing
					</button>
				) : (
					<FollowButton type={"type1"} />
				)}
				<MessageButton />
			</div>
			<div className={style.star} onClick={handleRating}>
				{ratingData}
			</div>

			{userId === currentUserId ? (
				<div
					className={style.followers}
					style={{ cursor: "pointer" }}
					onClick={() => {
						window.open(`${process.env.REACT_APP_SOCIAL_MEDIA_URL}/FollowList`, "_self");
					}}>
					<div className={style.count}>{followers}</div>
					<div className={style.textFollower}>Followers</div>
				</div>
			) : (
				<div className={style.followers}>
					<div className={style.count}>{followers}</div>
					<div className={style.textFollower}>Followers</div>
				</div>
			)}
		</div>
	);
}

export default Container1;
