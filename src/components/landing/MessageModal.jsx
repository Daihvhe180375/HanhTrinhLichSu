import { motion } from 'framer-motion'

const MessageModal = ({ isOpen, onContinue }) => {
    if (!isOpen) return null

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
            {/* Backdrop - clicking does NOT close (prevent accidental close) */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
            >
                {/* Top Accent Bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-accent-gold to-primary" />

                <div className="p-8 md:p-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary text-3xl">menu_book</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-charcoal mb-6">
                        Hành Trình Lịch Sử
                    </h2>

                    {/* Message Content */}
                    <div className="text-gray-600 text-center leading-relaxed mb-8 space-y-4">
                        <p>
                            Lịch sử nhân loại đã trải qua nhiều giai đoạn phát triển,
                            từ xã hội nguyên thủy đến nền văn minh hiện đại.
                        </p>
                        <p>
                            Hãy cùng khám phá hành trình tiến hóa này và tìm hiểu
                            <span className="text-primary font-semibold"> vị trí của chúng ta </span>
                            trong dòng chảy lịch sử.
                        </p>
                    </div>

                    {/* Features List */}
                    <div className="bg-gray-50 rounded-xl p-4 mb-8">
                        <div className="flex items-start gap-3 text-sm text-gray-600">
                            <span className="material-symbols-outlined text-accent-gold text-lg mt-0.5">lightbulb</span>
                            <div>
                                <p className="font-medium text-charcoal">Bạn sẽ học về:</p>
                                <ul className="mt-2 space-y-1">
                                    <li>• 5 hình thái kinh tế - xã hội</li>
                                    <li>• Quiz tương tác để củng cố kiến thức</li>
                                    <li>• Ghi chú tự động theo tiến độ học</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Continue Button */}
                    <button
                        onClick={onContinue}
                        className="w-full btn-primary flex items-center justify-center gap-2"
                    >
                        <span>Tiếp Tục</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>

                    {/* Credit */}
                    <p className="text-center text-xs text-gray-400 mt-6">
                        Dự án của Nhóm 6 • MLN111
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default MessageModal
