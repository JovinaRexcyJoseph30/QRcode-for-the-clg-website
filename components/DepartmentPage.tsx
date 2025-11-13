
import React, { useState } from 'react';
import { Department, Note, StaffMember } from '../types';
import StaffCard from './StaffCard';
import { BookOpenIcon, TrophyIcon, UserGroupIcon, InformationCircleIcon } from './icons/Icons';


interface DepartmentPageProps {
  department: Department;
  openPdfViewer: (note: Note) => void;
}

type Tab = 'info' | 'staff' | 'achievements' | 'notes';

const DepartmentPage: React.FC<DepartmentPageProps> = ({ department, openPdfViewer }) => {
  const [activeTab, setActiveTab] = useState<Tab>('info');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'info':
        return (
          <div className="animate-fade-in p-6 bg-white rounded-lg shadow">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">About the Department</h3>
            <p className="text-slate-600 leading-relaxed">{department.description}</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
              <div className="bg-slate-100 p-4 rounded-lg"><strong>Head of Department:</strong> {department.head}</div>
              <div className="bg-slate-100 p-4 rounded-lg"><strong>Total Students:</strong> {department.studentCount}</div>
            </div>
          </div>
        );
      case 'staff':
        return (
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.staff.map((staffMember: StaffMember) => (
              <StaffCard key={staffMember.id} staff={staffMember} />
            ))}
          </div>
        );
      case 'achievements':
        return (
            <div className="animate-fade-in p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Achievements</h3>
                <ul className="space-y-4">
                    {department.achievements.map(ach => (
                        <li key={ach.id} className="flex items-start p-4 bg-slate-50 rounded-lg">
                             <TrophyIcon className="h-6 w-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-slate-700">{ach.description}</p>
                                <span className="text-sm text-slate-500">{ach.year}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
      case 'notes':
        return (
            <div className="animate-fade-in p-6 bg-white rounded-lg shadow">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Department Notes</h3>
                <div className="space-y-3">
                    {department.notes.map(note => (
                        <div key={note.id} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                            <p className="font-medium text-slate-700">{note.title}</p>
                            <button onClick={() => openPdfViewer(note)} className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm">
                                Open & Chat
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
  };
  
  // FIX: Changed JSX.Element to React.ReactElement to resolve "Cannot find namespace 'JSX'" error.
  const TabButton = ({ tabId, label, icon }: { tabId: Tab, label: string, icon: React.ReactElement }) => (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`flex items-center justify-center text-center px-4 py-3 font-medium text-sm rounded-t-lg transition-all duration-300 ${activeTab === tabId ? 'bg-white text-indigo-600 shadow-md' : 'bg-transparent text-slate-500 hover:bg-slate-200'}`}
    >
      {icon} <span className="ml-2">{label}</span>
    </button>
  );

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold text-slate-900">{department.name}</h2>
      </div>
      
      <div className="flex flex-wrap border-b border-slate-200 bg-slate-100 rounded-t-lg p-1">
          <TabButton tabId="info" label="Information" icon={<InformationCircleIcon className="h-5 w-5"/>} />
          <TabButton tabId="staff" label="Staff" icon={<UserGroupIcon className="h-5 w-5"/>} />
          <TabButton tabId="achievements" label="Achievements" icon={<TrophyIcon className="h-5 w-5"/>} />
          <TabButton tabId="notes" label="Notes" icon={<BookOpenIcon className="h-5 w-5"/>} />
      </div>

      <div className="mt-0 p-2 md:p-4 bg-white rounded-b-lg shadow-lg">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default DepartmentPage;
