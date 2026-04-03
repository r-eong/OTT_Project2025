import { createContext } from "react";
import { useState } from "react";

export const OTTContext = createContext()

export default function OTTProvider({children}){
    // 로그인 유저
    const [user, setUser] = useState(null)

    const login = (username) => {
        setUser(username)
    }

    const logout = () => {
        setUser(null)
    }

    // 슬라이드 11-13 김광민
    const [currentX, setCurrentX] = useState(0)
    const [currentX1, setCurrentX1] = useState(0)
    const [currentX2, setCurrentX2] = useState(0)
    const [currentX3, setCurrentX3] = useState(0)
    const [currentX4, setCurrentX4] = useState(0)
    const [currentX5, setCurrentX5] = useState(0)

    // 슬라이드 함수 11-13 김광민
    const slideRight = (num) => {
        console.log(num)
            if(currentX > -5334 && num === 1){
                setCurrentX(currentX - 356)
            }
            else if(currentX1 > -5334 && num === 2 ){
                setCurrentX1(currentX1 - 356)
            }else if(currentX2 > -5334 && num === 3  ){
                setCurrentX2(currentX2 - 356)
                
            }else if(currentX3 > -5334 && num === 4  ){
                setCurrentX3(currentX3 - 356)
                
            }else if(currentX4 > -5334 && num === 5 ){
                setCurrentX4(currentX4 - 356)
                
            }else if(currentX5 > -5334 && num === 6){
                setCurrentX5(currentX5 - 356)
            }else{
                null;
            }
        }
    const slideLeft = (num) => {
        if(currentX < 0 && num === 1){
            setCurrentX(currentX + 356)
        }
        else if(currentX1 < 0 && num === 2 ){
            setCurrentX1(currentX1 + 356)
        }else if(currentX2 < 0 && num === 3){
            setCurrentX2(currentX2 + 356) 
        }else if(currentX3 < 0 && num === 4){
            setCurrentX3(currentX3 + 356)    
        }else if(currentX4 < 0 && num === 5){
            setCurrentX4(currentX4 + 356)    
        }else if(currentX5 < 0 && num === 6){
            setCurrentX5(currentX5 + 356)            
        }else{
                null;
            }
    } 
    return(
        <>
        <OTTContext.Provider value={{user, login, logout, currentX, currentX1, currentX2, currentX3, currentX4, currentX5, slideRight, slideLeft}}>
            {children}
        </OTTContext.Provider>
        </>
    )
}
