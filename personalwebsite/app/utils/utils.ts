export const getScrollPercentage = (e: any) => {
    const correctHeight = e.target.clientHeight - e.target.offsetTop;
    const progress = (e.target.scrollTop / correctHeight) * 100
    return progress
}