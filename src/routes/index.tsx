import React from 'react'
import { BrowserRouter, Route, Routes as RoutesWrapper } from 'react-router-dom'

import Layout from '@app/components/Layout/Layout'

import HomePage from '@app/pages/HomePage'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>
            </RoutesWrapper>
        </BrowserRouter>
    )
}

export default Router
