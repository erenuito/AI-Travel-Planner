
# 🧭 AI Travel Planner

AI Travel Planner, seyahat planlamasını kolaylaştırmak için yapay zekâ destekli öneriler sunan bir mobil uygulamadır. Kullanıcıların seyahat tercihlerini analiz ederek kişiselleştirilmiş seyahat planları oluşturur.

## 🚀 Özellikler

- **Kişiselleştirilmiş Seyahat Planları**: Kullanıcının tercihleri doğrultusunda özelleştirilmiş seyahat rotaları ve aktiviteler önerir.
- **Yapay Zekâ Destekli Öneriler**: OpenAI gibi büyük dil modellerini kullanarak seyahat önerileri sunar.
- **Kullanıcı Dostu Arayüz**: React Native ve Expo kullanılarak geliştirilen modern ve sezgisel bir kullanıcı arayüzü.
- **Gerçek Zamanlı Veriler**: Firebase ile entegre edilerek gerçek zamanlı veri yönetimi sağlar.

## 🛠️ Teknolojiler

- **Frontend**: React Native, Expo
- **Backend**: Firebase (Authentication, Firestore)
- **Yapay Zekâ**: OpenAI API
- **Harita ve Konum Hizmetleri**: Google Maps API

## 📦 Kurulum

```bash
# Depoyu klonlayın
git clone https://github.com/erenuito/AI-Travel-Planner.git
cd AI-Travel-Planner

# Bağımlılıkları yükleyin
npm install
```

### 🔧 Firebase Yapılandırması

1. [Firebase Console](https://console.firebase.google.com/) üzerinden bir proje oluşturun.
2. Web uygulaması ekleyin ve yapılandırma bilgilerini alın.
3. Proje dizininde `firebaseConfig.js` adında bir dosya oluşturun ve aşağıdaki yapıyı kullanarak bilgilerinizi ekleyin:

```javascript
// firebaseConfig.js
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### ▶️ Uygulamayı Başlatma

```bash
npx expo start
```

- QR kodu Expo Go uygulaması ile tarayarak test edebilirsiniz.

## 📁 Proje Yapısı

```
AI-Travel-Planner/
├── app/            # Ekranlar ve uygulama yapısı
├── assets/         # Görseller ve statik dosyalar
├── components/     # Yeniden kullanılabilir bileşenler
├── configs/        # Yapılandırma dosyaları
├── constants/      # Sabit değerler
├── context/        # Global durum yönetimi
├── hooks/          # Özel React Hook'ları
├── scripts/        # Yardımcı betikler
└── App.js
```

## 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! Katkıda bulunmak için:

1. Bu depoyu forklayın.
2. Yeni bir dal oluşturun:  
   ```bash
   git checkout -b feature/ozellik-adi
   ```
3. Değişikliklerinizi yapın ve commit edin:  
   ```bash
   git commit -m "Yeni özellik eklendi"
   ```
4. Dalınızı pushlayın:  
   ```bash
   git push origin feature/ozellik-adi
   ```
5. Pull Request gönderin 🎉

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.
