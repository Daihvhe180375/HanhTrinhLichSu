import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const QuizMultipleChoice = ({ question, onAnswer, onNext, isAnswered, isLastQuestion }) => {
    const [selected, setSelected] = useState(null)
    const [status, setStatus] = useState('idle') // 'idle' | 'correct' | 'wrong' | 'answered-wrong'

    // Reset state when question changes
    useEffect(() => {
        setSelected(null)
        setStatus('idle')
    }, [question.id])

    const handleOptionClick = (option) => {
        if (status !== 'idle' || isAnswered) return

        setSelected(option.id)
        const isCorrect = option.correct

        if (isCorrect) {
            setStatus('correct')
            setTimeout(() => {
                onAnswer(option.id, true)
            }, 500)
        } else {
            setStatus('wrong')
            // Keep wrong answer visible (red) and record it
            setTimeout(() => {
                onAnswer(option.id, false)
            }, 800)
        }
    }

    const getOptionClass = (option) => {
        if (selected !== option.id) return 'quiz-option group'
        if (status === 'correct') return 'quiz-option correct'
        if (status === 'wrong') return 'quiz-option wrong'
        return 'quiz-option group'
    }

    const getLetterClass = (option) => {
        if (selected !== option.id) return 'quiz-option-letter'
        if (status === 'correct') return 'quiz-option-letter bg-green-500 text-white'
        if (status === 'wrong') return 'quiz-option-letter bg-red-500 text-white'
        return 'quiz-option-letter'
    }

    return (
        <div>
            <p className="text-lg font-medium text-charcoal mb-6">
                {question.text}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {question.options.map((option) => (
                    <motion.button
                        key={option.id}
                        onClick={() => handleOptionClick(option)}
                        disabled={status === 'correct' || isAnswered}
                        className={getOptionClass(option)}
                        whileHover={status === 'idle' && !isAnswered ? { scale: 1.02 } : {}}
                        whileTap={status === 'idle' && !isAnswered ? { scale: 0.98 } : {}}
                    >
                        <div className={getLetterClass(option)}>
                            {option.id}
                        </div>
                        <span className="text-gray-700 text-sm font-medium flex-1">
                            {option.text}
                        </span>

                        {/* Correct/Wrong icons */}
                        {selected === option.id && status === 'correct' && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="material-symbols-outlined text-green-500"
                            >
                                check_circle
                            </motion.span>
                        )}
                        {selected === option.id && status === 'wrong' && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="material-symbols-outlined text-red-500"
                            >
                                cancel
                            </motion.span>
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Feedback message */}
            {status === 'correct' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                >
                    <span className="material-symbols-outlined text-green-600">celebration</span>
                    <div>
                        <p className="font-bold text-green-700">Chính xác!</p>
                        <p className="text-sm text-green-600">Ghi chú đã được cập nhật tự động.</p>
                    </div>
                </motion.div>
            )}

            {status === 'wrong' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                >
                    <span className="material-symbols-outlined text-red-600">error</span>
                    <div>
                        <p className="font-bold text-red-700">Chưa chính xác!</p>
                        <p className="text-sm text-red-600">Đáp án sẽ được ghi nhận để bạn ôn lại sau.</p>
                    </div>
                </motion.div>
            )}

            {/* Next button - show for both correct AND wrong */}
            {(status === 'correct' || status === 'wrong' || isAnswered) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 flex justify-end"
                >
                    <button
                        onClick={onNext}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors"
                    >
                        {isLastQuestion ? 'Hoàn thành Quiz' : 'Câu tiếp theo'}
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                </motion.div>
            )}
        </div>
    )
}

export default QuizMultipleChoice
