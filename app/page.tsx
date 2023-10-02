'use client';

import { useState } from 'react';
import TextGenerate from '@/components/TextGenerate';
import ImgGenerate from '@/components/ImgGenerate';

const Index = () => {
  const [submitResult, setSubmitResult] = useState('');

  return (
    <>
      <TextGenerate setSubmitResult={setSubmitResult} />
      <ImgGenerate submitResult={submitResult} />
    </>
  );
};

export default Index;
