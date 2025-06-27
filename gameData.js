// gameData.js - Quản lý dữ liệu game và lịch sử người chơi

// Biến trạng thái game
let game = {
    playerName: '',
    level: 1,
    score: 0,
    transactionCount: 0,
    combo: 0,
    keyLevel: 1,
    puzzlesSolved: 0, // Số câu đố đã giải
    transactionsCompleted: 0 // Tổng số giao dịch đã hoàn thành
};

// Bảng xếp hạng cao nhất
let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Lịch sử chơi (chi tiết hơn)
// Mỗi mục sẽ lưu thông tin về một lần chơi kết thúc
let gameHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];

/**
 * Khởi tạo hoặc đặt lại trạng thái game về mặc định.
 */
function resetGameData() {
    game.playerName = '';
    game.level = 1;
    game.score = 0;
    game.transactionCount = 0;
    game.combo = 0;
    game.keyLevel = 1;
    game.puzzlesSolved = 0;
    game.transactionsCompleted = 0;
}

/**
 * Cập nhật điểm số.
 * @param {number} amount - Lượng điểm cộng thêm.
 */
function addScore(amount) {
    game.score += amount;
    // Đảm bảo điểm không âm
    game.score = Math.max(0, game.score);
}

/**
 * Tăng cấp độ game.
 */
function levelUp() {
    game.level++;
}

/**
 * Tăng cấp độ khóa.
 */
function upgradeKeyLevel() {
    game.keyLevel++;
}

/**
 * Cập nhật số giao dịch đã hoàn thành.
 */
function incrementTransactionsCompleted() {
    game.transactionsCompleted++;
}

/**
 * Cập nhật số câu đố đã giải.
 */
function incrementPuzzlesSolved() {
    game.puzzlesSolved++;
}

/**
 * Tăng combo.
 */
function incrementCombo() {
    game.combo++;
}

/**
 * Đặt lại combo về 0.
 */
function resetCombo() {
    game.combo = 0;
}

/**
 * Lưu một lượt chơi đã kết thúc vào lịch sử và cập nhật bảng xếp hạng cao nhất.
 */
function saveGameResult() {
    const gameResult = {
        name: game.playerName,
        score: game.score,
        level: game.level,
        transactionsCompleted: game.transactionsCompleted,
        puzzlesSolved: game.puzzlesSolved,
        date: new Date().toLocaleString('vi-VN')
    };

    // Cập nhật bảng xếp hạng (chỉ top 5 điểm cao nhất)
    highScores.push({ name: gameResult.name, score: gameResult.score, level: gameResult.level, date: gameResult.date });
    highScores.sort((a, b) => b.score - a.score);
    highScores = highScores.slice(0, 5);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // Lưu vào lịch sử chơi (có thể lưu nhiều hơn top 5)
    gameHistory.push(gameResult);
    // Giới hạn lịch sử chơi, ví dụ 20 lượt gần nhất để tránh quá tải
    gameHistory = gameHistory.slice(Math.max(gameHistory.length - 20, 0)); 
    localStorage.setItem('gameHistory', JSON.stringify(gameHistory));
}

// Bạn có thể thêm các hàm khác để lấy dữ liệu, ví dụ:
function getHighScores() {
    return highScores;
}

function getGameHistory() {
    return gameHistory;
}
