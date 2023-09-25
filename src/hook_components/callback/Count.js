import React from 'react'

function Count({ count, text }) {
    console.log(`Rendering count ${count}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Count)
