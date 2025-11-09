# プロジェクト概要

React + Vite フロントエンドと、Node.js + Express + Prisma バックエンドから成るシンプルなフルスタック構成です。

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
- `.gitattributes` により改行コードを統一しています（ソースは LF、Windows スクリプトは CRLF）。

## 代表的なスクリプト（backend）

- `npm run start` — サーバー起動（nodemon）
- `npm run prisma:generate` — Prisma クライアント生成
- `npm run prisma:migrate` — マイグレーション適用（開発）
- `npm run prisma:seed` — Seed 実行

