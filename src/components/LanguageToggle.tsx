import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/expanded-button';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1 p-1 bg-rust-50 rounded-lg">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? "rust" : "ghost"}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className="text-xs font-medium"
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.code.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};