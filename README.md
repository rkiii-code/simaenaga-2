# しまコネクト
友人と共同開発したWebアプリ『しまコネクト』のREADMEです。個人用ポートフォリオとして保存しています。

## 自分の担当

- フロントエンドエンジニア設計、実装（API部分）
- バックエンド設計、実装（ユーザー認証、掲示板API部分）
- チームの担当、スケジュール管理

## 実際のアプリ画面
`

<table>
  <tr>
    <td align="center">
      <strong>タイトル画面</strong><br>
      <img src="https://github.com/user-attachments/assets/0f5984a0-11e1-44e1-8a42-62c563824ce5" width="90%" />
    </td>
    <td align="center">
      <strong>利用登録画面</strong><br>
      <img src="https://github.com/user-attachments/assets/2de2b0d8-f264-4eea-842e-374b786c97cf" width="90%" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>新規登録画面</strong><br>
      <img src="https://github.com/user-attachments/assets/83ac42b9-0038-460c-b778-979f13b6ed21" width="90%" />
    </td>
    <td align="center">
      <strong>ログイン画面</strong><br>
      <img src="https://github.com/user-attachments/assets/06434086-bf4d-48fc-882e-43bd8bc4a875" width="90%" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>メイン画面</strong><br>
      <img src="(https://github.com/user-attachments/assets/85d190c0-3762-4f5c-82ea-12dabd56f192" width="90%" />
    </td>
    <td align="center">
      <strong>サブメニュー</strong><br>
      <img src="https://github.com/user-attachments/assets/7b429f2c-f56f-4549-b771-31cdae77d2d0" width="90%" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <strong>掲示板画面</strong><br>
      <img src="https://github.com/user-attachments/assets/75848a75-1d38-4738-bfc7-8b4004ac2e2d" width="90%" />
    </td>
    <td align="center">
      <strong>掲示板画面</strong><br>
      <img src="https://github.com/user-attachments/assets/f54b8cb0-e54b-41f6-9f56-56eafc66b9c3" width="90%" />
    </td>
  </tr>
</table>


---

## 概要

『しまコネクト』は、学生4人のチームで**企画会議から設計・開発まで行ったWebアプリ**です。
「シマエナガ」＋「コネクト（つながり）」をテーマに、**誰でも気軽にハンドサインを作って投稿・閲覧できる掲示板アプリ**を開発しました。

『しまコネクト』では、自分で作ったハンドサインを画像付きで投稿できる掲示板機能を使用できます。
この掲示板で、他ユーザーが作成したハンドサインを閲覧・使用することもできます。
お話ツールとして配布されている実行ファイルを使用すると、保存したハンドサインをカメラに向かって使用した際に、文字に変換されます。

### 聴覚障害者にとってのメリット
- オープンな場でのコミュニティが広がる  
- 流行語などの柔軟な表現を取り入れた交流が可能になる

### 健常者にとってのメリット
- 手の動きによるコミュニケーションに関心を持つきっかけになる
- 気軽に使えるハンドサインに触れることで、手話を学ぶハードルを下げられる

---

## 企画背景

- 手話は一般的にまだ普及していない
- 手話には文法・認定などの制約があり、流行語や新しい表現が取り入れづらい
- 既存の手話翻訳アプリには独創性が少ない

そこで、**もっと自由で、誰でも発信・共有できること**を目指してアプリ制作を進めました。

---

## 手話とハンドサインの違い

| 項目 | 手話 | ハンドサイン（本アプリで扱う） |
|------|------|-----------------------------|
| 言語性 | 視覚言語 | 言語ではない |
| 統一性 | 国ごとに文法・単語がある | 自由に表現できる・不統一 |
| 認定 | 習得・認定に時間がかかる | 個人で創作・使用可能 |
| 利便性 | 制限が多い | 自由でカジュアル |

『しまコネクト』では、気軽に使用できるハンドサインを扱いました。
ハンドサインを普及させることで、手話の普及に貢献することも目指します。

---

## 『しまコネクト』の機能

- 掲示板（投稿・閲覧・検索・並び替え） 
- ハンドサインの翻訳

『しまコネクト』の開発において、Webアプリ班と画像認識班の2チームに分かれて制作を進めました。

---

## Webアプリ班


私はWebアプリ班のフロントエンドエンジニアとして開発に携わり、以下の機能を実装しました：
- ユーザー登録・ログイン機能
- メイン画面・サブメニュー
- 掲示板（ハンドサインの投稿・新着順と人気順での表示・カテゴリー検索）

### 工夫した点
- 操作がわかりやすいようなシンプルな画面設計
- 使いやすさを向上させるためにサブメニューも実装
- 流行性を意識できるよう、人気順でのソート機能を実装

### 使用した技術
| 分類 | 技術 |
|------|------|
| フロントエンド | React, Vite |
| バックエンド | Node.js, Express, Prisma |
| データベース | MySQL |
| その他　| Figma |

---

## 画像認識班


- 手の形を認識・データ化する処理を、GoogleのMediaPipeで実装
- 認識結果の類似度をcos類似度で評価し、誤差を減少
- Python実行環境が不要になるよう、exeファイルとしてアプリ化

---

# 開発環境 セットアップガイド

## ディレクトリ構成

- `frontend/` — React (Vite)
- `backend/` — Express API + Prisma ORM

## 前提条件

- Node.js (LTS 推奨)
- MySQL データベース（`DATABASE_URL` を適宜変更）

## セットアップ手順

1) バックエンド

- `cd backend`
- 依存関係のインストール: `npm install`
- 環境変数ファイルの作成: `Copy-Item .env.example .env`（PowerShell）
- `.env` を編集し `DATABASE_URL` と `TOKEN_SECRET` を設定
- Prisma クライアント生成: `npx prisma generate`
- マイグレーション適用（開発）: `npm run prisma:migrate`
- （任意）Seed 実行: `npm run prisma:seed`
- 開発起動: `npm run start`

バックエンドは既定でポート `3000` で起動します（`backend/index.js`）。

2) フロントエンド

- 別ターミナルで: `cd frontend`
- 依存関係のインストール: `npm install`
- 開発起動: `npm run start`

## Git に関するメモ

- 機密情報はコミットしません。`backend/.env.example` を使用して各自 `.env` を作成してください。
- ビルド成果物・ログ・環境変数・アップロードファイルは `.gitignore` で除外しています。
- `.gitattributes` により改行コードを統一しています（ソースは LF、Windows スクリプトは CRLF）。雰囲気で追加してみました。

## 代表的なスクリプト（backend）

- `npm run start` — サーバー起動（nodemon）
- `npm run prisma:generate` — Prisma クライアント生成
- `npm run prisma:migrate` — マイグレーション適用（開発）
- `npm run prisma:seed` — Seed 実行

