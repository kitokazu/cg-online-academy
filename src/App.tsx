import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const Classes = lazy(() => import("./pages/Classes"));
const FreeMaterials = lazy(() => import("./pages/FreeMaterials"));
const Contact = lazy(() => import("./pages/Contact"));
const InstallMaya = lazy(() => import("./pages/InstallMaya"));
const StudentWorks = lazy(() => import("./pages/StudentWorks"));
const InstallZoom = lazy(() => import("./pages/InstallZoom"));
const Class0 = lazy(() => import("./pages/Class0"));
const Class0Lesson = lazy(() => import("./pages/Class0Lesson"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/student-works" element={<StudentWorks />} />
            <Route path="/free-materials" element={<FreeMaterials />} />
            <Route path="/free-materials/class-0" element={<Class0 />} />
            <Route path="/free-materials/class-0/:lessonId" element={<Class0Lesson />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/install/maya" element={<InstallMaya />} />
            <Route path="/install/zoom" element={<InstallZoom />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
