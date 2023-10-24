const baseURL = "http://192.168.0.20:8080"
const apiURL = "http://192.168.0.20:8080/api/v1"

export default {
    loginURL: `${baseURL}/login`,
    registerURL: `${baseURL}/register`,
    refreshTokenURL: `${baseURL}/refresh-token`,
    subjects: {
        baseSubjects: `${apiURL}/subjects`,
        getAll: `${apiURL}/subjects/all`,
        create: `${apiURL}/subjects/save`,
    },
    decks: {
        baseDecks: `${apiURL}/decks`,
        getAll: `${apiURL}/decks/all`,
        create: `${apiURL}/decks/save`
    },
    flashcards: {
        baseFlashcards: `${apiURL}/flashcards`,
        create: `${apiURL}/flashcards/save`
    }
}