import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProgressStore } from '../store/progressStore'

const Completion = () => {
    const navigate = useNavigate()
    const { getStats, reset, completedChapters } = useProgressStore()
    const stats = getStats()

    // Confetti effect on mount
    useEffect(() => {
        // Simple confetti particles could be added here with CSS or a library
    }, [])

    const handleReset = () => {
        reset()
        navigate('/')
    }

    return (
        <div className="min-h-screen flex flex-col bg-background-light relative overflow-hidden">
            {/* Confetti Background Layer */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-40"
                style={{
                    background: `
            radial-gradient(circle at 20% 80%, rgba(220, 40, 40, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(220, 40, 40, 0.05) 0%, transparent 50%)
          `
                }}
            />

            {/* Floating confetti particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                        background: i % 2 === 0 ? '#dc2828' : '#F59E0B',
                        left: `${Math.random() * 100}%`,
                        top: -20,
                    }}
                    animate={{
                        y: ['0vh', '100vh'],
                        x: [0, (Math.random() - 0.5) * 200],
                        rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}

            {/* Navigation */}
            <header className="relative z-20 w-full bg-white border-b border-gray-200">
                <div className="max-w-[960px] mx-auto px-4 sm:px-10 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/flowchart')}
                            className="text-charcoal hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <h2 className="text-charcoal text-lg font-bold leading-tight tracking-tight">
                            Giáo Dục Chính Trị
                        </h2>
                    </div>
                    <div
                        className="w-10 h-10 rounded-full border-2 border-primary/20 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold"
                    >
                        🎓
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex flex-1 flex-col items-center justify-center py-8 px-4 w-full">
                <div className="max-w-[800px] w-full flex flex-col items-center gap-8">
                    {/* Hero Section: Medal & Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center gap-6"
                    >
                        {/* Medal Illustration */}
                        <div className="relative group">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-accent-gold/20 blur-[60px] rounded-full scale-150" />
                            <motion.div
                                initial={{ scale: 0.5, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', damping: 10, stiffness: 100 }}
                                className="relative w-48 h-48 sm:w-64 sm:h-64 drop-shadow-2xl"
                            >
                                {/* Medal SVG */}
                                <div className="w-full h-full flex items-center justify-center text-[120px] sm:text-[160px]">
                                    🏅
                                </div>
                            </motion.div>
                        </div>

                        <div className="space-y-2 max-w-2xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight text-charcoal"
                            >
                                CHÚC MỪNG BẠN<br />ĐÃ HOÀN THÀNH!
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-slate text-lg font-medium"
                            >
                                Bạn đã xuất sắc chinh phục học phần này.
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 px-2"
                    >
                        {/* Stat 1: Progress */}
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-soft border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="p-3 rounded-full bg-blue-50 text-blue-600 mb-3">
                                <span className="material-symbols-outlined text-3xl">menu_book</span>
                            </div>
                            <p className="text-sm font-medium text-slate uppercase tracking-wide">Tiến độ</p>
                            <p className="text-2xl font-bold text-charcoal mt-1">
                                {completedChapters.length}/6 Chương
                            </p>
                        </div>

                        {/* Stat 2: Accuracy */}
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-soft border border-gray-100 hover:border-primary/30 transition-colors">
                            <div className="p-3 rounded-full bg-green-50 text-green-600 mb-3">
                                <span className="material-symbols-outlined text-3xl">check_circle</span>
                            </div>
                            <p className="text-sm font-medium text-slate uppercase tracking-wide">Độ chính xác</p>
                            <p className="text-2xl font-bold text-charcoal mt-1">{stats.accuracy}%</p>
                        </div>

                        {/* Stat 3: Title */}
                        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-soft border-2 border-accent-gold/30 hover:border-accent-gold transition-colors relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-1">
                                <span className="material-symbols-outlined text-accent-gold opacity-20 text-6xl transform rotate-12">
                                    emoji_events
                                </span>
                            </div>
                            <div className="p-3 rounded-full bg-yellow-50 text-accent-gold mb-3 relative z-10">
                                <span className="material-symbols-outlined text-3xl">military_tech</span>
                            </div>
                            <p className="text-sm font-medium text-slate uppercase tracking-wide relative z-10">Danh hiệu</p>
                            <p className="text-xl font-black text-primary mt-1 text-center leading-tight relative z-10">
                                NGƯỜI CHINH PHỤC
                            </p>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="w-full max-w-[400px] flex flex-col gap-3 mt-4"
                    >
                        <button
                            onClick={() => navigate('/review')}
                            className="group w-full flex items-center justify-center gap-2 h-14 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-0.5 font-bold text-lg tracking-wide"
                        >
                            <span className="material-symbols-outlined">description</span>
                            XEM LẠI GHI CHÚ
                        </button>

                        <button
                            onClick={handleReset}
                            className="w-full flex items-center justify-center gap-2 h-12 text-slate hover:text-charcoal transition-colors font-semibold text-base"
                        >
                            <span className="material-symbols-outlined text-xl">replay</span>
                            Làm lại bài thi
                        </button>
                    </motion.div>

                    {/* Team Credit */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-center text-sm text-slate mt-8"
                    >
                        <p>Dự án được thực hiện bởi <strong className="text-charcoal">Nhóm 6</strong></p>
                        <p>Môn học: MLN111 - Triết học Mác - Lênin</p>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default Completion
