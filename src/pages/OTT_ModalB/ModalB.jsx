import "../OTT_ModalB/ModalB.css"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { LikeAuth } from "../OTT_Like/LikeAuth"

export default function ModalB(props){
    const {wishlist,setWishlist,addToWishlist,removeFromWishlist} = useContext(LikeAuth)
        const genre =(item)=>{
        if(item===14){
            return '판타지'
        }else if(item === 27){
            return '공포'
        }else if(item === 18){
            return '드라마'
        }
        else if(item === 28){
            return '액션'
        }
        else if(item === 12){
            return '모험'
        }
        else if(item === 16){
            return '애니메이션'
        }
        else if(item === 35){
            return '코미디'
        }
        else if(item === 80){
            return '범죄'
        }
        else if(item === 99){
            return '다큐멘터리'
        }
        else if(item === 10749){
            return '로맨스'
        }
        else if(item === 878){
            return 'SF'
        }
        else if(item === 53){
            return '스릴러'
        }
        else if(item === 10750){
            return '전쟁'
        }
        else if(item === 37){
            return '서부극'
        }
        else if(item === 10765){
            return 'SF & 판타지'
        }
        else if(item === 9648){
            return '미스터리'
        }
        else if(item === 10759){
            return '액션 & 어드벤처'
        }else{
            null
        }
    }
    return(
        
        <div className="ModalB_container" >
            <div className="modal_back" onClick={()=>props.setOpenB(!props.openB)}></div>
            <div className="ModalB_box">
                <img src={`https://image.tmdb.org/t/p/original${props.item.backdrop_path}`} alt="" />
            </div>
            <div className="ModalB_box">
                <button type="button" className="close_btn" onClick={()=>props.setOpenB(!props.openB)}><i className="fa-solid fa-xmark"></i></button>
                <ul>
                    <li className="modalLi"><h3 className="Title_logo">{props.item.name}{props.item.title}</h3></li>
                    <li className="MB_btn_group modalLi">
                        <div className="left_group">
                            <button type="button" className="play_btn">▶ 재생</button>
                            {wishlist.find((wishlist)=>wishlist.id===props.item.id) === undefined ?
                            <button type="button" className="like_btn" onClick={()=>{addToWishlist(props.item)}}>❤</button>
                            :
                            <button type="button" className="like_btn" style={{color:'red'}} onClick={()=>{removeFromWishlist(props.item.id)}}>❤</button>
                            }
                            
                        </div>
                        <div className="right_group">
                            <button type="button"><i className="fa-solid fa-volume-high"></i></button>
                        </div>
                    </li>
                    <li className="info_group modalLi">
                        <div className="L_info">
                            <p>리미티드 시리즈 <span>HD</span></p>
                            <p><img src="15_40x40.png" alt="시청 연령" /></p>
                            <p>{props.item.overview.slice(0,120)}...</p>
                        </div>
                        <div className="R_info">
                            <p><span className="tag">장르 : </span> <br/>{props.item.genre_ids.map((item,index)=>(
                                <span key={index}>{genre(item)}<br/> </span>
                            ))} </p>
                            <p><span className="tag">개봉일자 :</span> {props.item.first_air_date}{props.item.release_date}</p>                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}