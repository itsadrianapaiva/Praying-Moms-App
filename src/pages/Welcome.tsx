import Dashboard from '../components/common/Dashboard'
import logo from '../assets/images/logo1.png'

// Add a Fade-In Animation to the Welcome Page
//Use Framer Motion (motion.div) to animate the page.
//Set an opacity animation from 0 to 1.
//Implement a Loading Animation Before Transition
//After the Welcome animation, show a loading spinner before navigating to /home.
//Use setTimeout to handle the delay before transitioning.

const Welcome: React.FC = () => {
    return (
        <Dashboard>
            <div className="flex flex-col items-center justify-center min-h-screen my-auto">
            <h1 className="text-2xl -mb-30">
                    Welcome to
                </h1>
                <img
                    src={logo}
                    alt="Praying Moms Logo"
                    className="w-480 h-auto mix-blend-multiply"
                />
            </div>
        </Dashboard>
    )
}

export default Welcome
