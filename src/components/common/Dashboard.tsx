import { PropsWithChildren } from 'react'

const Dashboard: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    return (
        <div className="rounded-4xl bg-background2 container relative z-10">{children}</div>
    )
}

export default Dashboard
