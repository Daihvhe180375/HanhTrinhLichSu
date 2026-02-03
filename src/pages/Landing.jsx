import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useProgressStore } from '../store/progressStore'
import MessageModal from '../components/landing/MessageModal'

const Landing = () => {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)
    const { startJourney, hasSeenIntro } = useProgressStore()

    const handleStart = () => {
        if (hasSeenIntro) {
            navigate('/flowchart')
        } else {
            setShowModal(true)
        }
    }

    const handleContinue = () => {
        startJourney()
        setShowModal(false)
        navigate('/flowchart')
    }

    return (
        <main className="relative flex min-h-screen w-full flex-col justify-center items-center overflow-hidden">
            {/* Dynamic Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-burgundy-deep via-[#3a0c0c] to-burgundy-light z-0" />

            {/* Texture Layer */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Abstract Background Image */}
            <div className="absolute inset-0 z-0 opacity-10 flex justify-center items-center pointer-events-none overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200"
                    alt="Abstract ancient architecture"
                    className="w-full h-full object-cover mix-blend-overlay grayscale"
                />
            </div>

            {/* Top Navigation */}
            <header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-6 py-6 md:px-12">
                <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="material-symbols-outlined text-white text-3xl">history_edu</span>
                    <span className="font-bold tracking-tight hidden sm:block text-white">Hành Trình Lịch Sử</span>
                </div>
                <button
                    aria-label="Menu"
                    className="flex items-center justify-center p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white group"
                >
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">menu</span>
                </button>
            </header>

            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center justify-center max-w-5xl px-6 text-center w-full">
                {/* Hook Question with Fade In Animation */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-12 drop-shadow-2xl"
                >
                    Bạn đang sống trong<br />
                    <span className="text-gradient-light">hình thái xã hội</span> nào?
                </motion.h1>

                {/* Start Button with Pulse Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button
                        onClick={handleStart}
                        className="relative group cursor-pointer overflow-hidden rounded-lg bg-primary px-8 py-4 md:px-12 md:py-5 shadow-lg transition-all hover:-translate-y-1 animate-pulse-glow"
                    >
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-colors" />
                        <div className="relative flex items-center gap-3">
                            <span className="text-base md:text-lg font-bold tracking-widest text-white uppercase">
                                Bắt đầu khám phá
                            </span>
                            <span className="material-symbols-outlined text-white transition-transform group-hover:translate-x-1">
                                arrow_forward
                            </span>
                        </div>
                    </button>
                </motion.div>

                {/* Supporting Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-8 text-white/50 text-sm md:text-base font-medium max-w-lg"
                >
                    Hành trình tìm hiểu lịch sử phát triển của xã hội loài người qua lăng kính triết học Mác - Lênin.
                </motion.p>
            </div>

            {/* Minimal Footer */}
            <footer className="absolute bottom-0 w-full z-20 py-6 text-center">
                <div className="flex flex-col gap-2 items-center justify-center text-white/30 text-xs md:text-sm">
                    <div className="flex gap-6 mb-2">
                        <a className="hover:text-white transition-colors" href="#">Về dự án</a>
                        <a className="hover:text-white transition-colors" href="#">Nguồn tài liệu</a>
                        <a className="hover:text-white transition-colors" href="#">Nhóm 6</a>
                    </div>
                    <p>© 2024 Nhóm 6 | MLN111 - Triết học Mác - Lênin</p>
                </div>
            </footer>

            {/* Message Modal */}
            <AnimatePresence>
                {showModal && (
                    <MessageModal
                        isOpen={showModal}
                        onContinue={handleContinue}
                    />
                )}
            </AnimatePresence>
        </main>
    )
}

export default Landing
