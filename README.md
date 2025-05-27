
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

AI-Travel-Planner/
├── app/            # Ekranlar ve uygulama yapısı
├── assets/         # Görseller ve statik dosyalar
├── components/     # Yeniden kullanılabilir bileşenler
├── configs/        # Yapılandırma dosyaları
├── constants/      # Sabit değerler
├── context/        # Global durum yönetimi# 🧭 AI Travel Planner

AI Travel Planner is a mobile app that provides AI-powered recommendations to make travel planning easier. It analyzes users’ travel preferences and creates personalized travel plans.

## 🚀 Features

- **Personalized Travel Plans**: Recommends customized travel routes and activities based on users’ preferences.

- **AI-Powered Recommendations**: Provides travel recommendations using major language models like OpenAI.

- **User-Friendly Interface**: A modern and maintained user interface separate from React Native and Expo.

- **Real-Time Data**: Provides real-time data management by integrating with Firebase.

## 🛠️Technologies

- **Frontend**: React Native, Expo
- **Backend**: Firebase (Authentication, Firestore)
- **AI**: OpenAI API
- **Map and Location Services**: Google Maps API

## 📦 Installation

``` bash
# Clone the repository
git clone https://github.com/erenuito/AI-Travel-Planner.git
cd AI-Travel Planner

# Install dependencies
npm install
```

### 🔧 Firebase Configuration

1. Create a project via [Firebase Console](https://console.firebase.google.com/).
2. Complete and compile the web application.
3. In the project directory, create a file named `firebaseConfig.js` and add your information using the following structure:

```javascript
// firebaseConfig.js
export const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
project ID: "YOUR_PROJECT_ID",
storageBucket: "YOUR_STORAGE_BUCKET",
messageSenderId: "YOUR_MESSAGING_SENDER_ID",
application ID: "YOUR_APP_ID"
};
```

### ▶️ Starting the App

``` bash
npx expo start
```

- You can test it by scanning the QR code with the Expo Go app.

##📷 Screenshots
<div style="display: flex; flex-wrap: wrap; gap: 16px; justify-content: center;"> <img src="https://github.com/user-attachments/assets/3f685d82-0f01-4aa6-a2e8-0fa57db8292c" alt="Screenshot 1" style="width: 200px; border-radius: 8px;" /> <img src="https://github.com/user-attachments/assets/89a1cbe3-49ea-40f6-87d4-ba39dc0a45f7" alt="Screenshot 2" style="width: 200px; border-radius: 8px;" /> <img src="https://github.com/user-attachments/assets/b097b7aa-f0b3-4047-ad05-d58e44117db3" alt="Screenshot 3" style="width: 200px; border-radius: 8px;" /> <img src="https://github.com/user-attachments/assets/253cec3f-f9f9-4503-b907-610153aa4891" alt="Screenshot 4" style="width: 200px; border-radius: 8px;" /> </div>

## 📁 Project Structure

''''
AI-Travel Planner/
├── app/ # Screens and app structure
├── assets/ # images and static files
├── components/ # Reusable solutions
├── configs/ # Configuration files
├── constants/ # Constant values
├── context/ # Global state management
├── hooks/ # Custom React Hooks
├── scripts/ # Helper scripts
└── App.js
''''

## 🤝 Contribute

Your contributions are welcome! To contribute:

1. Fork this repository.
2. Composition of a new branch:
``` bash
git checkout -b feature/feature-name
```
3. Make your changes and commit:
``` bash
git commit -m "New feature added"
```
4. Push your branch:
``` bash
git push Origin feature/feature-name
```
5. Submit a Pull Request 🎉

## 📄License

This project is licensed under the [MIT License](LICENSE).
├── hooks/          # Özel React Hook'ları
├── scripts/        # Yardımcı betikler
└── App.js


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
