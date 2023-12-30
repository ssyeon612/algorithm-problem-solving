function solution(participant, completion) {
    // 1. 해시테이블 생성
   let hashMap = new Map();
    
    // 2. 참가자 key(이름) value(동명이인이 없으면 1, 있으면 value+1)
    participant.forEach(val => {
        if (hashMap.has(val)) {
            hashMap.set(val, hashMap.get(val) + 1);
        } else {
          hashMap.set(val, 1);
        };
    });

    // 3. 완주자에 참가자가 있으면 value-1
    completion.forEach(val => {
        if (hashMap.has(val)) {
           hashMap.set(val, hashMap.get(val) - 1); 
        }
    })
    // 4. value가 1인 사람은 완주하지 못한 사람
    let result = '';
    
    for(let [key, value] of hashMap) {
        if(value === 1) {
            result = key;
        }
    }
    
    return result;
}