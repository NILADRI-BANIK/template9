import React from "react";
import EditTextIcon from "../assets/images/EditTextIcon.svg";
import ImageRender from "../components/EditingTool/ImageRender";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import style from "./Template9.module.scss";
import TextArea from "./Textarea";
import { useSelector } from "react-redux";

function Container2({
	editable,
	introText,
	setIntroText,
	introImg1,
	introImg1Mobile,
	setIntroImg1,
	setIntroImg1Mobile,
	introImg2,
	introImg2Mobile,
	setIntroImg2,
	setIntroImg2Mobile,
	setShowAboutMe,
	introImg1Position,
	introImg2Position,
	setIntroImg1Position,
	setIntroImg2Position,
}) {
	const { width, height } = useSelector((state) => state.auth);
	return (
		<div className={style.container2}>
			<div className={style.myIntro}>My Intro</div>
			<div className={style.introContainer}>
				<div className={style.left}>
					<div className={style.my}>
						<div className={style.textMy}>My</div>
						<div className={style.introImage1}>
							<ImageRender initialPosition={introImg1Position} editable={editable} currentId={"introImg1Position"}>
								{width < 931 && height > 600 ? (
									<img src={introImg1Mobile} alt="introImg1Mobile" />
								) : (
									<img src={introImg1} alt="introImg1" />
								)}
							</ImageRender>
							{!editable && (
								<ImageUpload
									className={style.IntroImageIcon1}
									setImage={setIntroImg1}
									setImageMobile={setIntroImg1Mobile}
									image={introImg1}
									imageMobile={introImg1Mobile}
									activeId={"introImg1Position"}
									initialPosition={introImg1Position}
									setInitialPosition={setIntroImg1Position}
								/>
							)}
						</div>
					</div>
					<div className={style.intro}>
						<div className={style.introImage2}>
							<ImageRender initialPosition={introImg2Position} editable={editable} currentId={"introImg2Position"}>
								{width < 931 && height > 600 ? (
									<img src={introImg2Mobile} alt="introImg2Mobile" />
								) : (
									<img src={introImg2} alt="introImg2" />
								)}
							</ImageRender>
							{!editable && (
								<ImageUpload
									className={style.IntroImageIcon2}
									setImage={setIntroImg2}
									setImageMobile={setIntroImg2Mobile}
									image={introImg2}
									imageMobile={introImg2Mobile}
									activeId={"introImg2Position"}
									initialPosition={introImg2Position}
									setInitialPosition={setIntroImg2Position}
								/>
							)}
						</div>
						<div className={style.textIntro}>Intro</div>
					</div>
				</div>
				<div className={style.right}>
					{!editable && <img src={EditTextIcon} alt="" className={style.EditTextIcon} />}
					<TextArea className={style.introDesc} readOnly={editable} value={introText} setValue={setIntroText} />
					<div className={style.introButtons}>
						<button onClick={() => setShowAboutMe(true)}>About Me</button>
						{/* <button>Hire Me</button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Container2;
