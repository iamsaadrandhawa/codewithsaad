import { ElementType, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  threshold?: number;
}

const Reveal = ({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  threshold = 0.15,
}: RevealProps) => {
  const { ref, isVisible } = useReveal<HTMLElement>({ threshold });

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
