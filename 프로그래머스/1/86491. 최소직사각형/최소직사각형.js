function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    sizes.forEach(([width, height]) => {
        const maxLength = Math.max(width, height);
        const minLength = Math.min(width, height);
        
        // 명함의 가로 세로중 긴 부분을 width로 저장
        maxWidth = Math.max(maxLength, maxWidth);
        maxHeight = Math.max(minLength, maxHeight);
    })
    
    return maxWidth * maxHeight;
}