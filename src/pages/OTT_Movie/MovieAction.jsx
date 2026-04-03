import '../OTT_Movie/MovieAction.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
// 11-13 김광민 추가
import { useContext } from 'react'
import { OTTContext } from '../../api/OTT_Context'
//11-13 정호준 모달 import
import ModalB from "../OTT_ModalB/ModalB";

export default function MovieAction({ActionData, ActionData1, ActionData2, ActionData3, ActionData4, ActionData5}){
    const {currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft} = useContext(OTTContext)
    const [openS,setOpenS] = useState(false)
    const [openB,setOpenB] = useState(false)
    return(
        <div className='movieAction_container'>
            <div className='gra01'></div>
            <div className="sec_top">
                <Link to = '/Movie'>
                    <h1 className='tagname'>영화</h1>
                </Link>
                <span>▶</span>
                <h1>인기있는 액션 영화</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//82lM4GJ9uuNvNDOEpxFy77uv4Ak.jpg'} />
            <div className='movieAction_info'>
                <h1>프레데터: 죽음의 땅</h1>
                <p>
                    프레데터로서 존재를 증명하기 위해 우주에서 가장 위험한 행성으로 첫 사냥에 나선 덱. <br/>
                    죽음의 땅에 도사린 모든 것으로부터 공격을 받던 순간, 휴머노이드 티아를 만난다. <br/>
                    최상위 포식자 칼리스크에 맞서게 된 둘은 생존과 각자의 목적을 위해 극한의 사투를 벌이게 되는데…<br/>
                </p>
                <button type='button' className='play'>▶ 재생</button>
                <button type='button' className='detailInfo'>ⓘ 상세 정보</button>
            </div>
            <div className='movieActions'>
                <h2 className='h2_1'>전 세계를 누비는 액션</h2>
                <div className='movieAction1'>
                    <div className='movieAction'>
                        <button type='button' className='left' onClick={() => slideLeft(1)}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul style={{marginLeft:`${currentX}px`}}>
                            {ActionData.map((item, index) => (
                                ActionData[index].backdrop_path !== null ?
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
                <h2 className='h2_2'>한계 없는 스펙터클</h2>
                <div className='movieAction movieAction2'>
                    <button type='button' className='left' onClick={() => slideLeft(2)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX1}px`}}>
                        {ActionData1.map((item, index) => (
                            ActionData1[index].backdrop_path !== null ? 
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(2)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>속도와 충격의 순간</h2>
                <div className='movieAction movieAction3'>
                    <button type='button' className='left' onClick={() => slideLeft(3)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX2}px`}}>
                        {ActionData2.map((item,index) => (
                            ActionData2[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(3)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>극한의 대결</h2>
                <div className='movieAction movieAction4'>
                    <button type='button' className='left' onClick={() => slideLeft(4)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX3}px`}}>
                        {ActionData3.map((item,index) => (
                            ActionData3[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(4)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>글로벌 어드벤처 필름</h2>
                <div className='movieAction movieAction5'>
                    <button type='button' className='left' onClick={() => slideLeft(5)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX4}px`}}>
                        {ActionData4.map((item,index) => (
                            ActionData4[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(5)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>화면 밖 전쟁터</h2>
                <div className='movieAction movieAction6'>
                    <button type='button' className='left' onClick={() => slideLeft(6)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX5}px`}}>
                        {ActionData5.map((item,index) => (
                            ActionData5[index].backdrop_path !== null ?
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