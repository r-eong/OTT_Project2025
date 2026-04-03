import { useState,useEffect } from "react";
import { useContext } from "react";
import { LikeAuth } from "./LikeAuth";
import "../OTT_Like/Like.css"
import ModalB from '../OTT_ModalB/ModalB'

export default function Like({children}){
    const {wishlist,setWishlist,addToWishlist,removeFromWishlist,removeAll}=useContext(LikeAuth)
    const [openS,setOpenS] = useState([])
    const [openB,setOpenB] = useState(false)
    const [ModalOpen,setModalOpen]=useState(false)
    return(
        <section className="section_Like">
            <div className="Like">
                <h1>내가 찜한 리스트</h1>
                {wishlist.length<1? 
                    <div className="msg"><p>아직 찜한 목록이 없습니다</p></div>
                    :
                    <div>
                        <button type="button"onClick={()=>setModalOpen(!ModalOpen)}>찜한 목록 모두 지우기</button>
                        <div className="Like_container">
                            <ul>
                                {wishlist.map((item)=>(
                                    <li key={item.id}>
                                        <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="찜한 리스트" onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {openB && <ModalB item={openS} setOpenB={setOpenB} openB={openB}/>}
                        {ModalOpen && 
                            <div className="resetModal">
                                <h2>안내 메시지</h2>
                                <p>정말로 찜 목록의 모든 리스트를 지우시겠습니까?</p>
                                <div className="btn">
                                    <button type="button" onClick={()=>{setModalOpen(!ModalOpen),removeAll()}}>확인</button>
                                    <button type="button" onClick={()=>setModalOpen(!ModalOpen)}>취소</button>
                                </div>
                            </div>
                    }
                    </div>
                     
                }
                {/* <button type="button" onClick={()=>setModalOpen(!ModalOpen)}>찜한 목록 모두 지우기</button>
                <div className="Like_container">
                    <ul>
                        {wishlist.map((item)=>(
                            <li key={item.id}>
                                <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="찜한 리스트" onClick={()=>{setOpenB(!openB);setOpenS(item);}}/>
                            </li>
                        ))}
                    </ul>
                </div>
                {openB && <ModalB item={openS} setOpenB={setOpenB} openB={openB}/>}
                {ModalOpen && 
                    <div className="resetModal">
                        <h2>안내 메시지</h2>
                        <p>정말로 찜 목록의 모든 리스트를 지우시겠습니까?</p>
                        <div className="btn">
                            <button type="button" onClick={()=>{setModalOpen(!ModalOpen),removeAll()}}>확인</button>
                            <button type="button" onClick={()=>setModalOpen(!ModalOpen)}>취소</button>
                        </div>
                    </div>
                } */}
            </div>
        </section>
    )
}