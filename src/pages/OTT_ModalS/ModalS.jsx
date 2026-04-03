import "../OTT_ModalS/ModalS.css"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import ModalB from "../OTT_ModalB/ModalB"



export default function ModalS(props){
    console.log(props.item)
    const [openB,setOpenB] = useState(false)
    const [ModalOpen,setModalOpen]=useState(false)
    
    
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
        }
    }
    return (
        <div className="ModalS">
            <h2 className="TitleLogo">{props.item.name}</h2>
            <ul>
                <li><img src={`https://image.tmdb.org/t/p/original${props.item.backdrop_path}`} alt="" /></li>
                <li className="ModalS_BtnAria">
                    <div className="MS_l_Btns">
                        <button type="button" className="PlayBtn">▶</button>
                        <button type="button" className="LikeBtn">❤</button>
                    </div>
                    <div className="Ms_r_Btns">
                        <button type="button" className="InfoBtn" onClick={()=>setOpenB(!openB)}><i class="fa-solid fa-angle-down"></i></button>
                    </div>
                </li>
                <li>
                    {<span>{props.item.adult?<img src="19_112x1120.png" alt="청소년 이용불가" />:<img src="15_40x40.png" alt="15세 이용가" />}</span>}
                    <span>리미티드 시리즈</span>
                    <span className="quality">HD</span>
                </li>
                <li className="ModalS_Genre">
                    <ul>
                        {props.item.genre_ids.map((item,index)=>(
                            <li key={index}>{genre(item)}</li>
                        ))}
                    </ul>
                </li>
            </ul>
            {/* {openB && <ModalB item={props.item} setOpenB={setOpenB} openB={openB}/>} */}
        </div>
    )
}