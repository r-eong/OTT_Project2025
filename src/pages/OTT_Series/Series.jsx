import '../OTT_Series/Series.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ModalS from '../OTT_ModalS/ModalS'
import ModalB from '../OTT_ModalB/ModalB'
// 11-13 김광민 추가
import { useContext } from 'react'
// import { OTTContext } from '../../api/OTT_Context'
import { OTTContext } from '../../api/OTT_Context'

export default function Series({PopularDrama,KoreaDrama,OverseasDrama,CrimeDrama,AniDrama,MedicalDrama}){
    const [MovieMenu, setMovieMenu] = useState(false)
    const [openS,setOpenS] = useState(false)
    const [openB,setOpenB] = useState(false)
    const {currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft} = useContext(OTTContext)
    
      
    return(
        <div className='series_container'>
            <div className='gra01'></div>
            <div className="sec_top">
                <h1>시리즈</h1>
                <ul className='dep1 series_dep1'>
                    <li><button type="button" className='dep1_btn' onClick={() => setMovieMenu(!MovieMenu)}>장르 ▼</button></li>
                    <li>
                        {MovieMenu && (
                            <ul className='dep2'>
                                <Link to='/PopularDrama'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff', width:'160px'}}>세계적으로 인기있는 시리즈</button>
                                    </li>
                                </Link>
                                <Link to='/KoreaDrama'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>한국 시리즈</button>
                                    </li>
                                </Link>
                                <Link to='/OverseasDrama'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>해외 시리즈</button>
                                    </li>
                                </Link>
                                <Link to='/CrimeDrama'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>범죄 시리즈</button>
                                    </li>
                                </Link>
                                <Link to='/AniDrama'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>애니메이션</button>
                                    </li>
                                </Link>
                                <Link to='/MedicalDrama'>
                                    <li>
                                        <button type='button'>매디컬 시리즈</button>
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//2fOKVDoc2O3eZmBZesWPuE5kgPN.jpg'}/>
            <div className='movie_info'>
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
            <div className='movies'>
                <h2 className='h2_1'>세계적으로 인기있는 시리즈</h2>
                <div className='series1'>
                    <div className='series'>
                        <button type='button' className='left' onClick={() => slideLeft(1)}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul style={{marginLeft:`${currentX}px`}}>
                            {PopularDrama.map((item) => (
                                <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                    <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />{/* 11-12 수정 */}
                                </li>
                            ))}
                        </ul>
                        <button type='button' className='right' onClick={() => {slideRight(1)}}>
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                    {openB && <ModalB item={openS} setOpenB={setOpenB} openB={openB}/>}{/* 11-12 수정 */}
                </div>
                <h2 className='h2_2'>한국 시리즈</h2>
                <div className='series series2'>
                    <button type='button' className='left' onClick={() => slideLeft(2)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX1}px`}}>
                        {KoreaDrama.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>{/* 11-12 수정 */}
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(2)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>해외 시리즈</h2>
                <div className='series series2'>
                    <button type='button' className='left' onClick={() => slideLeft(3)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX2}px`}}>
                        {OverseasDrama.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>{/* 11-12 수정 */}
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(3)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>범죄 시리즈</h2>
                <div className='series series3'>
                    <button type='button' className='left' onClick={() => slideLeft(4)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX3}px`}}>
                        {CrimeDrama.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>{/* 11-12 수정 */}
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(4)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>애니메이션</h2>
                <div className='series series4'>
                    <button type='button' className='left' onClick={() => slideLeft(5)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX4}px`}}>
                        {AniDrama.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>{/* 11-12 수정 */}
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(5)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>매디컬 시리즈</h2>
                <div className='series series5'>
                    <button type='button' className='left' onClick={() => slideLeft(6)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX5}px`}}>
                        {MedicalDrama.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>{/* 11-12 수정 */}
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(6)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}