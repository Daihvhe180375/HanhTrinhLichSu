import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProgressStore } from '../store/progressStore'
import { chapters } from '../data/chapters'

const Review = () => {
    const navigate = useNavigate()
    const { filledNotes, completedChapters, getStats } = useProgressStore()
    const stats = getStats()

    return (
        <div className="min-h-screen flex flex-col bg-background-light">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-[960px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h1 className="font-bold text-lg text-charcoal">Ghi Chú Của Bạn</h1>
                    </div>
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        <span className="material-symbols-outlined text-sm">home</span>
                        Trang chủ
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow w-full max-w-[960px] mx-auto p-6 md:p-8">
                {/* Stats Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-6 mb-8 text-white"
                >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <h2 className="text-xl font-bold mb-2">Tổng kết học tập</h2>
                            <p className="text-white/80">
                                Bạn đã hoàn thành {completedChapters.length}/{chapters.length} chương
                            </p>
                        </div>
                        <div className="flex gap-6">
                            <div className="text-center">
                                <p className="text-3xl font-black">{stats.correct}</p>
                                <p className="text-sm text-white/80">Câu đúng</p>
                            </div>
                            <div className="text-center">
                                <p className="text-3xl font-black">{stats.accuracy}%</p>
                                <p className="text-sm text-white/80">Độ chính xác</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Notes by Chapter */}
                <div className="space-y-6">
                    {chapters.map((chapter, index) => {
                        const chapterNotes = filledNotes[chapter.id] || {}
                        const hasNotes = Object.keys(chapterNotes).length > 0
                        const isCompleted = completedChapters.includes(chapter.id)

                        return (
                            <motion.div
                                key={chapter.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white rounded-xl shadow-soft border ${isCompleted ? 'border-green-200' : 'border-gray-100'
                                    } overflow-hidden`}
                            >
                                {/* Chapter Header */}
                                <div className={`p-4 border-b ${isCompleted ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-100'
                                    }`}>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <span className={`flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold ${isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                                                }`}>
                                                {isCompleted ? (
                                                    <span className="material-symbols-outlined text-lg">check</span>
                                                ) : (
                                                    chapter.id
                                                )}
                                            </span>
                                            <h3 className="font-bold text-charcoal">
                                                Chương {chapter.id}: {chapter.title}
                                            </h3>
                                        </div>
                                        <span className={`text-xs font-medium px-2 py-1 rounded ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                                            }`}>
                                            {isCompleted ? 'Hoàn thành' : 'Chưa hoàn thành'}
                                        </span>
                                    </div>
                                </div>

                                {/* Notes Content */}
                                <div className="p-6">
                                    {hasNotes ? (
                                        <div className="space-y-3">
                                            {chapter.noteTemplate.map((note) => (
                                                <div key={note.id} className="text-gray-700 leading-7">
                                                    {renderNoteText(note.text, chapterNotes[note.id])}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="text-center py-6 text-slate">
                                            <span className="material-symbols-outlined text-4xl text-gray-300 mb-2 block">
                                                edit_note
                                            </span>
                                            <p>Chưa có ghi chú nào</p>
                                            <button
                                                onClick={() => navigate(`/chapter/${chapter.id}`)}
                                                className="mt-3 text-primary font-medium hover:underline"
                                            >
                                                Bắt đầu học →
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

// Helper function
const renderNoteText = (text, filledValue) => {
    const parts = text.split('______')
    if (parts.length < 2) return <p>{text}</p>

    return (
        <p>
            {parts[0]}
            {filledValue ? (
                <span className="note-filled">{filledValue}</span>
            ) : (
                <span className="note-blank">...</span>
            )}
            {parts[1]}
        </p>
    )
}

export default Review
