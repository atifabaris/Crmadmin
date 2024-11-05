import { Navigate, Route, Routes } from "react-router-dom";

import "./assets/css/style.css";
import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import "./assets/css/project.css"

import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
import BankMasterP from "./pages/topNavigationPages/Master/bankMaster";
import AddBank from "./components/topNavigationComp/masters/bankMaster/addBank/AddBank";
import RoleMasterPage from "./pages/topNavigationPages/Master/roleMaster";
import AddRoleMaster from "./components/topNavigationComp/masters/roleMaster/addRoleMaster/AddRoleMaster";
import LoginPage from "./pages/login";
import PrivateRoute from "./privateRote/PrivateRoute";
import { useSelector } from "react-redux";
import { getToken2 } from "./utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "./slice/auth";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ZoonArea from "./pages/zoonArea";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginPasswordReset from "./pages/paswordResetPages";
import { getToken } from 'firebase/messaging';
import { messaging } from "./firebase/fireBase";
import { sendNotification } from "./api/login/Login";
import PageNotFound from "./common/pageNotFound/PageNotFound";
//---------------------end--------------------------
//---------------------After Delete start--------------------------
import ContestMaster from "./components/topNavigationComp/masters/contest/ContestMaster";
import BannerMaster from "./components/topNavigationComp/masters/banner/BannerMaster";
import ContestTypeMaster from "./components/topNavigationComp/masters/contest-type/ContestTypeMaster";
import CreateType from "./components/topNavigationComp/masters/contest-type/MasterForm/CreateType";
import MarketTypeMaster from "./components/topNavigationComp/masters/market-type/MarketTypeMaster";
import CreateTypemarket from "./components/topNavigationComp/masters/market-type/MasterForm/CreateType";
import CreateContext from "./components/topNavigationComp/masters/contest/MasterForm/CreateContext";
import CreateBanner from "./components/topNavigationComp/masters/banner/MasterForm/CreateBanner";
import Project from "./pages/project";
import NewProject from "./pages/new-project";
import Task from "./pages/task";
import View from "./pages/viewproject";
import OrderList from "./pages/orderlist";
import AddNewOrder from "./pages/addneworder/addneworder";
import BookingList from "./pages/bookinglist";
import AddNewBooking from "./pages/addnewbooking";
import Budget from "./pages/budgetlist";
import AddNewBudget from "./pages/addgudget";
import Costing from "./pages/costinglist";
import CostingForm from "./pages/costingform";
import SimpleList from "./pages/sample";
import AddNewSimple from "./pages/addnewsample";
import ShipmentList from "./pages/shipmentlist";
import AddNewShipment from "./pages/Addnewshipment";
import ProductList from "./pages/productlist";
import DailyProduction from "./pages/dailyproduction";
import FashionDeshboard from "./pages/fashiondeshboard";
import AccountLedger from "./pages/account-ledger";
import REMSstatus from "./pages/rems-status";
import EditPMSenquary from "./pages/Editpmsenquary";
import Editbooking from "./pages/Editbooking/Index";
import Report from "./pages/ReportData";
import BookingStatus from "./pages/bookingStatus";
import PropertyHome from "./pages/Property";
import Compaigs from "./pages/Compaigs";
import NEwCampaigs from "./pages/NewCampaigs/Index";
import BookingSnap from "./pages/bookingSnap";
import Ventures from "./pages/ventures";
import Newventures from "./pages/Newventures";
import Floor from "./pages/Floor";
import NewFloor from "./pages/newFloor";
import Block from "./pages/Block";
import NewBlock from "./pages/newblock";
import ReportData from "./pages/ReportData";
import PropertyCharges from "./pages/propertycharges";
import CreatePropertyCharges from "./pages/CreatePropertycharges";
import PropertyShowing from "./pages/PropertyShowing";
import PropertyUnit from "./pages/PropertyUnit/Index";
import CreatePropertyShowing from "./pages/CreatePropertyShowing";
import CreatePropertyunit from "./pages/Createpropertyunit";
import PropertyStages from "./pages/PropertyStages";
import CreatePropertyStages from "./pages/CreateStages";
import PropertyStagePlane from "./pages/PropartyStageplan";
import CreateStageplan from "./pages/NewStagesplan";
import PropertyDetail from "./pages/propertyDetail/Index";
import ReportHome from "./pages/NewReport";
import CreateReport from "./pages/CreateReport/Index";
import CreateProperty from "./pages/CreateProperty";
import Building from "./pages/Bulid";
import CreateBuilding from "./pages/CreateBuilding";
import List from "./pages/kamran/List";
import LegalCase from "./pages/kamran/LegalCase";
import UnitRes from "./pages/kamran/UnitRes";
import UnitForm from "./common/kamran/UnitForm";
import TransferBooking from "./pages/kamran/TransferBooking";
import NewBooking from "./pages/kamran/NewBooking";
import BookingCancel from "./pages/kamran/BookingCancel";
import FormCancel from "./pages/kamran/FormCancel";
import CoustumeModel from "./pages/kamran/CoustumeModel";
import { Tenant } from "./pages/adil/Tenant";
import NewTenantform from "./pages/NewTenantform/NewTenant";
import ModuleDetails from "./pages/kamran/ModuleDetails";
import ChangeTabs from "./pages/kamran/ChangeTabs";
import AccessM from "./pages/kamran/AccessM";
import ChangeDisplay from "./pages/kamran/ChangeDisplay";
import NewSharning from "./pages/kamran/NewSharning";
import CalenderSharning from "./pages/kamran/CalenderSharning";
import AddMembers from "./pages/kamran/AddMembers";
import Reminder from "./pages/kamran/Reminder";
import ReminderList from "./pages/kamran/ReminderList";
import AppRegistration from "./pages/kamran/AppRegistration";
import DataPolicy from "./pages/kamran/DataPolicy";
import OutLooking from "./pages/kamran/OutLooking";
import SocialApp from "./pages/kamran/SocialApp";

//---------------------JUNAID IMPORT END --------------------------
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    // console.log(getToken());
    requestPermissions()
    if (getToken2()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }
  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);

  }, [isLogin]);




  const [tokenNoti, setokenNoti] = useState(null);

  const sendNotification2 = async (token) => {
    try {
      let result = await sendNotification({ type: 'Browser', token: token });

    } catch (error) {

    }
  };

  async function requestPermissions() {


    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4' }).then((currentToken) => {
          if (currentToken) {
            console.log('Got FCM device token:', currentToken);
            setokenNoti(currentToken)
            if (isLogin) {
              sendNotification2(currentToken)

            }
            // Send the token to your server or display it on the UI
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
      }
    })



  }

  return (
    <>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to={"/loginPage"} />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<LoginPasswordReset />} />
            <Route path="*" element={<Navigate to="/loginPage" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to={"/admin"} />} />
            <Route
              path=""
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="admin" element={<DasBoardRight />} />
              <Route path="bank-master" element={<BankMasterP />} />
              <Route path="zoon_area" element={<ZoonArea />} />
              <Route path="add-bank" element={<AddBank />} />
              <Route path="update-bank/:id" element={<AddBank />} />
              <Route path="role-master" element={<RoleMasterPage />} />
              <Route path="add-role-master" element={<AddRoleMaster />} />
              <Route
                path="update-role-master/:id"
                element={<AddRoleMaster />}
              />

             

              <Route path="contest" element={<ContestMaster />} />
              <Route path="create-contest" element={<CreateContext />} />
              <Route path="create-contest/:id" element={<CreateContext />} />

              <Route path="contest-type" element={<ContestTypeMaster />} />
              <Route path="create-contest-type" element={<CreateType />} />
              <Route path="create-contest-type/:id" element={<CreateType />} />

              <Route path="market-type" element={<MarketTypeMaster />} />
              <Route path="create-market-type" element={<CreateTypemarket />} />
              <Route path="create-market-type/:id" element={<CreateTypemarket />} />

              <Route path="banner-master" element={<BannerMaster />} />
              <Route path="create-banner" element={<CreateBanner />} />
              <Route path="create-banner/:id" element={<CreateBanner />} />


              {/* .........................project.......................... */}
              <Route path=" " element={<Project />} />
              <Route path="project/newproject" element={<NewProject />} />


              {/* .............................task............................ */}
              <Route path="task" element={<Task />} />
              <Route path="view" element={<View />} />


              {/* .............................order.................................. */}
              <Route path="orderlist" element={<OrderList/>} />
              <Route path="addneworder" element={<AddNewOrder/>} />
              <Route path="bookinglist" element={<BookingList/>} />
              <Route path="addnewbooking" element={<AddNewBooking/>} />

              <Route path="budgetlist" element={<Budget />} />
              <Route path="addnewbudget" element={<AddNewBudget />} />
              <Route path="costinglist" element={<Costing />} />
              <Route path="costingform" element={<CostingForm />} />
              <Route path="samplelist" element={<SimpleList />} />
              <Route path="addnewsample" element={<AddNewSimple />} />  
              <Route path="shipment" element={<ShipmentList />} />  
              <Route path="newshipment" element={<AddNewShipment />} />  
              <Route path="productlist" element={<ProductList />} />  
              <Route path="dailyproduction" element={<DailyProduction />} />  

              <Route path="rems-status" element={<REMSstatus />} />  
              <Route path="editpms" element={<EditPMSenquary />} />  
              <Route path="editbooking" element={<Editbooking />} />  
              <Route path="reportdate" element={<ReportData />} />  
              <Route path="bookingstatus" element={<BookingStatus />} />  
              <Route path="property" element={<PropertyHome />} />  
              <Route path="newproperty" element={<CreateProperty />} />  
              <Route path="compaigs" element={<Compaigs />} />  
              <Route path="newcompaigs" element={<NEwCampaigs />} />  
              <Route path="bookingsnap" element={<BookingSnap />} />  
              <Route path="ventures" element={<Ventures />} />  
              <Route path="newventures" element={<Newventures />} />
              <Route path="floor" element={<Floor />} />
              <Route path="newfloor" element={<NewFloor />} />
              <Route path="block" element={<Block />} />
              <Route path="newblock" element={<NewBlock />} />


              <Route path="propertycharges" element={<PropertyCharges />} />
              <Route path="newpropertycharges" element={<CreatePropertyCharges />} />
              <Route path="propertyshowing" element={<PropertyShowing />} />
              <Route path="newpropertyshowing" element={<CreatePropertyShowing />} />
              <Route path="propertyunit" element={<PropertyUnit />} />
              <Route path="newpropertyunit" element={<CreatePropertyunit />} />
              <Route path="propertystages" element={<PropertyStages />} />
              <Route path="newpropertystages" element={<CreatePropertyStages />} />
              <Route path="propertystagesplane" element={<PropertyStagePlane />} />
              <Route path="newpropertystagesplane" element={<CreateStageplan />} />
              
              <Route path="propertydetail" element={<PropertyDetail />} />
              <Route path="reporthome" element={<ReportHome />} />
              <Route path="newreport" element={<CreateReport />} />
              <Route path="building" element={<Building />} />
              <Route path="newbuilding" element={<CreateBuilding />} />
                 



              {/* ...............Account..................... */}
              <Route path="fashiondeshboard" element={<FashionDeshboard />} />  




              {/* -----------------junaid"s Route Start End-w-------- */}
              {/* -----------------junaid"s Route Start End-w-------- */}

              
            
              {/*------------Kamran-----------*/}
              <Route path="list" element={<List />} />
              <Route path="legalcase" element={<LegalCase />} />
              <Route path="unitres" element={<UnitRes />} />
              <Route path= "unitform" element={<UnitForm/>} />
              <Route path= "transferbooking" element={<TransferBooking/>} />
              <Route path= "newbooking" element={<NewBooking/>} />
              <Route path= "bookingcancel" element={<BookingCancel/>} />
              <Route path= "formcancel" element={<FormCancel/>} />
              <Route path= "coustumemodel" element={<CoustumeModel/>} />
              <Route path= "moduledetails" element={<ModuleDetails/>} />
              <Route path= "changetabs" element={<ChangeTabs/>} />
              <Route path= "accessm" element={<AccessM/>} />
              <Route path= "changedisplay" element={<ChangeDisplay/>} />
              <Route path= "newsharning" element={<NewSharning/>} />
              <Route path= "calendersharning" element={<CalenderSharning/>} />
              <Route path= "addmembers" element={<AddMembers/>} />
              <Route path= "reminder" element={<Reminder/>} />
              <Route path= "reminderlist" element={<ReminderList/>} />
              <Route path= "outlooking" element={<OutLooking/>} />
              <Route path= "socialapp" element={<SocialApp/>} />
             {/* <Route path= "appregistration" element={<AppRegistration/>} />
              <Route path= "datapolicy" element={<DataPolicy/>} />*/}
             {/* Adil start here */ }
             <Route path="tenant" element={<Tenant/>} />
             <Route path="newTenant" element={<NewTenantform/>} />
             
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
