import React from 'react';
import style from './Template9.module.scss'
import TextArea from '../Template9/Textarea';
import EditTextIcon from "../assets/images/EditTextIcon.svg";

function Container5({ editable, shortStory, setShortStory }) {
	return (
		<div className={style.container5}>
			<div className={style.footer}>
				<div className={style.shortMessage}>
					{!editable &&<div className={style.textShort}>Short Message</div>}
					{!editable && <img src={EditTextIcon} alt="" className={style.EditTextIcon} />}
					<TextArea className={style.shortDesc} readOnly={editable} value={shortStory} setValue={setShortStory} />
				</div>
				<div className={style.thankYou}>Thank you ! Visit Again</div>
			</div>
		</div>
	);
}

export default Container5;