import React, { useEffect } from 'react'

function useDocumentTitle(count) {

    useEffect(() => {
        document.title = `Title ${count}`
    }, [count])
    return (
        <div>

        </div>
    )
}

export default useDocumentTitle
