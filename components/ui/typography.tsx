import React from 'react';

interface TypographyProps {
  className?: string;
  text: string;
}

export function Typography({ className, text }: TypographyProps) {
  return (
    <h1 className={`${className}`}>
      {text}
    </h1>
  );
}