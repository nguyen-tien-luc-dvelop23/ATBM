// puzzles.js
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
  }
];