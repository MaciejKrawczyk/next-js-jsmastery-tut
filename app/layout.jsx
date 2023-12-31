import React from 'react';
import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "Promptopia",
    description: "Discover and share AI prompts"
}

const RootLayout = ({children}) => {
    return (
        <html lang={"en"}>
            <body>
                <Provider>
                    <div className={''}>
                        <div className={'gradient'}></div>
                    </div>

                    <main>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;