import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { OTTContext } from "../../api/OTT_Context";
import { useLocation } from "react-router-dom";

import '../OTT_Header/Header.css'

export default function Header({PopularData}){

    // 인풋 박스 on/off
    const [inputBox, setInputBox] = useState(false)
    // 인풋 검색창
    const [inputText, setInputText] = useState('')
    const [filterList, setFilterList] = useState([])
    // 로그인 모달
    const [loginBtn, setLoginBtn] = useState(false)
    // 스크롤시 배경색 변경
    const [backgroundColor, setBackgroundColor] = useState('linear-gradient(to bottom, #000, #00000000)')

    const {user, login, logout} = useContext(OTTContext)

    const navigate = useNavigate()

    // 로그아웃
    const LogoutHandeler = () => {
        logout()
        navigate('/Login')
    }

    // 스크롤 위치기준으로 배경색 변경
    useEffect(() => {
        const scrollHandeler = () => {
            if(window.scrollY > 5){
                // 스크롤 하면 어둡게
                setBackgroundColor('#000000')
            }else{
                // 아니면 그라데이션으로
                setBackgroundColor('linear-gradient(to bottom, #000, #00000000)')
            }
        }

        window.addEventListener('scroll', scrollHandeler)

        // 언마운트시 제거
        return() => window.removeEventListener('scroll', scrollHandeler)
    }, [])

    // 검색
    // const AllData = [
    //     PopularData, PopularData1, PopularData2, PopularData3, PopularData4, PopularData5,
    //     ActionData, ActionData1, ActionData2, ActionData3, ActionData4, ActionData5,
    //     AniData, AniData1, AniData2, AniData3, AniData4, AniData5,
    //     DramaData, DramaData1, DramaData2, DramaData3, DramaData4, DramaData5,
    //     ComedyData, ComedyData1, ComedyData2, ComedyData3, ComedyData4, ComedyData5,
    //     SFData, SFData1, SFData2, SFData3, SFData4, SFData5,
    //     PopularDrama, PopularDrama1, PopularDrama2, PopularDrama3, PopularDrama4, PopularDrama5,
    //     KoreaDrama, KoreaDrama1, KoreaDrama2, KoreaDrama3, KoreaDrama4, KoreaDrama5,
    //     OverseasDrama, OverseasDrama1, OverseasDrama2, OverseasDrama3, OverseasDrama4, OverseasDrama5,
    //     CrimeDrama, CrimeDrama1, CrimeDrama2, CrimeDrama3, CrimeDrama4, CrimeDrama5,
    //     AniDrama, AniDrama1, AniDrama2, AniDrama3, AniDrama4, AniDrama5,
    //     MedicalDrama, MedicalDrama1, MedicalDrama2, MedicalDrama3, MedicalDrama4, MedicalDrama5
    // ]
    // console.log("검색어")
    // console.log(PopularData[0].title)
    // console.log(inputText)
    // AllData.forEach((item,index) => {
    //     if(AllData[index].name === inputText || AllData[index].title === inputText){
    //         setFilterList(item)
    //         console.log("여기 검색목록")
    //         console.log(filterList)
    //     }
    // });
    // console.log(PopularData.name)
    // console.log('확인11')
    // useEffect(() => {
    //     // const mergedData = AllData

    //     // if(!inputText.trim()){
    //     //     setFilterList(mergedData)
    //     //     return
    //     // }

    //     // for(let i=0; i<AllData.length;i++){
    //     //     console.log(AllData[i].name)
    //     //     // if(AllData[i].name || AllData[i].title){

    //     //     // }
    //     // }
    //     const resultFilter = AllData.filter((item) => 
    //         item.name.includes(inputText)
    //         ||item.title.includes(inputText)
    //         // || item.title.toUpperCase().includes(inputText.toUpperCase())
    //     )
    //     setFilterList(resultFilter)
    // }, [inputText])

    const inputHandeler = (e) => {
        setInputText(e.target.value)
    }
    // HeadLeft - 탭 클릭시 색 변경
    const location = useLocation()

    return(
        <>
        <header className="Header" style={{background: backgroundColor}}>
            <div className="HeadLeft">
            <Link to='/Home'><img src="Netflix_Logo_RGB.png" alt="로고" /></Link>
            <ul>
                <Link to='/Home'>
                    <li style={{fontWeight: location.pathname === "/Home" ? "500" : "normal", 
                        color: location.pathname === "/Home" ? "#fff" : "#ffffffda"}}>홈</li>
                </Link>
                <Link to='/Series' className={location.pathname === "/Series" ? "active" : ""}>
                    <li style={{fontWeight: location.pathname === "/Series" ? "500" : "normal", 
                        color: location.pathname === "/Series" ? "#fff" : "#ffffffda"}}>시리즈</li>
                </Link>
                <Link to='/Movie' className={location.pathname === "/Movie" ? "active" : ""}>
                    <li style={{fontWeight: location.pathname === "/Movie" ? "500" : "normal", 
                        color: location.pathname === "/Movie" ? "#fff" : "#ffffffda"}}>영화</li>
                </Link>
                <Link to='/Like' className={location.pathname === "/Like" ? "active" : ""}>
                    <li style={{fontWeight: location.pathname === "/Like" ? "500" : "normal", 
                        color: location.pathname === "/Like" ? "#fff" : "#ffffffda"}}>내가 찜한 리스트</li>
                </Link>
            </ul>
            </div>
            <div className="HeadRight">
                {/* 검색창 */}
                {!inputBox ? <i className="fa-solid fa-magnifying-glass iButton" onClick={() => setInputBox(true)}></i> :
                    (<div className="input">
                        {/* 모달 */}
                        <div className="inputModal">
                            <button type="button" onClick={() => setInputBox(false)}>✕</button>
                            <div className="inputBox">
                                <i className="fa-solid fa-magnifying-glass inputButton" ></i>
                                <input type="text" onChange={inputHandeler} value={inputText} placeholder="제목, 사람, 장르"></input>
                                {inputText ? <p>"{inputText}" 검색 결과</p> : ''}
                                {/* 검색 결과 리스트 */}
                                <div className="searchResult">
                                    <ul style={{marginTop: '20px'}}>
                                        {filterList.length > 0 ? (
                                        filterList.slice(0, 10).map((item, index) => (
                                            <li key={index}>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
                                                alt={item.title || item.name}/>
                                            <p>{item.title || item.name}</p>
                                            </li>
                                        ))
                                        ) : (
                                        <p>검색 결과가 없습니다.</p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            {/* Top10 랭킹 */}
                            <div className="Top10">
                                <ul>
                                    {PopularData.slice(0, 10).map((item, index) => (
                                    <li key={index}>
                                        <h2>{index + 1}</h2>
                                        <p>{item.title}</p>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>)}
                    <div className="inputModalBackground"></div>

                {/* 유저정보/로그아웃 */}
                <div className="userBox"
                    onMouseEnter={() => setLoginBtn(true)}
                    onMouseLeave={() => setLoginBtn(false)}>
                    {/* 로그인 후 유저 이름 */}
                    <p className="userName">{user}님</p>
                    {/* 로그아웃 모달 */}
                    {loginBtn && (<Link to='/Login'><p onClick={LogoutHandeler} className="LogoutBtn">로그아웃</p></Link>)}
                </div>
            </div>
        </header>
        </>
    )
}