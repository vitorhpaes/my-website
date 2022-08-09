import React from 'react'
import { BrowserRouter, Route, Routes as RoutesWrapper } from 'react-router-dom'

import Layout from '@app/components/Layout/Layout'

import PageControl from '@app/components/PageControl/PageControl'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <RoutesWrapper>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PageControl />} />
                </Route>
            </RoutesWrapper>
        </BrowserRouter>
    )
}

export default Router
