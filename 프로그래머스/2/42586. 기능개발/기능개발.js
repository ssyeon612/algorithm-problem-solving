function solution(progresses, speeds) {
    const answer = [];
    const daysLeft = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));

    while (daysLeft.length > 0) {
        let deployCount = 1;
        const daysUntilDeploy = daysLeft.shift();

        while (daysLeft.length > 0 && daysUntilDeploy >= daysLeft[0]) {
            daysLeft.shift();
            deployCount++;
        }

        answer.push(deployCount);
    }

    return answer;
}