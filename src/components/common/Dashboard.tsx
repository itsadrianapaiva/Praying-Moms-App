import { PropsWithChildren } from 'react'
import flowers from '../../assets/images/13.png'

interface DashboardProps extends PropsWithChildren<{}> {
    showWelcome: boolean // Pass this from Home screen
}
const Dashboard: React.FC<DashboardProps> = ({ children, showWelcome }) => {
    return (
        <>
            {/* Background image rendered only after showWelcome is false */}
            {!showWelcome && (
                <div className="relative">
                    <img
                        src={flowers}
                        alt="flowers"
                        className="absolute top-130 sm:top-110 md:top-90 lg:top-60 xl:top-10 object-contain mix-blend-multiply"
                    />
                </div>
            )}

            {/* Conditional Background Style for Welcome vs Home */}
            <div
                className={`container rounded-4xl relative z-10 p-5 transition-all duration-500 ${
                    showWelcome
                        ? "bg-background2 text-black" // **Solid Background for Welcome**
                        : "bg-background2/30 backdrop-blur-lg border-white/20" // **Glassmorphism for Home**
                }`}
            >
                {children}
            </div>
        </>
    )
}

export default Dashboard
