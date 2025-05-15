
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
import Onboarding from "./pages/onboarding/Onboarding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reflections" element={<Reflections />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/diary/:id" element={<DiaryDetail />} />
          <Route path="/reflect/:id" element={<ReflectDetail />} />
          <Route path="/me" element={<Me />} />
          <Route path="/onboarding/*" element={<Onboarding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
