import { AppBuilder } from '@/components/AppBuilder';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Rocket } from 'lucide-react';

interface AppBuilderPageProps {
  onGoBack: () => void;
}

export function AppBuilderPage({ onGoBack }: AppBuilderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-12 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onGoBack}
                className="text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5 mr-1" />
                वापस
              </Button>
              <div className="h-6 w-px bg-gray-200"></div>
              <div>
                <h1 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-indigo-600" />
                  App Builder
                </h1>
                <p className="text-xs text-gray-500">अपने खुद के ऐप बनाएं और डिप्लॉय करें</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <AppBuilder />
      </main>
    </div>
  );
}
