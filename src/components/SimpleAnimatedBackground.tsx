import React from 'react';

export interface SimpleAnimatedBackgroundProps {
  speed?: number;
  color?: string;
}

const SimpleAnimatedBackground: React.FC<SimpleAnimatedBackgroundProps> = ({ 
  speed = 3, 
  color = '#f97316' 
}) => {
  const animationDuration = 20 / speed;
  
  const gradientStyle = {
    background: `linear-gradient(45deg, ${color}20, transparent, ${color}10, transparent, ${color}15)`,
    backgroundSize: '400% 400%',
    animation: `gradientShift ${animationDuration}s ease infinite`
  };

  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float0 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(90deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-35px) rotate(-90deg); }
        }
        
        @keyframes float4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(270deg); }
        }
        
        @keyframes float5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(-270deg); }
        }
      `}</style>
      
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Animated gradient background */}
        <div 
          className="absolute inset-0 w-full h-full opacity-20"
          style={gradientStyle}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-30"
              style={{
                backgroundColor: color,
                width: `${20 + i * 10}px`,
                height: `${20 + i * 10}px`,
                left: `${10 + i * 15}%`,
                top: `${10 + i * 12}%`,
                animation: `float${i} ${15 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SimpleAnimatedBackground;