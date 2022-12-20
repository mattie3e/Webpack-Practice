const changeIsOpen = () => {
    return {
        type: "OPEN_CLOSE"
    }
}

const changeNav = (nav) => {
    return {
        type: "SET_NAV",
        data: nav
    }
}


export { changeIsOpen, changeNav }