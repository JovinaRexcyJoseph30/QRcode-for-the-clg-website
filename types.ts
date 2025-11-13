
export interface StaffMember {
  id: number;
  name: string;
  photoUrl: string;
  designation: string;
  qualification: string;
  subjects: string[];
}

export interface Achievement {
  id: number;
  description: string;
  year: number;
}

export interface Note {
  id: number;
  title: string;
  pdfContent: string;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  head: string;
  studentCount: number;
  staff: StaffMember[];
  achievements: Achievement[];
  notes: Note[];
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
}
