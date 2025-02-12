import logoDesktop from '../assets/images/logo1.png'
import logoMobile from '../assets/images/logo2.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'

const Welcome: React.FC<{ loading: boolean }> = ({
    loading,
}: {
    loading: boolean
}) => {
    const navigate = useNavigate()
    const [logoLoaded, setLogoLoaded] = useState(false)

    //Redirect to home after loading finishes
    useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                navigate('/')
            }, 500) //2s fade out before navigating
        }
    }, [navigate, loading])

    return (
        <>
            <motion.div
                className="relative flex flex-col items-center md:justify-center min-h-screen p-4 bg-background2 transition-colors duration-500"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}>
                <div className="relative flex flex-col items-center mt-25 lg:mt-0">
                    <h1 className="text-xl md:text-2xl md:mb-20 lg:mb-40 md:-mt-60">
                        Welcome to
                    </h1>
                    <div className="w-[250px] sm:w-[300px] md:w-[500px] lg:w-[1000px] relative">
                        <picture>
                            <source
                                srcSet={logoDesktop}
                                media="(min-width: 768px)"
                            />
                            <img
                                src={logoMobile}
                                alt="Praying Moms Logo"
                                className={`w-full mix-blend-multiply object-contain transition-opacity duration-700 md:absolute md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 md:left-1/2 ${
                                    logoLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                                onLoad={() => setLogoLoaded(true)}
                            />
                        </picture>
                    </div>
                </div>

                {loading && (
                    <div className="absolute top-2/4 md:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 border-4 border-background1 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}
            </motion.div>
        </>
    )
}

export default Welcome
