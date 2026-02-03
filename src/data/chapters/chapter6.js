// CHƯƠNG 6: Mục tiêu giải phóng con người
export const chapter6 = {
    id: 6,
    title: "Mục tiêu giải phóng con người",
    description: "Tha hóa con người, mục tiêu cụ thể, lý do, vận dụng tại Việt Nam (Hồ Chí Minh).",
    sections: [
        {
            title: "Bối cảnh: Tha hóa",
            content: `<p class="mb-3">Trong TBCN, con người bị "tha hóa":</p><ul class="list-disc pl-5 space-y-1 text-sm"><li>Lao động → hoạt động <strong>cưỡng bức</strong></li><li>Sản phẩm → lực lượng xa lạ, nô dịch người tạo ra</li><li>Con người bị phân hóa thành kẻ bóc lột và người bị bóc lột</li></ul>`
        },
        {
            title: "Mục tiêu CNCS",
            content: `<ul class="list-disc pl-5 space-y-1 text-sm"><li>Xóa bỏ áp bức, bóc lột</li><li>Xóa bỏ chế độ <strong>tư hữu</strong></li><li>Phát triển tự do, toàn diện</li><li>"Sự phát triển tự do của mỗi người là điều kiện cho tất cả"</li></ul>`
        },
        {
            title: "Tư tưởng HCM",
            content: `<p class="mb-2">Trình tự logic:</p><div class="flex items-center gap-2 text-sm"><span class="px-2 py-1 bg-primary/10 rounded">Giải phóng dân tộc</span><span>→</span><span class="px-2 py-1 bg-primary/10 rounded">Giai cấp</span><span>→</span><span class="px-2 py-1 bg-primary/10 rounded">Con người</span></div>`
        }
    ],
    quiz: [
        {
            id: 'c6q1', text: "Lao động bị tha hóa biểu hiện:", options: [
                { id: 'A', text: "Trở thành niềm vui", correct: false },
                { id: 'B', text: "Biến thành hoạt động cưỡng bức", correct: true },
                { id: 'C', text: "Được trả công xứng đáng", correct: false },
                { id: 'D', text: "Mang lại tự do", correct: false }
            ], noteField: 'q1', noteValue: 'cưỡng bức'
        },
        {
            id: 'c6q2', text: "Trong TBCN, sản phẩm lao động:", options: [
                { id: 'A', text: "Phản ánh nhu cầu người lao động", correct: false },
                { id: 'B', text: "Biến thành lực lượng xa lạ, nô dịch con người", correct: true },
                { id: 'C', text: "Tư liệu khẳng định bản thân", correct: false },
                { id: 'D', text: "Phục vụ lợi ích chung XH", correct: false }
            ], noteField: 'q2', noteValue: 'xa lạ'
        },
        {
            id: 'c6q3', text: "Con người chỉ cảm thấy tự do khi:", options: [
                { id: 'A', text: "Lao động sáng tạo", correct: false },
                { id: 'B', text: "Tham gia chính trị", correct: false },
                { id: 'C', text: "Làm chủ TLSX", correct: false },
                { id: 'D', text: "Thực hiện chức năng sinh học", correct: true }
            ], noteField: 'q3', noteValue: 'sinh học'
        },
        {
            id: 'c6q4', text: "Hậu quả tha hóa:", options: [
                { id: 'A', text: "Phát triển hài hòa", correct: false },
                { id: 'B', text: "Bần cùng hóa, phiến diện", correct: true },
                { id: 'C', text: "XH bình đẳng hơn", correct: false },
                { id: 'D', text: "Quan hệ XH nhân văn", correct: false }
            ], noteField: 'q4', noteValue: 'bần cùng'
        },
        {
            id: 'c6q5', text: "Mục tiêu vĩnh viễn của giải phóng:", options: [
                { id: 'A', text: "Giải phóng XH khỏi áp bức, bóc lột", correct: true },
                { id: 'B', text: "Duy trì phân chia giai cấp", correct: false },
                { id: 'C', text: "Xóa bỏ vai trò cá nhân", correct: false },
                { id: 'D', text: "Tăng cạnh tranh cá nhân", correct: false }
            ], noteField: 'q5', noteValue: 'áp bức'
        },
        {
            id: 'c6q6', text: "Vì sao xóa bỏ tư hữu là điều kiện tiên quyết?", options: [
                { id: 'A', text: "Tư hữu tăng năng suất", correct: false },
                { id: 'B', text: "Tư hữu là nguồn gốc tha hóa và bóc lột", correct: true },
                { id: 'C', text: "Tư hữu tạo động lực", correct: false },
                { id: 'D', text: "Tư hữu bảo đảm tự do", correct: false }
            ], noteField: 'q6', noteValue: 'tư hữu'
        },
        {
            id: 'c6q7', text: "Giải phóng phải trả thế giới con người về với:", options: [
                { id: 'A', text: "Giai cấp thống trị", correct: false },
                { id: 'B', text: "Nhà nước", correct: false },
                { id: 'C', text: "Bản thân con người", correct: true },
                { id: 'D', text: "TLSX", correct: false }
            ], noteField: 'q7', noteValue: 'con người'
        },
        {
            id: 'c6q8', text: "Nguyên tắc cốt lõi phát triển con người:", options: [
                { id: 'A', text: "Lợi ích tập thể cao hơn cá nhân", correct: false },
                { id: 'B', text: "Sự phát triển tự do của mỗi người là điều kiện cho tất cả", correct: true },
                { id: 'C', text: "Mỗi người phát triển theo năng lực", correct: false },
                { id: 'D', text: "Bình quân hóa mức sống", correct: false }
            ], noteField: 'q8', noteValue: 'tự do'
        },
        {
            id: 'c6q9', text: "Biểu hiện giải phóng toàn diện:", options: [
                { id: 'A', text: "Tăng phân công lao động cứng nhắc", correct: false },
                { id: 'B', text: "Xóa bỏ đối lập lao động trí óc và chân tay", correct: true },
                { id: 'C', text: "Duy trì khoảng cách thành thị-nông thôn", correct: false },
                { id: 'D', text: "Tăng vai trò kiểm soát NN", correct: false }
            ], noteField: 'q9', noteValue: 'đối lập'
        },
        {
            id: 'c6q10', text: "Theo HCM, điều kiện tiên quyết giải phóng ở VN:", options: [
                { id: 'A', text: "Phát triển KT thị trường", correct: false },
                { id: 'B', text: "Giải phóng dân tộc, giành độc lập", correct: true },
                { id: 'C', text: "Xây dựng NN pháp quyền", correct: false },
                { id: 'D', text: "Hội nhập quốc tế sâu", correct: false }
            ], noteField: 'q10', noteValue: 'dân tộc'
        }
    ],
    noteTemplate: [
        { id: 'q1', text: 'Lao động → hoạt động __.' },
        { id: 'q2', text: 'Sản phẩm → lực lượng __.' },
        { id: 'q3', text: 'Tự do khi thực hiện chức năng __.' },
        { id: 'q4', text: 'Hậu quả: __, phiến diện.' },
        { id: 'q5', text: 'Giải phóng khỏi __.' },
        { id: 'q6', text: 'Xóa bỏ chế độ __.' },
        { id: 'q7', text: 'Trả về với bản thân __.' },
        { id: 'q8', text: 'Phát triển __ của mỗi người.' },
        { id: 'q9', text: 'Xóa bỏ __ lao động.' },
        { id: 'q10', text: 'VN: giải phóng __ là tiền đề.' }
    ]
}
