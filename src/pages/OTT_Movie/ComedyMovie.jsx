import { Link } from 'react-router-dom'
import '../OTT_Movie/ComedyMovie.css'
import { useState } from 'react'
// 11-13 김광민 추가
import { useContext } from 'react'
import { OTTContext } from '../../api/OTT_Context'
//11-13 정호준 모달 import
import ModalB from "../OTT_ModalB/ModalB";

export default function ComedyMovie({ComedyData,ComedyData1,ComedyData2,ComedyData3,ComedyData4,ComedyData5}){
    const {currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft} = useContext(OTTContext)
    const [openS,setOpenS] = useState(false)
    const [openB,setOpenB] = useState(false)
    return(
        <div className='movieComedy_container'>
            <div className='gra01'></div>
            <div className="sec_top">
                <Link to='/Movie'>
                    <h1 className='tagname'>영화</h1>
                </Link>
                <span>▶</span>
                <h1>코미디 영화</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//kHOfxq7cMTXyLbj0UmdoGhT540O.jpg'} />
            <div className='movieComedy_info'>
                <h1>애프터번</h1>
                <p>
                   인류가 사라진 땅, 보물 사냥꾼의 마지막 의뢰” <br/>
                   태양폭풍으로 전 세계의 기술과 문명이 붕괴된 지 10년. <br/>
                   생존자들은 폐허 속에서 잔존한 유물과 자원을 두고 치열한 경쟁을 벌인다. <br/>
                   전직 군인이었던 제이크는 ‘보물 사냥꾼’으로 전락해 <br/>
                   문명의 파편이 된 유물들을 회수해 생계와 희망을 이어 간다. <br/>
                   그는 위험한 의뢰를 받고 프랑스로 향하게 되고, 그곳에서 프랑스 저항군 전사 드레아와 손을 맞잡는다. <br/>
                   그러나 이번 목표는 단순한 보물이 아니다. <br/>
                   인류의 마지막 상징이자 권력의 열쇠인 모나리자를 되찾는 그들의 여정은, <br/>
                   전장 속에서 새로운 운명을 마주하게 되는데…<br/>
                </p>
                <button type='button' className='play'>▶ 재생</button>
                <button type='button' className='detailInfo' >ⓘ 상세 정보</button>
            </div>
            <div className='movieComedys'>
                <h2 className='h2_1'>인기있는 한국 영화</h2>
                <div className='movieComedy1'>
                    <div className='movieComedy'>
                        <button type='button' className='left' onClick={() => slideLeft(1)}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul style={{marginLeft:`${currentX}px`}}>
                            {ComedyData.map((item, index) => (
                                ComedyData[index].backdrop_path !== null ?
                                <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                                </li> : null
                            ))}
                        </ul>
                        <button type='button' className='right' onClick={() => {slideRight(1)}}>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <h2 className='h2_2'>액션 영화</h2>
                <div className='movieComedy movieComedy2'>
                    <button type='button' className='left' onClick={() => slideLeft(2)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX1}px`}}>
                        {ComedyData1.map((item, index) => (
                            ComedyData1[index].backdrop_path !== null ? 
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(2)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>애니메이션 영화</h2>
                <div className='movieComedy movieComedy3'>
                    <button type='button' className='left' onClick={() => slideLeft(3)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX2}px`}}>
                        {ComedyData2.map((item,index) => (
                            ComedyData2[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(3)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>드라마 장르 영화</h2>
                <div className='movieComedy movieComedy4'>
                    <button type='button' className='left' onClick={() => slideLeft(4)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX3}px`}}>
                        {ComedyData3.map((item,index) => (
                            ComedyData3[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(4)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>코미디 영화</h2>
                <div className='movieComedy movieComedy5'>
                    <button type='button' className='left' onClick={() => slideLeft(5)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX4}px`}}>
                        {ComedyData4.map((item,index) => (
                            ComedyData4[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(5)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>SF 영화</h2>
                <div className='movieComedy movieComedy6'>
                    <button type='button' className='left' onClick={() => slideLeft(6)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX5}px`}}>
                        {ComedyData5.map((item,index) => (
                            ComedyData5[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(6)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            {openB && <ModalB item={openS} setOpenB={setOpenB} openB={openB}/>}{/* 11-13 수정 */}
        </div>
    )
}