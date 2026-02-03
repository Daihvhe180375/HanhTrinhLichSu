// CHƯƠNG 2: Hai giai đoạn phát triển
export const chapter2 = {
    id: 2,
    title: "Hai giai đoạn phát triển",
    description: "Giai đoạn thấp (CNXH) và giai đoạn cao (CNCS hoàn chỉnh).",
    sections: [
        {
            title: "Giai đoạn thấp - CNXH",
            content: `<p class="mb-3"><strong>Thời kỳ quá độ</strong>, còn "dấu vết" xã hội cũ:</p><ul class="list-disc pl-5 space-y-1"><li><strong>Sở hữu:</strong> Công cộng chủ yếu, còn nhiều thành phần KT</li><li><strong>Phân phối:</strong> Theo lao động</li><li><strong>Nhà nước:</strong> Chuyên chính vô sản</li></ul>`
        },
        {
            title: "Giai đoạn cao - CNCS",
            content: `<p class="mb-3">Xã hội lý tưởng:</p><ul class="list-disc pl-5 space-y-1"><li><strong>LLSX:</strong> Cực cao, khoa học tiên tiến</li><li><strong>Sở hữu:</strong> Toàn dân hoàn toàn</li><li><strong>Phân phối:</strong> Theo nhu cầu</li><li><strong>Xã hội:</strong> Không giai cấp, nhà nước tiêu vong</li><li><strong>Lao động:</strong> Nhu cầu tự thân</li></ul>`
        }
    ],
    quiz: [
        {
            id: 'c2q1', text: "Vì sao CNXH là giai đoạn thấp?", options: [
                { id: 'A', text: "Chưa xóa hoàn toàn tư hữu", correct: false },
                { id: 'B', text: "Chưa phát triển KH-CN", correct: false },
                { id: 'C', text: "Còn dấu vết xã hội cũ", correct: true },
                { id: 'D', text: "Chưa đạt sở hữu toàn dân", correct: false }
            ], noteField: 'q1', noteValue: 'dấu vết cũ'
        },
        {
            id: 'c2q2', text: "Chế độ sở hữu chủ đạo trong CNXH:", options: [
                { id: 'A', text: "Tư nhân", correct: false },
                { id: 'B', text: "Hỗn hợp", correct: false },
                { id: 'C', text: "Công cộng chủ yếu", correct: true },
                { id: 'D', text: "Cá thể", correct: false }
            ], noteField: 'q2', noteValue: 'công cộng'
        },
        {
            id: 'c2q3', text: "Nhiều thành phần KT trong CNXH phản ánh:", options: [
                { id: 'A', text: "Thất bại KT kế hoạch", correct: false },
                { id: 'B', text: "Quay lại TBCN", correct: false },
                { id: 'C', text: "Tính chất quá độ", correct: true },
                { id: 'D', text: "Buông lỏng quản lý", correct: false }
            ], noteField: 'q3', noteValue: 'quá độ'
        },
        {
            id: 'c2q4', text: "Phân phối theo lao động phù hợp khi:", options: [
                { id: 'A', text: "Của cải vô hạn", correct: false },
                { id: 'B', text: "Không còn giai cấp", correct: false },
                { id: 'C', text: "LLSX chưa phát triển cao", correct: true },
                { id: 'D', text: "Nhà nước tiêu vong", correct: false }
            ], noteField: 'q4', noteValue: 'LLSX chưa cao'
        },
        {
            id: 'c2q5', text: "Vì sao CNXH cần nhà nước chuyên chính vô sản?", options: [
                { id: 'A', text: "Kiểm soát mọi hoạt động", correct: false },
                { id: 'B', text: "Bảo vệ thành quả CM, tổ chức XH", correct: true },
                { id: 'C', text: "Duy trì bóc lột", correct: false },
                { id: 'D', text: "Bảo vệ giai cấp thống trị mới", correct: false }
            ], noteField: 'q5', noteValue: 'bảo vệ CM'
        },
        {
            id: 'c2q6', text: "Mục tiêu của CNXH:", options: [
                { id: 'A', text: "Phát triển LLSX và con người", correct: true },
                { id: 'B', text: "Xóa bỏ nhà nước", correct: false },
                { id: 'C', text: "Thủ tiêu mọi sở hữu", correct: false },
                { id: 'D', text: "Đạt phân phối theo nhu cầu", correct: false }
            ], noteField: 'q6', noteValue: 'LLSX'
        },
        {
            id: 'c2q7', text: "Nếu phân phối theo nhu cầu khi LLSX thấp:", options: [
                { id: 'A', text: "Lao động tích cực hơn", correct: false },
                { id: 'B', text: "Thiếu công bằng, khan hiếm", correct: true },
                { id: 'C', text: "Mâu thuẫn biến mất", correct: false },
                { id: 'D', text: "XH phát triển nhanh", correct: false }
            ], noteField: 'q7', noteValue: 'khan hiếm'
        },
        {
            id: 'c2q8', text: "Lao động trong CNXH là nhu cầu tự thân vì:", options: [
                { id: 'A', text: "Không còn lựa chọn", correct: false },
                { id: 'B', text: "Gắn với sáng tạo, phát triển cá nhân", correct: true },
                { id: 'C', text: "Bắt buộc", correct: false },
                { id: 'D', text: "Thu nhập cao", correct: false }
            ], noteField: 'q8', noteValue: 'sáng tạo'
        },
        {
            id: 'c2q9', text: "Khác biệt căn bản giữa giai đoạn thấp và cao:", options: [
                { id: 'A', text: "Vai trò KH", correct: false },
                { id: 'B', text: "Nguyên tắc phân phối", correct: true },
                { id: 'C', text: "Trình độ dân trí", correct: false },
                { id: 'D', text: "Chế độ chính trị", correct: false }
            ], noteField: 'q9', noteValue: 'phân phối'
        },
        {
            id: 'c2q10', text: "Khi mâu thuẫn giai cấp bị xóa bỏ, nhà nước:", options: [
                { id: 'A', text: "Dần tiêu vong", correct: true },
                { id: 'B', text: "Mạnh hơn", correct: false },
                { id: 'C', text: "Thành tổ chức KT", correct: false },
                { id: 'D', text: "Thay bằng quân đội", correct: false }
            ], noteField: 'q10', noteValue: 'tiêu vong'
        }
    ],
    noteTemplate: [
        { id: 'q1', text: 'CNXH: còn ______.' },
        { id: 'q2', text: 'Sở hữu chủ đạo: ______.' },
        { id: 'q3', text: 'Nhiều thành phần KT phản ánh tính ______.' },
        { id: 'q4', text: 'Theo lao động phù hợp khi ______.' },
        { id: 'q5', text: 'Nhà nước để ______.' },
        { id: 'q6', text: 'Mục tiêu: phát triển ______.' },
        { id: 'q7', text: 'LLSX thấp → phân phối nhu cầu gây ______.' },
        { id: 'q8', text: 'Lao động gắn ______.' },
        { id: 'q9', text: 'Khác biệt: nguyên tắc ______.' },
        { id: 'q10', text: 'Không giai cấp → nhà nước ______.' }
    ]
}
