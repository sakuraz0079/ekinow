# 路線データ

1路線 = 1ファイル（`lines/<id>.js`）。`lines/index.js` の `EKINOW_LINE_IDS` に並べた順で画面上部のメニューに出ます。

表示する路線は `?line=<id>` → 前回メニューで選んだ路線 → 一覧の先頭 の順で決まります。

## 路線を追加する
1. `lines/<id>.js` を作る（下の形式）
2. `lines/index.js` の `EKINOW_LINE_IDS` に `<id>` を追加

```js
(window.EKINOW_LINES = window.EKINOW_LINES || {})["musashino"] = {
  id: "musashino",            // ファイル名と同じ（英小文字・数字・ハイフン）
  name: "武蔵野線",           // メニューと駅名標に出る名前
  color: {
    light: "#F26522", lightSoft: "#FDE3D4",   // ライトモードの路線色
    dark: "#FF7A3D", darkSoft: "#3A2418",     // ダークモードの路線色
    onLine: "#23272D"         // 省略可。路線色の上の文字色（既定は白。黄色い路線などで指定）
  },
  note: "…",                  // 省略可。地下区間などの注意書き
  stations: [                 // 運行順。先頭と末尾が方面ボタン・駅名標の両端になる
    { name: "西船橋", kana: "にしふなばし", lat: 35.7076, lng: 139.9592 },
    { name: "亀戸", kana: "かめいど", lat: 35.6973, lng: 139.8266, pass: true },  // 通過駅（快速など）
    ...
  ]
};
```

座標は Wikidata の各駅の位置（P625）を使っています。
