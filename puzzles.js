// puzzles.js
const gamePuzzles = [
    {
        text: "Trong mật mã học, 'AES' là viết tắt của gì?",
        options: ["Advanced Encryption Standard", "Asymmetric Encryption System", "American Encoding Service", "Automated Encryption Solution"],
        answer: "Advanced Encryption Standard",
        hint: "Đây là một tiêu chuẩn mã hóa đối xứng rất phổ biến."
    },
    {
        text: "Thuật toán nào thường được dùng để tạo 'chữ ký số' (Digital Signature)?",
        options: ["AES", "SHA-256", "RSA", "MD5"],
        answer: "RSA",
        hint: "Nó là một thuật toán mã hóa bất đối xứng."
    },
    {
        text: "SHA-256 được sử dụng chính để làm gì?",
        options: ["Mã hóa dữ liệu", "Giải mã dữ liệu", "Tạo hàm băm (Hash)", "Ký dữ liệu"],
        answer: "Tạo hàm băm (Hash)",
        hint: "Nó giúp kiểm tra tính toàn vẹn của dữ liệu."
    },
    {
        text: "Nếu một giao dịch bị 'SQL Injection', điều gì có thể xảy ra?",
        options: ["Dữ liệu bị mã hóa kép", "Kẻ tấn công có thể truy cập hoặc thay đổi cơ sở dữ liệu", "Chữ ký số bị làm giả", "Khóa mã hóa bị sai"],
        answer: "Kẻ tấn công có thể truy cập hoặc thay đổi cơ sở dữ liệu",
        hint: "Đây là một lỗ hổng liên quan đến việc nhập liệu không an toàn vào cơ sở dữ liệu."
    },
    {
        text: "Mã hóa đối xứng nghĩa là gì?",
        options: ["Dùng hai khóa khác nhau để mã hóa và giải mã", "Dùng cùng một khóa để mã hóa và giải mã", "Chỉ dùng một khóa để mã hóa", "Không cần khóa để giải mã"],
        answer: "Dùng cùng một khóa để mã hóa và giải mã",
        hint: "AES là một ví dụ điển hình."
    },
    {
        text: "Mục đích của việc kiểm tra tính toàn vẹn dữ liệu là gì?",
        options: ["Để làm cho dữ liệu bí mật", "Để đảm bảo dữ liệu không bị thay đổi", "Để nén dữ liệu", "Để tăng tốc độ truyền dữ liệu"],
        answer: "Để đảm bảo dữ liệu không bị thay đổi",
        hint: "Hash là công cụ chính cho việc này."
    },
    {
        text: "Trong một cuộc tấn công 'man-in-the-middle', kẻ tấn công làm gì?",
        options: ["Tấn công trực tiếp vào máy chủ", "Chặn đứng và có thể thay đổi liên lạc giữa hai bên", "Gửi email lừa đảo", "Tạo ra virus máy tính"],
        answer: "Chặn đứng và có thể thay đổi liên lạc giữa hai bên",
        hint: "Kẻ tấn công đứng giữa người gửi và người nhận."
    },
    {
        text: "Đâu là một ví dụ về 'Tấn công từ chối dịch vụ (DoS)'?",
        options: ["Đánh cắp mật khẩu", "Mã hóa tệp tin và yêu cầu tiền chuộc", "Gửi một lượng lớn yêu cầu làm quá tải máy chủ", "Sửa đổi dữ liệu giao dịch"],
        answer: "Gửi một lượng lớn yêu cầu làm quá tải máy chủ",
        hint: "Mục tiêu là làm cho dịch vụ không thể truy cập được."
    },
    {
        text: "Khái niệm 'Confidentiality' (Bảo mật/Bí mật) trong an toàn thông tin có nghĩa là gì?",
        options: ["Dữ liệu luôn có sẵn", "Chỉ những người được ủy quyền mới có quyền truy cập dữ liệu", "Dữ liệu không bị thay đổi", "Dữ liệu được sao lưu thường xuyên"],
        answer: "Chỉ những người được ủy quyền mới có quyền truy cập dữ liệu",
        hint: "Đây là một trong ba trụ cột chính của an toàn thông tin (CIA)."
    },
    {
        text: "Khái niệm 'Integrity' (Toàn vẹn) trong an toàn thông tin có nghĩa là gì?",
        options: ["Dữ liệu luôn có sẵn", "Chỉ những người được ủy quyền mới có quyền truy cập dữ liệu", "Dữ liệu không bị thay đổi hoặc phá hủy trái phép", "Dữ liệu được sao lưu thường xuyên"],
        answer: "Dữ liệu không bị thay đổi hoặc phá hủy trái phép",
        hint: "SHA-256 giúp đảm bảo điều này."
    },
    {
        text: "Thuật ngữ 'Phishing' mô tả kiểu tấn công nào?",
        options: ["Tấn công từ chối dịch vụ", "Lừa đảo để đánh cắp thông tin nhạy cảm (mật khẩu, thẻ tín dụng)", "Tiêm mã độc vào cơ sở dữ liệu", "Mã hóa dữ liệu và yêu cầu tiền chuộc"],
        answer: "Lừa đảo để đánh cắp thông tin nhạy cảm (mật khẩu, thẻ tín dụng)",
        hint: "Thường liên quan đến email hoặc tin nhắn giả mạo."
    },
    {
        text: "Mục đích chính của 'Tường lửa' (Firewall) là gì?",
        options: ["Mã hóa toàn bộ dữ liệu máy tính", "Ngăn chặn truy cập trái phép vào hoặc ra khỏi mạng", "Tạo bản sao lưu dữ liệu tự động", "Phục hồi dữ liệu bị hỏng"],
        answer: "Ngăn chặn truy cập trái phép vào hoặc ra khỏi mạng",
        hint: "Nó hoạt động như một rào cản."
    },
    {
        text: "Công nghệ 'SSL/TLS' được sử dụng chủ yếu để làm gì?",
        options: ["Tăng tốc độ Internet", "Bảo mật truyền thông giữa trình duyệt và máy chủ (HTTPS)", "Nén file", "Chặn quảng cáo"],
        answer: "Bảo mật truyền thông giữa trình duyệt và máy chủ (HTTPS)",
        hint: "Bạn thường thấy nó trên các trang web an toàn."
    },
    {
        text: "Một 'Zero-day exploit' là gì?",
        options: ["Một lỗ hổng bảo mật đã được biết đến rộng rãi", "Một cuộc tấn công đã được ngăn chặn trước khi xảy ra", "Một lỗ hổng bảo mật chưa được vá và kẻ tấn công đã phát hiện ra", "Một phần mềm diệt virus mới ra mắt"],
        answer: "Một lỗ hổng bảo mật chưa được vá và kẻ tấn công đã phát hiện ra",
        hint: "Các nhà phát triển chưa có 'ngày' để sửa nó."
    },
    {
        text: "Ransomware là gì?",
        options: ["Phần mềm theo dõi hoạt động người dùng", "Phần mềm mã hóa dữ liệu và yêu cầu tiền chuộc", "Một loại virus lây lan qua email", "Phần mềm giúp tăng tốc máy tính"],
        answer: "Phần mềm mã hóa dữ liệu và yêu cầu tiền chuộc",
        hint: "Nó 'bắt cóc' dữ liệu của bạn."
    }
];
