import { Link } from 'react-router-dom'
import '../OTT_Series/DramaKorea.css'
import { useState } from 'react'
// 11-13 김광민 추가
import { useContext } from 'react'
import { OTTContext } from '../../api/OTT_Context'
//11-13 정호준 모달 import
import ModalB from "../OTT_ModalB/ModalB";

export default function DramaKorea({KoreaDrama,KoreaDrama1,KoreaDrama2,KoreaDrama3,KoreaDrama4,KoreaDrama5,}){
    const {currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft} = useContext(OTTContext)
    const [openS,setOpenS] = useState(false)
    const [openB,setOpenB] = useState(false)

    return(
        <div className='DramaKorea_container'>
            <div className='gra01'></div>
            <div className="sec_top">
                <Link to='/Series'>
                    <h1 className='tagname'>시리즈</h1>
                </Link>
                <span>▶</span>
                <h1 >한국 시리즈</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//cqkmEHLE4LjPHSqKdLt4pJFJv0f.jpg'} />
            <div className='DramaKorea_info'>
                <h1>조각도시</h1>
                <p>평범하게 살아가던 한 남자가 어느 날 갑자기 삶이 송두리째 조작돼 <br/>
                    나락에 떨어지자 지옥에서 돌아와 벌이는 핏빛 복수극
                </p>
                <button type='button' className='play'>▶ 재생</button>
                <button type='button' className='detailInfo'>ⓘ 상세 정보</button>
            </div>
            <div className='DramaKoreas'>
                <h2 className='h2_1' style={{color:'black'}}>마음을 여는 이야기</h2>
                <div className='DramaKorea1'>
                    <div className='DramaKorea'>
                        <button type='button' className='left' onClick={() => slideLeft(1)}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul style={{marginLeft:`${currentX}px`}}>
                            {KoreaDrama.map((item, index) => (
                                KoreaDrama[index].backdrop_path !== null ?
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
                <h2 className='h2_2'>숨 가쁜 전개 속으로</h2>
                <div className='DramaKorea DramaKorea2'>
                    <button type='button' className='left' onClick={() => slideLeft(2)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX1}px`}}>
                        {KoreaDrama1.map((item, index) => (
                            KoreaDrama1[index].backdrop_path !== null ? 
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(2)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>하루를 담은 순간들</h2>
                <div className='DramaKorea DramaKorea3'>
                    <button type='button' className='left' onClick={() => slideLeft(3)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX2}px`}}>
                        {KoreaDrama2.map((item,index) => (
                            KoreaDrama2[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(3)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>현실 너머 풍경</h2>
                <div className='DramaKorea DramaKorea4'>
                    <button type='button' className='left' onClick={() => slideLeft(4)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX3}px`}}>
                        {KoreaDrama3.map((item,index) => (
                            KoreaDrama3[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(4)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>시선을 끄는 이야기들</h2>
                <div className='DramaKorea DramaKorea5'>
                    <button type='button' className='left' onClick={() => slideLeft(5)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX4}px`}}>
                        {KoreaDrama4.map((item,index) => (
                            KoreaDrama4[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(5)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>가볍게 빠져드는 밤</h2>
                <div className='DramaKorea DramaKorea6'>
                    <button type='button' className='left' onClick={() => slideLeft(6)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX5}px`}}>
                        {KoreaDrama5.map((item,index) => (
                            KoreaDrama5[index].backdrop_path !== null ?
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