import { Link } from 'react-router-dom'
import '../OTT_Movie/SFMovie.css'
import { useState } from 'react'
// 11-13 김광민 추가
import { useContext } from 'react'
import { OTTContext } from '../../api/OTT_Context'
//11-13 정호준 모달 import
import ModalB from "../OTT_ModalB/ModalB";

export default function SFMovie({SFData,SFData1,SFData2,SFData3,SFData4,SFData5}){
    const {currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft} = useContext(OTTContext)
    const [openS,setOpenS] = useState(false)
    const [openB,setOpenB] = useState(false)

    return(
        <div className='movieSF_container'>
            <div className='gra01'></div>
            <div className="sec_top">
                <Link to='/Movie'>
                    <h1 className='tagname'>영화</h1>
                </Link>
                <span>▶</span>
                <h1>코미디 영화</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//82lM4GJ9uuNvNDOEpxFy77uv4Ak.jpg'} />
            <div className='movieSF_info'>
                <h1>프레데터: 죽음의 땅</h1>
                <p>
                   프레데터로서 존재를 증명하기 위해 우주에서 가장 위험한 행성으로 첫 사냥에 나선 덱. <br/>
                   죽음의 땅에 도사린 모든 것으로부터 공격을 받던 순간, 휴머노이드 티아를 만난다. <br/>
                   최상위 포식자 칼리스크에 맞서게 된 둘은 생존과 각자의 목적을 위해 극한의 사투를 벌이게 되는데…<br/>
                </p>
                <button type='button' className='play'>▶ 재생</button>
                <button type='button' className='detailInfo' >ⓘ 상세 정보</button>
            </div>
            <div className='movieSFs'>
                <h2 className='h2_1'>인기있는 한국 영화</h2>
                <div className='movieSF1'>
                    <div className='movieSF'>
                        <button type='button' className='left' onClick={() => slideLeft(1)}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul style={{marginLeft:`${currentX}px`}}>
                            {SFData.map((item, index) => (
                                SFData[index].backdrop_path !== null ?
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
                <div className='movieSF movieSF2'>
                    <button type='button' className='left' onClick={() => slideLeft(2)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX1}px`}}>
                        {SFData1.map((item, index) => (
                            SFData1[index].backdrop_path !== null ? 
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
                <div className='movieSF movieSF3'>
                    <button type='button' className='left' onClick={() => slideLeft(3)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX2}px`}}>
                        {SFData2.map((item,index) => (
                            SFData2[index].backdrop_path !== null ?
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
                <div className='movieSF movieSF4'>
                    <button type='button' className='left' onClick={() => slideLeft(4)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX3}px`}}>
                        {SFData3.map((item,index) => (
                            SFData3[index].backdrop_path !== null ?
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
                <div className='movieSF movieSF5'>
                    <button type='button' className='left' onClick={() => slideLeft(5)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX4}px`}}>
                        {SFData4.map((item,index) => (
                            SFData4[index].backdrop_path !== null ?
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
                <div className='movieSF movieSF6'>
                    <button type='button' className='left' onClick={() => slideLeft(6)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX5}px`}}>
                        {SFData5.map((item,index) => (
                            SFData5[index].backdrop_path !== null ?
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