import React, {useEffect , useState } from 'react'
import { Helmet ,HelmetProvider} from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

import './hand-sign-list.css'

const HandSignList = (props) => {
  const navigate=useNavigate()
  useEffect(() => {

    // オーバレイを開閉する関数
    const overlay = document.getElementById('sub-menu');
    function overlayToggle() {
      overlay.classList.toggle('submenu-on');
    }

    // 指定した要素に対して上記関数を実行するクリックイベントを設定
    const clickArea = document.getElementsByClassName('main-screen-hambirger-menu');
    for (let i = 0; i < clickArea.length; i++) {
      clickArea[i].addEventListener('click', overlayToggle, false);
    }

    // イベントに対してバブリングを停止
    function stopEvent(event) {
      event.stopPropagation();
    }
    const overlayInner = document.getElementById('sub-menu-main');
    overlayInner.addEventListener('click', stopEvent, false);

    // cleanup 関数でイベントリスナーを削除
    return () => {
      for (let i = 0; i < clickArea.length; i++) {
        clickArea[i].removeEventListener('click', overlayToggle, false);
      }
      overlayInner.removeEventListener('click', stopEvent, false);
    };
  }, []); // 第二引数に空の配列を渡すことで、マウント時のみ実行

  // close-btn ボタンのクリックイベントハンドラを追加
  const handleCloseBtnClick = () => {
    const overlay = document.getElementById('sub-menu');
    overlay.classList.remove('submenu-on');
  };

  //サブメニューのプロフィールクリックイベント
  const handleProfileBtnClick = () => {
    navigate('/profile');
  }

  //サブメニューのハンドサインクリックイベント
  const handleHandsignBtnClick = () => {
    navigate('/hand-sign-list');
  }

  //サブメニューのログアウトクリックイベント
  const handleLogoutBtnClick = () => {
    navigate('/log-out');
  }

  //サブメニューのサインアウトクリックイベント
  const handleSignoutBtnClick = () => {
    navigate('/account-delete');
  }

  return (
    <HelmetProvider>
      <div className="hand-sign-list-container">
        <Helmet>
          <title>しまコネクト</title>
        </Helmet>
        <div className="hand-sign-list-hand-sign-list">
          <div className="hand-sign-list-header">
            <div className="hand-sign-list-bar-text">
              <button className="hand-sign-list-logo" onClick={() => navigate('/main-screen')}>
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className="hand-sign-list-image"
                />
              </button>
              <button className="hand-sign-list-page-title" onClick={() => navigate('/internet-forum-popu')}>
                <div className="hand-sign-list-text">
                  <span className="hand-sign-list-text1">
                    <span>ハンドサインリスト</span>
                  </span>
                </div>
                <img
                  src="/images/handSignIcon.png"
                  alt="handsignIcon"
                  className="hand-sign-list-image1"
                />
              </button>
              <div className="hand-sign-list-header">
                <div className="hand-sign-list-bar-text">
                  <button className="hand-sign-list-logo" onClick={() => navigate('/main-screen')}>
                    <img
                      src="/images/logo.png"
                      alt="Logo"
                      className="hand-sign-list-image"
                    />
                  </button>
                  <div className="hand-sign-list-page-title">
                    <div className="hand-sign-list-text">
                      <span className="hand-sign-list-text1">
                        <span>ハンドサインリスト</span>
                      </span>
                    </div>
                    <img
                      src="/images/handSignIcon.svg"
                      alt="handSignIcon"
                      className="hand-sign-list-union3"
                    />
                  </div>
                  <button id="open-btn" className="main-screen-hambirger-menu" type="button">
                    <div className="main-screen-stacked">
                      <img
                        src="/images/hambirger.svg"
                        alt="Ham"
                        className="main-screen-menu"
                      />
                      <span className="main-screen-text">
                        <span>メニュー</span>
                      </span>
                    </div>
                  </button>
                  <div id="sub-menu" className="sub-menu-sub-menu">
                    <div id="sub-menu-main">
                      <div className="sub-menu-sub-menu1">
                        <span className="sub-menu-text">
                          <span>  サブメニュー</span>
                        </span>
                      </div>
                    </div>
                    <button id="close-btn" className="sub-menu-close-button" type="button" onClick={handleCloseBtnClick}>
                      <img
                        src="/images/closeIcon.svg"
                        alt="close"
                        className="sub-menu-close"
                      />
                    </button>
                    <button className="sub-menu-profile" onClick={handleProfileBtnClick}>
                      <div className="sub-menu-me">
                        <img
                          src="/images/profileIcon.svg"
                          alt="profileIcon"
                          className="sub-menu-union"
                        />
                      </div>
                      <span className="sub-menu-text02">
                        <span>プロフィール</span>
                      </span>
                    </button>
                    <button className="sub-menu-hand-sign-list" onClick={handleHandsignBtnClick}>
                      <div className="sub-menu-fillablecard">
                        <img
                          src="/images/handSignIcon.svg"
                          alt="handSignIcon"
                          className="sub-menu-union1"
                        />
                      </div>
                      <span className="sub-menu-text04">
                        <span>ハンドサインリスト</span>
                      </span>
                    </button>
                    <button className="sub-menu-logout" onClick={handleLogoutBtnClick}>
                      <div className="sub-menu-update">
                        <img
                          src="/images/logOutIcon.svg"
                          alt="logOutIcon"
                          className="sub-menu-union2"
                        />
                      </div>
                      <span className="sub-menu-text06">
                        <span>ログアウト</span>
                      </span>
                    </button>
                    <button className="sub-menu-sign-out" onClick={handleSignoutBtnClick}>
                      <div className="sub-menu-departure">
                        <img
                          src="/images/signOutIcon.svg"
                          alt="signOutIcon"
                          className="sub-menu-union3"
                        />
                      </div>
                      <span className="sub-menu-text08">
                        <span>退会手続き</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hand-sign-list-main">
            <div className="hand-sign-list-field">
              <div className="hand-sign-list-tag-button-field">
                <button className="hand-sign-list-hot-button" onClick={() => navigate('/internet-forum-popu')}>
                  <div className="hand-sign-list-hot-title">
                    <span className="hand-sign-list-text5">
                      <span>人気順</span>
                    </span>
                  </div>
                </button>
              </div>
              <div className="hand-sign-list-cards-field">
                <div className="hand-sign-list-cards">
                  <div className="hand-sign-cards-hand-sign-cards">
                    <div className="hand-sign-cards-title">
                      <div className="hand-sign-cards-user-data">
                        <img
                          src="/images/userIcon.png"
                          alt="UserIcon"
                          className="hand-sign-cards-icon"
                        />
                        <div className="hand-sign-cards-user-name">
                          <span className="hand-sign-cards-text">あかり</span>
                        </div>
                      </div>
                      <div className="hand-sign-cards-date">
                        <span className="hand-sign-cards-text02">
                          <span>2023-09-04</span>
                        </span>
                      </div>
                    </div>
                    <div className="hand-sign-cards-contents-field">
                      <div className="hand-sign-cards-image-field">
                        <img
                          src="/images/handSignCardImage.svg"
                          alt="HandSignImage"
                          className="hand-sign-cards-image"
                        />
                      </div>
                      <div className="hand-sign-cards-contents">
                        <div className="hand-sign-cards-hand-sign-name">
                          <span className="hand-sign-cards-text04">
                            <span>こんにちは</span>
                          </span>
                        </div>
                        <div className="hand-sign-cards-text-field">
                          <div className="hand-sign-cards-detail">
                            <span className="hand-sign-cards-text08">
                              <span>こんにちはを作ってみました</span>
                            </span>
                          </div>
                          <div className="hand-sign-cards-hash-tags">
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#こんにちは</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#やっほー</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#駄作</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#初心者</span>
                              </span>
                            </button>
                            <button className="hand-sign-cards-hash-tag"  onClick={() => navigate('/internet-forum-popu')}>
                              <span className="hand-sign-cards-text12">
                                <span>#初投稿</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="hand-sign-cards-right">
                        <div className="hand-sign-cards-pan-kuzu">
                          <button className="hand-sign-cards-dairy" onClick={() => navigate('/internet-forum-popu')}>
                            <span className="hand-sign-cards-text32">
                              <span>日常</span>
                            </span>
                          </button>
                          <img
                            src="/images/pankuzuArrow.svg"
                            alt="Arrow"
                            className="hand-sign-cards-arrowright"
                          />
                          <button className="hand-sign-cards-greeting" onClick={() => navigate('/internet-forum-popu')}>
                            <span className="hand-sign-cards-text34">
                              <span>挨拶</span>
                            </span>
                          </button>
                        </div>
                        <div className="hand-sign-cards-favorite-count">
                          <div className="hand-sign-cards-favorite">
                            <input type="checkbox" id="heart01"
                              src="/images/activeHeart.svg"
                              alt="activeHeart"
                              className="hand-sign-cards-activeHeart"
                            />
                            <label for="heart01"
                              src="/images/heart.svg"
                              alt="heart"
                              className="hand-sign-cards-Heart"
                            />
                          </div>
                          <div className="hand-sign-cards-text36">
                            <span className="hand-sign-cards-text37">
                              <span>130</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="hand-sign-list-rectangle11"
                  />
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="hand-sign-list-rectangle11"
                  />
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="hand-sign-list-rectangle11"
                  />
                  <img
                    src="/images/cardAlt.png"
                    alt="CardAlt"
                    className="hand-sign-list-rectangle11"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hand-sign-list-button">
          <button className="hand-sign-list-search-button" onClick={() => navigate('/refine-search')}>
            <img
              src="/images/searchIcon.svg"
              alt="searchIcon"
              className="hand-sign-list-search"
            />
          </button>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default HandSignList
