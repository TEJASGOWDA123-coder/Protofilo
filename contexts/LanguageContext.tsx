"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "hi" | "es" | "fr" | "de" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, any> = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      viewProjects: "View Projects",
      available: "Available for freelance work",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Tejas Gowda",
      role: "Full-stack developer passionate about building exceptional digital experiences with modern technologies.",
      viewWork: "View My Work",
      getInTouch: "Get In Touch",
    },
    about: {
      title: "About Me",
      subtitle: "Passionate developer creating innovative solutions",
      myStory: "My Story",
      story: "I'm a passionate full-stack developer with expertise in Java, Python, and modern web technologies. I love turning complex problems into elegant solutions and building applications that make a difference.",
      whatIDo: "What I Do",
      services: [
        "Full-stack web development",
        "Machine learning solutions",
        "Database design & optimization",
        "API development & integration",
        "Responsive UI/UX design",
        "Performance optimization"
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies I work with daily",
      expertise: "Expertise Level"
    },
    experience: {
      title: "Experience & Education",
      subtitle: "My professional journey"
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Recent work I'm proud of",
      search: "Search Projects",
      searchPlaceholder: "Search by name, tech, or description...",
      filterByTech: "Filter by Tech",
      allTech: "All Technologies",
      sortBy: "Sort By",
      sortByName: "Name (A-Z)",
      sortByDate: "Date (Newest)",
      sortByTech: "Technology Count",
      showing: "Showing",
      of: "of",
      projects: "projects",
      live: "Live"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project",
      workTogether: "Let's Work Together",
      contactDesc: "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
      connectWithMe: "Connect With Me",
      github: "Check out my repositories",
      linkedin: "Let's connect professionally",
      year: "Year",
      category: "Category",
      source: "Source",
      webDevelopment: "Web Development",
      seeMore: "Want to see more?",
      seeMoreDesc: "Check out my other projects or get in touch to discuss collaboration opportunities.",
      viewAllProjects: "View All Projects",
      contactMe: "Contact Me"
    },
    footer: {
      copyright: "© {year} Tejas Gowda. All rights reserved.",
      backToTop: "Back to top"
    }
  },
  hi: {
    nav: {
      home: "होम",
      projects: "प्रोजेक्ट्स",
      skills: "कौशल",
      contact: "संपर्क",
      viewProjects: "प्रोजेक्ट्स देखें",
      available: "फ्रीलांस काम के लिए उपलब्ध हूं",
    },
    hero: {
      greeting: "नमस्ते, मैं हूं",
      name: "तेजस गौड़ा",
      role: "आधुनिक डिजिटल अनुभवों बनाने के लिए उत्साहुक फुल-स्टैक डेवलपर।",
      viewWork: "मेरा काम देखें",
      getInTouch: "संपर्क करें",
    },
    about: {
      title: "मेरे बारे में",
      subtitle: "नवाचारी डेवलपर जो नवाचारी समाधान बना रहे हैं",
      myStory: "मेरी कहानी",
      story: "मैं एक जुनून फुल-स्टैक डेवलपर हूं जिसमें जावा, पायथन, और आधुनिक वेब तकनीकों में विशेषजा है। मुझे जटिल समस्याओं को उत्तम समाधानों में बदलना और एप्लिकेशन बनाना पसंद है जो अंतर फर्क करते हैं।",
      whatIDo: "मैं क्या करता हूं",
      services: [
        "फुल-स्टैक वेब डेवलपमेंट",
        "मशीन लर्निं समाधान",
        "डेटाबेस डिज़ाइन और अनुकूलन",
        "API डेवलपमेंट और एकीकरण",
        "रेस्पॉन्सिव UI/UX डिज़ाइन",
        "प्रदर्शन अनुकूलन"
      ]
    },
    skills: {
      title: "तकनीकी कौशल",
      subtitle: "जो तकनीकों मैं रोज़ाना करता हूं",
      expertise: "विशेषजा स्तर"
    },
    experience: {
      title: "अनुभव और शिक्षा",
      subtitle: "मेरा पेशेवर यात्रा"
    },
    projects: {
      title: "विशेषत प्रोजेक्ट्स",
      subtitle: "जिन पर मुझे गर्व करता हूं",
      search: "प्रोजेक्ट्स खोजें",
      searchPlaceholder: "नाम, तकनीक, या विवरण से खोजें...",
      filterByTech: "तकनीक द्वारा फ़िल्टर करें",
      allTech: "सभी तकनीकें",
      sortBy: "इसके अनुसार क्रमबद्ध करें",
      sortByName: "नाम (अ-ज़े)",
      sortByDate: "तिथि (नवीनतम)",
      sortByTech: "तकनीकी संख्या",
      showing: "दिखा रहा है",
      of: "का",
      projects: "प्रोजेक्ट्स",
      live: "लाइव"
    },
    contact: {
      title: "संपर्क करें",
      subtitle: "आपके अगले प्रोजेक्ट पर चर्चा करें",
      workTogether: "आओ साथ काम करें",
      contactDesc: "मैं हमेशा नए प्रोजेक्ट्स और अवसरों के बारे में सुनना में रुचि हूं। चाहे आपके कोई सवाल हैं या सिर्फ है बस कहना चाहते हैं, बेझिझक संपर्क करें!",
      connectWithMe: "मेरे साथ जुड़ें",
      github: "मेरे रिपॉजिटरी देखें",
      linkedin: "पेशेवर तौर पर जुड़ें",
      year: "वर्ष",
      category: "श्रेणी",
      source: "स्रोत",
      webDevelopment: "वेब डेवलपमेंट",
      seeMore: "और देखना चाहते है?",
      seeMoreDesc: "मेरे अन्य प्रोजेक्ट्स देखें या सहयोगी के अवसरों पर चर्चा करने के लिए संपर्क करें।",
      viewAllProjects: "सभी प्रोजेक्ट्स देखें",
      contactMe: "मुझसे संपर्क करें"
    },
    footer: {
      copyright: "© {year} तेजस गौड़ा। सभी अधिकार सुरक्षित।",
      backToTop: "शीर्ष पर जाएं"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    const fallbackKeys = key.split(".");
    let fallbackValue: any = translations.en;
    for (const k of fallbackKeys) {
      fallbackValue = fallbackValue?.[k];
    }
    
    return value || fallbackValue || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export default LanguageProvider;
