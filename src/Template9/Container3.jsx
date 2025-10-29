import React from "react";
import ImageRender from "../components/EditingTool/ImageRender";
import ImageUpload from "../components/ImageUpload/ImageUpload";
import style from "./Template9.module.scss";
import { useSelector } from "react-redux";

function Container3({
	editable,
	introImg3,
	introImg3Mobile,
	setIntroImg3,
	setIntroImg3Mobile,
	introImg4,
	introImg4Mobile,
	setIntroImg4,
	setIntroImg4Mobile,
	introImg5,
	introImg5Mobile,
	setIntroImg5,
	setIntroImg5Mobile,
	introImg3Position,
	introImg4Position,
	introImg5Position,
	setIntroImg3Position,
	setIntroImg4Position,
	setIntroImg5Position,
}) {
	const { width, height } = useSelector((state) => state.auth);
	return (
		<div className={style.container3}>
			<div className={style.threeImage}>
				<div className={style.image1}>
					<ImageRender initialPosition={introImg3Position} editable={editable} currentId={"introImg3Position"}>
						{width < 931 && height > 600 ? (
							<img src={introImg3Mobile} alt="introImg3Mobile" />
						) : (
							<img src={introImg3} alt="introImg3" />
						)}
					</ImageRender>
					{!editable && (
						<ImageUpload
							className={style.IntroImageIcon3}
							setImage={setIntroImg3}
							setImageMobile={setIntroImg3Mobile}
							image={introImg3}
							imageMobile={introImg3Mobile}
							activeId={"introImg3Position"}
							initialPosition={introImg3Position}
							setInitialPosition={setIntroImg3Position}
						/>
					)}
				</div>
				<div className={style.image2}>
					<ImageRender initialPosition={introImg4Position} editable={editable} currentId={"introImg4Position"}>
						{width < 931 && height > 600 ? (
							<img src={introImg4Mobile} alt="introImg4Mobile" />
						) : (
							<img src={introImg4} alt="introImg4" />
						)}
					</ImageRender>
					{!editable && (
						<ImageUpload
							className={style.IntroImageIcon4}
							setImage={setIntroImg4}
							setImageMobile={setIntroImg4Mobile}
							image={introImg4}
							imageMobile={introImg4Mobile}
							activeId={"introImg4Position"}
							initialPosition={introImg4Position}
							setInitialPosition={setIntroImg4Position}
						/>
					)}
				</div>
				<div className={style.image3}>
					<ImageRender initialPosition={introImg5Position} editable={editable} currentId={"introImg5Position"}>
						{width < 931 && height > 600 ? (
							<img src={introImg5Mobile} alt="introImg5Mobile" />
						) : (
							<img src={introImg5} alt="introImg5" />
						)}
					</ImageRender>
					{!editable && (
						<ImageUpload
							className={style.IntroImageIcon5}
							setImage={setIntroImg5}
							setImageMobile={setIntroImg5Mobile}
							image={introImg5}
							imageMobile={introImg5Mobile}
							activeId={"introImg5Position"}
							initialPosition={introImg5Position}
							setInitialPosition={setIntroImg5Position}
						/>
					)}
				</div>
			</div>
		</div>
	);
}

export default Container3;
