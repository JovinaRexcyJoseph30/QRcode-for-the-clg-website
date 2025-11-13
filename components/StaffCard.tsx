
import React from 'react';
import { StaffMember } from '../types';

interface StaffCardProps {
  staff: StaffMember;
}

const StaffCard: React.FC<StaffCardProps> = ({ staff }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden text-center p-6 transition-shadow duration-300 hover:shadow-xl">
      <img
        src={staff.photoUrl}
        alt={staff.name}
        className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-indigo-200"
      />
      <h4 className="mt-4 text-xl font-bold text-slate-900">{staff.name}</h4>
      <p className="text-indigo-600 font-semibold">{staff.designation}</p>
      <p className="text-slate-500 text-sm mt-1">{staff.qualification}</p>
      <div className="mt-4 pt-4 border-t border-slate-200">
        <h5 className="font-semibold text-slate-700">Handling Subjects</h5>
        <ul className="mt-2 text-sm text-slate-600 space-y-1">
          {staff.subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StaffCard;
