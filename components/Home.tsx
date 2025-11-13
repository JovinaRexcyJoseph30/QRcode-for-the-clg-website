
import React from 'react';
import { Department } from '../types';

interface HomeProps {
  departments: Department[];
  onSelectDepartment: (departmentId: string) => void;
}

const Home: React.FC<HomeProps> = ({ departments, onSelectDepartment }) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">Welcome to Our College</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
          Explore our academic departments and discover a world of innovation and learning.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {departments.map((dept) => (
          <div
            key={dept.id}
            onClick={() => onSelectDepartment(dept.id)}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
          >
            <div className="h-48 bg-indigo-500 flex items-center justify-center">
               <img src={`https://picsum.photos/seed/${dept.id}/400/200`} alt={`${dept.name} building`} className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                {dept.name}
              </h3>
              <p className="mt-2 text-slate-600">
                Headed by: {dept.head}
              </p>
              <p className="mt-1 text-slate-600">
                Students: {dept.studentCount}
              </p>
              <button className="mt-4 w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
