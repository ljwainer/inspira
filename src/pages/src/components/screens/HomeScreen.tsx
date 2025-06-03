import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface HomeScreenProps {
  onNavigate: (screen: 'meditation' | 'coloring' | 'soundscape' | 'settings') => void;
}

const HomeScreen = ({ onNavigate }: HomeScreenProps) => {
  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Background blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop')`,
          filter: 'blur(8px)'
        }}
      />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8 pt-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Serenity</h1>
          <p className="text-gray-600 font-light">Find your moment of peace</p>
        </div>

        {/* Main Start Button */}
        <div className="text-center mb-12">
          <Button 
            onClick={() => onNavigate('meditation')}
            className="w-48 h-16 text-xl font-semibold bg-gradient-to-r from-serenity-blue-dark to-serenity-lavender-dark text-gray-800 hover:scale-105 transition-all duration-300 rounded-full shadow-lg border-0"
          >
            Start Journey
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="space-y-4">
          <Card 
            className="p-6 bg-serenity-mint/40 backdrop-blur-sm border-0 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => onNavigate('meditation')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-serenity-sage rounded-full flex items-center justify-center">
                🧘‍♀️
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Meditations</h3>
                <p className="text-sm text-gray-600">Guided mindfulness sessions</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 bg-serenity-lavender/40 backdrop-blur-sm border-0 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => onNavigate('coloring')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-serenity-beige rounded-full flex items-center justify-center">
                🎨
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Coloring</h3>
                <p className="text-sm text-gray-600">Creative relaxation therapy</p>
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 bg-serenity-blue/40 backdrop-blur-sm border-0 rounded-3xl cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => onNavigate('soundscape')}
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-serenity-mint-dark rounded-full flex items-center justify-center">
                🎵
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Soundscapes</h3>
                <p className="text-sm text-gray-600">Peaceful ambient sounds</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Settings Button */}
        <div className="fixed bottom-6 right-6">
          <Button 
            onClick={() => onNavigate('settings')}
            className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm border-0 hover:bg-white/80 transition-all duration-300"
          >
            ⚙️
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
