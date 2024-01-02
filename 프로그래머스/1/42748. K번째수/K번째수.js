function solution(array, commands) {
   
    let result = [];
    commands.forEach(command => {
        const i = command[0] - 1;
        const j = command[1];
        const k = command[2] - 1;
        
        const newArr = array.slice(i, j).sort((a, b) => a-b);
        result.push(newArr[k])
    })
    
    return result;
}