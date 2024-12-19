type Language = 'React' | 'Javascript' | 'Python' | 'Swift' | 'Java' | 'HTML/CSS' | 'PHP';

const LanguageDot = ({ language }: { language: Language }) => {
  const colors: Record<Language, string> = {
    'React': 'bg-blue-500',
    'Javascript': 'bg-yellow-400',
    'Python': 'bg-blue-600',
    'Swift': 'bg-orange-500',
    'Java': 'bg-red-500',
    'HTML/CSS': 'bg-purple-500',
    'PHP': 'bg-indigo-500'
  };

  return (
    <span className="flex items-center gap-2">
      <span>{language}</span>
      <div className={`w-2 h-2 rounded-full ${colors[language] || 'bg-gray-400'}`} />
    </span>
  );
};

export default LanguageDot;