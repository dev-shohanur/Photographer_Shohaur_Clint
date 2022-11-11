import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} || Photoghapher-Shohanur`;
    },[title])
}

export default useTitle;