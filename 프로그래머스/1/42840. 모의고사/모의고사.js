function solution(answers) {
   
    // 학생 a, b, c의 정답 패턴
    const student_a = [1, 2, 3, 4, 5];
    const student_b = [2, 1, 2, 3, 2, 4, 2, 5];
    const student_c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    // a, b, c 학생들의 정답 총 개수를 저장할 변수
    let result = [0, 0, 0];
    
    // 문제의 수 만큼 for loop
    for (let i=0; i<answers.length; i++) {
        // 학생들의 정답 개수 추출
        if (answers[i] === student_a[i % student_a.length]) result[0]++;
        if (answers[i] === student_b[i % student_b.length]) result[1]++;
        if (answers[i] === student_c[i % student_c.length]) result[2]++;
    }
    
    //  제일 많이 맞은 개수
    const maxValue = Math.max(...result);
    
    // 가장 문제를 많이 맞힌 사람
    let winner = []
    result.filter((res, index) => res === maxValue ? winner.push(index + 1) : null);
    
    return winner.sort();
}