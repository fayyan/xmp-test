// 导航栏动画
function handleHeader(isDown) {
    const currentTop = document.documentElement.scrollTop || document.body.scrollTop;
    const headerDom = document.querySelector('.h-menu');
    if ((currentTop > hideHeight) && isDown) {
        // 隐藏 header
        headerDom.classList.add('hide-header');
    } else {
        // 展示 header
        headerDom.classList.replace('hide-header', 'show-header');
    }
}

// 图片动画
function imgAnimation() {
    const animationBlocks = document.getElementsByClassName('drift-animation');
    if (animationBlocks && animationBlocks.length > 0) {
        for (let i = 0; i < animationBlocks.length; i++) {
            const offsetTop = animationBlocks[i].getBoundingClientRect().top;
            // 减去 391，兼容 banner 在原位置时不发生偏移
            animationBlocks[i].style.transform = `translateY(${(offsetTop - 319) / 7.5 / 16}rem)`;
        }
    }
}

// 向下滚动 true，否则返回 false
function getScrollDirection() {
    const currentTop = document.documentElement.scrollTop || document.body.scrollTop;
    const direction = currentTop - lastHeight > 0;
    lastHeight = currentTop;

    return direction;
}
