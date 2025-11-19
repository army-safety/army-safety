import { useEffect } from 'react';

export default function DevSignature() {
  useEffect(() => {
    // Console log for developers
    console.log('%c🔧 Developed by [Your Name]', 
      'color: #5865F2; font-size: 14px;');
  }, []);

  return (
    <>
      {/* Hidden signature */}
      <div className="sr-only">
        Developer: [Your Name] | Contact: [email]
      </div>
    </>
  )
}