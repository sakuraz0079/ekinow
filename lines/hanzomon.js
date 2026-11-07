// 東京メトロ半蔵門線（渋谷 ― 押上）
// 路線データの形式は lines/README.md を参照。座標は Wikidata より
(window.EKINOW_LINES = window.EKINOW_LINES || {})["hanzomon"] = {
  id: "hanzomon",
  name: "半蔵門線",
  color: { light: "#8F76D6", lightSoft: "#E8E2F7", dark: "#A895E3", darkSoft: "#2A2440" },
  note: "全線が地下を走るため、GPSで位置が取れないことがほとんどです。",
  tunnels: [["渋谷", "押上"]],  // 地下区間 [始まりの駅, 終わりの駅]（車窓をトンネルにする）
  stations: [
    { name: "渋谷",       kana: "しぶや", lat: 35.65851, lng: 139.70133 },
    { name: "表参道",     kana: "おもてさんどう", lat: 35.66515, lng: 139.71252 },
    { name: "青山一丁目", kana: "あおやまいっちょうめ", lat: 35.67292, lng: 139.72428 },
    { name: "永田町",     kana: "ながたちょう", lat: 35.67875, lng: 139.74026 },
    { name: "半蔵門",     kana: "はんぞうもん", lat: 35.68569, lng: 139.74166 },
    { name: "九段下",     kana: "くだんした", lat: 35.69540, lng: 139.75140 },
    { name: "神保町",     kana: "じんぼうちょう", lat: 35.69590, lng: 139.75770 },
    { name: "大手町",     kana: "おおてまち", lat: 35.68470, lng: 139.76596 },
    { name: "三越前",     kana: "みつこしまえ", lat: 35.68455, lng: 139.77461 },
    { name: "水天宮前",   kana: "すいてんぐうまえ", lat: 35.68260, lng: 139.78520 },
    { name: "清澄白河",   kana: "きよすみしらかわ", lat: 35.68230, lng: 139.79870 },
    { name: "住吉",       kana: "すみよし", lat: 35.68910, lng: 139.81600 },
    { name: "錦糸町",     kana: "きんしちょう", lat: 35.69600, lng: 139.81400 },
    { name: "押上",       kana: "おしあげ", lat: 35.71075, lng: 139.81289 }
  ]
};
