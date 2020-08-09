# workshop-2020-summer
JavaScript講座2020夏の習作コードです

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

$ git clone https://github.com/sotsu-j/workshop-2020-summer.git

$ yarn install

$ yarn start

## 1.開発環境を作る

create-react-appを使ってTypescriptの開発環境を作ります

$ npx create-react-app workshop-2020-summer --typescript

## 2.チュートリアルの環境を整える

チュートリアルとしてオセロゲームを作ります

@material-ui/core, othello-game-logicを追加します

また、ライブラリを最新バージョンにアップグレードします

$ yarn add @material-ui/core

$ yarn add othello-game-logic

$ yarn upgrade --latest

## 3.オセロゲームの基本画面を実装してみる

othello-game-logicを用いたオセロゲームの基本部分の実装を試みます

残念ながらothello-game-logicにはtypeの宣言がないので、型宣言のエラーが出ないような形でライブラリを読み込みます

Boardのデータ型など、部分的な部分は自前で型宣言を行っていきます