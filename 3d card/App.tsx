import { BusinessCard } from './components/BusinessCard';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            3D Business Card
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
            Hover over the card to see the 3D flip animation and reveal contact information
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Standard business card size: 3.5" × 2" (89mm × 51mm)
          </p>
        </div>
        
        <div className="flex justify-center">
          <BusinessCard />
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto space-y-2">
          <p>This interactive business card showcases realistic proportions and modern design aesthetics.</p>
          <p className="text-xs">Inspired by premium credit card design with sleek gradients and minimalist typography.</p>
        </div>
      </div>
    </div>
  );
}