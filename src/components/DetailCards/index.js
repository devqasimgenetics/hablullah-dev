import React from 'react';

const QuranitemsList = ({ data }) => {
  const items = [
    {
      id: 1,
      englishName: "The Opening (Al-Fatiha)",
      arabicName: "الفاتحة",
      itemNumber: 1,
      location: "Meccan",
      verses: 7
    },
    {
      id: 2,
      englishName: "The Cow (Al-Baqarah)",
      arabicName: "البقرة",
      itemNumber: 2,
      location: "Meccan",
      verses: 286
    },
    {
      id: 3,
      englishName: "The Family Of Imran (Aal-E-Imran)",
      arabicName: "آل عمران",
      itemNumber: 3,
      location: "Meccan",
      verses: 200
    },
    {
      id: 4,
      englishName: "The Women (An-Nisa)",
      arabicName: "النساء",
      itemNumber: 4,
      location: "Meccan",
      verses: 176
    },
    {
      id: 5,
      englishName: "The Table Spread (Al-Ma'idah)",
      arabicName: "المائدة",
      itemNumber: 5,
      location: "Meccan",
      verses: 120
    },
    {
      id: 6,
      englishName: "The Cattle (Al-An'am)",
      arabicName: "الأنعام",
      itemNumber: 6,
      location: "Meccan",
      verses: 165
    },
    {
      id: 7,
      englishName: "The Heights (Al-A'raf)",
      arabicName: "الأعراف",
      itemNumber: 7,
      location: "Meccan",
      verses: 206
    },
    {
      id: 8,
      englishName: "The Spoils Of War (Al-Anfal)",
      arabicName: "الأنفال",
      itemNumber: 8,
      location: "Meccan",
      verses: 75
    },
    {
      id: 9,
      englishName: "The Repentance (At-Tawbah)",
      arabicName: "التوبة",
      itemNumber: 9,
      location: "Meccan",
      verses: 129
    },
    {
      id: 10,
      englishName: "Jonah (Yunus)",
      arabicName: "يونس",
      itemNumber: 10,
      location: "Meccan",
      verses: 109
    },
    {
      id: 11,
      englishName: "Hud (Hud)",
      arabicName: "هود",
      itemNumber: 11,
      location: "Meccan",
      verses: 123
    },
    {
      id: 12,
      englishName: "Joseph (Yusuf)",
      arabicName: "يوسف",
      itemNumber: 12,
      location: "Meccan",
      verses: 111
    },
    {
      id: 13,
      englishName: "The Thunder (Ar-Ra'd)",
      arabicName: "الرعد",
      itemNumber: 13,
      location: "Meccan",
      verses: 43
    },
    {
      id: 14,
      englishName: "Abraham (Ibrahim)",
      arabicName: "إبراهيم",
      itemNumber: 14,
      location: "Meccan",
      verses: 52
    }
  ];

  return (
    <div className="w-full mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#F1F4F8] cursor-pointer px-5 py-6"
            >
              <div className="flex justify-between items-start">
                {/* Left side - English content */}
                <div className="flex-1">
                  <h3 className="text-gray-900 font-medium text-sm mb-2">
                    {item.englishTransliteration}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium">item Number:</span>
                      <span className="ml-1">{item.hadithNumber}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="font-medium">{item.location}</span>
                      <span className="mx-1">|</span>
                      <span>{item.verses}</span>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Arabic content */}
                <div className="text-right ml-4 mt-auto">
                  <h3 className="text-gray-900 font-semibold text-lg mb-2 font-arabic" dir="rtl">
                    {item.arabic}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuranitemsList;