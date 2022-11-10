import { useEffect } from "react"

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Shamu's Kitchen`;
  }, [title])
}

export default useTitle;