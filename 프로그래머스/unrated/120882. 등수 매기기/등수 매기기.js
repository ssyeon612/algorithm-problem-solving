function solution(score) {
    let list = [];
    
    score.forEach(item => {
        list.push(item[0] + item[1]);
    })
    
    const rank = Array(list.length).fill(1);
    
    for(let i=0; i<list.length; i++) {
        rank[i] = 1;
        for(let j=0; j<list.length; j++) {
            if(list[i] < list[j]) {
                rank[i] = rank[i] + 1;
            }
        }
    }
    
    return rank;
}