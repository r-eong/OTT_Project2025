import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom';

import '../OTT_Login/Login.css'
import { OTTContext } from "../../api/OTT_Context";

export default function Login(){
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const {user, login} = useContext(OTTContext)
    console.log(user)
    const navigate = useNavigate()

    const onChangeHandeler = () => {
        if(id === 'test' && pw === '1234'){
            login(id)
            navigate('/Home')
        }else{
            alert('아이디, 비밀번호를 확인하세요')
        }
    }

    return(
        <div className="Login">
            <header>
                <Link to='/'><img src="Netflix_Logo_RGB.png" alt="로고"/></Link>
            </header>
            <section>
                <h1>로그인</h1>
                <input type="text" onChange={(e) => setId(e.target.value)} placeholder="이메일 또는 휴대폰 번호"></input>
                <input type="password" onChange={(e) => setPw(e.target.value)} placeholder="비밀번호"></input>
                <button type="submit" onClick={onChangeHandeler}>로그인</button>

                <h3>고객지원</h3>
                <p>이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을 확인합니다.</p>
            </section>
            <footer>
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