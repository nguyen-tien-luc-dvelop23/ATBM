const gamePuzzles = [
    {
        text: 'Khóa AES mặc định của hệ thống bao gồm 16 ký tự đầu tiên của bảng chữ cái thập lục phân (hexadecimal) theo thứ tự tăng dần. Khóa đó là gì?',
        answer: '0123456789abcdef',
        options: ['abcdef0123456789', 'fedcba9876543210', '0123456789abcdef', 'aabbccddeeff0011']
    },
    {
        text: 'Hệ thống RSA sử dụng một cặp khóa công khai và riêng tư. Khóa công khai dùng để mã hóa, khóa riêng tư dùng để giải mã. Nếu chữ ký số bị làm giả, khóa nào bị lộ?',
        answer: 'Khóa riêng tư',
        options: ['Khóa công khai', 'Khóa riêng tư', 'Khóa đối xứng', 'Cả hai']
    },
    {
        text: 'Chức năng băm SHA-256 tạo ra một chuỗi băm có độ dài cố định. Nếu một bit dữ liệu thay đổi, điều gì xảy ra với chuỗi băm?',
        answer: 'Chuỗi băm sẽ thay đổi đáng kể',
        options: ['Chuỗi băm sẽ không thay đổi', 'Chuỗi băm sẽ thay đổi đáng kể', 'Chỉ một vài bit sẽ thay đổi', 'Không thể dự đoán được']
    },
    {
        text: 'Trong mã hóa kép (double encryption), dữ liệu được mã hóa hai lần. Để giải mã đúng, bạn phải áp dụng quá trình nào?',
        answer: 'Giải mã hai lần theo thứ tự ngược lại',
        options: ['Giải mã một lần', 'Giải mã hai lần theo thứ tự ban đầu', 'Giải mã hai lần theo thứ tự ngược lại', 'Không cần giải mã']
    },
    {
        text: 'Mã PIN ngân hàng mặc định cho tài khoản mới thường là 8 số 0. Nếu khóa giải mã liên quan đến mã PIN này, hãy cung cấp 16 ký tự khóa bằng cách lặp lại 8 số 0 hai lần.',
        answer: '0000000000000000',
        options: ['0000000012345678', '0000000000000000', '1234567800000000', '8765432100000000']
    },
    // --- BẮT ĐẦU CÂU HỎI MỚI TẠI ĐÂY ---
    {
        text: 'Thuật toán mã hóa nào sau đây được coi là tiêu chuẩn vàng cho mã hóa đối xứng hiện nay?',
        answer: 'AES',
        options: ['DES', 'RSA', 'AES', 'MD5']
    },
    {
        text: 'RSA là viết tắt của tên các nhà khoa học nào?',
        answer: 'Rivest, Shamir, Adleman',
        options: ['Rivest, Shamir, Adleman', 'Ron, Adi, Leonard', 'Robert, Alan, Susan', 'Richard, Andrew, Steven']
    },
    {
        text: 'Chức năng chính của SHA-256 trong bảo mật dữ liệu là gì?',
        answer: 'Kiểm tra tính toàn vẹn của dữ liệu',
        options: ['Mã hóa dữ liệu', 'Giải mã dữ liệu', 'Tạo chữ ký số', 'Kiểm tra tính toàn vẹn của dữ liệu']
    },
    {
        text: 'Trong mã hóa đối xứng, cả người gửi và người nhận sử dụng _______ để mã hóa và giải mã.',
        answer: 'Cùng một khóa',
        options: ['Hai khóa khác nhau', 'Khóa công khai', 'Khóa riêng tư', 'Cùng một khóa']
    },
    {
        text: 'Thuật toán mã hóa nào sau đây là thuật toán bất đối xứng?',
        answer: 'RSA',
        options: ['AES', 'DES', '3DES', 'RSA']
    },
    {
        text: 'Khi bạn truy cập một trang web HTTPS, giao thức bảo mật nào đang được sử dụng để mã hóa dữ liệu giữa trình duyệt của bạn và máy chủ?',
        answer: 'TLS/SSL',
        options: ['FTP', 'HTTP', 'SMTP', 'TLS/SSL']
    },
    {
        text: 'Một "khóa mã hóa" càng dài thì độ bảo mật của nó càng ____________.',
        answer: 'Cao hơn',
        options: ['Thấp hơn', 'Giống nhau', 'Cao hơn', 'Không liên quan']
    },
    {
        text: 'Trong tấn công "Man-in-the-Middle", kẻ tấn công làm gì?',
        answer: 'Nghe lén và thay đổi giao tiếp giữa hai bên',
        options: ['Tấn công từ chối dịch vụ', 'Đánh cắp khóa mã hóa', 'Nghe lén và thay đổi giao tiếp giữa hai bên', 'Tấn công vào hệ điều hành']
    },
    {
        text: 'IV (Initialization Vector) trong mã hóa AES được sử dụng cho mục đích gì?',
        answer: 'Đảm bảo mỗi bản mã là duy nhất',
        options: ['Tăng tốc độ mã hóa', 'Giảm độ dài khóa', 'Đảm bảo mỗi bản mã là duy nhất', 'Giải mã dữ liệu']
    },
    {
        text: 'Mã băm (hash) có tính chất "một chiều" nghĩa là gì?',
        answer: 'Không thể khôi phục dữ liệu gốc từ mã băm',
        options: ['Có thể khôi phục dữ liệu gốc từ mã băm', 'Chỉ có thể mã hóa, không thể giải mã', 'Không thể khôi phục dữ liệu gốc từ mã băm', 'Chỉ hoạt động theo một hướng']
    },
    // Câu hỏi 11
    {
        text: 'Lỗ hổng "Heartbleed" liên quan đến giao thức bảo mật nào?',
        answer: 'OpenSSL',
        options: ['SSH', 'IPSec', 'OpenSSL', 'HTTPS']
    },
    // Câu hỏi 12
    {
        text: 'Kỹ thuật nào giúp xác minh danh tính của người gửi tin nhắn trong mã hóa bất đối xứng?',
        answer: 'Chữ ký số',
        options: ['Mã hóa AES', 'Mã băm SHA', 'Chữ ký số', 'Mật khẩu']
    },
    // Câu hỏi 13
    {
        text: 'Nếu bạn mất khóa riêng tư trong RSA, điều gì sẽ xảy ra với dữ liệu được mã hóa bằng khóa công khai tương ứng?',
        answer: 'Không thể giải mã được dữ liệu đó',
        options: ['Dữ liệu sẽ tự động giải mã', 'Bạn có thể tạo lại khóa riêng tư mới', 'Không thể giải mã được dữ liệu đó', 'Chỉ có thể giải mã bằng khóa công khai']
    },
    // Câu hỏi 14
    {
        text: 'Mục đích của "salting" trong việc lưu trữ mật khẩu là gì?',
        answer: 'Ngăn chặn tấn công bảng cầu vồng (rainbow table)',
        options: ['Tăng tốc độ băm mật khẩu', 'Giảm độ phức tạp mật khẩu', 'Ngăn chặn tấn công bảng cầu vồng (rainbow table)', 'Làm cho mật khẩu dễ nhớ hơn']
    },
    // Câu hỏi 15
    {
        text: 'Kích thước khối (block size) tiêu chuẩn của AES là bao nhiêu bit?',
        answer: '128 bit',
        options: ['64 bit', '128 bit', '256 bit', '512 bit']
    },
    // Câu hỏi 16
    {
        text: 'Giao thức nào thường được sử dụng để thiết lập một kênh liên lạc an toàn qua mạng công cộng?',
        answer: 'VPN (Virtual Private Network)',
        options: ['HTTP', 'SMTP', 'FTP', 'VPN (Virtual Private Network)']
    },
    // Câu hỏi 17
    {
        text: 'Một "certificate authority" (CA) có vai trò gì trong PKI (Public Key Infrastructure)?',
        answer: 'Xác minh và cấp phát chứng chỉ số',
        options: ['Mã hóa tất cả dữ liệu', 'Lưu trữ tất cả các khóa riêng tư', 'Xác minh và cấp phát chứng chỉ số', 'Tạo ra các thuật toán mã hóa mới']
    },
    // Câu hỏi 18
    {
        text: 'Tấn công "Brute Force" trong mã hóa là gì?',
        answer: 'Thử mọi kết hợp khóa có thể',
        options: ['Dùng từ điển để đoán mật khẩu', 'Thử mọi kết hợp khóa có thể', 'Sử dụng lỗ hổng phần mềm', 'Tấn công vào người dùng cuối']
    },
    // Câu hỏi 19
    {
        text: 'Diffie-Hellman là một giao thức được sử dụng để làm gì?',
        answer: 'Trao đổi khóa bí mật một cách an toàn qua kênh không bảo mật',
        options: ['Mã hóa dữ liệu nhanh chóng', 'Tạo chữ ký số', 'Trao đổi khóa bí mật một cách an toàn qua kênh không bảo mật', 'Xác thực danh tính người dùng']
    },
    // Câu hỏi 20
    {
        text: 'Mật mã "Caesar Cipher" sử dụng kỹ thuật mã hóa nào?',
        answer: 'Mã hóa thay thế (Substitution Cipher)',
        options: ['Mã hóa chuyển vị (Transposition Cipher)', 'Mã hóa thay thế (Substitution Cipher)', 'Mã hóa khối (Block Cipher)', 'Mã hóa dòng (Stream Cipher)']
    },
    // Câu hỏi 21
    {
        text: 'Kỹ thuật "Padding Oracle Attack" thường nhắm vào lỗ hổng của thuật toán mã hóa nào?',
        answer: 'AES (ở chế độ CBC)',
        options: ['RSA', 'SHA-256', 'AES (ở chế độ CBC)', 'MD5']
    },
    // Câu hỏi 22
    {
        text: 'Độ dài khóa phổ biến cho RSA để đảm bảo an toàn hiện nay là bao nhiêu bit?',
        answer: '1024 bit',
        options: ['128 bit', '512 bit', '1024 bit', '2048 bit trở lên']
    },
    // Câu hỏi 23
    {
        text: 'Mã băm SHA-1 (Secure Hash Algorithm 1) hiện nay được khuyến nghị là ______.',
        answer: 'Không an toàn cho các ứng dụng mới',
        options: ['Rất an toàn', 'Chỉ dùng cho dữ liệu nhỏ', 'Không an toàn cho các ứng dụng mới', 'Tốt hơn SHA-256']
    },
    // Câu hỏi 24
    {
        text: 'Trong mã hóa đối xứng, làm thế nào để hai bên trao đổi khóa một cách an toàn?',
        answer: 'Sử dụng giao thức trao đổi khóa Diffie-Hellman hoặc kênh bảo mật khác',
        options: ['Gửi qua email', 'Sử dụng khóa công khai', 'Sử dụng giao thức trao đổi khóa Diffie-Hellman hoặc kênh bảo mật khác', 'Không cần trao đổi khóa']
    },
    // Câu hỏi 25
    {
        text: 'Mục đích của việc sử dụng chữ ký số là gì?',
        answer: 'Xác minh danh tính người gửi và đảm bảo tính toàn vẹn',
        options: ['Mã hóa dữ liệu', 'Che giấu thông tin', 'Xác minh danh tính người gửi và đảm bảo tính toàn vẹn', 'Tăng tốc độ truyền dữ liệu']
    },
    // Câu hỏi 26
    {
        text: 'Loại tấn công nào cố gắng tìm ra dữ liệu gốc từ bản mã mà không cần biết khóa?',
        answer: 'Tấn công chỉ bản mã (Ciphertext-only attack)',
        options: ['Tấn công chỉ bản mã (Ciphertext-only attack)', 'Tấn công có chọn bản rõ (Chosen-plaintext attack)', 'Tấn công biết bản rõ (Known-plaintext attack)', 'Tấn công từ chối dịch vụ (DoS)']
    },
    // Câu hỏi 27
    {
        text: 'Hệ thống PKI (Public Key Infrastructure) bao gồm những thành phần nào?',
        answer: 'Chứng chỉ số, khóa công khai/riêng tư, CA, RA',
        options: ['Chỉ có khóa công khai', 'Chỉ có khóa riêng tư', 'Chứng chỉ số, khóa công khai/riêng tư, CA, RA', 'Chỉ có thuật toán mã hóa']
    },
    // Câu hỏi 28
    {
        text: 'Khái niệm "Perfect Forward Secrecy" trong mã hóa liên quan đến điều gì?',
        answer: 'Khóa phiên (session key) riêng biệt cho mỗi phiên giao tiếp',
        options: ['Khóa cố định', 'Khóa phiên (session key) riêng biệt cho mỗi phiên giao tiếp', 'Mã hóa dữ liệu vĩnh viễn', 'Không thể bị tấn công']
    },
    // Câu hỏi 29
    {
        text: 'Trong AES, "Key Schedule" là gì?',
        answer: 'Quá trình tạo ra các khóa vòng từ khóa chính',
        options: ['Danh sách các khóa được phép', 'Thời gian hết hạn của khóa', 'Quá trình tạo ra các khóa vòng từ khóa chính', 'Kích thước của khóa']
    },
    // Câu hỏi 30
    {
        text: 'Phân loại mã hóa nào liên quan đến "khóa công khai" và "khóa riêng tư"?',
        answer: 'Mã hóa bất đối xứng',
        options: ['Mã hóa đối xứng', 'Mã hóa hỗn hợp', 'Mã hóa bất đối xứng', 'Mã hóa dòng']
    },
    // Câu hỏi 31
    {
        text: 'Một "nonce" (number once) trong mã hóa dùng để làm gì?',
        answer: 'Đảm bảo mỗi yêu cầu mã hóa là duy nhất',
        options: ['Tăng cường độ dài khóa', 'Mã hóa nhanh hơn', 'Đảm bảo mỗi yêu cầu mã hóa là duy nhất', 'Tạo ra mã băm']
    },
    // Câu hỏi 32
    {
        text: 'Thuật toán mã hóa nào sau đây là thuật toán băm?',
        answer: 'SHA-3',
        options: ['Blowfish', 'Twofish', 'RSA', 'SHA-3']
    },
    // Câu hỏi 33
    {
        text: 'Tấn công "Replay Attack" trong bảo mật là gì?',
        answer: 'Kẻ tấn công bắt lại và gửi lại các thông điệp hợp lệ',
        options: ['Thay đổi dữ liệu trong quá trình truyền', 'Giải mã thông điệp', 'Kẻ tấn công bắt lại và gửi lại các thông điệp hợp lệ', 'Tạo ra thông điệp giả mạo']
    },
    // Câu hỏi 34
    {
        text: 'Sự khác biệt chính giữa mã hóa khối (Block Cipher) và mã hóa dòng (Stream Cipher) là gì?',
        answer: 'Mã hóa khối xử lý từng khối, mã hóa dòng xử lý từng bit/byte',
        options: ['Mã hóa khối nhanh hơn', 'Mã hóa dòng an toàn hơn', 'Mã hóa khối xử lý từng khối, mã hóa dòng xử lý từng bit/byte', 'Mã hóa khối sử dụng khóa ngắn hơn']
    },
    // Câu hỏi 35
    {
        text: 'Cơ chế nào được sử dụng để bảo vệ tính bảo mật và tính toàn vẹn của dữ liệu trong quá trình truyền trên internet?',
        answer: 'SSL/TLS',
        options: ['FTP', 'HTTP', 'SMTP', 'SSL/TLS']
    },
    // Câu hỏi 36
    {
        text: 'Để đảm bảo tính không từ chối (non-repudiation) của một giao dịch, phương pháp nào thường được sử dụng?',
        answer: 'Chữ ký số',
        options: ['Mã hóa AES', 'Mã băm MD5', 'Chữ ký số', 'Mật khẩu']
    },
    // Câu hỏi 37
    {
        text: 'Mã hóa "End-to-End" có nghĩa là gì?',
        answer: 'Chỉ người gửi và người nhận cuối cùng mới có thể đọc được tin nhắn',
        options: ['Chỉ mã hóa ở một đầu', 'Chỉ mã hóa trong mạng nội bộ', 'Chỉ người gửi và người nhận cuối cùng mới có thể đọc được tin nhắn', 'Mã hóa ở mọi điểm trung gian']
    },
    // Câu hỏi 38
    {
        text: 'Trong RSA, hai số nguyên tố lớn (p và q) được sử dụng để tạo ra ______.',
        answer: 'Modulus (n) và hàm totient của Euler',
        options: ['Khóa AES', 'Mã băm', 'Modulus (n) và hàm totient của Euler', 'Chữ ký số']
    },
    // Câu hỏi 39
    {
        text: 'Một "collision" (xung đột) trong hàm băm là gì?',
        answer: 'Hai đầu vào khác nhau tạo ra cùng một giá trị băm',
        options: ['Hai thuật toán băm giống nhau', 'Hai đầu vào khác nhau tạo ra cùng một giá trị băm', 'Một hàm băm bị lỗi', 'Một giá trị băm không hợp lệ']
    },
    // Câu hỏi 40
    {
        text: 'Kỹ thuật mã hóa nào được sử dụng để bảo vệ thông tin thẻ tín dụng khi mua sắm trực tuyến?',
        answer: 'TLS/SSL',
        options: ['FTP', 'Telnet', 'HTTP', 'TLS/SSL']
    },
    // Câu hỏi 41
    {
        text: 'Mã hóa nào an toàn hơn đối với các cuộc tấn công lượng tử?',
        answer: 'Mật mã hậu lượng tử (Post-Quantum Cryptography)',
        options: ['AES', 'RSA', 'SHA-256', 'Mật mã hậu lượng tử (Post-Quantum Cryptography)']
    },
    // Câu hỏi 42
    {
        text: 'Mã hóa "Hybrid Encryption" kết hợp những loại mã hóa nào?',
        answer: 'Đối xứng và bất đối xứng',
        options: ['Chỉ đối xứng', 'Chỉ bất đối xứng', 'Đối xứng và bất đối xứng', 'Không sử dụng mã hóa']
    },
    // Câu hỏi 43
    {
        text: 'Kỹ thuật "Zero-Knowledge Proof" là gì?',
        answer: 'Chứng minh một điều gì đó mà không tiết lộ thông tin đó',
        options: ['Giải mã mà không cần khóa', 'Tạo khóa ngẫu nhiên', 'Chứng minh một điều gì đó mà không tiết lộ thông tin đó', 'Mã hóa dữ liệu rỗng']
    },
    // Câu hỏi 44
    {
        text: 'Trong mã hóa, "confidentiality" (tính bảo mật) nghĩa là gì?',
        answer: 'Chỉ những người được ủy quyền mới có thể truy cập thông tin',
        options: ['Thông tin không thể bị thay đổi', 'Thông tin luôn có sẵn', 'Chỉ những người được ủy quyền mới có thể truy cập thông tin', 'Thông tin được lưu trữ vĩnh viễn']
    },
    // Câu hỏi 45
    {
        text: 'Thuật toán nào dùng để tạo ra chữ ký số trong RSA?',
        answer: 'Khóa riêng tư',
        options: ['Khóa công khai', 'Khóa đối xứng', 'Khóa riêng tư', 'Khóa phiên']
    },
    // Câu hỏi 46
    {
        text: 'Loại tấn công nào thường cố gắng tìm ra mật khẩu bằng cách thử các từ trong từ điển?',
        answer: 'Tấn công từ điển (Dictionary Attack)',
        options: ['Tấn công Brute Force', 'Tấn công Man-in-the-Middle', 'Tấn công từ điển (Dictionary Attack)', 'Tấn công Replay']
    },
    // Câu hỏi 47
    {
        text: 'Mã băm MD5 hiện nay được coi là ______ do có các vấn đề về collision.',
        answer: 'Không an toàn để kiểm tra tính toàn vẹn',
        options: ['Rất an toàn', 'Chỉ dùng cho dữ liệu lớn', 'An toàn cho mọi mục đích', 'Không an toàn để kiểm tra tính toàn vẹn']
    },
    // Câu hỏi 48
    {
        text: 'Khóa nào trong mã hóa bất đối xứng được chia sẻ công khai?',
        answer: 'Khóa công khai',
        options: ['Khóa riêng tư', 'Khóa đối xứng', 'Khóa phiên', 'Khóa công khai']
    },
    // Câu hỏi 49
    {
        text: 'Trong mã hóa, "integrity" (tính toàn vẹn) nghĩa là gì?',
        answer: 'Dữ liệu không bị thay đổi hoặc giả mạo',
        options: ['Chỉ người được ủy quyền mới xem được', 'Dữ liệu luôn có sẵn', 'Dữ liệu không bị thay đổi hoặc giả mạo', 'Dữ liệu được sao lưu']
    },
    // Câu hỏi 50
    {
        text: 'Một "mật mã hóa lượng tử" (Quantum Cryptography) tận dụng nguyên lý nào để bảo mật giao tiếp?',
        answer: 'Vật lý lượng tử',
        options: ['Lý thuyết số', 'Vật lý cổ điển', 'Vật lý lượng tử', 'Hóa học']
    }
];
