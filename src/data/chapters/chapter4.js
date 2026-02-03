// CHƯƠNG 4: Thiết chế chính trị và Nhà nước
export const chapter4 = {
    id: 4,
    title: "Thiết chế chính trị & Nhà nước",
    description: "Khái niệm thiết chế chính trị, vai trò, bản chất, chức năng của nhà nước XHCN.",
    sections: [
        {
            title: "Thiết chế chính trị",
            content: `<p class="mb-3">Hệ thống tổ chức và quy tắc chính trị:</p><ul class="list-disc pl-5 space-y-1"><li>Đảng chính trị</li><li>Nhà nước</li><li>Tổ chức chính trị-xã hội</li><li>Pháp luật</li></ul>`
        },
        {
            title: "Bản chất Nhà nước XHCN",
            content: `<ul class="list-disc pl-5 space-y-1"><li>Mang bản chất giai cấp <strong>công nhân</strong></li><li>Tính nhân dân sâu sắc</li><li>Tính dân tộc</li><li>Hoạt động trên nguyên tắc <strong>dân chủ</strong></li></ul>`
        },
        {
            title: "Chức năng",
            content: `<p class="mb-2"><strong>Đối nội:</strong> Quản lý KT, VH, XH, bảo đảm quyền con người</p><p><strong>Đối ngoại:</strong> Bảo vệ <strong>chủ quyền</strong>, hợp tác quốc tế</p>`
        }
    ],
    quiz: [
        {
            id: 'c4q1', text: "Thiết chế chính trị là hệ thống tổ chức và __:", options: [
                { id: 'A', text: "phong trào", correct: false },
                { id: 'B', text: "quy tắc", correct: true },
                { id: 'C', text: "tập quán", correct: false },
                { id: 'D', text: "truyền thống", correct: false }
            ], noteField: 'q1', noteValue: 'quy tắc'
        },
        {
            id: 'c4q2', text: "Nhà nước là công cụ của giai cấp __:", options: [
                { id: 'A', text: "bị trị", correct: false },
                { id: 'B', text: "trung lưu", correct: false },
                { id: 'C', text: "thống trị", correct: true },
                { id: 'D', text: "nông dân", correct: false }
            ], noteField: 'q2', noteValue: 'thống trị'
        },
        {
            id: 'c4q3', text: "Nhà nước XHCN mang bản chất giai cấp __:", options: [
                { id: 'A', text: "tư sản", correct: false },
                { id: 'B', text: "công nhân", correct: true },
                { id: 'C', text: "địa chủ", correct: false },
                { id: 'D', text: "tiểu tư sản", correct: false }
            ], noteField: 'q3', noteValue: 'công nhân'
        },
        {
            id: 'c4q4', text: "Ngoài tính giai cấp, còn mang tính __ và dân tộc:", options: [
                { id: 'A', text: "đại chúng", correct: false },
                { id: 'B', text: "quần chúng", correct: false },
                { id: 'C', text: "nhân dân", correct: true },
                { id: 'D', text: "tập thể", correct: false }
            ], noteField: 'q4', noteValue: 'nhân dân'
        },
        {
            id: 'c4q5', text: "Chức năng đối nội: quản lý __ và __:", options: [
                { id: 'A', text: "kinh tế-xã hội", correct: true },
                { id: 'B', text: "quốc phòng-an ninh", correct: false },
                { id: 'C', text: "chính trị-tư tưởng", correct: false },
                { id: 'D', text: "văn hóa-tôn giáo", correct: false }
            ], noteField: 'q5', noteValue: 'kinh tế'
        },
        {
            id: 'c4q6', text: "Chức năng đối ngoại: bảo vệ __ quốc gia:", options: [
                { id: 'A', text: "an ninh", correct: false },
                { id: 'B', text: "lãnh thổ", correct: false },
                { id: 'C', text: "chủ quyền", correct: true },
                { id: 'D', text: "biên giới", correct: false }
            ], noteField: 'q6', noteValue: 'chủ quyền'
        },
        {
            id: 'c4q7', text: "Hoạt động dựa trên nguyên tắc __:", options: [
                { id: 'A', text: "tập trung quan liêu", correct: false },
                { id: 'B', text: "dân chủ", correct: true },
                { id: 'C', text: "tập quyền tuyệt đối", correct: false },
                { id: 'D', text: "kiểm soát chặt chẽ", correct: false }
            ], noteField: 'q7', noteValue: 'dân chủ'
        },
        {
            id: 'c4q8', text: "Thiết chế gồm Đảng, Nhà nước và tổ chức __:", options: [
                { id: 'A', text: "chính trị-xã hội", correct: true },
                { id: 'B', text: "nghề nghiệp", correct: false },
                { id: 'C', text: "kinh tế", correct: false },
                { id: 'D', text: "học thuật", correct: false }
            ], noteField: 'q8', noteValue: 'CT-XH'
        },
        {
            id: 'c4q9', text: "Nhà nước ra đời để duy trì __ xã hội:", options: [
                { id: 'A', text: "hòa bình", correct: false },
                { id: 'B', text: "công bằng", correct: false },
                { id: 'C', text: "trật tự", correct: true },
                { id: 'D', text: "bình đẳng", correct: false }
            ], noteField: 'q9', noteValue: 'trật tự'
        },
        {
            id: 'c4q10', text: "Nhà nước XHCN là công cụ để __:", options: [
                { id: 'A', text: "TBCN hiện đại", correct: false },
                { id: 'B', text: "dân chủ tư sản", correct: false },
                { id: 'C', text: "bảo vệ thành quả CM", correct: true },
                { id: 'D', text: "KT thị trường tự do", correct: false }
            ], noteField: 'q10', noteValue: 'bảo vệ CM'
        }
    ],
    noteTemplate: [
        { id: 'q1', text: 'Thiết chế: tổ chức và __.' },
        { id: 'q2', text: 'Nhà nước: công cụ giai cấp __.' },
        { id: 'q3', text: 'Bản chất giai cấp __.' },
        { id: 'q4', text: 'Tính __ và dân tộc.' },
        { id: 'q5', text: 'Đối nội: quản lý __.' },
        { id: 'q6', text: 'Đối ngoại: bảo vệ __.' },
        { id: 'q7', text: 'Nguyên tắc __.' },
        { id: 'q8', text: 'Gồm Đảng, NN, tổ chức __.' },
        { id: 'q9', text: 'Duy trì __ XH.' },
        { id: 'q10', text: 'Công cụ __ thành quả.' }
    ]
}
