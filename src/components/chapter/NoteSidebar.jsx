import { motion } from 'framer-motion'

const NoteSidebar = ({ chapterId, noteTemplate, filledNotes }) => {
    const filledCount = Object.keys(filledNotes).length
    const totalFields = noteTemplate.length

    return (
        <div className="lg:sticky lg:top-24 flex flex-col gap-4">
            {/* Note Card */}
            <div className="bg-[#FFFCF5] border border-accent-gold/30 rounded-xl shadow-soft p-5 relative overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold to-primary opacity-50" />

                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-charcoal flex items-center gap-2">
                        <span className="material-symbols-outlined text-accent-gold text-[18px]">edit_note</span>
                        Ghi chú nhanh
                    </h3>
                </div>

                <p className="text-sm text-slate mb-4 leading-relaxed">
                    Điền vào chỗ trống để ghi nhớ kiến thức quan trọng của chương này.
                </p>

                <div className="space-y-4">
                    {noteTemplate.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: filledNotes[item.id] ? 1 : 0.7 }}
                            className="text-sm text-charcoal leading-7"
                        >
                            {renderNoteText(item.text, item.id, filledNotes[item.id])}
                        </motion.div>
                    ))}
                </div>

                {/* Progress indicator */}
                <div className="mt-6 pt-4 border-t border-accent-gold/20">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-slate">Tiến độ ghi chú</span>
                        <span className="text-xs font-bold text-accent-gold">{filledCount}/{totalFields}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(filledCount / totalFields) * 100}%` }}
                            transition={{ duration: 0.5 }}
                            className="h-full bg-gradient-to-r from-accent-gold to-accent rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Keywords Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-soft hidden lg:block">
                <h4 className="text-xs font-bold uppercase text-slate mb-2">Từ khóa chính</h4>
                <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded hover:bg-gray-200 cursor-help transition-colors">
                        Lịch sử tự nhiên
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded hover:bg-gray-200 cursor-help transition-colors">
                        Giai cấp công nhân
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded hover:bg-gray-200 cursor-help transition-colors">
                        Tư liệu sản xuất
                    </span>
                </div>
            </div>
        </div>
    )
}

// Helper function to render note text with blanks or filled values
const renderNoteText = (text, fieldId, filledValue) => {
    // Match both __ (2 underscores) and ______ (6 underscores)
    const parts = text.split(/_{2,}/)

    if (parts.length < 2) return <p>{text}</p>

    return (
        <p>
            {parts[0]}
            {filledValue ? (
                <motion.span
                    key={filledValue}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="note-filled"
                >
                    {filledValue}
                </motion.span>
            ) : (
                <span className="note-blank">...</span>
            )}
            {parts[1]}
        </p>
    )
}

export default NoteSidebar
