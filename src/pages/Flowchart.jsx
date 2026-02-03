import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { eras } from '../data/eras'
import EraCard from '../components/flowchart/EraCard'

const Flowchart = () => {
    const navigate = useNavigate()
    const [activeEra, setActiveEra] = useState(null)

    const handleEraClick = (era) => {
        if (era.isCurrent) {
            navigate('/chapter/1')
        }
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-light">
            {/* Top Navbar */}
            <header className="w-full border-b border-gray-200 bg-white">
                <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-3xl">history_edu</span>
                            </div>
                            <h2 className="text-charcoal text-lg font-bold leading-tight tracking-tight">
                                Hành Trình Lịch Sử
                            </h2>
                        </div>
                        <button
                            onClick={() => navigate('/chapter/1')}
                            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-wide shadow-md"
                        >
                            <span className="truncate">Bắt Đầu Học</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-1 flex-col w-full items-center py-10">
                <div className="max-w-[1440px] w-full px-4 sm:px-10 flex-1">
                    {/* Page Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-2 pb-10 text-center md:text-left"
                    >
                        <h1 className="text-charcoal text-4xl md:text-5xl font-black leading-tight tracking-tight">
                            5 Hình Thái Kinh Tế - Xã Hội
                        </h1>
                        <p className="text-slate text-lg font-normal leading-normal max-w-2xl">
                            Hành trình tương tác đưa bạn qua các giai đoạn phát triển của xã hội theo chủ nghĩa duy vật lịch sử.
                        </p>
                    </motion.div>

                    {/* Timeline Container */}
                    <div className="relative w-full flex-1 flex flex-col justify-center">
                        {/* Scrollable Area */}
                        <div className="flex overflow-x-auto pb-12 pt-4 px-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'thin' }}>
                            <div className="flex items-center gap-0 mx-auto">
                                {eras.map((era, index) => (
                                    <div key={era.id} className="flex items-center snap-center shrink-0">
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <EraCard
                                                era={era}
                                                isActive={activeEra === era.id}
                                                onMouseEnter={() => setActiveEra(era.id)}
                                                onMouseLeave={() => setActiveEra(null)}
                                                onClick={() => handleEraClick(era)}
                                            />
                                        </motion.div>

                                        {/* Connector Arrow (except for last item) */}
                                        {index < eras.length - 1 && (
                                            <div className="w-6 md:w-10 h-px bg-gray-300 mx-1 relative shrink-0">
                                                <span className="material-symbols-outlined absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-sm">
                                                    arrow_forward
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer / Legend */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 w-full flex flex-wrap justify-center gap-6 border-t border-gray-100 pt-8"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-primary" />
                            <span className="text-sm text-slate">Bước ngoặt cách mạng</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-accent-gold" />
                            <span className="text-sm text-slate">Giai đoạn hiện tại</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-gray-400 text-lg">touch_app</span>
                            <span className="text-sm text-slate">Di chuột vào thẻ để xem chi tiết</span>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}

export default Flowchart
