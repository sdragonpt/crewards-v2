import { useEffect, useState } from 'react';

interface MoneyCounterProps {
  targetAmount: number;
}

const MoneyCounter: React.FC<MoneyCounterProps> = ({ targetAmount }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Tempo total da animação em milissegundos
    const startAmount = 0;
    const endAmount = targetAmount;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const newAmount = Math.floor(startAmount + (endAmount - startAmount) * progress);
      setAmount(newAmount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [targetAmount]);

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Money Given Away</h2>
      <div className="text-3xl font-semibold text-green-600">
        ${amount.toLocaleString()}
      </div>
    </div>
  );
};

export default MoneyCounter;
