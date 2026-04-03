import '../OTT_Movie/Movie.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// 11-13 김광민 추가
import { useContext } from 'react'
import { OTTContext } from '../../api/OTT_Context'
//11-13 정호준 모달 import
import ModalB from "../OTT_ModalB/ModalB";

export default function Movie({PopularData, ActionData, AniData, DramaData, ComedyData, SFData}){
    const [MovieMenu, setMovieMenu] = useState(false)
    const {currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft} = useContext(OTTContext)
    const [openS,setOpenS] = useState(false)
    const [openB,setOpenB] = useState(false)
    return(
        <div className='movie_container'>
            <div className='gra01'></div>
            <div className="sec_top">
                <h1>영화</h1>
                <ul className='dep1'>
                    <li><button type="button" onClick={() => setMovieMenu(!MovieMenu)} className='MovieDep1'>장르 ▼</button></li>
                    <li>
                        {MovieMenu && (
                            <ul className='dep2'>
                                <Link to='/PopularMovie'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>인기있는 한국영화</button>
                                    </li>
                                </Link>
                                <Link to='/ActionMovie'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>액션 영화</button>
                                    </li>
                                </Link>
                                <Link to='/AniMovie'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>애니메이션 영화</button>
                                    </li>
                                </Link>
                                <Link to='/DramaMovie'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>드라마 장르 영화</button>
                                    </li>
                                </Link>
                                <Link to='/ComedyMovie'>
                                    <li>
                                        <button type='button' style={{borderRight:'1px solid #fff'}}>코미디 영화</button>
                                    </li>
                                </Link>
                                <Link to='/SFMovie'>
                                    <li>
                                        <button type='button'>SF 영화</button>
                                    </li>
                                </Link>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <img src={'https://image.tmdb.org/t/p/original//5A01YSCPYoCOZOhh9tU7F3Htxkf.jpg'} />
            <div className='movie_info'>
                <h1>거룩한 밤: 데몬 헌터스</h1>
                <p>
                    "악마와 그를 쫓는 어둠의 숭배자들로 인해 혼란에 빠지게 된 도시. <br/>
                    공권력조차 이들 앞에서 무력해지자 특별한 능력을 가진 어둠의 해결사 거룩한 밤 팀 <br/>
                    바우, 샤론, 김군이 직접 악의 무리를 처단하고자 한다. <br/>
                    그러던 중 갑자기 동생 은서가 이상증세를 보인다는 의뢰인 정원이 찾아오고 <br/>
                    그 안에서 지금껏 본 적 없던 강력한 존재의 기운을 느끼는데… <br/>
                    과연 거룩한 밤 팀은 악의 무리에 맞서 세상을 구원해 낼 수 있을까?",<br/>
                </p>
                <button type='button' className='play' style={{color:'black'}}>▶ 재생</button>
                <button type='button' className='detailInfo'>ⓘ 상세 정보</button>
            </div>
            <div className='movies'>
                <h2 className='h2_1'>인기있는 한국 영화</h2>
                <div className='movie1'>
                    <div className='movie'>
                        <button type='button' className='left' onClick={() => slideLeft(1)}>
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <ul style={{marginLeft:`${currentX}px`}}>
                            {PopularData.map((item,index) => (
                                PopularData[index].backdrop_path !== null ?
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
                <div className='movie movie2'>
                    <button type='button' className='left' onClick={() => slideLeft(2)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX1}px`}}>
                        {ActionData.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(2)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>애니메이션 영화</h2>
                <div className='movie movie3'>
                    <button type='button' className='left' onClick={() => slideLeft(3)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX2}px`}}>
                        {AniData.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(3)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>드라마 장르 영화</h2>
                <div className='movie movie4'>
                    <button type='button' className='left' onClick={() => slideLeft(4)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX3}px`}}>
                        {DramaData.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(4)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>코미디 영화</h2>
                <div className='movie movie5'>
                    <button type='button' className='left' onClick={() => slideLeft(5)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX4}px`}}>
                        {ComedyData.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li>
                        ))}
                    </ul>
                    <button type='button' className='right' onClick={() => {slideRight(5)}}>
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <h2 className='h2_2'>SF 영화</h2>
                <div className='movie movie6'>
                    <button type='button' className='left' onClick={() => slideLeft(6)}>
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul style={{marginLeft:`${currentX5}px`}}>
                        {SFData.map((item) => (
                            <li key={item.id} onClick={()=>{setOpenB(!openB);setOpenS(item);}}>
                                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li>
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