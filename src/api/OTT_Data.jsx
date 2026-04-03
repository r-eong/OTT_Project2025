import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function useOttData(){
    //가져오는 데이터 목록
    const [PopularData,setPopularData] = useState([])//인기순1
    const [PopularData1,setPopularData1] = useState([])//인기순2
    const [PopularData2,setPopularData2] = useState([])//인기순3
    const [PopularData3,setPopularData3] = useState([])//인기순4
    const [PopularData4,setPopularData4] = useState([])//인기순5
    const [PopularData5,setPopularData5] = useState([])//인기순6
    const [ActionData,setActionData] = useState([])//액션 영화1
    const [ActionData1,setActionData1] = useState([])//액션 영화2
    const [ActionData2,setActionData2] = useState([])//액션 영화3
    const [ActionData3,setActionData3] = useState([])//액션 영화4
    const [ActionData4,setActionData4] = useState([])//액션 영화5
    const [ActionData5,setActionData5] = useState([])//액션 영화6
    const [AniData,setAniData] = useState([])//애니메이션1
    const [AniData1,setAniData1] = useState([])//애니메이션2
    const [AniData2,setAniData2] = useState([])//애니메이션3
    const [AniData3,setAniData3] = useState([])//애니메이션4
    const [AniData4,setAniData4] = useState([])//애니메이션5
    const [AniData5,setAniData5] = useState([])//애니메이션6

    const [DramaData,setDramaData] = useState([])//드라마1
    // 김광민 11-12 -----------------------------------------------------------------------
    const [DramaData1,setDramaData1] = useState([])//드라마2
    const [DramaData2,setDramaData2] = useState([])//드라마3
    const [DramaData3,setDramaData3] = useState([])//드라마4
    const [DramaData4,setDramaData4] = useState([])//드라마5
    const [DramaData5,setDramaData5] = useState([])//드라마6
    // 김광민 드라마 수정 끝

    const [ComedyData,setComedyData] = useState([])//코미디1
    const [ComedyData1,setComedyData1] = useState([])//코미디2
    const [ComedyData2,setComedyData2] = useState([])//코미디3
    // 김광민 11-12 코미디 수정------------------------------------------------------------
    const [ComedyData3,setComedyData3] = useState([])//코미디4
    const [ComedyData4,setComedyData4] = useState([])//코미디5
    const [ComedyData5,setComedyData5] = useState([])//코미디6
    // 김광민 코미디 수정 끝

    /* 11-12 수정 */
    const [SFData,setSFData] = useState([])//SF1
    const [SFData1,setSFData1] = useState([])//SF2
    const [SFData2,setSFData2] = useState([])//SF3
    // 김광민 11-12 SF 수정 ---------------------------------------------------------------------
    const [SFData3,setSFData3] = useState([])//SF4
    const [SFData4,setSFData4] = useState([])//SF5
    const [SFData5,setSFData5] = useState([])//SF6

    // 드라마(시리즈)
    const [PopularDrama,setPopularDrama]=useState([]); // 인기순1
    // 김광민 11-12 인기 드라마 추가 ----------------------------------------------------------------
    const [PopularDrama1,setPopularDrama1]=useState([]); // 인기순2
    const [PopularDrama2,setPopularDrama2]=useState([]); // 인기순3
    const [PopularDrama3,setPopularDrama3]=useState([]); // 인기순4
    const [PopularDrama4,setPopularDrama4]=useState([]); // 인기순5
    const [PopularDrama5,setPopularDrama5]=useState([]); // 인기순6
    // 김광민 인기드라마 추가 끝
    const [KoreaDrama,setKoreaDrama]=useState([]); // 한국 드라마1
    // 김광민 11-12 한국 드라마 추가 ----------------------------------------------------------------------
    const [KoreaDrama1,setKoreaDrama1]=useState([]); // 한국 드라마2
    const [KoreaDrama2,setKoreaDrama2]=useState([]); // 한국 드라마3
    const [KoreaDrama3,setKoreaDrama3]=useState([]); // 한국 드라마4
    const [KoreaDrama4,setKoreaDrama4]=useState([]); // 한국 드라마5
    const [KoreaDrama5,setKoreaDrama5]=useState([]); // 한국 드라마6
    // 김광민 한국 드라마 추가 끝
    const [OverseasDrama,setOverseasDrama]=useState([]); // 해외 드라마1
    // 김광민 11-12 해외 드라마 추가 ------------------------------------------------------------------------
    const [OverseasDrama1,setOverseasDrama1]=useState([]); // 해외 드라마2
    const [OverseasDrama2,setOverseasDrama2]=useState([]); // 해외 드라마3
    const [OverseasDrama3,setOverseasDrama3]=useState([]); // 해외 드라마4
    const [OverseasDrama4,setOverseasDrama4]=useState([]); // 해외 드라마5
    const [OverseasDrama5,setOverseasDrama5]=useState([]); // 해외 드라마6
    // 김광민 해외 드라마 추가 끝
    const [CrimeDrama,setCrimeDrama]=useState([]); // 범죄 드라마1
    // 김광민 11-12 범죄 드라마 추가--------------------------------------------------------------------------
    const [CrimeDrama1,setCrimeDrama1]=useState([]); // 범죄 드라마2
    const [CrimeDrama2,setCrimeDrama2]=useState([]); // 범죄 드라마3
    const [CrimeDrama3,setCrimeDrama3]=useState([]); // 범죄 드라마4
    const [CrimeDrama4,setCrimeDrama4]=useState([]); // 범죄 드라마5
    const [CrimeDrama5,setCrimeDrama5]=useState([]); // 범죄 드라마6
    // 김광민 범죄 드라마 추가 끝
    const [AniDrama,setAniDrama]=useState([]); // 애니메이션1
    // 김광민 11-12 애니메이션 추가 ------------------------------------------------------------------------
    const [AniDrama1,setAniDrama1]=useState([]); // 애니메이션2
    const [AniDrama2,setAniDrama2]=useState([]); // 애니메이션3
    const [AniDrama3,setAniDrama3]=useState([]); // 애니메이션4
    const [AniDrama4,setAniDrama4]=useState([]); // 애니메이션5
    const [AniDrama5,setAniDrama5]=useState([]); // 애니메이션6
    // 김광민 애니메이션 추가 끝
    const [MedicalDrama,setMedicalDrama]=useState([]); // 매디컬 드라마1
    // 김광민 11-12 매디컬 드라마 추가 ----------------------------------------------------------------------
    const [MedicalDrama1,setMedicalDrama1]=useState([]); // 매디컬 드라마2
    const [MedicalDrama2,setMedicalDrama2]=useState([]); // 매디컬 드라마3
    const [MedicalDrama3,setMedicalDrama3]=useState([]); // 매디컬 드라마4
    const [MedicalDrama4,setMedicalDrama4]=useState([]); // 매디컬 드라마5
    const [MedicalDrama5,setMedicalDrama5]=useState([]); // 매디컬 드라마6

    
    //에러 메시지
    const [errMsg,setErrMsg] = useState(null)
    //로딩 중 확인
    const [loading,setLoading] = useState(true)
    //데이더 가지고 오는 페치
    
    //인기순 한국 영화
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub1
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub2
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //인기순 한국 영화 sub5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_original_language=ko&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setPopularData5(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    //장르 액션 한국어 영화 
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub1
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub2
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 액션 한국어 영화 sub5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=28&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setActionData5(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub1
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub2
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터2222')
            setAniData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 애니메이션 한국어 영화 sub5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setAniData5(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 드라마 한국어 영화
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=18&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setDramaData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
     //장르 드라마 한국어 영화 sub1
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=18&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setDramaData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 드라마 한국어 영화 sub2
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=18&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setDramaData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 드라마 한국어 영화 sub3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=18&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setDramaData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 드라마 한국어 영화 sub4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=18&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setDramaData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 드라마 한국어 영화 sub5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=18&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setDramaData5(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 코미디
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 코미디1
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
        
        
    },[])
    //장르 코미디2
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 코미디3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 코미디4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 코미디5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=35&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setComedyData5(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 SF
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=1`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 SF1
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=2`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData1(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 SF2
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=3`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData2(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 SF3
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=4`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData3(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 SF4
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=5`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData4(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    //장르 SF5
    useEffect(()=>{    
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=878&page=6`)
        .then((res)=>{
            if(!res.ok){
                throw new Error(`HTTP Error! status, ${res.status}`)
            }
            return res.json()
        })
        .then((data)=>{
            console.log(data,'받아온 데이터')
            setSFData5(data.results)
        })
        .catch((err)=>{
            console.log("X 에러 발생",err)
            setErrMsg(err.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    // -------------------------------------------------------------------------------------------------------------------------------------
    // 인기순 드라마(시리즈)1
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 김광민 11-12 인기순 드라마 패치 추가 -------------------------------------------------------------------------------------------------
    // 인기순 드라마(시리즈) sub1
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=2')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama1(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub2
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=3')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama2(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub3
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=4')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama3(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub4
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=5')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama4(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub5
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=6')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama5(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 김광민 11-12 인기순 드라마 패치 추가 끝 ----------------------------------------------------------------------
    
    // 한국 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country=KR&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setKoreaDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈)3
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=3')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama2(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub1
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=2')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama1(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub2
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=3')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama2(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub3
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=4')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama3(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub4
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=5')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama4(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 인기순 드라마(시리즈) sub5
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&page=6')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setPopularDrama5(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 김광민 11-12 한국 드라마 패치 추가 ----------------------------------------------------------------------
    // 한국 드라마(시리즈) sub1
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country=KR&page=2')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setKoreaDrama1(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 한국 드라마(시리즈) sub2
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country=KR&page=3')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setKoreaDrama2(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 한국 드라마(시리즈) sub3
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country=KR&page=4')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setKoreaDrama3(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 한국 드라마(시리즈) sub4
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country=KR&page=5')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setKoreaDrama4(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 한국 드라마(시리즈) sub5
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country=KR&page=6')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setKoreaDrama5(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 김광민 한국드라마 패치 추가 끝---------------------------------------------------------------------------
    // 해외 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country!=KR&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setOverseasDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 해외 드라마(시리즈) sub1
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country!=KR&page=2')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setOverseasDrama1(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 해외 드라마(시리즈) sub2
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country!=KR&page=3')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setOverseasDrama2(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 해외 드라마(시리즈) sub3
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country!=KR&page=4')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setOverseasDrama3(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 해외 드라마(시리즈) sub4
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country!=KR&page=5')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setOverseasDrama4(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 해외 드라마(시리즈) sub5
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_origin_country!=KR&page=6')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setOverseasDrama5(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 범죄 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=80,18&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setCrimeDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
     // 범죄 드라마(시리즈) sub1
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=80,18&page=2')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setCrimeDrama1(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 범죄 드라마(시리즈) sub2
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=80,18&page=3')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setCrimeDrama2(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 범죄 드라마(시리즈) sub3
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=80,18&page=4')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setCrimeDrama3(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 범죄 드라마(시리즈) sub4
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=80,18&page=5')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setCrimeDrama4(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 범죄 드라마(시리즈) sub5
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=80,18&page=6')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setCrimeDrama5(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 애니메이션(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용111111111',data)
            setAniDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 애니메이션(시리즈) sub1
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=2')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용111111111',data)
            setAniDrama1(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 애니메이션(시리즈) sub2
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=3')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용111111111',data)
            setAniDrama2(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 애니메이션(시리즈) sub3
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=4')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용111111111',data)
            setAniDrama3(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 애니메이션(시리즈) sub4
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=5')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용111111111',data)
            setAniDrama4(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 애니메이션(시리즈) sub5
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&with_genres=16&page=6')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용111111111',data)
            setAniDrama5(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 매디컬 드라마(시리즈)
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_keywords=208788&page=1')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setMedicalDrama(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 매디컬 드라마(시리즈) sub1
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_keywords=208788&page=2')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setMedicalDrama1(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 매디컬 드라마(시리즈) sub2
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_keywords=208788&page=3')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setMedicalDrama2(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 매디컬 드라마(시리즈) sub3
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_keywords=208788&page=4')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setMedicalDrama3(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 매디컬 드라마(시리즈) sub4
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_keywords=208788&page=5')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setMedicalDrama4(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    // 매디컬 드라마(시리즈) sub5
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/tv?api_key=72911627295b4bb76b26422835ae51f0&language=ko-KR&sort_by=popularity.desc&with_genres=18&with_keywords=208788&page=6')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log('데이터 내용',data)
            setMedicalDrama5(data.results);
        })
        .finally(()=>{
            console.log('완료')
        })
    },[]);
    
    return [PopularData,PopularData1,PopularData2,PopularData3,PopularData4,PopularData5,
            ActionData,ActionData1,ActionData2,ActionData3,ActionData4,ActionData5,
            AniData,AniData1,AniData2,AniData3,AniData4,AniData5,
            DramaData,DramaData1,DramaData2,DramaData3,DramaData4,DramaData5,
            ComedyData,ComedyData1,ComedyData2,ComedyData3,ComedyData4,ComedyData5,
            SFData,SFData1,SFData2,SFData3,SFData4,SFData5,
            PopularDrama,PopularDrama1,PopularDrama2,PopularDrama3,PopularDrama4,PopularDrama5,
            KoreaDrama,KoreaDrama1,KoreaDrama2,KoreaDrama3,KoreaDrama4,KoreaDrama5,
            OverseasDrama,OverseasDrama1,OverseasDrama2,OverseasDrama3,OverseasDrama4,OverseasDrama5,
            CrimeDrama,CrimeDrama1,CrimeDrama2,CrimeDrama3,CrimeDrama4,CrimeDrama5,
            AniDrama,AniDrama1,AniDrama2,AniDrama3,AniDrama4,AniDrama5,
            MedicalDrama,MedicalDrama1,MedicalDrama2,MedicalDrama3,MedicalDrama4,MedicalDrama5
        ];
}