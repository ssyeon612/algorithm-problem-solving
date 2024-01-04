function solution(brown, yellow) {
    const total = brown + yellow;
    let answer = [];
    
    for (let width = 3; width <= Math.sqrt(total); width++) {
        if (total % width === 0) {
           const height = total / width;
            
            if((width - 2) * (height - 2) === yellow) {
                answer = [Math.max(width, height), Math.min(width, height)];    
            }
            
        }
    }
    return answer;
}