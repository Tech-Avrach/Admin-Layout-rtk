// src/features/user/userAPI.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './userTypes';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchUsers = createAsyncThunk<User[], void>(
  'user/fetchUsers',
  async () => {
    const response = await axios.get<User[]>(`${API_URL}/users`);
    return response.data;
  }
);

export const fetchUserById = createAsyncThunk<User, number>(
  'user/fetchUserById',
  async (id) => {
    const response = await axios.get<User>(`${API_URL}/users/${id}`);
    return response.data;
  }
);

export const createUser = createAsyncThunk<User, User>(
  'user/createUser',
  async (newUser) => {
    const response = await axios.post<User>(`${API_URL}/users`, newUser);
    return response.data;
  }
);

export const updateUser = createAsyncThunk<User, User>(
  'user/updateUser',
  async (updatedUser) => {
    const response = await axios.put<User>(`${API_URL}/users/${updatedUser.id}`, updatedUser);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk<number, number>(
  'user/deleteUser',
  async (id) => {
    await axios.delete(`${API_URL}/users/${id}`);
    return id;
  }
);
