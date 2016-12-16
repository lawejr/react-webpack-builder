"use strict";

import './style.css'

export default function EditUserPopup(props) {
  let
    user = props.user,
    editUser = props.editUser;

  function changeNick(e) {
    let newNickname = e.target.value;

    if (user.nickname != newNickname) {
      let data = {
        userId: user.id,
        nickname: newNickname
      };
      editUser(data);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={`popup ${props.visible ? 'popup_visible' : ''}`}>
      <form id='editUser' onSubmit={onSubmit}>
        <input type='text' className='popup_input' defaultValue={user.nickname} onBlur={changeNick}/>
      </form>
    </div>
  )
}