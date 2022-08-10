// const checkByUserAgent = () => {
//     const isAndroid = !!navigator.userAgent.match(/Android/i)
//     const isIPhone = !!navigator.userAgent.match(/iPhone/i)
//     return isAndroid || isIPhone
// }

// const checkByPointer = () => {
//     let isMobile = false
//     isMobile = window.matchMedia('(pointer:coarse)').matches

//     if (isMobile) return true

//     isMobile = window.matchMedia('(any-pointer:coarse)').matches

//     return isMobile
// }

const mobileMaxWidth = 768
const checkByScreenWidth = () => {
    const screenWidth = screen.width
    return screenWidth <= mobileMaxWidth
}

// the commented ways to check will be valid if the site have a different tablet layout
// const isTablet = checkByUserAgent() && !checkByPointer() && !checkByScreenWidth()

export const checkIsMobile = () => {
    if (checkByScreenWidth()) return true

    // if (checkByUserAgent()) return true //check by user agent return true for tablets too
    // if (checkByPointer()) return true //check by pointer will return true for tablets too
    return false
}

export const isMobile = checkIsMobile()
export const isDesktop = !checkIsMobile()
