import { LanguageProvider } from "@/contexts/LanguageContext";
import { Portfolio } from "@/components/Portfolio";

const Index = () => {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
};

export default Index;
