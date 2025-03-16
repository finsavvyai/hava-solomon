import { Heart, Star, Music, Quote, Home, Baby, Calendar, Flower } from 'lucide-react';
import img1 from '../img_1.jpg';
import img2 from '../img_2.jpg';
import img3 from '../img_3.jpg';
import img4 from '../img_4.jpg';
import img5 from '../img_5.jpg';
import img6 from '../img_6.jpg';
import img7 from '../img_7.jpg';
import img8 from '../img_8.jpg';
import img9 from '../img_9.jpg';
import img10 from '../img_10.jpg';
import img11 from '../img_11.jpg';
import img12 from '../img_12.jpg';
import img13 from '../img_13.jpg';
import img14 from '../img_14.jpg';
import img15 from '../img_15.jpg';
import img16 from '../img_16.jpg';
import img17 from '../img_17.jpg';
import img18 from '../img_18.jpg';
import img19 from '../img_19.jpg';
import img20 from '../img_20.jpg';
import img21 from '../img_21.jpg';
import img22 from '../img_22.jpg';
import img23 from '../img_23.jpg';
import img24 from '../img_24.jpg';
import img25 from '../img_25.jpg';
import img26 from '../img_26.jpg';


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-screen relative flex items-center justify-center bg-fixed"
        style={{
          // Replace this URL with your Google Photos hero image URL
          backgroundImage: 'url("YOUR_GOOGLE_PHOTOS_URL/=w1200")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative text-center text-white z-10 space-y-6">
          <h1 className="text-7xl font-bold mb-4 font-serif">חווה סולומון</h1>
          <h1 className="text-7xl font-bold mb-4 font-serif">בת יוסף ומרגריטה</h1>        
          <p className="text-3xl font-light">8.1.2025 - 29.3.1949</p>
          <h1 className="text-2xl">נפטרה בה׳ בטבת תשפ״ה</h1>
          <p className="text-2xl">אמא, רעיה, וסבתא אהובה</p>
          <p className="text-2xl">אהבתך ומסירותך לכולנו</p>
          <p className="text-2xl">אור שיאיר את עינינו תמיד</p>
          <p className="text-2xl">זכרך לא ימוש מליבנו לעד</p>
          <div className="mt-8 animate-pulse">
            <Heart className="inline-block w-12 h-12 text-red-400" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Life Story Section */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">סיפור חייה</h2>
          <div className="space-y-12">
            <div className="flex items-start gap-6">
              <Home className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">שורשים ועלייה</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  חווה, בתם של מרגרט ויוסף, נולדה בטרנוון שברומניה, עלתה מרומניה לישראל בילדותה. את שנותיה הראשונות בארץ בילתה בקיבוץ, ולאחר מכן התבססה משפחתה בעכו, שם צמחה והתבגרה.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Heart className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">אהבה ומשפחה</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  בעכו פגשה את אהבת חייה, דוב, שהיה שכנה. ב-1970 נישאו, ובעכו נולד בנם הבכור, משה. המשפחה עברה לנצרת עילית, שם נולדו התאומים שחר ופזי ז"ל.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Baby className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">אמא מסורה</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  חווה הקדישה את חייה למשפחתה. כסייעת בגן ילדים, היא חינכה והעניקה אהבה לא רק לילדיה אלא גם לדורות של ילדים. במיוחד התמסרה לטיפול המסור בבנה פזי ז"ל, שנפטר ב-1982, ודאגה במסירות אין קץ לכל בני משפחתה.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Flower className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">מורשת של אהבה</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  חווה הייתה אישה חזקה שעבדה בכל עבודה אפשרית כדי לפרנס את משפחתה, מעולם לא התלוננה ותמיד דאגה לכולם. בשמונה שנותיה האחרונות התמודדה עם מחלת האלצהיימר, אך אהבתה ומסירותה למשפחה נשארו חזקים עד הרגע האחרון.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="inline-block w-12 h-12 text-gray-400 mb-8" />
          <blockquote className="text-3xl font-serif italic text-gray-800 leading-relaxed">
            "אמא יקרה, את האור שהאיר את דרכנו, החום שחימם את ליבנו, והאהבה שתישאר איתנו לנצח"
          </blockquote>
        </div>
      </div>

      {/* Memory Section */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">רגעים של זיכרון</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img3}
              alt="חווה בימים שמחים שלא נשכח" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg"> חווה בימים שמחים שלא נשכח</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <div className="w-full h-80 bg-gray-100 flex flex-col items-center justify-center p-4">
              <h3 className="text-xl font-bold mb-4">שיר לזכרה של חווה</h3>
              <iframe 
                src="https://suno.com/embed/aa060ab8-454c-4be0-b49f-9427cbbfcce3?autoplay=1" 
                width="100%" 
                height="80%" 
                frameBorder="0" 
                allow="autoplay" 
                className="rounded-lg shadow-md"
              >
                <a href="https://suno.com/song/aa060ab8-454c-4be0-b49f-9427cbbfcce3">Listen on Suno</a>
              </iframe>
              <p className="mt-2 text-sm text-gray-600">לזכרה של חווה - שיר מיוחד</p>
            </div>
          </div>
        
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img4}
              alt="חווה בזמנים טובים" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה בזמנים טובים </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img5}
              alt="חווה בחתונת הרצל ושולה ז״ל" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה בחתונת הרצל ושולה ז״ל</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img6}
              alt="חווה בחתונה עם דוב" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה בחתונה עם דוב </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img7}
              alt="חווה בנצרת עילית" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה בנצרת עילית </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img8}
              alt="חווה בחתונה משפחתית" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה בחתונה משפחתית </p>
            </div>
          </div>
          
        <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img
              // Replace with your first Google Photos URL
              src={img9}
              alt="חווה בזמנים טובים"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה בזמנים טובים </p>
            </div>
          
        </div>        
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your second Google Photos URL
              src={img10}
              alt="חווה עם אחותה מרתה" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה עם אחותה מרתה</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your third Google Photos URL
              src={img1}
              alt="חווה דב ודניאל" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה דב ודניאל</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img2}
              alt="חווה בזמנים טובים" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה בזמנים טובים </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img9}
              alt="חווה שלנו" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה שלנו  </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img11}
              alt="חווה והנכד דניאל" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה והנכד דניאל </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img12}
              alt="חווה ודוב ברכבל" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה ודוב ברכבל </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img13}
              alt="חווה דוב והנכד תומר" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה דוב והנכד תומר </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img14}
              alt="חווה דוב והנכד דניאל" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה דוב והנכד דניאל </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img15}
              alt="חווה דוב והנכדים" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה דוב והנכדים  </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img16}
              alt="חווה שלנו" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה שלנו </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img17}
              alt="חווה שלנו" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה שלנו </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img18}
              alt="חווה שלנו" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה שלנו </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img19}
              alt="חווה והילדים" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה והילדים </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img20}
              alt="חווה ואולגה" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה ואולגה </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img21}
              alt="חווה שלנו" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה שלנו </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img22}
              alt="חווה שלנו" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה שלנו </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img23}
              alt="חווה ודניאל" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה ודניאל </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img24}
              alt="חווה הבן שחר והנכד דניאל" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="absolute bottom-4 right-4 text-white text-lg">חווה הבן  שחר והנכד דניאל </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img25}
              alt="חווה והבן שחר" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה והבן שחר </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105">
            <img 
              // Replace with your first Google Photos URL
              src={img26}
              alt="חווה מנופפת לשלום" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-4 right-4 text-white text-lg">חווה מנופפת לשלום </p>
            </div>
          </div>
        </div>
      </div>

      {/* Star Section */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <Star className="inline-block w-12 h-12 text-yellow-400 mb-8" fill="currentColor" />
          <blockquote className="text-3xl font-serif italic">
            "הזיכרונות שהשארת בליבנו יאירו לנצח כמו כוכבים בשמי הלילה"
          </blockquote>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="text-center space-y-4">
          <p className="text-xl">נזכור ונאהב תמיד</p>
          <p className="text-sm text-gray-400">2025 © כל הזכויות שמורות לשחר סולומון</p>
        </div>
      </footer>
    </div>
  );
}