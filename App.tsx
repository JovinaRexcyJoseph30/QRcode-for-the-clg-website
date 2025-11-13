
import React, { useState, useCallback } from 'react';
import { Department, Note } from './types';
import { DEPARTMENTS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import DepartmentPage from './components/DepartmentPage';
import PdfViewer from './components/PdfViewer';

type View = 'home' | 'department' | 'pdf_viewer';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedDepartment, setSelectedDepartment] = useState<Department | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const navigateToHome = useCallback(() => {
    setCurrentView('home');
    setSelectedDepartment(null);
    setSelectedNote(null);
  }, []);

  const selectDepartment = useCallback((departmentId: string) => {
    const department = DEPARTMENTS.find(d => d.id === departmentId);
    if (department) {
      setSelectedDepartment(department);
      setCurrentView('department');
    }
  }, []);

  const openPdfViewer = useCallback((note: Note) => {
    setSelectedNote(note);
    setCurrentView('pdf_viewer');
  }, []);
  
  const renderContent = () => {
    switch (currentView) {
      case 'department':
        return selectedDepartment && <DepartmentPage department={selectedDepartment} openPdfViewer={openPdfViewer} />;
      case 'pdf_viewer':
        return selectedDepartment && selectedNote && <PdfViewer note={selectedNote} department={selectedDepartment} />;
      case 'home':
      default:
        return <Home departments={DEPARTMENTS} onSelectDepartment={selectDepartment} />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans text-slate-800">
      <Header onHomeClick={navigateToHome} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
