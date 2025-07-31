import { Mail } from "lucide-react";

export const Header = () => {
  return (
    <div className="text-center py-8">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Mail className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">
          Email Template Generator
        </h1>
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Create personalized partnership emails by selecting a template model and
        entering your target brand name.
      </p>
    </div>
  );
};
