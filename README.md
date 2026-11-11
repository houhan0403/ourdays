# 我們的日子 · 部署說明

兩人用各自的 Google 帳號登入，資料存在 Firebase（Firestore）雲端，對方新增或修改後，你的畫面會在幾秒內自動更新。可加到手機主畫面當 App 用，離線時也能操作，連線後自動同步。

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 主程式 |
| `firebase-config.js` | **要改**：貼上 Firebase 設定、填兩人的 Gmail |
| `firestore.rules` | **要改**：資料庫安全規則（填兩人的 Gmail），貼到 Firebase 主控台 |
| `manifest.json`、`sw.js`、`icon-*.png` | 讓手機可以「加入主畫面」、離線開啟 |

---

## 一、建立 Firebase 專案（約 10 分鐘，免費）

1. 到 <https://console.firebase.google.com> → **新增專案**，名稱隨意（例如 `ourdays`），Google Analytics 可以關掉。
2. **建立網頁應用程式**：專案首頁點 `</>`（網頁）圖示 → 取個暱稱 → 註冊。畫面會出現一段 `const firebaseConfig = { ... }`，**整段複製**，貼到 `firebase-config.js` 取代範例的 `firebaseConfig`。
3. 同一個檔案，把 `MEMBERS` 的 `a`、`b` 改成你們兩人的 Gmail（`a` 對應設定頁的「第一位」）。
4. **開啟 Google 登入**：左側「建構 → Authentication」→ 開始使用 →「登入方式」→ 啟用 **Google** → 選擇專案支援電子郵件 → 儲存。
5. **建立資料庫**：左側「建構 → Firestore Database」→ 建立資料庫 → 位置選 `asia-east1（台灣）` → 以「正式版模式」開始。
6. **貼上安全規則**：Firestore 的「規則」分頁，把 `firestore.rules` 的內容整段貼上（記得改成你們兩人的 Gmail，**全部小寫**）→ 發布。

> `firebase-config.js` 裡的 apiKey 公開放在 GitHub 上是正常的，真正擋住別人的是第 6 步的安全規則。

## 二、放到 GitHub Pages

1. GitHub 新增一個 repository（例如 `ourdays`）。
2. 把這個資料夾的所有檔案上傳到 repo 根目錄（`Add file → Upload files`）。
3. repo 的 **Settings → Pages** → Source 選 `Deploy from a branch`，Branch 選 `main` / `(root)` → Save。
4. 約 1 分鐘後網址會是 `https://你的帳號.github.io/ourdays/`。

## 三、把 GitHub 網域加入 Firebase 白名單（必做，否則無法登入）

Firebase 主控台 →「Authentication → 設定 → 已授權的網域」→ 新增 `你的帳號.github.io`。

## 四、手機安裝

- **iPhone**：用 **Safari** 打開網址 → 分享按鈕 →「加入主畫面」→ 從主畫面圖示打開並登入。
- **Android**：用 **Chrome** 打開 → 右上角選單 →「安裝應用程式 / 加到主畫面」。
- 用 LINE 傳網址給對方時，程式會自動跳到手機預設瀏覽器開啟（LINE 內建瀏覽器會被 Google 拒絕登入）。FB / IG 內開啟時畫面會提示改用 Safari / Chrome。

## 五、搬舊資料

- 如果新網址和舊版是**同一個網址**，登入後到「設定」頁會出現「發現這支手機上的舊資料」，按「上傳到雲端」即可。
- 如果是不同網址：在舊版按「匯出備份」，再到新版「設定 → 匯入備份」選那個檔案。

## 與舊版的差異

- 資料改存雲端，兩人即時同步；有離線快取。
- 共同日記：每個人只編輯自己那一欄，看得到對方寫的內容，兩人同時寫也不會互相覆蓋。
- 密碼鎖改為「這支手機」的設定（各自設定，不同步）。
- 兩人稱呼、特別的日子會同步。

## 之後要修改程式

直接改 GitHub 上的 `index.html` 並 commit，手機重新打開 App 就會拿到新版（若沒更新，完全關閉 App 再開一次）。

## 常見問題

- **按登入沒反應／跳出錯誤 `auth/unauthorized-domain`**：第三步的網域沒加。
- **登入後顯示「這個帳號沒有權限」**：`firebase-config.js` 的 `MEMBERS` 或 `firestore.rules` 的 email 沒填對（要小寫、兩處都要改）。
- **免費額度**：Firestore 免費方案每天 5 萬次讀取、2 萬次寫入，兩人使用遠遠用不完。
