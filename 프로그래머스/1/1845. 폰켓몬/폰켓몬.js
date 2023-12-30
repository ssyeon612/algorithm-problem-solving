function solution(nums) {
    // 1. 내가 가질 수 있는 최대 폰켓몬 마리수
    const maxPoketmon = nums.length / 2;
    
    // 2. 해시 셋으로 중복 제거
    let set = new Set();
    for(let i=0; i<nums.length; i++) {
        set.add(nums[i]);
    };
    
    // 3. 해시 사이즈, 최대 폰켓몬 마리수 비교
    if(maxPoketmon < set.size) return maxPoketmon;
    return set.size;
}