import React from 'react'
import { BrowserRouter, Route, Routes as RoutesWrapper } from 'react-router-dom'

import PersonalPageLayout from '@app/components/PersonalPageLayout'
import PersonalPage from '@pages/PersonalPage'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/" element={<PersonalPageLayout />}>
                    <Route index element={<PersonalPage />} />
                </Route>
            </RoutesWrapper>
        </BrowserRouter>
    )
}

export default Router
