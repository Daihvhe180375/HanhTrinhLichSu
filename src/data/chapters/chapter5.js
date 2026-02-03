// CHƯƠNG 5: Quan hệ sản xuất & Chế độ sở hữu
export const chapter5 = {
    id: 5,
    title: "Quan hệ sản xuất & Sở hữu",
    description: "Khái niệm, mối quan hệ, trình tự lịch sử, đặc trưng trong CNXH & CNCS.",
    sections: [
        {
            title: "Khái niệm",
            content: `<p class="mb-2"><strong>QHSX:</strong> Tổng hợp quan hệ KT-vật chất giữa người với người trong sản xuất.</p><p class="mb-2"><strong>Chế độ sở hữu:</strong> Quan hệ cơ bản, quyết định tính chất QHSX.</p>`
        },
        {
            title: "Quy luật cơ bản",
            content: `<p class="mb-3"><strong>LLSX quyết định QHSX</strong></p><ul class="list-disc pl-5 space-y-1"><li>QHSX phù hợp → thúc đẩy LLSX</li><li>QHSX lạc hậu → kìm hãm → cách mạng</li></ul>`
        },
        {
            title: "Trong CNXH & CNCS",
            content: `<p class="mb-2"><strong>CNXH:</strong> Sở hữu toàn dân + tập thể chủ yếu, phân phối theo lao động</p><p><strong>CNCS:</strong> Sở hữu chung toàn XH, phân phối theo nhu cầu</p>`
        }
    ],
    quiz: [
        {
            id: 'c5q1', text: "QHSX là tổng hợp quan hệ __:", options: [
                { id: 'A', text: "tinh thần giữa các giai cấp", correct: false },
                { id: 'B', text: "chính trị giữa NN và nhân dân", correct: false },
                { id: 'C', text: "KT-vật chất giữa người với người trong SX", correct: true },
                { id: 'D', text: "pháp luật trong hoạt động KT", correct: false }
            ], noteField: 'q1', noteValue: 'KT-vật chất'
        },
        {
            id: 'c5q2', text: "Mặt nào giữ vai trò cơ bản trong QHSX?", options: [
                { id: 'A', text: "Phân phối SP", correct: false },
                { id: 'B', text: "Tổ chức quản lý SX", correct: false },
                { id: 'C', text: "Trao đổi hàng hóa", correct: false },
                { id: 'D', text: "Sở hữu TLSX", correct: true }
            ], noteField: 'q2', noteValue: 'sở hữu'
        },
        {
            id: 'c5q3', text: "QHSX là hình thức XH của __, mang tính lịch sử:", options: [
                { id: 'A', text: "quan hệ xã hội", correct: false },
                { id: 'B', text: "lực lượng sản xuất", correct: true },
                { id: 'C', text: "kiến trúc thượng tầng", correct: false },
                { id: 'D', text: "cơ sở hạ tầng", correct: false }
            ], noteField: 'q3', noteValue: 'LLSX'
        },
        {
            id: 'c5q4', text: "Chế độ sở hữu quyết định __:", options: [
                { id: 'A', text: "ý thức xã hội", correct: false },
                { id: 'B', text: "hình thứcnhà nước", correct: false },
                { id: 'C', text: "tính chất giai cấp và toàn bộ QHSX", correct: true },
                { id: 'D', text: "sự phát triển KH-KT", correct: false }
            ], noteField: 'q4', noteValue: 'QHSX'
        },
        {
            id: 'c5q5', text: "Quan hệ sở hữu là quan hệ __ của QHSX:", options: [
                { id: 'A', text: "thứ yếu", correct: false },
                { id: 'B', text: "chủ quan", correct: false },
                { id: 'C', text: "xuất phát, cơ bản", correct: true },
                { id: 'D', text: "phụ thuộc pháp luật", correct: false }
            ], noteField: 'q5', noteValue: 'cơ bản'
        },
        {
            id: 'c5q6', text: "Sở hữu tư nhân TBCN dẫn đến:", options: [
                { id: 'A', text: "hợp tác bình đẳng", correct: false },
                { id: 'B', text: "phân phối theo nhu cầu", correct: false },
                { id: 'C', text: "bóc lột giá trị thặng dư", correct: true },
                { id: 'D', text: "cộng đồng xã hội", correct: false }
            ], noteField: 'q6', noteValue: 'bóc lột'
        },
        {
            id: 'c5q7', text: "Chế độ sở hữu là yếu tố __ trong QHSX:", options: [
                { id: 'A', text: "QHSX quyết định hoàn toàn", correct: false },
                { id: 'B', text: "tách rời", correct: false },
                { id: 'C', text: "cốt lõi, quyết định", correct: true },
                { id: 'D', text: "chỉ có vai trò hình thức", correct: false }
            ], noteField: 'q7', noteValue: 'cốt lõi'
        },
        {
            id: 'c5q8', text: "Yếu tố nào quyết định QHSX?", options: [
                { id: 'A', text: "Ý thức XH", correct: false },
                { id: 'B', text: "Nhà nước", correct: false },
                { id: 'C', text: "Quan hệ giai cấp", correct: false },
                { id: 'D', text: "Lực lượng sản xuất", correct: true }
            ], noteField: 'q8', noteValue: 'LLSX'
        },
        {
            id: 'c5q9', text: "Khi QHSX lạc hậu so với LLSX:", options: [
                { id: 'A', text: "XH ổn định lâu dài", correct: false },
                { id: 'B', text: "LLSX bị triệt tiêu", correct: false },
                { id: 'C', text: "Mâu thuẫn gay gắt → cách mạng XH", correct: true },
                { id: 'D', text: "QHSX tự điều chỉnh", correct: false }
            ], noteField: 'q9', noteValue: 'cách mạng'
        },
        {
            id: 'c5q10', text: "Nguyên tắc phân phối trong CNCS:", options: [
                { id: 'A', text: "Theo lao động", correct: false },
                { id: 'B', text: "Theo vốn", correct: false },
                { id: 'C', text: "Theo địa vị XH", correct: false },
                { id: 'D', text: "Theo nhu cầu", correct: true }
            ], noteField: 'q10', noteValue: 'nhu cầu'
        }
    ],
    noteTemplate: [
        { id: 'q1', text: 'QHSX: quan hệ __.' },
        { id: 'q2', text: 'Vai trò cơ bản: __.' },
        { id: 'q3', text: 'QHSX là hình thức XH của __.' },
        { id: 'q4', text: 'Sở hữu quyết định __.' },
        { id: 'q5', text: 'Sở hữu: quan hệ __.' },
        { id: 'q6', text: 'Tư nhân TBCN → __.' },
        { id: 'q7', text: 'Sở hữu là yếu tố __.' },
        { id: 'q8', text: '__ quyết định QHSX.' },
        { id: 'q9', text: 'QHSX lạc hậu → __.' },
        { id: 'q10', text: 'CNCS: phân phối theo __.' }
    ]
}
