import { motion } from 'framer-motion'

const EraCard = ({ era, isActive, onMouseEnter, onMouseLeave, onClick }) => {
    const isCurrent = era.isCurrent

    return (
        <div
            className={`relative group ${isCurrent ? '-mt-4' : ''}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            {/* "You Are Here" Badge for current era */}
            {isCurrent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <div className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-glow animate-bounce-slow tracking-widest uppercase">
                        Bạn đang ở đây
                    </div>
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary" />
                </div>
            )}

            <div
                className={`
          relative overflow-hidden transition-all duration-300 cursor-pointer
          ${isCurrent
                        ? 'w-56 md:w-64 h-[22rem] md:h-[24rem] rounded-xl bg-white shadow-glow border-2 border-primary hover:shadow-[0_0_30px_rgba(220,40,40,0.3)] ring-2 ring-transparent hover:ring-accent-gold/50'
                        : 'w-44 md:w-52 h-72 md:h-80 rounded-xl bg-white shadow-soft border border-gray-200 hover:shadow-lg hover:border-primary/30'
                    }
        `}
            >
                {/* Card Image */}
                <div
                    className={`${isCurrent ? 'h-36 md:h-44' : 'h-28 md:h-36'} w-full bg-cover bg-center relative`}
                    style={{
                        backgroundImage: isCurrent
                            ? `linear-gradient(to bottom, rgba(220,40,40,0.2), rgba(0,0,0,0.6)), url("${era.image}")`
                            : `url("${era.image}")`
                    }}
                >
                    {/* Glow Effect on Image for current */}
                    {isCurrent && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    )}

                    {/* Icon Badge */}
                    <div className={`absolute top-4 right-4 rounded-full p-2 backdrop-blur-sm ${isCurrent
                        ? 'bg-accent-gold text-white shadow-lg animate-pulse-slow'
                        : 'bg-white/90'
                        }`}>
                        <span className={`material-symbols-outlined ${isCurrent ? '' : 'text-primary'}`}>
                            {era.icon}
                        </span>
                    </div>
                </div>

                {/* Card Content */}
                <div className={`${isCurrent ? 'p-6' : 'p-5'}`}>
                    {isCurrent && (
                        <div className="flex items-center gap-2 mb-2">
                            <span className="flex h-2 w-2 rounded-full bg-accent-gold animate-pulse" />
                            <p className="text-xs font-bold text-accent-gold uppercase tracking-wider">
                                {era.period}
                            </p>
                        </div>
                    )}

                    {!isCurrent && (
                        <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                            {era.period}
                        </p>
                    )}

                    <h3 className={`font-bold mb-2 leading-tight ${isCurrent ? 'text-2xl text-primary' : 'text-xl text-charcoal'
                        }`}>
                        {era.name}
                    </h3>

                    <p className="text-sm text-slate">{era.periodDetail}</p>

                    {isCurrent && (
                        <div className="mt-4 flex items-center text-primary text-sm font-bold group-hover:translate-x-1 transition-transform">
                            <span>Khám phá chi tiết</span>
                            <span className="material-symbols-outlined text-lg ml-1">arrow_right_alt</span>
                        </div>
                    )}
                </div>

                {/* Hover Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 p-6 flex flex-col justify-center gap-4 text-white pointer-events-none ${isCurrent
                        ? 'bg-gradient-to-br from-primary to-[#8b0000]'
                        : 'bg-primary/95'
                        }`}
                    style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                >
                    {isCurrent && (
                        <div className="text-center mb-2">
                            <span className="material-symbols-outlined text-4xl text-accent-gold mb-2">public</span>
                            <h4 className="text-lg font-bold">Giai Đoạn Cuối Cùng</h4>
                        </div>
                    )}

                    <div>
                        <p className="text-accent-gold text-xs font-bold uppercase mb-1">Cơ SỞ Kinh Tế</p>
                        <p className="text-sm leading-snug">{era.economy}</p>
                    </div>

                    <div className="w-full h-px bg-white/20" />

                    <div>
                        <p className="text-accent-gold text-xs font-bold uppercase mb-1">Quan Hệ Xã Hội</p>
                        <p className="text-sm leading-snug">{era.social}</p>
                    </div>

                    <div className="w-full h-px bg-white/20" />

                    <div>
                        <p className="text-accent-gold text-xs font-bold uppercase mb-1">Nhà Nước</p>
                        <p className="text-sm leading-snug">{era.state}</p>
                    </div>

                    {isCurrent && (
                        <button className="mt-4 bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors">
                            Bắt Đầu Học
                        </button>
                    )}
                </motion.div>
            </div>
        </div>
    )
}

export default EraCard
