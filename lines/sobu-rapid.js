// 総武快速線（東京 ― 千葉）
// 路線データの形式は lines/README.md を参照。座標は Wikidata より
(window.EKINOW_LINES = window.EKINOW_LINES || {})["sobu-rapid"] = {
  id: "sobu-rapid",
  name: "総武線快速",
  color: { light: "#0067C0", lightSoft: "#D3E4F5", dark: "#4A9BE8", darkSoft: "#10233A" },
  note: "東京〜錦糸町は地下区間のため、位置が取れないことがあります。通過駅は路線図に薄く表示します。",
  stations: [
    { name: "東京",     kana: "とうきょう", lat: 35.68083, lng: 139.76694 },
    { name: "新日本橋", kana: "しんにほんばし", lat: 35.68867, lng: 139.77322 },
    { name: "馬喰町",   kana: "ばくろちょう", lat: 35.69336, lng: 139.78239 },
    { name: "錦糸町",   kana: "きんしちょう", lat: 35.69600, lng: 139.81400 },
    { name: "亀戸",     kana: "かめいど", lat: 35.69731, lng: 139.82658, pass: true },
    { name: "平井",     kana: "ひらい", lat: 35.70639, lng: 139.84250, pass: true },
    { name: "新小岩",   kana: "しんこいわ", lat: 35.71678, lng: 139.85828 },
    { name: "小岩",     kana: "こいわ", lat: 35.73300, lng: 139.88170, pass: true },
    { name: "市川",     kana: "いちかわ", lat: 35.72913, lng: 139.90770 },
    { name: "本八幡",   kana: "もとやわた", lat: 35.72180, lng: 139.92690, pass: true },
    { name: "下総中山", kana: "しもうさなかやま", lat: 35.71410, lng: 139.94310, pass: true },
    { name: "西船橋",   kana: "にしふなばし", lat: 35.70700, lng: 139.95900, pass: true },
    { name: "船橋",     kana: "ふなばし", lat: 35.70174, lng: 139.98523 },
    { name: "東船橋",   kana: "ひがしふなばし", lat: 35.70000, lng: 140.00420, pass: true },
    { name: "津田沼",   kana: "つだぬま", lat: 35.69122, lng: 140.02048 },
    { name: "幕張本郷", kana: "まくはりほんごう", lat: 35.67280, lng: 140.04240, pass: true },
    { name: "幕張",     kana: "まくはり", lat: 35.65940, lng: 140.05770, pass: true },
    { name: "新検見川", kana: "しんけみがわ", lat: 35.65140, lng: 140.07310, pass: true },
    { name: "稲毛",     kana: "いなげ", lat: 35.63708, lng: 140.09263 },
    { name: "西千葉",   kana: "にしちば", lat: 35.62258, lng: 140.10328, pass: true },
    { name: "千葉",     kana: "ちば", lat: 35.61312, lng: 140.11319 }
  ]
};
