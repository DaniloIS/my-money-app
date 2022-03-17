import { combineReducers } from 'redux';
import DashboardReducer from '../dashboard/dashboardReducer';
import TabReducer from '../common/tab/tabReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycleReducer: BillingCycleReducer
})

export default rootReducer;