import { Route, Routes } from 'react-router'
import Welcome from './pages/Welcome'
import Home from './pages/Home'
import PersonalJournal from './pages/PersonalJournal'
import DevotionalsMainPage from './pages/devotionals/Main'
import PrayersMainPage from './pages/prayer-lib/Main'
import Profile from './pages/Profile'
import Header from './components/common/Header'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const App = () => {
    //use state showWelcome to manage the welcome screen. conditionally render either welcome or home screen.
    const [showWelcome, setShowWelcome] = useState(() => {
        return sessionStorage.getItem("welcomeSeen") !== "true"; // Show welcome page if no session data
      });
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("useEffect triggered. showWelcome:", showWelcome);
    
        if (showWelcome) {  
            console.log("Showing Welcome screen...");
            setTimeout(() => {
                console.log("Loading finished.");
                setLoading(false);
                setTimeout(() => {
                    console.log("Hiding Welcome page.");
                    setShowWelcome(false);
                    sessionStorage.setItem("welcomeSeen", "true"); //Save state
                }, 2000);
            }, 3000);
        } else {
            console.log("Skipping Welcome page.");
        }
    }, [showWelcome]);
    


    return (
        <div className="overflow-hidden bg-background1 min-h-screen">
            {!showWelcome && <Header />}{' '}
            {/* show header after welcome fades out. */}
            {/* navigation stays here */}
            <main className="grid gap-4 grid-cols-[220px,_1fr] h-screen ">
                <AnimatePresence mode="wait">
                    <Routes>
                        {showWelcome ? (
                            <Route
                                path="/"
                                element={
                                    <motion.div
                                        key="welcome"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 2 }}>
                                        <Welcome loading={loading} />
                                    </motion.div>
                                }
                            />
                        ) : (
                            <Route
                                path="/"
                                element={
                                    <motion.div
                                        key="home"
                                        initial={{ opacity: 0.5 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}>
                                        <Home />
                                    </motion.div>
                                }
                            />
                        )}
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
                </AnimatePresence>
            </main>
        </div>
    )
}

export default App
