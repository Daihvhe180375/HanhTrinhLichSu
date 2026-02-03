// CHƯƠNG 1: Vị trí của hình thái CNCS trong tiến trình lịch sử
export const chapter1 = {
    id: 1,
    title: "Vị trí của hình thái CNCS trong tiến trình lịch sử",
    description: "Khái niệm, vị trí, ý nghĩa lịch sử của CNCS theo Mác-Ăngghen.",
    sections: [
        {
            title: "Khái niệm",
            content: `<p class="mb-4"><strong>Hình thái CNCS:</strong> Giai đoạn phát triển <span class="text-primary font-bold">cao nhất</span> của lịch sử, quan hệ sản xuất phù hợp hoàn toàn với lực lượng sản xuất.</p><p><strong>Đặc trưng:</strong> Không còn giai cấp, không áp bức bóc lột, mọi người bình đẳng, tự do phát triển toàn diện.</p>`
        },
        {
            title: "Vị trí lịch sử",
            content: `<p class="mb-3">6 hình thái theo Mác-Ăngghen:</p><div class="space-y-2"><div class="p-2 bg-gray-50 rounded">1. Cộng sản nguyên thủy</div><div class="p-2 bg-gray-50 rounded">2. Chiếm hữu nô lệ</div><div class="p-2 bg-gray-50 rounded">3. Phong kiến</div><div class="p-2 bg-gray-50 rounded">4. Tư bản chủ nghĩa</div><div class="p-2 bg-primary/10 rounded border border-primary/20">5. Xã hội chủ nghĩa</div><div class="p-2 bg-primary/10 rounded border border-primary/20">6. <strong>Cộng sản chủ nghĩa</strong> (cuối cùng)</div></div>`
        },
        {
            title: "Ý nghĩa",
            content: `<ul class="space-y-2 list-disc pl-5"><li>Đỉnh cao tiến trình phát triển nhân loại</li><li>Khát vọng về xã hội công bằng, bình đẳng, hạnh phúc</li><li>Định hướng phong trào cách mạng vô sản</li><li>Tại VN: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"</li></ul>`
        }
    ],
    quiz: [
        {
            id: 'c1q1', text: "Hình thái cộng sản chủ nghĩa được Mác-Ăngghen xác định là:", options: [
                { id: 'A', text: "Hình thái đầu tiên", correct: false },
                { id: 'B', text: "Hình thái cao nhất", correct: true },
                { id: 'C', text: "Hình thái trung gian", correct: false },
                { id: 'D', text: "Hình thái phong kiến", correct: false }
            ], noteField: 'q1', noteValue: 'cao nhất'
        },
        {
            id: 'c1q2', text: "Đặc trưng cơ bản của CNCS là:", options: [
                { id: 'A', text: "Xã hội có giai cấp", correct: false },
                { id: 'B', text: "Nhà nước tồn tại vĩnh viễn", correct: false },
                { id: 'C', text: "Không còn giai cấp, mọi người bình đẳng", correct: true },
                { id: 'D', text: "Tư hữu TLSX", correct: false }
            ], noteField: 'q2', noteValue: 'không còn giai cấp'
        },
        {
            id: 'c1q3', text: "Nguyên tắc phân phối trong CNCS hoàn chỉnh:", options: [
                { id: 'A', text: "Theo lao động", correct: false },
                { id: 'B', text: "Theo nhu cầu", correct: true },
                { id: 'C', text: "Theo nhu cầu, hưởng theo lao động", correct: false },
                { id: 'D', text: "Theo địa vị", correct: false }
            ], noteField: 'q3', noteValue: 'theo nhu cầu'
        },
        {
            id: 'c1q4', text: "CNCS đứng sau hình thái nào?", options: [
                { id: 'A', text: "Phong kiến", correct: false },
                { id: 'B', text: "Tư bản", correct: false },
                { id: 'C', text: "Xã hội chủ nghĩa", correct: true },
                { id: 'D', text: "Cộng sản nguyên thủy", correct: false }
            ], noteField: 'q4', noteValue: 'XHCN'
        },
        {
            id: 'c1q5', text: "Vì sao CNCS là mục tiêu tất yếu?", options: [
                { id: 'A', text: "Con người mong muốn", correct: false },
                { id: 'B', text: "Lực lượng sản xuất phát triển cao", correct: true },
                { id: 'C', text: "Nhà nước quyết định", correct: false },
                { id: 'D', text: "Phong trào công nhân", correct: false }
            ], noteField: 'q5', noteValue: 'LLSX cao'
        },
        {
            id: 'c1q6', text: "Trong CNCS, nhà nước sẽ:", options: [
                { id: 'A', text: "Tồn tại vĩnh viễn", correct: false },
                { id: 'B', text: "Dần tiêu vong", correct: true },
                { id: 'C', text: "Mạnh hơn", correct: false },
                { id: 'D', text: "Chỉ trong quân đội", correct: false }
            ], noteField: 'q6', noteValue: 'tiêu vong'
        },
        {
            id: 'c1q7', text: "Mục tiêu lâu dài của cách mạng VN:", options: [
                { id: 'A', text: "TBCN", correct: false },
                { id: 'B', text: "XHCN", correct: false },
                { id: 'C', text: "Cộng sản", correct: true },
                { id: 'D', text: "Phong kiến", correct: false }
            ], noteField: 'q7', noteValue: 'cộng sản'
        },
        {
            id: 'c1q8', text: "Trong XHCN, nguyên tắc phân phối là:", options: [
                { id: 'A', text: "Theo nhu cầu", correct: false },
                { id: 'B', text: "Theo địa vị", correct: false },
                { id: 'C', text: "Làm theo năng lực, hưởng theo lao động", correct: true },
                { id: 'D', text: "Theo vốn đầu tư", correct: false }
            ], noteField: 'q8', noteValue: 'theo lao động'
        },
        {
            id: 'c1q9', text: "Khát vọng nhân loại trong CNCS:", options: [
                { id: 'A', text: "Giàu có cá nhân", correct: false },
                { id: 'B', text: "Công bằng, bình đẳng, hạnh phúc", correct: true },
                { id: 'C', text: "Quyền lực", correct: false },
                { id: 'D', text: "Tư hữu tài sản", correct: false }
            ], noteField: 'q9', noteValue: 'công bằng'
        },
        {
            id: 'c1q10', text: "Mục tiêu CNCS ở VN:", options: [
                { id: 'A', text: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", correct: true },
                { id: 'B', text: "TBCN hiện đại", correct: false },
                { id: 'C', text: "Phong kiến mới", correct: false },
                { id: 'D', text: "Quân sự hóa", correct: false }
            ], noteField: 'q10', noteValue: 'dân giàu'
        }
    ],
    noteTemplate: [
        { id: 'q1', text: 'CNCS là hình thái ______ trong lịch sử.' },
        { id: 'q2', text: 'Đặc trưng: ______, mọi người bình đẳng.' },
        { id: 'q3', text: 'CNCS: phân phối ______.' },
        { id: 'q4', text: 'CNCS đứng sau ______.' },
        { id: 'q5', text: 'Mục tiêu tất yếu vì ______.' },
        { id: 'q6', text: 'Nhà nước sẽ dần ______.' },
        { id: 'q7', text: 'Mục tiêu lâu dài VN: chủ nghĩa ______.' },
        { id: 'q8', text: 'XHCN: hưởng ______.' },
        { id: 'q9', text: 'Khát vọng: ______, bình đẳng.' },
        { id: 'q10', text: 'VN: "______, nước mạnh..."' }
    ]
}
