import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OTTContext } from "../../api/OTT_Context";

import './Footer.css'

export default function Footer(){
    return(
        <>
        <footer className="Footer">
            <div className="SNS">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-youtube"></i>
            </div>
            <ul>
                <li>화면 해설</li>
                <li>고객 센터</li>
                <li>기프트카드</li>
                <li>미디어 센터</li>
                <li>투자 정보(IR)</li>
                <li>입사 정보</li>
                <li>이용 약관</li>
                <li>개인정보</li>
                <li>법적 고지</li>
                <li>쿠키 설정</li>
                <li>회사 정보</li>
                <li>문의하기</li>
            </ul>
            <div className="company_info">
                <p>넷플릭스 대한민국</p>
                <p>넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)</p>
                <p>대표: 레지널드 숀 톰프슨</p>
                <p>이메일 주소: korea@netflix.com</p>
                <p>주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161</p>
                <p>사업자등록번호: 165-87-00119</p>
                <p>클라우드 호스팅: Amazon Web Services Inc.</p>
                <p>공정거래위원회 웹사이트</p>
            </div>
        </footer>
        </>
    )
}