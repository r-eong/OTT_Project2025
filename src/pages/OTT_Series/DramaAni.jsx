import { Link } from 'react-router-dom'
import '../OTT_Series/DramaAni.css'
import { useState } from 'react'
// 11-13 김광민 추가
import { useContext } from 'react'
import { OTTContext } from '../../api/OTT_Context'
//11-13 정호준 모달 import
import ModalB from "../OTT_ModalB/ModalB";

export default function DramaAni({AniDrama,AniDrama1,AniDrama2,AniDrama3,AniDrama4,AniDrama5}){
    const {currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft} = useContext(OTTContext)
    const [openS,setOpenS] = useState(false)
    const [openB,setOpenB] = useState(false)

    return(
        <div className='DramaAni_container'>
            <div className='gra01'></div>
            <div className="sec_top">
                <Link to='/Series'>
                    <h1 className='tagname'>시리즈</h1>
                </Link>
                <span>▶</span>
                <h1>애니메이션</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//3AXLSxMuqyZt8HyrKKfrcJtkswD.jpg'} />
            
            <div className='DramaAni_info'>
                <h1>원펀맨</h1>
                <p>
                    취미로 히어로를 하기 시작한 남자 사이타마. <br/>
                    그는 3년간의 특훈으로 무적 파워를 손에 넣었다. <br/>
                    하지만 너무 강해진 나머지 어떤 강적을 상대해도 원펀치로 끝나버렸다. <br/>
                    압도적인 힘이란 재미없는거야... 그런 정열과, 모발을 잃은 평온한 최강 히어로 앞에 새로운 강적이 나타난다. <br/>
                    오늘이야말로 진심을 다해 싸울 수 있을 것인가!?<br/>
                </p>
                <button type='button' className='play'>▶ 재생</button>
                <button type='button' className='detailInfo' >ⓘ 상세 정보</button>
            </div>
            <div className='DramaAnis'>
                <h2 className='h2_1'>긴장감 넘치는 액션</h2>
                <div className='DramaAni1'>
                    <div className='DramaAni'>
                        <button type='button' className='left' onClick={() => slideLeft(1)}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul style={{marginLeft:`${currentX}px`}}>
                            {AniDrama.map((item, index) => (
                                AniDrama[index].backdrop_path !== null ?
                                <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}` } alt={item.title} />
                                </li> : null
                            ))}
                        </ul>
                        <button type='button' className='right' onClick={() => {slideRight(1)}}>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <h2 className='h2_2'>감성 충전 스토리</h2>
                <div className='DramaAni DramaAni2'>
                    <button type='button' className='left' onClick={() => slideLeft(2)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX1}px`}}>
                        {AniDrama1.map((item, index) => (
                            AniDrama1[index].backdrop_path !== null ? 
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(2)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>기술과 미래의 이야기</h2>
                <div className='DramaAni DramaAni3'>
                    <button type='button' className='left' onClick={() => slideLeft(3)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX2}px`}}>
                        {AniDrama2.map((item,index) => (
                            AniDrama2[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(3)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>일상 속의 모험</h2>
                <div className='DramaAni DramaAni4'>
                    <button type='button' className='left' onClick={() => slideLeft(4)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX3}px`}}>
                        {AniDrama3.map((item,index) => (
                            AniDrama3[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(4)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>판타지 월드 속으로</h2>
                <div className='DramaAni DramaAni5'>
                    <button type='button' className='left' onClick={() => slideLeft(5)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX4}px`}}>
                        {AniDrama4.map((item,index) => (
                            AniDrama4[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(5)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>꿈을 여는 애니메이션</h2>
                <div className='DramaAni DramaAni6'>
                    <button type='button' className='left' onClick={() => slideLeft(6)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX5}px`}}>
                        {AniDrama5.map((item,index) => (
                            AniDrama5[index].backdrop_path !== null ?
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
            {/* 11-13 정호준 수정 상세보기 모달 */}
                        {openB && <ModalB item={openS} setOpenB={setOpenB} openB={openB}/>}{/* 11-13 수정 */}
        </div>
    )
}