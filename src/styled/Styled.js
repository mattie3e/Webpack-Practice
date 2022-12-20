import styled from 'styled-components'


export const Img = styled.img`
    display: ${(props) => props.display ? props.display : 'block'};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  

    border: ${(props) => props.border ? props.border : 'none'};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};

    width: ${(props) => props.width ? props.width : '24px'};
    height: ${(props) => props.height ? props.height : 'fit-content'};

    padding: ${(props) => props.padding ? props.padding : ''};
    margin: ${(props) => props.margin ? props.margin : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &:hover{
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const Button = styled.button`
    display: ${(props) => props.display ? props.display : 'block'};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};      

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    color : ${(props) => props.color ? props.color : ''};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    border: ${(props) => props.border ? props.border : ''};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};
    
    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    padding: ${(props) => props.padding ? props.padding : ''};
    margin: ${(props) => props.margin ? props.margin : ''};

    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &:hover{
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const FlexDiv = styled.div`
    display: flex;

    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'}; 
    flex-wrap: ${(props) => props.FlexWrap ? props.FlexWrap : ''};

    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  

    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};
    
    color : ${(props) => props.color ? props.color : ''};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    border: ${(props) => props.border ? props.border : ''};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};

    padding: ${(props) => props.padding ? props.padding : ''};
    margin: ${(props) => props.margin ? props.margin : ''};

    justify-content: ${(props) => props.justifyContent ? props.justifyContent : ''};
    align-items: ${(props) => props.alignItems ? props.alignItems : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &:hover{
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
    
    ${(props) => {
        const align = props.align
        if (align){
            if (align == 'row-center'){
                // 가로 가운데 정렬
                return `justify-content: center;`
            }
            else if (align == 'column-center'){ 
                // 세로 가운데 정렬
                return `
                    flex-direction: column;
                    align-items: center;
                `
            }
            else if (align == 'row-vertical-center'){
                // 가로 수직 가운데 정렬
                return `
                    justify-content: center;
                    align-items: center;
                `

            }
            else if (align == 'column-vertical-center'){
                // 세로 수직 가운데 정렬
                return `
                    flex-direction: column;
                    justify-content: center;
                `
            }
        }
    }}
`

export const Header = styled.header`
    display: ${(props) => props.display ? props.display : 'block'};

    flex-direction: ${(props) => props.flexDirection ? props.flexDirection : 'row'}; 

    box-sizing: ${(props) => props.boxSizing ? props.boxSizing : ''}; 

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  

    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};
    
    color : ${(props) => props.color ? props.color : ''};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    border: ${(props) => props.border ? props.border : ''};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};

    padding: ${(props) => props.padding ? props.padding : ''};
    margin: ${(props) => props.margin ? props.margin : ''};

    justify-content: ${(props) => props.justifyContent ? props.justifyContent : ''};
    align-items: ${(props) => props.alignItems ? props.alignItems : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &:hover{
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
    
    ${(props) => {
        if (props.algin){
            return `
            ${selectFlexOption(props.align)}
            `
        }
    }}
`

export const PTag = styled.p`
    display: ${(props) => props.display ? props.display : 'block'};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    color : ${(props) => props.color ? props.color : 'black'};
    border: ${(props) => props.border ? props.border : 'none'};
    border-color: ${(props) => props.borderColor ? props.borderColor : 'black'};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};

    
    padding: ${(props) => props.padding ? props.padding : ''};
    margin: ${(props) => props.margin ? props.margin : ''};

    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &:hover{
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const Div = styled.div`
    display: ${(props) => props.display ? props.display : 'block'};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    color : ${(props) => props.color ? props.color : ''};
    border: ${(props) => props.border ? props.border : 'none'};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : '0px'};
    
    padding: ${(props) => props.padding ? props.padding : ''};
    margin: ${(props) => props.margin ? props.margin : ''};

    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};
    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &:hover{
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const Span = styled.span`
    display: ${(props) => props.display ? props.display : 'block'};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  

    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    color : ${(props) => props.color ? props.color : ''};
    border: ${(props) => props.border ? props.border : ''};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};
    
    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};

    padding: ${(props) => props.padding ? props.padding : ''};
    margin: ${(props) => props.margin ? props.margin : ''};

    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    pointer-events: ${(props) => props.pointerEvent ? props.pointerEvent : ''};

    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &:hover{
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

export const Input = styled.input`
    display: ${(props) => props.display ? props.display : 'block'};

    position: ${(props) => props.position ? props.position : ''}; 
    top: ${(props) => props.top ? props.top : ''};  
    right: ${(props) => props.right ? props.right : ''};  
    bottom: ${(props) => props.bottom ? props.bottom : ''};  
    left: ${(props) => props.left ? props.left : ''};  

    width: ${(props) => props.width ? props.width : ''};
    height: ${(props) => props.height ? props.height : ''};

    font-family: ${(props) => props.fontFamily ? props.fontFamily : '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '16px'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '400'};
    
    color : ${(props) => props.color ? props.color : ''};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
    border: ${(props) => props.border ? props.border : ''};
    border-color: ${(props) => props.borderColor ? props.borderColor : ''};
    border-radius: ${(props) => props.borderRadius ? props.borderRadius : ''};

    padding: ${(props) => props.padding ? props.padding : ''};
    margin: ${(props) => props.margin ? props.margin : ''};

    cursor: ${(props) => props.cursor ? props.cursor : 'default'};

    &:hover{
        cursor: ${(props) => props.hoverCursor ? props.hoverCursor : ''};
        background-color: ${(props) => props.hoverBackgroundColor ? props.hoverBackgroundColor : ''};
        color : ${(props) => props.HoverColor ? props.HoverColor : ''};
        border: ${(props) => props.hoverBorder ? props.hoverBorder : ''};
        border-radius: ${(props) => props.HoverBorderRadius ? props.HoverBorderRadius : ''};
    }
`

// h1, h2, h3 만들기


const selectFlexOption = (align) => {
    
}