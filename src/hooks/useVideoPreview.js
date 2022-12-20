import React from 'react'

const useVideoPreview = () => {
    const [previewState, setPreviewState] = React.useState(true)

    const mouseOverEvent = (e) => {
        if (e.type == 'mouseover'){
            setPreviewState(false)
        }
        else if (e.type == 'mouseout'){
            setPreviewState(true)
        }
        console.log(previewState)
    }   

    return [previewState, mouseOverEvent]
}

export default useVideoPreview 