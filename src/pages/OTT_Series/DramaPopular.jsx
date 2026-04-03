import { Link } from 'react-router-dom'
import '../OTT_Series/DramaPopular.css'
import { useState } from 'react'
// 11-13 김광민 추가
import { useContext } from 'react'
import { OTTContext } from '../../api/OTT_Context'
//11-13 정호준 모달 import
import ModalB from "../OTT_ModalB/ModalB";

export default function DramaPopular({PopularDrama,PopularDrama1,PopularDrama2,PopularDrama3,PopularDrama4,PopularDrama5}){
    const {currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft} = useContext(OTTContext)
    const [openS,setOpenS] = useState(false)
    const [openB,setOpenB] = useState(false)
    return(
        <div className='dramaPopular_container'>
            <div className='gra01'></div>
            <div className="sec_top">
                <Link to='/Series'>
                    <h1 className='tagname'>시리즈</h1>
                </Link>
                <span>▶</span>
                <h1>세계적으로 인기있는 시리즈</h1>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//2fOKVDoc2O3eZmBZesWPuE5kgPN.jpg'}/>
            <div className='dramaPopular_info'>
                <h1>그것: 웰컴 투 데리</h1>
                <p>"그곳은 항상 사라짐으로 시작된다"<br/>
                    1962년, 한 가족이 메인 주의 작은 마을 데리에 이사 오면서 <br/>
                    연쇄적인 실종과 설명할 수 없는 불길한 징조가 퍼져나간다.<br/> 
                    비밀을 감춘 하수도와 오래된 서커스의 그림자, 어른들은 외면하고 아이들은 속삭인다. <br/><br/>
                    “<strong>무언가</strong>가 깨어났다고” <br/><br/>
                    점점 커지는 공포 속에서 마을의 과거와 연결된 금기된 진실이 모습을 드러내기 시작하고, <br/>
                    누구도 안전하지 않다는 사실이 선명해진다. <br/>
                    그 미소의 주인이 다시 환영을 건네올 때, <br/>
                    이들은 과연 무엇을 마주하게 될 것인가",
                </p>
                <button type='button' className='play'>▶ 재생</button>
                <button type='button' className='detailInfo'>ⓘ 상세 정보</button>
            </div>
            <div className='dramaPopulars'>
                <h2 className='h2_1'>글로벌 히트 스토리</h2>
                <div className='dramaPopular1'>
                    <div className='dramaPopular'>
                        <button type='button' className='left' onClick={() => slideLeft(1)}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul style={{marginLeft:`${currentX}px`}}>
                            {PopularDrama.map((item, index) => (
                                PopularDrama[index].backdrop_path !== null ?
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
                <h2 className='h2_2'>장르 넘버원!</h2>
                <div className='dramaPopular dramaPopular2'>
                    <button type='button' className='left' onClick={() => slideLeft(2)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX1}px`}}>
                        {PopularDrama1.map((item, index) => (
                            PopularDrama1[index].backdrop_path !== null ? 
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(2)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>모두가 말하는 화제작</h2>
                <div className='dramaPopular dramaPopular3'>
                    <button type='button' className='left' onClick={() => slideLeft(3)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX2}px`}}>
                        {PopularDrama2.map((item,index) => (
                            PopularDrama2[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> :null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(3)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>상상 그 이상</h2>
                <div className='dramaPopular dramaPopular4'>
                    <button type='button' className='left' onClick={() => slideLeft(4)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX3}px`}}>
                        {PopularDrama3.map((item,index) => (
                            PopularDrama3[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(4)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>가볍게 빠져드는</h2>
                <div className='dramaPopular dramaPopular5'>
                    <button type='button' className='left' onClick={() => slideLeft(5)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX4}px`}}>
                        {PopularDrama4.map((item,index) => (
                            PopularDrama4[index].backdrop_path !== null ?
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li> : null
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(5)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>현실을 담다</h2>
                <div className='dramaPopular dramaPopular6'>
                    <button type='button' className='left' onClick={() => slideLeft(6)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX5}px`}}>
                        {PopularDrama5.map((item,index) => (
                            PopularDrama5[index].backdrop_path !== null ?
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