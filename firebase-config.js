// ① 到 Firebase 主控台 → 專案設定 → 你的應用程式 → 「SDK 設定和配置」，把 firebaseConfig 整段貼到這裡
export const firebaseConfig = {
  apiKey: "AIzaSyCsT8IwdbpXEJ6ht-u2PLH91I63Q5DoXc8",
  authDomain: "ourdays-5090f.firebaseapp.com",
  projectId: "ourdays-5090f",
  storageBucket: "ourdays-5090f.firebasestorage.app",
  messagingSenderId: "597458851491",
  appId: "1:597458851491:web:c846e42899802cd6319116",
  measurementId: "G-Y86067E97M"
};

// ② 兩人的 Google 帳號（必須和 firestore.rules 裡的一樣）
//    a = 設定頁「第一位」，b = 「第二位」
export const MEMBERS = {
  a: "tzwen1225@gmail.com",
  b: "angel460360@gmail.com"
};

// 資料存放的空間名稱，一般不用改
export const SPACE = "main";
