import { PropsWithChildren } from 'react'
import flowers from '../../assets/images/13.png'

const Dashboard: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <>
        <div className="relative">
                <img 
                    src={flowers} 
                    alt="flowers" 
                    className="absolute top-130 sm:top-110 md:top-90 lg:top-60 xl:top-10 object-contain mix-blend-multiply"
                />
            </div>
            
        <div className="rounded-4xl bg-background2/20 backdrop-blur-sm container relative z-10 border border-white/20 shadow-lg">{children}</div>
        </>
    )
}

export default Dashboard
