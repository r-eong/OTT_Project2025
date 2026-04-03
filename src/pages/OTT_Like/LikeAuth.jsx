import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const LikeAuth = createContext(null)

export default function LikeAuthProvider({children}){

/* 찜화면 */
    const [wishlist,setWishlist] = useState([])
    /* const [wishlist,setWishlist] = useState(()=>{
        const saved = localStorage.getItem('wishlist')
        //저장된 value가 있으면 복원, 없으면 빈 배열
        return saved ? JSON.parse(saved) : []
    })
    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist]) */

    const addToWishlist=(item)=>{
        let wishlistCopy = [...wishlist]
        wishlistCopy.push(item)
        setWishlist(wishlistCopy)
    }
    const removeFromWishlist=(id)=>{
        setWishlist(wishlist.filter((wishlist)=>wishlist.id!==id))
    }
    const isInWishlist=(id)=>{

    }
    const removeAll =()=>{
        setWishlist([])
        localStorage.removeItem('wishlist')
    }
     return(
            <LikeAuth.Provider value={{wishlist,setWishlist,addToWishlist,removeFromWishlist,removeAll}}>
                {children}
            </LikeAuth.Provider>
        )
        
}