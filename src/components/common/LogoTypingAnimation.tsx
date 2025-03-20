import { useState, useEffect } from 'react';

const LogoTypingAnimation = () => {
  const [text, setText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const hasAnimationPlayed = sessionStorage.getItem('logoAnimationPlayed');
    
    if (hasAnimationPlayed) {
      setText('</J>');
      setIsComplete(true);
      return;
    }
    
    const finalText = '</J>';
    
    let currentIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const typeText = () => {
      if (currentIndex < finalText.length) {
        setText(finalText.substring(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeText, 150);
      } else {
        setIsComplete(true);
        sessionStorage.setItem('logoAnimationPlayed', 'true');
      }
    };
    
    timeoutId = setTimeout(typeText, 700);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  return (
    <span className="font-mono text-xl inline-block min-w-[40px] text-center">
      {text}
      <span className={`inline-block w-1 h-4 bg-[var(--accent)] ml-0.5 ${isComplete ? 'hidden' : 'animate-blink'}`}></span>
    </span>
  );
};

export default LogoTypingAnimation;