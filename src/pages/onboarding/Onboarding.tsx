
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome';
import EnterName from './EnterName';
import EnterAge from './EnterAge';
import GoalSelection from './GoalSelection';
import ReflectionTime from './ReflectionTime';
import Loading from './Loading';

const Onboarding: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/name" element={<EnterName />} />
      <Route path="/age" element={<EnterAge />} />
      <Route path="/goal" element={<GoalSelection />} />
      <Route path="/reflection" element={<ReflectionTime />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Onboarding;
