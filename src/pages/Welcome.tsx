import Dashboard from '../components/common/Dashboard'
import logo from '../assets/images/logo1.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

// Add a Fade-In Animation to the Welcome Page
//Use Framer Motion (motion.div) to animate the page.
//Set an opacity animation from 0 to 1.
//Implement a Loading Animation Before Transition
//After the Welcome animation, show a loading spinner before navigating to /home.
//Use setTimeout to handle the delay before transitioning.

const Welcome: React.FC<{ loading: boolean }> = ({
    loading,
}: {
    loading: boolean
}) => {
    const navigate = useNavigate()

    //Redirect to home after loading finishes
    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                navigate('/home')
            }, 3000) //2s fade out before navigating
        }
    }, [navigate, loading])

    return (
        <Dashboard>
            <motion.div
                className="relative flex flex-col items-center md:justify-center min-h-screen p-4"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}>

                <div className="relative flex flex-col items-center mt-25 md:mt-15">
                    <h1 className="text-2xl md:text-2xl md:-mb-40">Welcome to</h1>
                    <div className="w-[350px] sm:w-[600px] md:w-[900px] lg:w-[1500px] h-auto">
                        <img
                            src={logo}
                            alt="Praying Moms Logo"
                            className="w-full mix-blend-multiply"
                        />
                    </div>
                </div>

                {loading && (
                    <div className="absolute top-2/4 md:top-[68%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 border-4 border-background1 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </motion.div>
        </Dashboard>
    )
}

export default Welcome
