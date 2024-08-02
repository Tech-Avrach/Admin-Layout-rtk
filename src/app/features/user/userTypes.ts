// src/features/user/userTypes.ts
export interface User {
    id: number;
    name: string;
    // Add other fields as necessary
  }
  
  export interface UserState {
    users: User[];
  }
  