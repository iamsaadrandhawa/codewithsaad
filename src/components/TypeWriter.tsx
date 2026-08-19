import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({ words, delay = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingDelay = isDeleting ? 50 : 100;
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      setCurrentText(prev => {
        if (!isDeleting) {
          if (prev === word) {
            setTimeout(() => setIsDeleting(true), delay);
            return prev;
          }
          return word.slice(0, prev.length + 1);
        }
        if (prev === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          return '';
        }
        return word.slice(0, prev.length - 1);
      });
    }, typingDelay);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, delay]);

  return <span className="text-accent-gradient">{currentText}<span className="animate-blink">|</span></span>;
};

export default TypeWriter;