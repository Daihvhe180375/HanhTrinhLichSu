import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useProgressStore } from '../store/progressStore'
import { chapters } from '../data/chapters'
import NoteSidebar from '../components/chapter/NoteSidebar'
import QuizMultipleChoice from '../components/quiz/QuizMultipleChoice'

const Chapter = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const chapterId = parseInt(id)
    const chapter = chapters.find(c => c.id === chapterId)

    const {
        completedChapters,
        completeChapter,
        fillNote,
        getChapterNotes,
        addAnswer
    } = useProgressStore()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answeredQuestions, setAnsweredQuestions] = useState([])
    const [wrongQuestions, setWrongQuestions] = useState([]) // Track wrong answers
    const [isRetryMode, setIsRetryMode] = useState(false)
    const [showRetrySummary, setShowRetrySummary] = useState(false) // Show summary before retry

    const chapterNotes = getChapterNotes(chapterId)
    const totalChapters = chapters.length

    // Reset quiz state when chapter changes
    useEffect(() => {
        setCurrentQuestionIndex(0)
        setAnsweredQuestions([])
        setWrongQuestions([])
        setIsRetryMode(false)
        setShowRetrySummary(false)
    }, [chapterId])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [chapterId])

    if (!chapter) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background-light">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-charcoal mb-4">Chương không tồn tại</h1>
                    <button onClick={() => navigate('/flowchart')} className="btn-primary">
                        Quay lại
                    </button>
                </div>
            </div>
        )
    }

    const handleQuizAnswer = (questionId, selectedOption, isCorrect, noteField, noteValue) => {
        addAnswer(questionId, selectedOption, isCorrect)

        if (isCorrect && noteField) {
            fillNote(chapterId, noteField, noteValue)
        }

        // Update wrong questions list
        let updatedWrongQuestions = [...wrongQuestions]
        if (!isCorrect && !wrongQuestions.includes(questionId)) {
            updatedWrongQuestions = [...wrongQuestions, questionId]
            setWrongQuestions(updatedWrongQuestions)
        } else if (isCorrect && wrongQuestions.includes(questionId)) {
            // Remove from wrong list if now correct
            updatedWrongQuestions = wrongQuestions.filter(id => id !== questionId)
            setWrongQuestions(updatedWrongQuestions)
        }

        setAnsweredQuestions(prev => {
            const newAnswered = [...prev, questionId]

            if (isRetryMode) {
                // In retry mode - count how many wrong questions we need to answer
                const wrongQuestionsToAnswer = chapter.quiz.filter(q => wrongQuestions.includes(q.id))

                if (newAnswered.length >= wrongQuestionsToAnswer.length) {
                    if (updatedWrongQuestions.length === 0) {
                        // All correct now - complete chapter!
                        setTimeout(() => {
                            completeChapter(chapterId)
                            handleNextChapter()
                        }, 1000)
                    } else {
                        // Still has wrong answers - show summary again to retry
                        setIsRetryMode(false) // Reset retry mode
                        setTimeout(() => setShowRetrySummary(true), 500)
                    }
                }
            } else {
                // First pass - check if all 10 answered
                if (newAnswered.length >= chapter.quiz.length) {
                    if (updatedWrongQuestions.length > 0) {
                        // Show summary
                        setShowRetrySummary(true)
                    } else {
                        // All correct - complete
                        setTimeout(() => completeChapter(chapterId), 500)
                    }
                }
            }

            return newAnswered
        })
    }

    const handleNextQuestion = () => {
        if (isRetryMode) {
            // In retry mode, find next wrong question
            const wrongQuizItems = chapter.quiz.filter(q => wrongQuestions.includes(q.id))
            const currentWrongIndex = wrongQuizItems.findIndex(q => q.id === currentQuestion.id)

            if (currentWrongIndex < wrongQuizItems.length - 1) {
                const nextWrongQ = wrongQuizItems[currentWrongIndex + 1]
                const nextIndex = chapter.quiz.findIndex(q => q.id === nextWrongQ.id)
                setCurrentQuestionIndex(nextIndex)
            }
        } else {
            // Normal mode - just increment
            if (currentQuestionIndex < chapter.quiz.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1)
            }
        }
    }

    const handleRetryWrong = () => {
        // Jump to first wrong question
        const firstWrongIndex = chapter.quiz.findIndex(q => wrongQuestions.includes(q.id))
        if (firstWrongIndex !== -1) {
            setCurrentQuestionIndex(firstWrongIndex)
            setIsRetryMode(true)
            setShowRetrySummary(false) // Hide summary
            setAnsweredQuestions([]) // Reset to allow re-answering
        }
    }

    const handlePrevChapter = () => {
        if (chapterId > 1) {
            navigate(`/chapter/${chapterId - 1}`)
        } else {
            navigate('/flowchart')
        }
    }

    const handleNextChapter = () => {
        if (chapterId < totalChapters) {
            navigate(`/chapter/${chapterId + 1}`)
        } else {
            navigate('/completion')
        }
    }

    const currentQuestion = chapter.quiz[currentQuestionIndex]
    const isQuestionAnswered = answeredQuestions.includes(currentQuestion?.id)
    const allQuestionsAnswered = !isRetryMode && answeredQuestions.length >= chapter.quiz.length
    const hasWrongAnswers = wrongQuestions.length > 0

    // For retry mode counter
    const wrongQuizItems = isRetryMode ? chapter.quiz.filter(q => wrongQuestions.includes(q.id)) : []
    const retryQuestionNumber = isRetryMode ? wrongQuizItems.findIndex(q => q.id === currentQuestion.id) + 1 : 0

    return (
        <div className="min-h-screen flex flex-col bg-background-light">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between gap-6">
                    {/* Left: Back Button & Title */}
                    <div className="flex items-center gap-4 flex-1">
                        <button
                            onClick={handlePrevChapter}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                        </button>
                        <div className="hidden sm:block">
                            <h1 className="font-bold text-lg leading-tight text-charcoal">
                                Chương {chapterId}: {chapter.title}
                            </h1>
                        </div>
                    </div>

                    {/* Center: Progress Bar */}
                    <div className="flex flex-col gap-1 w-1/3 max-w-xs">
                        <div className="flex justify-between text-xs font-medium text-slate">
                            <span>Tiến độ học tập</span>
                            <span>{chapterId}/{totalChapters}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-500"
                                style={{ width: `${(chapterId / totalChapters) * 100}%` }}
                            />
                        </div>
                    </div>

                    {/* Right: Menu Action */}
                    <div className="flex flex-1 justify-end">
                        <button
                            onClick={() => navigate('/flowchart')}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 hover:border-primary text-sm font-bold rounded-lg transition-colors group"
                        >
                            <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors text-[20px]">
                                grid_view
                            </span>
                            <span className="hidden sm:inline group-hover:text-primary transition-colors">Menu</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Layout Container */}
            <main className="flex-grow w-full max-w-[1440px] mx-auto p-6 md:p-8 lg:px-12 gap-8 flex flex-col lg:flex-row items-start">
                {/* Left Column: Content Area (75%) */}
                <article className="w-full lg:w-3/4 flex flex-col gap-8">
                    {/* Hero Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 relative overflow-hidden"
                    >
                        <div className="relative z-10 max-w-2xl">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-primary bg-primary/10 rounded-full uppercase">
                                Lý luận chính trị
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal leading-tight">
                                {chapter.title}
                            </h1>
                            <p className="text-lg text-slate leading-relaxed">
                                {chapter.description}
                            </p>
                        </div>

                        {/* Decorative Icon */}
                        <div className="absolute right-8 bottom-8 text-primary opacity-10 hidden md:block">
                            <span className="material-symbols-outlined text-[120px]">landscape</span>
                        </div>
                    </motion.section>

                    {/* Content Sections */}
                    {chapter.sections.map((section, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="bg-white p-8 rounded-xl shadow-soft border border-gray-100"
                        >
                            <div className="prose max-w-none text-gray-700">
                                <h2 className="text-2xl font-bold text-charcoal mb-4 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    {section.title}
                                </h2>
                                <div
                                    className="leading-7"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                            </div>
                        </motion.section>
                    ))}

                    {/* Quiz Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden"
                    >
                        <div className="bg-primary/5 p-4 border-b border-primary/10 flex justify-between items-center">
                            <h3 className="font-bold text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-[20px]">quiz</span>
                                {isRetryMode ? 'Làm lại câu sai' : 'Kiểm tra kiến thức'}
                            </h3>
                            <span className="text-xs font-semibold text-slate bg-white px-2 py-1 rounded">
                                {isRetryMode
                                    ? `Câu ${retryQuestionNumber}/${wrongQuizItems.length}`
                                    : `Câu ${currentQuestionIndex + 1}/${chapter.quiz.length}`
                                }
                            </span>
                        </div>

                        <div className="p-6 md:p-8">
                            {!showRetrySummary && currentQuestion && (
                                <QuizMultipleChoice
                                    key={currentQuestion.id}
                                    question={currentQuestion}
                                    onAnswer={(selectedOption, isCorrect) => {
                                        handleQuizAnswer(
                                            currentQuestion.id,
                                            selectedOption,
                                            isCorrect,
                                            currentQuestion.noteField,
                                            currentQuestion.noteValue
                                        )
                                    }}
                                    onNext={handleNextQuestion}
                                    isAnswered={isQuestionAnswered}
                                    isLastQuestion={isRetryMode
                                        ? retryQuestionNumber >= wrongQuizItems.length
                                        : currentQuestionIndex === chapter.quiz.length - 1}
                                />
                            )}

                            {showRetrySummary && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <span className="material-symbols-outlined text-orange-500 text-6xl mb-4">pending_actions</span>
                                    <h3 className="text-2xl font-bold text-charcoal mb-3">
                                        Bạn đã hoàn thành lượt đầu!
                                    </h3>
                                    <p className="text-slate mb-2">
                                        Điểm số: <span className="text-xl font-bold text-primary">
                                            {chapter.quiz.length - wrongQuestions.length}/{chapter.quiz.length}
                                        </span>
                                    </p>
                                    <p className="text-slate mb-6">
                                        Bạn còn <span className="font-bold text-orange-600">{wrongQuestions.length} câu sai</span>. Hãy làm lại để đạt 100%!
                                    </p>

                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 text-left max-w-md mx-auto">
                                        <p className="font-semibold text-orange-800 mb-2">Các câu cần làm lại:</p>
                                        <ul className="space-y-1">
                                            {wrongQuestions.map(qId => {
                                                const qIndex = chapter.quiz.findIndex(q => q.id === qId)
                                                return (
                                                    <li key={qId} className="text-sm text-orange-700">
                                                        • Câu {qIndex + 1}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={handleRetryWrong}
                                        className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
                                    >
                                        Làm lại các câu sai
                                    </button>
                                </motion.div>
                            )}
                        </div>
                    </motion.section>
                </article>

                {/* Right Column: Sticky Note Area (25%) */}
                <aside className="w-full lg:w-1/4 flex-shrink-0">
                    <NoteSidebar
                        chapterId={chapterId}
                        noteTemplate={chapter.noteTemplate}
                        filledNotes={chapterNotes}
                    />
                </aside>
            </main>

            {/* Footer Navigation */}
            <footer className="sticky bottom-0 z-40 bg-white/90 backdrop-blur-md border-t border-gray-200 mt-auto">
                <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
                    <button
                        onClick={handlePrevChapter}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                        Trước
                    </button>

                    {/* Chapter dots */}
                    <div className="hidden md:flex items-center gap-2">
                        {Array.from({ length: totalChapters }).map((_, idx) => (
                            <span
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-colors ${idx + 1 === chapterId ? 'bg-primary' :
                                    completedChapters.includes(idx + 1) ? 'bg-green-500' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={handleNextChapter}
                        disabled={!completedChapters.includes(chapterId) && (!allQuestionsAnswered || hasWrongAnswers)}
                        className={`flex items-center gap-2 px-8 py-2.5 rounded-lg font-bold transition-all transform ${completedChapters.includes(chapterId) || (allQuestionsAnswered && !hasWrongAnswers)
                                ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20 hover:-translate-y-0.5'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        {chapterId < totalChapters ? 'Tiếp' : 'Hoàn thành'}
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default Chapter
