const checkByUserAgent = () => {
    const isAndroid = navigator.userAgent.match(/Android/i)
    const isIPhone = navigator.userAgent.match(/iPhone/i)
    return isAndroid || isIPhone
}

const checkByPointer = () => {
    let isMobile = false
    isMobile = window.matchMedia('(pointer:coarse)').matches

    if (isMobile) return true

    isMobile = window.matchMedia('(any-pointer:coarse)').matches

    return isMobile
}

const mobileMaxWidth = 768
const checkByScreenWidth = () => {
    const screenWidth = screen.width
    return screenWidth <= mobileMaxWidth
}

export const isMobile = () => {
    if (checkByUserAgent()) return true
    if (checkByPointer()) return true
    if (checkByScreenWidth()) return true
    return false
}

export const isDesktop = !isMobile()
