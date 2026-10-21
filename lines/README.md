# 路線データ

1路線 = 1ファイル（`lines/<id>.js`）。`index.html?line=<id>` で表示され、`line` 省略時は `musashino`。

```js
window.EKINOW_LINE = {
  id: "musashino",            // ファイル名と同じ（英小文字・数字・ハイフン）
  name: "武蔵野線",
  color: { light: "#F26522", lightSoft: "#FDE3D4", dark: "#FF7A3D", darkSoft: "#3A2418" },
  stations: [                 // 路線順。先頭が「上り側」の終点
    { name: "西船橋", kana: "にしふなばし", lat: 35.7076, lng: 139.9592 },
    ...
  ]
};
```

方面ボタンや駅名標の両端は `stations` の先頭・末尾から自動で作られます。
