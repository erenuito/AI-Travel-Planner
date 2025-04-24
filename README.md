
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

![WhatsApp Görsel 2025-04-25 saat 01 31 42_93f41b8e](https://github.com/user-attachments/assets/3f685d82-0f01-4aa6-a2e8-0fa57db8292c)


![WhatsApp Görsel 2025-04-25 saat 01 31 42_0c30512c](https://github.com/user-attachments/assets/89a1cbe3-49ea-40f6-87d4-ba39dc0a45f7)


![WhatsApp Görsel 2025-04-25 saat 01 31 43_4805c604](https://github.com/user-attachments/assets/b097b7aa-f0b3-4047-ad05-d58e44117db3)


![WhatsApp Görsel 2025-04-25 saat 01 33 18_b0fe0bf9](https://github.com/user-attachments/assets/253cec3f-f9f9-4503-b907-610153aa4891)



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
