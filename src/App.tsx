import { Route, Routes } from 'react-router'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import PersonalJournal from './pages/PersonalJournal'
import DevotionalsMainPage from './pages/devotionals/Main'
import PrayersMainPage from './pages/prayer-lib/Main'
import Profile from './pages/Profile'
import Header from './components/common/Header'

const App = () => {
//use state showWelcome to manage the welcome screen. conditionally render either welcome or home screen.

    return (
        <div className="overflow-hidden bg-background1 min-h-screen">
            <Header />
            {/* navigation stays here */}
            <main className="grid gap-4 grid-cols-[220px,_1fr] h-screen ">
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
            </main>
        </div>
    )
}

export default App
