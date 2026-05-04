import React from 'react'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="auth-layout bg-inherit">
            <main className="auth-layout__main">
                {children}
            </main>
        </div>
    )
}

export default Layout