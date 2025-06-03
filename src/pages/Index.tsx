import { useState } from 'react';
import HomeScreen from '@/components/screens/HomeScreen';
import MeditationScreen from '@/components/screens/MeditationScreen';
import ColoringScreen from '@/components/screens/ColoringScreen';
import SoundscapeScreen from '@/components/screens/SoundscapeScreen';
import SettingsScreen from '@/components/screens/SettingsScreen';

type Screen = 'home' | 'meditation' | 'coloring' | 'soundscape' | 'settings';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const navigateBack = () => {
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigateToScreen} />;
      case 'meditation':
        return <MeditationScreen onBack={navigateBack} />;
      case 'coloring':
        return <ColoringScreen onBack={navigateBack} />;
      case 'soundscape':
        return <SoundscapeScreen onBack={navigateBack} />;
      case 'settings':
        return <SettingsScreen onBack={navigateBack} />;
      default:
        return <HomeScreen onNavigate={navigateToScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-serenity-blue via-serenity-lavender to-serenity-mint font-poppins">
      <div className="max-w-md mx-auto bg-white/20 backdrop-blur-lg min-h-screen shadow-xl">
        {renderScreen()}
      </div>
    </div>
  );
};

export default Index;
