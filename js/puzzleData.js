const puzzleData = {
    grid: [
        ['B','E','B','A','S','*','A','K','T','I','F'],
        ['A','*','A','*','E','*','S','*','N','*','O'],
        ['N','*','N','*','A','*','E','*','I','*','R'],
        ['D','*','D','*','N','*','A','*','N','*','U'],
        ['U','*','U','*','*','*','N','*','*','*','M']
    ],
    clues: {
        across: [
            {
                number: 1,
                clue: "Indonesia's foundational foreign policy principle (Bebas-Aktif)",
                answer: "BEBASAKTIF"
            },
            {
                number: 2,
                clue: "Regional organization headquartered in Jakarta",
                answer: "ASEAN"
            }
        ],
        down: [
            {
                number: 1,
                clue: "City where Non-Aligned Movement was founded with Indonesia's involvement",
                answer: "BANDUNG"
            },
            {
                number: 3,
                clue: "Indonesia's diplomatic approach to regional conflicts (Forum)",
                answer: "FORUM"
            }
        ]
    }
};
class GameFeatures {
    startTimer() {
        this.timer = setInterval(() => {
            this.timeElapsed++;
            this.updateTimerDisplay();
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeElapsed / 60);
        const seconds = this.timeElapsed % 60;
        document.getElementById('timer').textContent = 
            `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    calculateScore() {
        const baseScore = 1000;
        const timeDeduction = Math.floor(this.timeElapsed / 60) * 10;
        const hintsDeduction = this.hintsUsed * 50;
        return baseScore - timeDeduction - hintsDeduction;
    }

    updateScore() {
        this.score = this.calculateScore();
        document.getElementById('score').textContent = this.score;
    }
}