import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { OTTContext } from "../../api/OTT_Context";

import '../OTT_Main/Main.css'

export default function Main({PopularDramaData}){
    const [isOpen, setIsOpen] = useState(null)

    const toggleHandeler = (index) => {
        setIsOpen(isOpen === index ? null : index)
    }

    // 슬라이드
    const [currentX, setCurrentX] = useState(0)

    // 슬라이드
    const slideRight = (num) => {
        console.log(num)
            if(currentX > -1300 && num === 1){
                setCurrentX(currentX - 265)
            }
    }
    const slideLeft = (num) => {
        if(currentX < 0 && num === 1){
            setCurrentX(currentX + 265)
        }
    } 

    // const poster=[];
    const posterArr=PopularDramaData.filter((item)=>item.poster_path !== null);


    return(
        <div className="Main">
            <header className="MainHeader">
                <img src="Netflix_Logo_RGB.png" alt="로고"/>
                <Link to='/Login'><button type="button">로그인</button></Link>
            </header>
            <section>
                <div className="sec01">
                    <h1>영화, 시리즈 등을</h1>
                    <h1>무제한으로</h1>
                    <h4>7,000원으로 시작하세요. 멤버십은 언제든지 해지 가능합니다.</h4>
                    <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                    <div className="inputBox">
                        <input type="email" placeholder="이메일 주소" id="email"></input>
                        <button type="submit">시작하기&nbsp; <i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
                <div className="sec02">
                    <h2>지금 뜨는 콘텐츠</h2>
                    <div className="slide">
                        <i className="fa-solid fa-chevron-left" onClick={() => slideLeft(1)}></i>
                        <div className="slideBox">
                            <ul className="Top10" style={{marginLeft:`${currentX}px`}}>
                                {posterArr.slice(0, 10).map((item, index) => (
                                    <li key={index}>
                                        <h2 className="TOP10_H2">{index + 1}</h2>
                                        <h2 className="TOP10_H2Border">{index + 1}</h2>
                                        <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <i className="fa-solid fa-chevron-right" onClick={() => slideRight(1)}></i>
                    </div>
                    <h2 style={{marginTop: '80px'}}>가입해야 하는 또 다른 이유</h2>
                    <ul className="info">
                        <li>
                            <h3>TV로 즐기세요</h3>
                            <p>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</p>
                            <i className="fa-solid fa-display"></i>
                        </li>
                        <li>
                            <h3>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요</h3>
                            <p>간편하게 저장하고 빈틈없이 즐겨보세요.</p>
                            <i className="fa-solid fa-arrow-down"></i>
                        </li>
                        <li>
                            <h3>다양한 디바이스로 시청하세요</h3>
                            <p>각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.</p>
                            <i className="fa-solid fa-mobile"></i>
                        </li>
                        <li>
                            <h3>어린이 전용 프로필을 만들어 보세요</h3>
                            <p>자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.</p>
                            <i className="fa-solid fa-user"></i>
                        </li>
                    </ul>
                </div>
                <div className="sec03">
                    <h2>자주 묻는 질문</h2>
                    <ul>
                        <li onClick={() => toggleHandeler(0)}>
                            <div>
                                <span>넷플릭스에서 어떤 콘텐츠를 사용할 수 있나요?</span>
                                {isOpen === 0 ? <p>✕</p> : <p>┼</p>}
                            </div>
                            {isOpen === 0 && <h4>
                                넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 애니메이션, 각종 상을 수상한 넷플릭스 오리지널 등 
                                수많은 콘텐츠를 확보하고 있습니다. 마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수 있습니다.
                            </h4>}
                        </li>
                        <li onClick={() => toggleHandeler(1)}>
                            <div>
                                <span>넷플릭스스란 무엇인가요?</span>
                                {isOpen === 1 ? <p>✕</p> : <p>┼</p>}
                            </div>
                            {isOpen === 1 && <h4>
                                넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 
                                인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
                                저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 
                                준비되어 있으며 매주 새로운 시리즈와 영화가 제공됩니다.
                            </h4>}
                        </li>
                        <li onClick={() => toggleHandeler(2)}>
                            <div>
                                <span>넷플릭스요금은 얼마인가요?</span>
                                {isOpen === 2 ? <p>✕</p> : <p>┼</p>}
                            </div>
                            {isOpen === 2 && <h4>
                                스마트폰, 태블릿, 스마트 TV, 노트북, 스트리밍 디바이스 등 다양한 디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 
                                멤버십 요금은 월 7,000원부터 17,000원까지 다양합니다. 추가 비용이나 약정이 없습니다.
                            </h4>}
                        </li>
                        <li onClick={() => toggleHandeler(3)}>
                            <div>
                                <span>어디에서 시청할 수 있나요?</span>
                                {isOpen === 3 ? <p>✕</p> : <p>┼</p>}
                            </div>
                            {isOpen === 3 && <h4>
                                언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면 PC에서 netflix.com을 
                                통해 바로 시청할 수 있으며, 인터넷이 연결되어 있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV, 
                                스마트폰, 태블릿, 스트리밍 미디어 플레이어, 게임 콘솔 등)에서도 언제든지 시청할 수 있습니다.
                                <br/>
                                <br/>
                                iOS 또는 Android용 앱에서는 좋아하는 시리즈를 저장할 수도 있습니다. 저장 기능을 이용해 이동 
                                중이나 인터넷에 연결할 수 없는 곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
                            </h4>}
                        </li>
                        <li onClick={() => toggleHandeler(4)}>
                            <div>
                                <span>멤버십을 해지하려면 어떻게 하나요?</span>
                                {isOpen === 4 ? <p>✕</p> : <p>┼</p>}
                            </div>
                            {isOpen === 4 && <h4>
                                넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요. 멤버십 해지도 온라인에서 
                                클릭 두 번이면 완료할 수 있습니다. 해지 수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
                            </h4>}
                        </li>
                        <li onClick={() => toggleHandeler(5)}>
                            <div>
                                <span>아이들이 넷플릭스를 봐도 좋을까요?</span>
                                {isOpen === 5 ? <p>✕</p> : <p>┼</p>}
                            </div>
                            {isOpen === 5 && <h4>
                                멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의 공간에서 가족용 
                                시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수 있습니다.
                                <br/>
                                <br/>
                                키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어, 자녀가 시청할 수 있는 
                                콘텐츠의 관람등급을 제한하고 자녀의 시청을 원치 않는 특정 작품을 차단할 수도 있습니다.
                            </h4>}
                        </li>
                    </ul>
                    <div className="sec03_start">
                        <p>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p>
                        <input type="email" placeholder="이메일 주소" id="email"></input>
                        <button type="submit">시작하기&nbsp; <i class="fa-solid fa-angle-right"></i></button>
                    </div>
                </div>
            </section>
            <footer className="MainFooter">
                <h3>질문이 있으신가요? 문의 전화 : <span>00-308-321-0161 (수신자 부담)</span></h3>
                <ul>
                    <li>자주 묻는 질문</li>
                    <li>고객 센터</li>
                    <li>계정</li>
                    <li>미디어 센터</li>
                    <li>투자 정보(IR)</li>
                    <li>입사 정보</li>
                    <li>넷플릭스 지원 디바이스</li>
                    <li>이용 약관</li>
                    <li>개인정보 처리방침</li>
                    <li>쿠키 설정</li>
                    <li>회사 정보</li>
                    <li>문의하기</li>
                    <li>속도 테스트</li>
                    <li>법적 고지</li>
                    <li>오직 넷플릭스에서</li>
                </ul>
                <p>넷플릭스 대한민국</p>
                <p>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)</p>
                <p>대표: 레지널드 숀 톰프슨</p>
                <p>이메일 주소: korea@netflix.com</p>
                <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
                <p>사업자등록번호: 165-87-00119</p>
                <p>클라우드 호스팅: Amazon Web Services Inc.</p>
                <p>공정거래위원회 웹사이트</p>
                <h4>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</h4>
            </footer>
        </div>
    )
}
