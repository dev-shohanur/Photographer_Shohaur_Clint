import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} || Photographer-Shohanur`;
    },[title])
}

export default useTitle;