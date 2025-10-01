import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          hero18: {
            tattooandpiercing: "Tattoo and Piercing",
            welcome: "Welcome to our offical website!",
          },
          nav18: {
            about: "About",
            services: "Services",
            gallery: "Gallery",
            testimonials: "Testimonials",
            contact: "Contact",
            booking: "Booking",
          },
          about18: {
            heading: "About",
            content:
              "Our shop has been operating since 2017 in the town of Cegléd. Our current address is: Cegléd, Kossuth Ferenc Street 8. (Our shop is located in the Gyarmati courtyard!). Our guests are welcomed by a friendly, family-like atmosphere and spirit. Over the years, our customer base has steadily grown, and thanks to you, we have become a great team and family!",
          },
          services18: {
            heading: "Services",
            content:
              "In our studio, we offer a variety of services for those interested in tattoo and body modification. Whether you`re looking for a custom tattoo design or ready to get tattooed, I`ll work with you personally to bring your vision to life. Alongside tattoos, I specialize in professional piercings and microdermal implants, ensuring every step is safe and precise. We provide a clean, welcoming environment where you can feel comfortable throughout the process.",
          },
          gallery18: {
            heading: "Gallery",
            content:
              "Through our work, I`ve completed a variety of projects, and you can find many examples in the gallery section. Feel free to browse through some of the tattoos, piercings, and microdermals I`ve done. The gallery offers a sliding view, making it easy to explore the pieces. I regularly update the photos, so be sure to check back for fresh content and recent projects.",
          },
          testimonials18: {
            heading: "Testimonials",
            content:
              "We are happy to share the positive experiences of our customers. Every feedback highlights the care and expertise we put into every tattoo and piercing. Scroll through some of our satisfied customer reviews on Facebook and Google to see what they have to say about us. Click on the header to read more detailed reviews and find out why so many people choose us to decorate their bodies!",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/15bENQjYdv/",
                review:
                  "I can only recommend it. A good tattoo artist with skillful hands 🥰🥰😇 ",
                rating: "⭐⭐⭐⭐⭐",
              },

              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs/zoltan.png"),
                link: "https://maps.app.goo.gl/gNw5BxF8Pz6LiSXT9",
                review: "He works very well. I can only recommend!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Dia",
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "Very nice and precise work, friendly environment, with excellent professionals... Do you need more??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("../images/testimonialsImgs/edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review:
                  "Very nice place! Friendly environment. You are doing a precise job!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("../images/testimonialsImgs/helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "Thank you very much, professionalism, patience and kindness. I will definitely come back again.",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "Contact",
            content:
              "For inquiries or to book an appointment, feel free to reach out via email, give us a call, or contact us through Facebook. You can also visit us at our studio, where we're happy to answer any questions and discuss your ideas in person. We`re located at Gyarmati courtyard, and if you're driving, there`s free parking available just a short walk away on Páva Street. We look forward to hearing from you and helping you with your next tattoo or piercing!",
          },
          booking18: {
            heading: "Booking",
            content:
              "Ready to book your piercing or a free tattoo consultation? Just click the button below to secure your appointment on our Salonic page. You'll find time slots for both piercings and tattoo consultations. For tattoos, we offer free consultations to discuss ideas, review designs, and plan everything ahead. Piercing appointments can be booked directly through Salonic for personalized care. Have questions? Use the form to send us a quick message, and we’ll respond soon!",
          },
          formsubmit18: {
            formheader: "Send us a quick message!",
            nameplaceholder: "name",
            emailplaceholder: "email",
            messageplaceholder: "message",
            sendbtn: "Send",
            nameerror:
              "Name must be at least 3 characters long and only contain letters and spaces.",
            emailerror:
              "Invalid email address. Please enter a valid email address.",
            messageerror: "Message must be at least 20 characters long.",
            feedbackmodal18: {
              successmsgpart1: "Thank you for your message, ",
              successmsgpart2: ". I will get back to you shortly!",
              successent: "This has been successfully sent!",
              errorsent: "Failed to send.",
            },
          },
          settings18: {
            settings: "settings",
            theme: "Theme",
            dark: "Dark",
            light: "Light",
            lngs: "Languages",
            install: "Install",
          },
          pages: {
            gallery: "Gallery",
            gallerybtn: "Back",
          },
          pwa18: {
            header: "Add to Home screen",
            chromiumsinstallvail18: {
              description:
                "This site has app functionality. Install it as PWA (Progressive Web Application).",
              install: "Install",
            },
            chromiumsinstalledalreadymobile18: {
              description:
                "This PWA (Progressive Web Application) has already been installed.",
              search: "Please search for it in your apllication drawer.",
            },
            chromiumsinstalledalreadydesktop18: {
              description:
                "This PWA (Progressive Web Application) has already been installed.",
              open: "Please click the icon in the address bar to open.",
            },
            firefoxdesktop18: {
              description:
                "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
              extension: "Press the 'Extension' icon on the menu bar above",
              search:
                "Search and install 'Progressive Web Apps for Firefox' extension.",
              install: "Press the 'Install' icon in the address bar.",
            },
            safaridesktop18: {
              description:
                "This site has app functionality. Add it to your Dock for extensive experience and easy access.",
              share: "Press the 'Share' button on in the address bar.",
              add: "In the dropdown menu, choose 'Add to Dock'.",
            },
            safarimobile18: {
              description:
                "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
              share: "Press the 'Share' button on the menu bar below.",
              add: "Press 'Add to Home Screen'.",
            },
            firefoxoperamobile18: {
              description:
                "This site has app functionality. Add it to your Home Screen for extensive experience and easy access.",
              settings: "Press the 'Setting' button on the top bar above.",
              add: "Press 'Add to Home Screen'.",
            },
            notsupported18: {
              description:
                "Your browiser is currently supporting installation of PWAs (Progressive Web Applications).",
              try: " Please try to open the App via a Chromium based browiser such as Chrome or Edge.",
            },
          },
        },
      },
      hi: {
        translation: {
          hero18: {
            tattooandpiercing: "टैटू और पियर्सिंग",
            welcome: "हमारी आधिकारिक वेबसाइट पर आपका स्वागत है!",
          },
          nav18: {
            about: "हमारे बारे में",
            services: "सेवाएँ",
            gallery: "गैलरी",
            testimonials: "प्रशंसापत्र",
            contact: "संपर्क",
            booking: "बुकिंग",
          },
          about18: {
            heading: "हमारे बारे में",
            content:
              "हमारी दुकान 2017 से Cegléd शहर में संचालित हो रही है। हमारा वर्तमान पता है: Cegléd, Kossuth Ferenc स्ट्रीट 8. (हमारी दुकान Gyarmati आंगन में स्थित है!)। हमारे अतिथियों का स्वागत एक दोस्ताना, पारिवारिक माहौल में किया जाता है। वर्षों से हमारे ग्राहक लगातार बढ़ते गए हैं, और आपकी बदौलत हम एक शानदार टीम और परिवार बन गए हैं!",
          },
          services18: {
            heading: "सेवाएँ",
            content:
              "हमारे स्टूडियो में, हम टैटू और बॉडी मॉडिफिकेशन में रुचि रखने वालों के लिए विभिन्न सेवाएँ प्रदान करते हैं। चाहे आप एक कस्टम टैटू डिज़ाइन चाहते हों या टैटू बनवाने के लिए तैयार हों, मैं आपके विचार को साकार करने के लिए व्यक्तिगत रूप से आपके साथ काम करूंगा। टैटू के अलावा, मैं प्रोफेशनल पियर्सिंग और माइक्रोडर्मल इम्प्लांट्स में विशेषज्ञ हूँ, यह सुनिश्चित करते हुए कि हर कदम सुरक्षित और सटीक हो। हम एक साफ और स्वागतपूर्ण वातावरण प्रदान करते हैं जहाँ आप पूरी प्रक्रिया के दौरान आरामदायक महसूस करेंगे।",
          },
          gallery18: {
            heading: "गैलरी",
            content:
              "मेरे काम के दौरान मैंने कई तरह की परियोजनाएँ पूरी की हैं, जिनके उदाहरण आप गैलरी सेक्शन में देख सकते हैं। यहाँ आपको टैटू, पियर्सिंग और माइक्रोडर्मल्स के कई नमूने मिलेंगे। गैलरी स्लाइडिंग व्यू प्रदान करती है, जिससे देखना आसान हो जाता है। मैं नियमित रूप से नई तस्वीरें जोड़ता रहता हूँ, इसलिए ताज़ा सामग्री और हाल की परियोजनाओं के लिए बार-बार देखें।",
          },
          testimonials18: {
            heading: "प्रशंसापत्र",
            content:
              "हमें अपने ग्राहकों के सकारात्मक अनुभव साझा करने में खुशी होती है। हर प्रतिक्रिया हमारे द्वारा किए गए हर टैटू और पियर्सिंग में डाली गई देखभाल और विशेषज्ञता को दर्शाती है। हमारे कुछ संतुष्ट ग्राहकों की समीक्षाएँ Facebook और Google पर देखें। हेडर पर क्लिक करके अधिक विस्तृत समीक्षाएँ पढ़ें और जानें कि क्यों इतने लोग हमें अपने शरीर को सजाने के लिए चुनते हैं!",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/15bENQjYdv/",
                review:
                  "मैं केवल अनुशंसा कर सकती हूँ। एक कुशल टैटू आर्टिस्ट 🥰🥰😇",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs/zoltan.png"),
                link: "https://maps.app.goo.gl/gNw5BxF8Pz6LiSXT9",
                review: "यह बहुत अच्छा काम करते हैं। मैं केवल अनुशंसा कर सकता हूँ!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Dia",
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "बहुत सुंदर और सटीक काम, दोस्ताना वातावरण और उत्कृष्ट प्रोफेशनल्स... और क्या चाहिए??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("../images/testimonialsImgs/edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review:
                  "बहुत अच्छी जगह! दोस्ताना माहौल। आप सटीक काम कर रहे हैं!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("../images/testimonialsImgs/helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "बहुत धन्यवाद, प्रोफेशनलिज़्म, धैर्य और दयालुता। मैं निश्चित रूप से फिर आऊँगी।",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "संपर्क",
            content:
              "पूछताछ या अपॉइंटमेंट बुक करने के लिए, हमें ईमेल के माध्यम से संपर्क करें, कॉल करें या Facebook पर संदेश भेजें। आप सीधे हमारे स्टूडियो में भी आ सकते हैं, जहाँ हम आपके प्रश्नों का उत्तर देने और आपके विचारों पर चर्चा करने में खुशी महसूस करेंगे। हम Gyarmati आंगन में स्थित हैं, और यदि आप गाड़ी से आ रहे हैं तो Páva स्ट्रीट पर मुफ़्त पार्किंग उपलब्ध है। हमें आपकी अगली टैटू या पियर्सिंग में मदद करने की खुशी होगी!",
          },
          booking18: {
            heading: "बुकिंग",
            content:
              "क्या आप अपनी पियर्सिंग या फ्री टैटू कंसल्टेशन बुक करने के लिए तैयार हैं? नीचे दिए गए बटन पर क्लिक करके हमारी Salonic पेज पर अपना अपॉइंटमेंट सुरक्षित करें। आपको पियर्सिंग और टैटू कंसल्टेशन दोनों के लिए टाइम स्लॉट्स मिलेंगे। टैटू के लिए हम फ्री कंसल्टेशन प्रदान करते हैं ताकि विचारों पर चर्चा की जा सके, डिज़ाइन की समीक्षा की जा सके और सब कुछ पहले से योजना बनाई जा सके। पियर्सिंग अपॉइंटमेंट्स को सीधे Salonic के माध्यम से बुक किया जा सकता है। कोई सवाल है? हमें फॉर्म के माध्यम से एक त्वरित संदेश भेजें और हम जल्द ही जवाब देंगे!",
          },
          formsubmit18: {
            formheader: "हमें जल्दी से संदेश भेजें!",
            nameplaceholder: "नाम",
            emailplaceholder: "ईमेल",
            messageplaceholder: "संदेश",
            sendbtn: "भेजें",
            nameerror:
              "नाम कम से कम 3 अक्षरों का होना चाहिए और केवल अक्षर और स्पेस शामिल होना चाहिए।",
            emailerror:
              "अमान्य ईमेल पता। कृपया एक मान्य ईमेल दर्ज करें।",
            messageerror: "संदेश कम से कम 20 अक्षरों का होना चाहिए।",
            feedbackmodal18: {
              successmsgpart1: "आपके संदेश के लिए धन्यवाद, ",
              successmsgpart2: ". मैं जल्द ही आपसे संपर्क करूंगा!",
              successent: "यह सफलतापूर्वक भेजा गया है!",
              errorsent: "भेजने में विफल।",
            },
          },
          settings18: {
            settings: "सेटिंग्स",
            theme: "थीम",
            dark: "डार्क",
            light: "लाइट",
            lngs: "भाषाएँ",
            install: "इंस्टॉल",
          },
          pages: {
            gallery: "गैलरी",
            gallerybtn: "वापस",
          },
          pwa18: {
            header: "होम स्क्रीन में जोड़ें",
            chromiumsinstallvail18: {
              description:
                "इस साइट में ऐप की तरह फ़ंक्शन है। इसे PWA (प्रोग्रेसिव वेब एप्लिकेशन) के रूप में इंस्टॉल करें।",
              install: "इंस्टॉल",
            },
            chromiumsinstalledalreadymobile18: {
              description:
                "यह PWA (प्रोग्रेसिव वेब एप्लिकेशन) पहले से ही इंस्टॉल किया गया है।",
              search: "कृपया इसे अपने एप्लिकेशन ड्रॉअर में खोजें।",
            },
            chromiumsinstalledalreadydesktop18: {
              description:
                "यह PWA (प्रोग्रेसिव वेब एप्लिकेशन) पहले से ही इंस्टॉल किया गया है।",
              open: "कृपया इसे खोलने के लिए एड्रेस बार में आइकन पर क्लिक करें।",
            },
            firefoxdesktop18: {
              description:
                "इस साइट में ऐप की तरह फ़ंक्शन है। इसे अपने होम स्क्रीन में जोड़ें ताकि अनुभव और आसान हो।",
              extension: "ऊपर मेनू बार में 'Extension' आइकन दबाएँ",
              search:
                "'Progressive Web Apps for Firefox' एक्सटेंशन खोजें और इंस्टॉल करें।",
              install: "एड्रेस बार में 'Install' आइकन दबाएँ।",
            },
            safaridesktop18: {
              description:
                "इस साइट में ऐप की तरह फ़ंक्शन है। इसे अपने डॉक में जोड़ें ताकि आसान एक्सेस हो।",
              share: "एड्रेस बार में 'Share' बटन दबाएँ।",
              add: "ड्रॉपडाउन मेनू में 'Add to Dock' चुनें।",
            },
            safarimobile18: {
              description:
                "इस साइट में ऐप की तरह फ़ंक्शन है। इसे अपने होम स्क्रीन में जोड़ें ताकि आसान एक्सेस हो।",
              share: "नीचे मेनू बार में 'Share' बटन दबाएँ।",
              add: "'Add to Home Screen' दबाएँ।",
            },
            firefoxoperamobile18: {
              description:
                "इस साइट में ऐप की तरह फ़ंक्शन है। इसे अपने होम स्क्रीन में जोड़ें ताकि आसान एक्सेस हो।",
              settings: "ऊपर की बार में 'Setting' बटन दबाएँ।",
              add: "'Add to Home Screen' दबाएँ।",
            },
            notsupported18: {
              description:
                "आपका ब्राउज़र फिलहाल PWAs (प्रोग्रेसिव वेब एप्लिकेशन) इंस्टॉलेशन को सपोर्ट करता है।",
              try: " कृपया इसे Chrome या Edge जैसे Chromium आधारित ब्राउज़र में खोलने की कोशिश करें।",
            },
          },
        },
      },
      as: {
        translation: {
          hero18: {
            tattooandpiercing: "টাটু আৰু পিয়াৰ্ছিং",
            welcome: "আমাৰ চৰকাৰী ৱেবচাইটত আপোনালোকক স্বাগতম!",
          },
          nav18: {
            about: "আমাৰ বিষয়ে",
            services: "সেৱাসমূহ",
            gallery: "গেলাৰী",
            testimonials: "প্ৰশংসাপত্ৰ",
            contact: "যোগাযোগ",
            booking: "বুকিং",
          },
          about18: {
            heading: "আমাৰ বিষয়ে",
            content:
              "আমাৰ দোকান 2017 চনৰ পৰা Cegléd শহৰত চলি আহিছে। আমাৰ বৰ্তমানৰ ঠিকনা: Cegléd, Kossuth Ferenc ৰাস্তাৰ 8 নম্বৰ। (আমাৰ দোকান Gyarmati আঙণত অৱস্থিত!)। আমিবোৰ অতিথিসকলক এটা বন্ধু-সুলভ, পৰিয়াল-মুখী পৰিৱেশত স্বাগতম জনাও। এই কেই বছৰত আমাৰ গ্ৰাহক বেছি হৈছে আৰু আপোনালোকৰ বাবে আমি এটা দৰুন টিম আৰু পৰিয়াল হৈ উঠিছোঁ!",
          },
          services18: {
            heading: "সেৱাসমূহ",
            content:
              "আমাৰ ষ্টুডিঅ’ত টাটু আৰু দেহ-মডিফিকেশ্যনত আগ্ৰহী সকলৰ বাবে বিভিন্ন সেৱা দিয়া হয়। আপুনি যদি এটা কাষ্টম টাটু ডিজাইন বিচাৰে বা টাটু বনাবলৈ সাজু, মই ব্যক্তিগতভাৱে আপোনাৰ লগত কাম কৰিম। টাটুৰ লগতে, মই প্ৰফেচনেল পিয়াৰ্ছিং আৰু মাইক্র’ডাৰ্মেল ইমপ্লান্টত বিশেষজ্ঞ। আমি সুৰক্ষিত, পৰিষ্কাৰ আৰু স্নিগ্ধ পৰিৱেশত সেৱা প্ৰদান কৰোঁ।",
          },
          gallery18: {
            heading: "গেলাৰী",
            content:
              "মই বহুতো কাম সম্পূৰ্ণ কৰিছোঁ আৰু ইয়াৰ উদাহৰণ আপুনি গেলাৰী বিভাগত পাব। ইয়াত টাটু, পিয়াৰ্ছিং আৰু মাইক্র’ডাৰ্মেলৰ ফ’টো আছে। গেলাৰীত স্লাইডিং ভিউ আছে যাতে সহজে চাব পাৰি। মই নিয়মিতভাৱে নতুন ফ’টো আপডেট কৰোঁ, সেয়েহে নতুন কামৰ বাবে আকৌ আহি চাব।",
          },
          testimonials18: {
            heading: "প্ৰশংসাপত্ৰ",
            content:
              "আমাৰ গ্ৰাহকৰ ইতিবাচক অভিজ্ঞতা আপোনালোকৰ সৈতে ভাগ কৰি ল’বলৈ আমিবোৰ আনন্দিত। প্ৰত্যেকটোৱে আমাৰ যত্ন আৰু দক্ষতাৰ প্ৰমাণ দিয়ে। আপুনি Facebook আৰু Google ত আমাৰ সন্তুষ্ট গ্ৰাহকৰ মন্তব্য চাব পাৰিব। হেডাৰ ক্লিক কৰি বেছি মন্তব্য পঢ়িব আৰু জানিব কিয় বহু লোক আমাক বাচি লয়।",
          },
          testimonial18: {
            slides: [
              {
                name: "Bettina",
                src: require("../images/testimonialsImgs/bettina.png"),
                link: "https://www.facebook.com/share/p/15bENQjYdv/",
                review:
                  "মই কেৱল পৰামৰ্শ দিব পাৰিম। এটা দক্ষ টাটু শিল্পী 🥰🥰😇",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Zoltán",
                src: require("../images/testimonialsImgs/zoltan.png"),
                link: "https://maps.app.goo.gl/gNw5BxF8Pz6LiSXT9",
                review: "অতি ভাল কাম কৰে। মই কেৱল পৰামৰ্শ দিব পাৰিম!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Dia",
                src: require("../images/testimonialsImgs/dia.png"),
                link: "https://g.co/kgs/pVxRGH8",
                review:
                  "অতি সুন্দৰ আৰু সঠিক কাম, বন্ধু-সুলভ পৰিৱেশ, উৎকৃষ্ট প্ৰফেচনেলসকল... আৰু কি লাগে??? 😀",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Edina",
                src: require("../images/testimonialsImgs/edina.png"),
                link: "https://maps.app.goo.gl/MMRfjxfNWfrooxvv5",
                review:
                  "অতি সুন্দৰ ঠাই! বন্ধু-সুলভ পৰিৱেশ। আপুনি সঠিক কাম কৰে!",
                rating: "⭐⭐⭐⭐⭐",
              },
              {
                name: "Helga",
                src: require("../images/testimonialsImgs/helga.png"),
                link: "https://www.facebook.com/share/p/BEha5HXkhYsBEnch/",
                review:
                  "অতিশয় ধন্যবাদ, প্ৰফেচনেলিজম, ধৈৰ্য আৰু সদয়তা। মই নিশ্চয়তে আকৌ আহিম।",
                rating: "⭐⭐⭐⭐⭐",
              },
            ],
          },
          contact18: {
            heading: "যোগাযোগ",
            content:
              "প্ৰশ্ন থাকিলে বা এপইন্টমেণ্টৰ বাবে আমাক ইমেইল, ফোন বা Facebookত যোগাযোগ কৰক। আপুনি আমাৰ ষ্টুডিঅ’লৈও আহিব পাৰে, আমি আপোনাৰ চিন্তা-ধাৰা আলোচনা কৰিবলৈ সদায় প্ৰস্তুত। আমি Gyarmati আঙণত অৱস্থিত। গাড়ীৰে আহিলে Páva ৰাস্তাত বিনামূলীয়া পাৰ্কিং সুবিধা আছে। আপোনাক সহায় কৰিবলৈ আমি অপেক্ষা কৰিছোঁ!",
          },
          booking18: {
            heading: "বুকিং",
            content:
              "আপুনি পিয়াৰ্ছিং বা ফ্ৰী টাটু পৰামৰ্শ বুক কৰিব বিচাৰে নেকি? তলৰ বুটামত ক্লিক কৰি আমাৰ Salonic পেজত এপইন্টমেণ্ট লওক। ইয়াত পিয়াৰ্ছিং আৰু টাটু পৰামৰ্শ দুয়োৰে সময় স্লট পাব। টাটুৰ বাবে আমি ফ্ৰী পৰামৰ্শ দিওঁ যাতে চিন্তা-ধাৰা আলোচনা কৰিব পাৰি আৰু আগতীয়াকৈ পৰিকল্পনা কৰিব পাৰি। কোনো প্ৰশ্ন থাকিলে, ফৰ্মত মেচেজ পঠিয়াওক, আমি সোনকালে উত্তৰ দিম।",
          },
          formsubmit18: {
            formheader: "আমাক এটা সৰু মেচেজ পঠিয়াওক!",
            nameplaceholder: "নাম",
            emailplaceholder: "ইমেইল",
            messageplaceholder: "মেচেজ",
            sendbtn: "পঠাওক",
            nameerror:
              "নাম কমেও ৩টা অক্ষৰ হ'ব লাগিব আৰু কেৱল আখৰ আৰু স্পেচ থাকিব লাগিব।",
            emailerror:
              "অবৈধ ইমেইল। অনুগ্ৰহ কৰি এটা বৈধ ইমেইল দিয়ক।",
            messageerror: "মেচেজ কমেও ২০টা অক্ষৰ হ'ব লাগিব।",
            feedbackmodal18: {
              successmsgpart1: "আপোনাৰ মেচেজৰ বাবে ধন্যবাদ, ",
              successmsgpart2: ". মই সোনকালে যোগাযোগ কৰিম!",
              successent: "সফলতাৰে পঠিওৱা হৈছে!",
              errorsent: "পঠিয়াব পৰা নগ’ল।",
            },
          },
          settings18: {
            settings: "ছেটিংছ",
            theme: "থিম",
            dark: "ডাৰ্ক",
            light: "লাইট",
            lngs: "ভাষাসমূহ",
            install: "ইনষ্টল",
          },
          pages: {
            gallery: "গেলাৰী",
            gallerybtn: "উভতি যাওক",
          },
          pwa18: {
            header: "হোম স্ক্ৰীনত যোগ কৰক",
            chromiumsinstallvail18: {
              description:
                "এই ছাইটত এপৰ দৰে ফাংশ্যন আছে। ইয়াক PWA (প্ৰগ্ৰেচিভ ৱেব এপ্লিকেচন) হিচাপে ইনষ্টল কৰক।",
              install: "ইনষ্টল",
            },
            chromiumsinstalledalreadymobile18: {
              description:
                "এই PWA ইতিমধ্যে ইনষ্টল কৰা হৈছে।",
              search: "অনুগ্ৰহ কৰি আপোনাৰ এপ্লিকেচন ড্ৰয়াৰত চাওক।",
            },
            chromiumsinstalledalreadydesktop18: {
              description:
                "এই PWA ইতিমধ্যে ইনষ্টল কৰা হৈছে।",
              open: "এড্ৰেছ বাৰত আইকনত ক্লিক কৰি খোলক।",
            },
            firefoxdesktop18: {
              description:
                "এই ছাইটত এপৰ দৰে ফাংশ্যন আছে। ইয়াক আপোনাৰ হোম স্ক্ৰীনত যোগ কৰক যাতে সহজে ব্যৱহাৰ কৰিব পাৰি।",
              extension: "ওপৰৰ মেনু বাৰত 'Extension' আইকন চাপক।",
              search:
                "'Progressive Web Apps for Firefox' এক্সটেনশ্যন বিচাৰি ইনষ্টল কৰক।",
              install: "এড্ৰেছ বাৰত 'Install' আইকন চাপক।",
            },
            safaridesktop18: {
              description:
                "এই ছাইটত এপৰ দৰে ফাংশ্যন আছে। ইয়াক আপোনাৰ Dock-ত যোগ কৰক যাতে সহজে ব্যৱহাৰ কৰিব পাৰি।",
              share: "এড্ৰেছ বাৰত 'Share' বুটাম চাপক।",
              add: "মেনুত 'Add to Dock' বাচি লওক।",
            },
            safarimobile18: {
              description:
                "এই ছাইটত এপৰ দৰে ফাংশ্যন আছে। ইয়াক আপোনাৰ হোম স্ক্ৰীনত যোগ কৰক যাতে সহজে ব্যৱহাৰ কৰিব পাৰি।",
              share: "তলত মেনু বাৰত 'Share' বুটাম চাপক।",
              add: "'Add to Home Screen' বুটাম চাপক।",
            },
            firefoxoperamobile18: {
              description:
                "এই ছাইটত এপৰ দৰে ফাংশ্যন আছে। ইয়াক আপোনাৰ হোম স্ক্ৰীনত যোগ কৰক যাতে সহজে ব্যৱহাৰ কৰিব পাৰি।",
              settings: "ওপৰৰ বাৰত 'Setting' বুটাম চাপক।",
              add: "'Add to Home Screen' বুটাম চাপক।",
            },
            notsupported18: {
              description:
                "আপোনাৰ ব্ৰাউজাৰে এতিয়া PWAs (প্ৰগ্ৰেচিভ ৱেব এপ্লিকেচন) ইনষ্টল চাপোর্ট কৰে।",
              try: " অনুগ্ৰহ কৰি Chrome বা Edge যেনেকুৱা Chromium ভিত্তিক ব্ৰাউজাৰ ব্যৱহাৰ কৰক।",
            },
          },
        },
      }

    },
  });
