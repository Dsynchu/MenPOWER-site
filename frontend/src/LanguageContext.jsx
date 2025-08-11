import { createContext, useContext, useState } from "react";

const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    jobs: "Jobs",
    contact: "Contact",
    israel: "Employment in Israel",
    companyProfile: "Company Profile",

    aboutIntro:
      "Konnect Talent HR Consultancy helps businesses find the right people, and individuals find their dream careers. We focus on quality hiring and sustainable growth for both clients and candidates.",
    whoWeAre: "Who We Are",
    whoWeAreDesc:
      "At KonnectHRC, we bridge the gap between businesses and talent...",
    ourVision: "Our Vision",
    ourVisionDesc:
      "To be the leading HR consultancy delivering excellence and creating lasting impact...",
    ourMission: "Our Mission",
    ourMissionDesc:
      "To support clients through business challenges by balancing labour market needs...",
    ourValues: "Our Core Values",
    ourValuesDesc:
      "Integrity, transparency, and commitment drive our HR solutions...",
    ceoMessage: "CEO Message",
    ceoMessageDesc:
      "At KonnectHRC, we believe people are the true foundation of success...",
  },
  ar: {
    home: "الرئيسية",
    about: "معلومات عنا",
    services: "الخدمات",
    jobs: "الوظائف",
    contact: "اتصل بنا",
    israel: "التوظيف في إسرائيل",
    companyProfile: "الملف التعريفي للشركة",

    aboutIntro:
      "تساعد شركة كونكت تالنت الشركات في العثور على الأشخاص المناسبين، والأفراد في العثور على وظائف أحلامهم...",
    whoWeAre: "من نحن",
    whoWeAreDesc:
      "في كونكت إتش آر سي، نسد الفجوة بين الشركات والمواهب...",
    ourVision: "رؤيتنا",
    ourVisionDesc:
      "أن نكون الشركة الرائدة في مجال الاستشارات...",
    ourMission: "مهمتنا",
    ourMissionDesc:
      "دعم العملاء خلال التحديات التجارية من خلال موازنة احتياجات سوق العمل...",
    ourValues: "قيمنا الأساسية",
    ourValuesDesc:
      "النزاهة والشفافية والالتزام تقود حلولنا...",
    ceoMessage: "رسالة المدير التنفيذي",
    ceoMessageDesc:
      "في كونكت إتش آر سي، نؤمن أن الناس هم الأساس الحقيقي للنجاح...",
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const toggleLanguage = (lng) => setLang(lng);
  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
