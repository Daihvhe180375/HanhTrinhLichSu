import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useProgressStore = create(
    persist(
        (set, get) => ({
            // State
            currentChapter: 0,
            completedChapters: [],
            filledNotes: {}, // { chapterId: { fieldId: value } }
            answers: [], // { questionId, selected, correct, timestamp }
            achievements: [],
            startTime: null,
            hasSeenIntro: false,

            // Actions
            setCurrentChapter: (chapter) => set({ currentChapter: chapter }),

            startJourney: () => set({
                startTime: Date.now(),
                hasSeenIntro: true
            }),

            completeChapter: (chapterId) => set((state) => ({
                completedChapters: [...new Set([...state.completedChapters, chapterId])]
            })),

            fillNote: (chapterId, fieldId, value) => set((state) => ({
                filledNotes: {
                    ...state.filledNotes,
                    [chapterId]: {
                        ...state.filledNotes[chapterId],
                        [fieldId]: value
                    }
                }
            })),

            addAnswer: (questionId, selected, correct) => set((state) => ({
                answers: [
                    ...state.answers,
                    { questionId, selected, correct, timestamp: Date.now() }
                ]
            })),

            unlockAchievement: (achievementId) => set((state) => ({
                achievements: [...new Set([...state.achievements, achievementId])]
            })),

            reset: () => set({
                currentChapter: 0,
                completedChapters: [],
                filledNotes: {},
                answers: [],
                achievements: [],
                startTime: Date.now(),
                hasSeenIntro: false
            }),

            // Computed getters
            getStats: () => {
                const state = get()
                const total = state.answers.length
                const correct = state.answers.filter(a => a.correct).length
                const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0
                const timeSpent = state.startTime
                    ? Math.floor((Date.now() - state.startTime) / 1000)
                    : 0

                return {
                    total,
                    correct,
                    accuracy,
                    timeSpent,
                    chaptersCompleted: state.completedChapters.length
                }
            },

            isChapterCompleted: (chapterId) => {
                return get().completedChapters.includes(chapterId)
            },

            getChapterNotes: (chapterId) => {
                return get().filledNotes[chapterId] || {}
            }
        }),
        {
            name: 'hanh-trinh-lich-su-progress'
        }
    )
)
