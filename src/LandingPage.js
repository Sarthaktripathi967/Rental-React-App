import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Card, Col, Row } from "antd";
import routes from './AppRoute';
const RoutedComponent = ({ route, rest }) => {
    const { component: Component } = route;
    return (
        <div>
            <Row>
                <Col span={24}>
                    <Card>
                        <Component {...rest} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
function LandingPage() {
    const root = document.getElementById('root');
    const dataRoute = root.getAttribute('data-route') === "<DATA_ROUTE_APP>" ? "" : root.getAttribute("data-route");
    return (
        <Suspense>
            <Routes>
                {routes.uniqRoutes.map((route) => (
                    <Route
                        key={route.id}
                        path={route.path}
                        element={<RoutedComponent route={route} />}
                    />
                ))}
                <Route path="*" element={<Navigate to={`/${dataRoute}`} />} />
            </Routes>
        </Suspense>
    );
}
export default LandingPage;