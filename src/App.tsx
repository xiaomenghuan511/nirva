
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Reflections from "./pages/Reflections";
import Dashboard from "./pages/Dashboard";
import DiaryDetail from "./pages/DiaryDetail";
import ReflectDetail from "./pages/ReflectDetail";
import NotFound from "./pages/NotFound";
import Me from "./pages/Me";
import UserProfile from "./pages/UserProfile";
import NirvaVoice from "./pages/NirvaVoice";
import Login from "./pages/Login";
import Onboarding from "./pages/onboarding/Onboarding";
import NotificationSettings from "./pages/NotificationSettings";
import PrivacyControls from "./pages/PrivacyControls";
import DataTrend from "./pages/DataTrend";
import SocialMapFull from "./pages/SocialMapFull";
import NecklaceDetails from "./pages/NecklaceDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/diary/:id" element={<DiaryDetail />} />
          <Route path="/reflect/:id" element={<ReflectDetail />} />
          <Route path="/me" element={<Me />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/nirva-voice" element={<NirvaVoice />} />
          <Route path="/notification-settings" element={<NotificationSettings />} />
          <Route path="/privacy-controls" element={<PrivacyControls />} />
          <Route path="/trends/:metricType" element={<DataTrend />} />
          <Route path="/social-map-full" element={<SocialMapFull />} />
          <Route path="/onboarding/*" element={<Onboarding />} />
          <Route path="/necklace-details" element={<NecklaceDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
