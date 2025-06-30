const GAME_CONFIG = {
    initialTime: 50,
    scorePerTransaction: 10, 
    scorePerCorrectPuzzle: 50, 
    scorePenaltyPerWrongPuzzle: -30, 
    scorePenaltyPerSkip: -50, 
    upgradeKeyCost: 100, 
    maxKeyLevel: 3, 
    levelUpScore: [200, 500, 1000, 2000, 3500], 
    hackChance: [0.25, 0.35, 0.5, 0.6, 0.7], 
    tamperChance: [0.20, 0.30, 0.40, 0.5, 0.6], 
    hackTypes: ['double_encrypt', 'wrong_key', 'fake_signature', 'sql_injection', 'malware_injection'],
    bossHackInterval: 4, // Cứ mỗi X giao dịch thành công sẽ có cơ hội gặp boss
};

let game = {
    playerName: '',
    score: 0,
    level: 1,
    combo: 0,
    transactionsCompleted: 0,
    puzzlesSolved: 0,
    keyLevel: 1, 
    highScores: [],
    gameHistory: [],
    consecutiveSuccessfulTransactions: 0,
};
