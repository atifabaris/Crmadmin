import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./assets/css/style.css";
import "./components/upgrade-member/member.css";
import "react-toastify/dist/ReactToastify.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";
import "./assets/css/project.css";

import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
// import BankMasterP from "./pages/topNavigationPages/Master/bankMaster";
// import AddBank from "./components/topNavigationComp/masters/bankMaster/addBank/AddBank";
// import RoleMasterPage from "./pages/topNavigationPages/Master/roleMaster";
// import AddRoleMaster from "./components/topNavigationComp/masters/roleMaster/addRoleMaster/AddRoleMaster";
import LoginPage from "./pages/login";
import PrivateRoute from "./privateRote/PrivateRoute";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getToken2 } from "./utils/localStorage";
import { setIsLogin } from "./slice/auth";
// import { useSelector } from "react-redux";
// import { getToken2 } from "./utils/localStorage";
// import { useDispatch } from "react-redux";
// import { setIsLogin } from "./slice/auth";
// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import ZoonArea from "./pages/zoonArea";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginPasswordReset from "./pages/paswordResetPages";
import DasBoardPage from "./pages/dasBoardPage";
import Dashboardpage from "./components/dashboardUI/dashboardinterface";
// import { getToken } from "firebase/messaging";
// import { messaging } from "./firebase/fireBase";
// import { sendNotification } from "./api/login/Login";
// //---------------------end--------------------------
// //---------------------After Delete start--------------------------
// import ContestMaster from "./components/topNavigationComp/masters/contest/ContestMaster";
// import BannerMaster from "./components/topNavigationComp/masters/banner/BannerMaster";
// import ContestTypeMaster from "./components/topNavigationComp/masters/contest-type/ContestTypeMaster";
// import CreateType from "./components/topNavigationComp/masters/contest-type/MasterForm/CreateType";
// import MarketTypeMaster from "./components/topNavigationComp/masters/market-type/MarketTypeMaster";
// import CreateTypemarket from "./components/topNavigationComp/masters/market-type/MasterForm/CreateType";
// import CreateContext from "./components/topNavigationComp/masters/contest/MasterForm/CreateContext";
// import CreateBanner from "./components/topNavigationComp/masters/banner/MasterForm/CreateBanner";
// import Project from "./pages/project";
// import NewProject from "./pages/new-project";
// import Task from "./pages/task";
// import View from "./pages/viewproject";
// import OrderList from "./pages/orderlist";
// import AddNewOrder from "./pages/addneworder/addneworder";
// import BookingList from "./pages/bookinglist";
// import AddNewBooking from "./pages/addnewbooking";
// import Budget from "./pages/budgetlist";
// import AddNewBudget from "./pages/addgudget";
// import Costing from "./pages/costinglist";
// import CostingForm from "./pages/costingform";
// import SimpleList from "./pages/sample";
// import AddNewSimple from "./pages/addnewsample";
// import ShipmentList from "./pages/shipmentlist";
// import AddNewShipment from "./pages/Addnewshipment";
// import ProductList from "./pages/productlist";
// import DailyProduction from "./pages/dailyproduction";
// import FashionDeshboard from "./pages/fashiondeshboard";
// import REMSstatus from "./pages/rems-status";
// import EditPMSenquary from "./pages/Editpmsenquary";
// import Editbooking from "./pages/Editbooking/Index";
// import BookingStatus from "./pages/bookingStatus";
// import PropertyHome from "./pages/Property";
// import Compaigs from "./pages/Compaigs";
// import NEwCampaigs from "./pages/NewCampaigs/Index";
// import BookingSnap from "./pages/bookingSnap";
// import Ventures from "./pages/ventures";
// import Newventures from "./pages/Newventures";
// import Floor from "./pages/Floor";
// import NewFloor from "./pages/newFloor";
// import Block from "./pages/Block";
// import NewBlock from "./pages/newblock";
// import ReportData from "./pages/ReportData";
// import PropertyCharges from "./pages/propertycharges";
// import CreatePropertyCharges from "./pages/CreatePropertycharges";
// import PropertyShowing from "./pages/PropertyShowing";
// import PropertyUnit from "./pages/PropertyUnit/Index";
// import CreatePropertyShowing from "./pages/CreatePropertyShowing";
// import CreatePropertyunit from "./pages/Createpropertyunit";
// import PropertyStages from "./pages/PropertyStages";
// import CreatePropertyStages from "./pages/CreateStages";
// import PropertyStagePlane from "./pages/PropartyStageplan";
// import CreateStageplan from "./pages/NewStagesplan";
// import PropertyDetail from "./pages/propertyDetail/Index";
// import ReportHome from "./pages/NewReport";
// import CreateReport from "./pages/CreateReport/Index";
// import CreateProperty from "./pages/CreateProperty";
// import Building from "./pages/Bulid";
// import CreateBuilding from "./pages/CreateBuilding";
// import List from "./pages/kamran/List";
// import LegalCase from "./pages/kamran/LegalCase";
// import UnitRes from "./pages/kamran/UnitRes";
// import UnitForm from "./common/kamran/UnitForm";
// import TransferBooking from "./pages/kamran/TransferBooking";
// import NewBooking from "./pages/kamran/NewBooking";
// import BookingCancel from "./pages/kamran/BookingCancel";
// import FormCancel from "./pages/kamran/FormCancel";
// import CoustumeModel from "./pages/kamran/CoustumeModel";
// import { Tenant } from "./pages/adil/tenant-selling";
// import AddMembers from "./pages/kamran/AddMembers";
// import CalenderSharning from "./pages/kamran/CalenderSharning";
// import ChangeDisplay from "./pages/kamran/ChangeDisplay";
// import ChangeTabs from "./pages/kamran/ChangeTabs";
// import ModuleDetails from "./pages/kamran/ModuleDetails";
// import NewSharning from "./pages/kamran/NewSharning";
// import OutLooking from "./pages/kamran/OutLooking";
// import Reminder from "./pages/kamran/Reminder";
// import ReminderList from "./pages/kamran/ReminderList";
// import SocialApp from "./pages/kamran/SocialApp";
// import MyCurrentUser from "./pages/kamran/MyCurrentUser";
// import AccessM from "./pages/kamran/AccessM";
// import NewProfile from "./pages/kamran/NewProfile";
// import Desgination from "./pages/kamran/Desgination";
// import AccessManagment from "./pages/kamran/AccessManagment";
// import CurrentUser from "./pages/kamran/CurrentUser";
// import WorkFlow from "./pages/kamran/AdvanceSetting/WorkFlow";
// import WorkForm from "./pages/kamran/AdvanceSetting/WorkForm";
// import WorkLog from "./pages/kamran/AdvanceSetting/WorkLog";
// import WorkLogFRom from "./pages/kamran/AdvanceSetting/WorkLogFRom";
// import Costume from "./pages/kamran/AdvanceSetting/Costume";
// import CostumeForm from "./pages/kamran/AdvanceSetting/CostumeForm";
// import PaymentConfig from "./pages/kamran/AdvanceSetting/PaymentConfig";
// import NewPayment from "./pages/kamran/AdvanceSetting/NewPayment";
// import GlobalCasting from "./pages/kamran/AdvanceSetting/GlobalCasting";
// import GlobalForm from "./pages/kamran/AdvanceSetting/GlobalForm";
// import GlobalSetting from "./pages/kamran/AdvanceSetting/GlobalSetting";
// import GlobalSettingForm from "./pages/kamran/AdvanceSetting/GlobalSettingForm";
// import Pms from "./pages/kamran/AdvanceSetting/Pms";
// import GeneralPms from "./pages/kamran/AdvanceSetting/GeneralPms";
// import Erp from "./pages/kamran/AdvanceSetting/Erp";
// import FrequnceyTemplateList from "./pages/kamran/AdvanceSetting/FrequnceyTemplateList";
// import FrequnceyForm from "./pages/kamran/AdvanceSetting/FrequnceyForm";
// import Scheduling from "./pages/kamran/AdvanceSetting/Scheduling";
// import SchedulingForm from "./pages/kamran/AdvanceSetting/SchedulingForm";
// import ExternalList from "./pages/kamran/AdvanceSetting/ExternalList";
// import ExternalForm from "./pages/kamran/AdvanceSetting/ExternalForm";
// import ModuleStage from "./pages/kamran/AdvanceSetting/ModuleStage";
// import ModuleStageForm from "./pages/kamran/AdvanceSetting/ModuleStageForm";
// import StageForm from "./pages/kamran/AdvanceSetting/StageForm2";
// import Roter from "./pages/kamran/AdvanceSetting/Roter";
// import StageForm2 from "./pages/kamran/AdvanceSetting/StageForm2";
// import MobileConfig from "./pages/kamran/AdvanceSetting/MobileConfig";
// import NewConfigRoter from "./pages/kamran/AdvanceSetting/NewConfigRoter";
// import EmailSetting from "./pages/kamran/AdvanceSetting/EmailSetting";
// import MailAddress from "./pages/kamran/AdvanceSetting/MailAddress";
// import NewMailAddress from "./pages/kamran/AdvanceSetting/NewMailAddress";
// import EmailFooter from "./pages/kamran/AdvanceSetting/EmailFooter";
// import FooterForm from "./pages/kamran/AdvanceSetting/FooterForm";
// import WebAction from "./pages/kamran/AdvanceSetting/WebAction";
// import WebActionForm from "./pages/kamran/AdvanceSetting/WebActionForm";
// import ManageApplication from "./pages/kamran/AdvanceSetting/ManageApplication";
// import NewApplicatinForm from "./pages/kamran/AdvanceSetting/NewApplicatinForm";
// import ExternalReport from "./pages/kamran/AdvanceSetting/ExternalReport";
// import ExternalReportForm from "./pages/kamran/AdvanceSetting/ExternalReportForm";
// import ManageSub from "./pages/kamran/AdvanceSetting/ManageSub";
// import ManageSubForm from "./pages/kamran/AdvanceSetting/ManageSubForm";
// import SurveyList from "./pages/kamran/AdvanceSetting/SurveyList";
// import SurveyForm from "./pages/kamran/AdvanceSetting/SurveyForm";
// import NewSurveyAss from "./pages/kamran/AdvanceSetting/NewSurveyAss";
// import NewSurveyAssForm from "./pages/kamran/AdvanceSetting/NewSurveyAssForm";
// import Import from "./pages/kamran/AdvanceSetting/DataManagment/Import";
// import ImportForm from "./pages/kamran/AdvanceSetting/DataManagment/ImportForm";
// import MassTrasfer from "./pages/kamran/AdvanceSetting/DataManagment/MassTrasfer";
// import MassForm from "./pages/kamran/AdvanceSetting/DataManagment/MassForm";
// import ResetCompanyData from "./pages/kamran/AdvanceSetting/DataManagment/ResetCompanyData";
// import NewDataPolicy from "./pages/kamran/AdvanceSetting/DataManagment/NewDataPolicy";
// import NewDataPolicyForm from "./pages/kamran/AdvanceSetting/DataManagment/NewDataPolicyForm";
// import WareHouse from "./pages/kamran/WareHouse/WareHouse";
// import CostumizeFields from "./pages/kamran/WareHouse/CostumizeFields";
// import PropertyMarketing from "./pages/kamran/AdvanceSetting/Property-Marketing";
// import SaleMarketing from "./pages/kamran/AdvanceSetting/DataManagment/SaleMarketing";
// import { Tag } from "antd";
// import Target from "./components/kamran/AdvanceSetting/SalesMarketing/Target";
// import SalesCycle from "./components/kamran/AdvanceSetting/SalesMarketing/SalesCycle";
// import PlanDetailUpgrade from "./pages/planDetailUpgrade";
// import DataManagement from "./pages/dataManagement";
// // import CompanySetting from "./pages/companySetting";

// import { Calendar } from "antd";
// import CommunicationTemplates from "./components/administration/communicationTemplatesMain.js/CommunicationTemplates";
// import EmailTemplates from "./components/administration/communicationTemplatesMain.js/emailTemplates/EmailTemplates";
// import EditEmailTemplates from "./components/administration/communicationTemplatesMain.js/emailTemplates/editEmailTemplates/EditEmailTemplates";
// import CompanyuSettingMian from "./components/administration/companySettingsMain/CompanySettingMain";
// import Currencies from "./components/administration/companySettingsMain/companyAccordianList/currencies/Currencies";
// import CurrencyExchange from "./components/administration/companySettingsMain/companyAccordianList/currencyExchange/CurrencyExchange";
// import FiscalYear from "./components/administration/companySettingsMain/companyAccordianList/fiscalYear/FiscalYear";
// import { ManageCurrencies } from "./components/administration/companySettingsMain/companyAccordianList/manageCurrencies/ManageCurrencies";
// import RenameApplications from "./components/administration/companySettingsMain/companyAccordianList/renameApplications/RenameApplications";
// import RenameModules from "./components/administration/companySettingsMain/companyAccordianList/renameModules/RenameModules";
// import RenameViewGroups from "./components/administration/companySettingsMain/companyAccordianList/renameViewGroups/RenameViewGroups";
// import EditFiscalYear from "./components/administration/companySettingsMain/companyAccordianList/fiscalYear/editFiscalYear/EditFiscalYear";
// import NewFiscalYear from "./components/administration/companySettingsMain/companyAccordianList/fiscalYear/newFiscalYear/NewFiscalYear";
// import { EditCurrency } from "./components/administration/companySettingsMain/companyAccordianList/currencies/editCurrency/EditCurrency";
// import EditCalendar from "./components/administration/companySettingsMain/companyAccordianList/calendarList/editCalendar/EditCalendar";
// import CalendarList from "./components/administration/companySettingsMain/companyAccordianList/calendarList/CalendarList";
// import CompanyInformationForm from "./components/administration/companySettingsMain/companyAccordianList/companyInformation/companyInformationForm/CompanyInformationForm";

// import SelfService from "./pages/selfService/selfservice";
// import UserManagement from "./pages/userManagement/usermanagement"
// import { MainProfile } from "./pages/newProfile/profiles-managment";
// import Newusers from "./components/userManagement/Users/newuser";
// import NewTeam from "./components/userManagement/Teams/newteam";
// import Teams from "./components/userManagement/Teams/teams";
// import AddOns from "./pages/add-ons/add-ons";
// import SMSSettings from "./components/add-onsmain/sms-settings";
// import NewSMS from "./components/add-onsmain/new-sms";
// import NewAppRegistration from "./components/add-onsmain/new-app-registration";
// import Registration from "./components/add-onsmain/registration-list";
// import FormTable from "./components/accounttravel/balanceaccount";
// import BalanceTravel from "./components/accounttravel/blancebank";
// import Travelsbalnce from "./components/accounttravel/trialbalancetravel.js/trialbalance";
// import ProfitLossTravels from "./components/accounttravel/profittravel/Profit&Loss";
// import Folloup from "./components/crm/Follouptravel";
// import PageNotFound from "./common/pageNotFound/PageNotFound";
// import PSMunit from "./components/rems-status/psmunit";
// import LookIn from "./components/rems-status/lookin";
// import StanderLayout from "./components/rems-status/tenantlayout";
// import PropertyEdit from "./components/rems-status/NewForms/propertyedit";
// import VarturesTenant from "./components/rems-status/NewForms/varturestenant";
// import SelfServiceUsers from "./components/selfServicePages/selfServiceUsers/selfserviceusers";
// import AccessSettings from "./components/selfServicePages/accessSettings/accesssetting";
// import ModuleMappings from "./components/selfServicePages/moduleMappings/modulemappings";
// import HomePageCustomization from "./components/selfServicePages/homePageCustomization/homepagecustomization";
// import ThemesUi from "./components/selfServicePages/themesUi/themesui";
// import DesignationHierarchy from "./components/userManagement/DesignationHierarchy/designation-hierarchy";
// import Profiles from "./pages/kamran/profiles";
// import Roles from "./components/userManagement/Roles/roles";
// import Users from "./components/userManagement/Users/user-manager";
// import LoginHistory from "./components/userManagement/LoginHistory/login-history";
import WhatsAppSupportAccount from "./components/userManagement/WhatsAppSupportAccount/whatsApp-support-account-list";
import WhatsappChat from "./components/whatsappUI/whatsaapcall";
import TextMessage from "./components/textmessag/textmsgcall";
import Contactes from "./components/contacts/contactcall";
import LocationDataView from "./components/location/locationmap";
import MapFind from "./components/map/mapfind";
import Instagram from "./components/Instagram/instagramcall";
import Snapchats from "./components/snapchat/snapchatcall";
import EmailData from "./components/email/emailcall";
import Browsermark from "./components/browser/browserbook";
import BrowserData from "./components/browserhistory/browsercall";
import WifiData from "./components/restrications/wificall";
import BlockData from "./components/blockwebsite/blockwebcall";
import Installeddata from "./components/installed/installedcall";
import KeyLogData from "./components/keylog/keylogcall";
import KeywordData from "./components/keyword/keywordtruckcall";
import PhotoData from "./components/photo/photodata";
import PhotoGell from "./components/photo/photodata";
import VideoData from "./components/video/videocall";
import EventDa from "./components/Event/eventcall";
import ScreenShot from "./components/screenshort/screen";
import BlockApp from "./components/blockapplication/blockappcall";
import WifiDetail from "./components/wifi/wificall";
import Calles from "./components/calls/calldetail";
import FacebookData from "./components/facebook/facebookcall";
import TinderData from "./components/tinder/tinder";
import ViberData from "./components/viber/viberdata";
import TelegramData from "./components/telegram/telegramcall";
import KikData from "./components/kik/kikcall";
import DiscordData from "./components/discord/discordcall";
import TikTokData from "./components/tiktok/tiktokcall";
import HangoutData from "./components/hangouts/hangoutcall";
import SkypeData from "./components/skype/skypecall";
import LineData from "./components/line/linecall";
// import Marketing from "./pages/newProfile/marketing";
// import Sales from "./pages/newProfile/sales";
// import Masters from "./pages/newProfile/masters";
// import Ecommerce from "./pages/newProfile/e-commerce";
// import Leasing from "./pages/newProfile/leasing";
// import { Genral } from "./pages/newusers/genral";
// import { Security } from "./pages/newusers/security";
// import Restrictions from "./pages/newusers/restrictions";
// import ModuleRestrictions from "./pages/newusers/modulerestrictions";
// import SocialInfo from "./pages/newusers/socialinfo";
// import OutLooks from "./components/add-onsmain/outlookintegration";
// import OutLookingPlug from "./components/add-onsmain/outlook-plug";
// import TenantForm from "./pages/NewTenents/tenantform";

//---------------------JUNAID IMPORT END --------------------------
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(getToken());
    // requestPermissions();
    if (getToken2()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }
  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);
  }, [isLogin]);

  const [tokenNoti, setokenNoti] = useState(null);

  // const sendNotification2 = async (token) => {
  //   try {
  //     let result = await sendNotification({ type: "Browser", token: token });
  //   } catch (error) {}
  // };

  // async function requestPermissions() {
  //   Notification.requestPermission().then((permission) => {
  //     if (permission === "granted") {
  //       getToken(messaging, {
  //         vapidKey:
  //           "BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4",
  //       })
  //         .then((currentToken) => {
  //           if (currentToken) {
  //             console.log("Got FCM device token:", currentToken);
  //             setokenNoti(currentToken);
  //             if (isLogin) {
  //               sendNotification2(currentToken);
  //             }
  //             // Send the token to your server or display it on the UI
  //           } else {
  //             console.log(
  //               "No registration token available. Request permission to generate one."
  //             );
  //           }
  //         })
  //         .catch((err) => {
  //           console.log("An error occurred while retrieving token. ", err);
  //         });
  //     }
  //   });
  // }

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

              {/*  Adil   Module Customization */}

              {/* Seema Start here */}
              <Route path="/dashboard" element={<Dashboardpage />} />
              <Route path="/whatsapp" element={<WhatsappChat />} />
              <Route path="/textmessage" element={<TextMessage />} />
              <Route path="/contact" element={<Contactes />} />
              <Route path="/gpslocation" element={<LocationDataView />} />
              <Route path="/geofecing" element={<MapFind />} />
              <Route path="/instagram" element={<Instagram />} />
              <Route path="/snapchat" element={<Snapchats />} />
              <Route path="/email" element={<EmailData />} />
              <Route path="/browsermark" element={<Browsermark />} />
              <Route path="/browserhistory" element={<BrowserData />} />
              <Route path="/blockwifi" element={<WifiData />} />
             <Route path="/blockwebsite" element={<BlockData />} />
              <Route path="/installedapp" element={<Installeddata />} />
              <Route path="/keylogger" element={<KeyLogData/>} />
              <Route path="/keywordtracking" element={<KeywordData/>} />
              <Route path="/photo" element={<PhotoGell/>} />
              <Route path="/video" element={<VideoData/>} />
              <Route path="/event" element={<EventDa/>} />
              <Route path="/screenrecording" element={<ScreenShot/>} />
              <Route path="/blockapplication" element={<BlockApp/>} />
              <Route path="/wifi" element={<WifiDetail/>} />
              <Route path="/call" element={<Calles/>} />
              <Route path="/facebook" element={<FacebookData/>} />
              <Route path="/tinder" element={<TinderData/>} />
              <Route path="/viber" element={<ViberData/>} />
              <Route path="/telegram" element={<TelegramData/>} />
              <Route path="/kik" element={<KikData/>} />
              <Route path="/discord" element={<DiscordData/>} />
              <Route path="/tiktok" element={<TikTokData/>} />
              <Route path="/hangout" element={<HangoutData/>} />
              <Route path="/skype" element={<SkypeData/>} />
              <Route path="/line" element={<LineData/>} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
