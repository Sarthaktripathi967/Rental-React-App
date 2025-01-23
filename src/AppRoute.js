// import { lazy } from 'react';
import _ from 'lodash';
import Sections from "./components/sections";
import RentCalendarPortal from "./components/rentCalendarPortal";
// import WeeklyCalendar from "./components/weeklyCalendar";
import RentalDashboard from "./components/rentalDashboard";
const appRoutes = [
  {
    id: 'calendar',
    path: '/calendar',
    component: RentCalendarPortal,
  },
  {
    id: 'dashboard',
    path: '/dashboard',
    component: RentalDashboard,
  },
  {
    id: 'sections',
    path: '/sections',
    component: Sections,
  },
];
const uniqRoutes = _.uniqBy(appRoutes, 'path');
export default {
  uniqRoutes,
  appRoutes,
};