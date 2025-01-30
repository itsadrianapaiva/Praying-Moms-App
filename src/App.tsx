import { Route, Routes } from 'react-router'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import PersonalJournal from './pages/PersonalJournal'
import DevotionalsMainPage from './pages/devotionals/Main'
import PrayersMainPage from './pages/prayer-lib/Main'
import Profile from './pages/Profile'
import Header from './components/common/Header'

const App = () => {
    return (
        <div className="overflow-hidden bg-background1 min-h-screen">
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Welcome />}
                />
                <Route
                    path="/home"
                    element={<Home />}
                />
                <Route
                    path="/journal"
                    element={<PersonalJournal />}
                />
                <Route
                    path="/devotionals"
                    element={<DevotionalsMainPage />}
                />
                {/* TODO: add nested route to devotionals reading page */}
                <Route
                    path="/prayers"
                    element={<PrayersMainPage />}
                />
                {/* TODO: add nested route to prayer reading page */}
                <Route
                    path="/profile"
                    element={<Profile />}
                />
            </Routes>
        </div>
    )
}

export default App
