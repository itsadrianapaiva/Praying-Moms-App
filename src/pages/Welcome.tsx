import Dashboard from '../components/common/Dashboard'
import logoDesktop from '../assets/images/logo1.png'
import logoMobile from '../assets/images/logo2.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

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
                navigate('/')
            }, 500) //2s fade out before navigating
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
                <div className="relative flex flex-col items-center mt-25 md:mt-10">
                    <h1 className="text-xl md:text-2xl md:-mb-40">
                        Welcome to
                    </h1>
                    <div className="w-[350px] sm:w-[500px] md:w-[800px] lg:w-[1300px] h-auto">
                        <picture>
                            <source
                                srcSet={logoDesktop}
                                media="(min-width: 768px)"
                            />
                            <img
                                src={logoMobile}
                                alt="Praying Moms Logo"
                                className="w-full mix-blend-multiply"
                            />
                        </picture>
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
