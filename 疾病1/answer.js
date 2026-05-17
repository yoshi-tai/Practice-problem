/* 問題の正解と解説を一元管理するデータ */
const problems = {
  1: {
    correct: ["opt3", "opt6"],
    answerHtml: "形質細胞（3）：Bリンパ球が分化した細胞で、大量の抗体を産生する主役。<br>リンパ球（6）：特に Bリンパ球 が抗体産生に関わる。",
    explanationHtml: "好中球は、細菌や異物を貪食することが主な役割です。<br>好塩基球は、アレルギー反応に関与し、ヒスタミンなどの化学物質を放出します。<br>好酸球は、寄生虫感染やアレルギー反応に関与し、特に寄生虫に対して効果的です。<br>マクロファージは、貪食作用を持ち、抗原提示も行います。",
    optionHtml: "1. 好中球 → 貪食がメイン<br>2. 好塩基球 → アレルギー反応<br>4. 好酸球 → 寄生虫・アレルギー<br>5. マクロファージ → 貪食・抗原提示"
  },
  2: {
    correct: ["opt4"],
    answerHtml: "アポトーシス（4）：プログラムされた細胞死である。",
    explanationHtml: "アポトーシスは孤発的に発現し、壊死とは異なる細胞死です。通常、炎症反応は関与しません。",
    optionHtml: "4. プログラムされた細胞死である。"
  },
  3: {
    correct: ["opt2"],
    answerHtml: "紫外線（2）：物理的因子に分類される。",
    explanationHtml: "細菌は生物学的因子、一酸化炭素とメチルアルコールは化学的因子です。",
    optionHtml: "2. 紫外線 → 物理的因子"
  },
  4: {
    correct: ["opt2"],
    answerHtml: "免疫複合体（2）：内因、免疫異常に分類される。",
    explanationHtml: "栄養素は外因の化学的因子、温度と放射線は外因の物理的因子、細菌は外因の生物学的因子です。",
    optionHtml: "2. 免疫複合体 → 内因、免疫異常"
  },
  5: {
    correct: ["opt1"],
    answerHtml: "瘢痕を形成する（1）：二次治癒では瘢痕が残りやすい。",
    explanationHtml: "二次治癒では組織欠損が多く、肉芽組織が多く、修復は遅延しやすい。",
    optionHtml: "1. 瘢痕を形成する。"
  },
  6: {
    correct: ["opt3", "opt4"],
    answerHtml: "リンパ球浸潤（3）、形質細胞の浸潤（4）：慢性炎症で特徴的です。",
    explanationHtml: "好中球浸潤や血管透過性亢進は急性炎症で特徴的です。CRPは急性期・慢性期のいずれでも上昇します。",
    optionHtml: "3. リンパ球浸潤 → 慢性炎症で特徴的<br>4. 形質細胞の浸潤 → 慢性炎症で特徴的"
  },
  7: {
    correct: ["opt4"],
    answerHtml: "成人T細胞白血病〈ATL〉（4）：HTLV-1が原因。",
    explanationHtml: "血友病は遺伝子病、鉄欠乏性貧血は鉄欠乏、再生不良性貧血は原因不明なことが多い。",
    optionHtml: "4. 成人T細胞白血病〈ATL〉 → HTLV-1による"
  },
  8: {
    correct: ["opt2"],
    answerHtml: "HbA1c（2）：糖尿病の診断・コントロール指標。",
    explanationHtml: "尿酸値は高尿酸血症、血液沈降速度は炎症や感染、PTは凝固機能の指標です。",
    optionHtml: "2. HbA1c → 長期血糖管理指標"
  },
  9: {
    correct: ["opt4"],
    answerHtml: "失明（4）：糖尿病性網膜症による。",
    explanationHtml: "三大合併症は糖尿病性網膜症・腎症・神経障害です。",
    optionHtml: "4. 失明 → 糖尿病性網膜症"
  },
  10: {
    correct: ["opt5"],
    answerHtml: "C型ウイルス性肝炎（5）：糖尿病進行とは直接関連しない。",
    explanationHtml: "易感染、失明、心筋梗塞、慢性腎不全はいずれも糖尿病の進行と関連します。",
    optionHtml: "5. C型ウイルス性肝炎 → 糖尿病進行とは直接関連しない"
  },
  11: {
    correct: ["opt1", "opt3"],
    answerHtml: "胆汁酸は回腸から再吸収される（1）、閉塞性黄疸では便が灰白色になる（3）。",
    explanationHtml: "閉塞性黄疸では直接ビリルビンが増加し、間接ビリルビンは肝臓で抱合されます。",
    optionHtml: "1. 胆汁酸 → 回腸から再吸収される<br>3. 閉塞性黄疸 → 便が灰白色になる"
  },
  12: {
    correct: ["opt3"],
    answerHtml: "脂質異常症（3）：動脈硬化の主要危険因子。",
    explanationHtml: "胆石症や尿管結石は動脈硬化と直接関係せず、高尿酸血症の関連は弱いです。",
    optionHtml: "3. 脂質異常症 → 動脈硬化の主要因子"
  },
  13: {
    correct: ["opt1", "opt3"],
    answerHtml: "血管内皮細胞（1）と泡沫細胞（3）：粥腫形成に関与する。",
    explanationHtml: "内皮障害が粥腫の開始点になり、泡沫細胞は脂質を取り込んだマクロファージです。",
    optionHtml: "1. 血管内皮細胞 → 内皮障害が開始点<br>3. 泡沫細胞 → 粥腫の主成分"
  },
  14: {
    correct: ["opt2"],
    answerHtml: "虚血性心疾患（2）：生活習慣病に含まれる。",
    explanationHtml: "生活習慣病は食事、運動、喫煙、飲酒、ストレスなどで発症リスクが高まる疾患です。",
    optionHtml: "2. 虚血性心疾患 → 生活習慣病"
  },
  15: {
    correct: ["opt2"],
    answerHtml: "ヘモグロビン〈Hb〉（2）：貧血の診断指標。",
    explanationHtml: "アルブミンは栄養状態、フィブリノゲンとPTは凝固機能の指標です。",
    optionHtml: "2. ヘモグロビン〈Hb〉 → 貧血診断指標"
  },
  16: {
    correct: ["opt2"],
    answerHtml: "リンパ還流の不全（2）：浮腫の原因になる。",
    explanationHtml: "血漿膠質浸透圧は低下で浮腫、毛細血管内圧は上昇で浮腫、透過性は亢進で浮腫になります。",
    optionHtml: "2. リンパ還流の不全 → 浮腫の原因"
  },
  17: {
    correct: ["opt3"],
    answerHtml: "低栄養（3）：アルブミン低下により浮腫が起こりやすい。",
    explanationHtml: "甲状腺機能低下症では粘液水腫が起こりやすく、熱中症は脱水が主体です。",
    optionHtml: "3. 低栄養 → アルブミン低下による浮腫"
  },
  18: {
    correct: ["opt2"],
    answerHtml: "体重増加（2）：水分貯留により増加する。",
    explanationHtml: "浮腫は体液貯留のため体重が増加し、食欲亢進や色素沈着とは直接関係しません。",
    optionHtml: "2. 体重増加 → 水分貯留"
  },
  19: {
    correct: ["opt4"],
    answerHtml: "コーヒー残渣様（4）：胃酸で血液が変性した所見。",
    explanationHtml: "喀血は泡沫状、胃内容物は酸性、アンモニア臭は肝不全などでみられます。",
    optionHtml: "4. コーヒー残渣様 → 胃酸で変性した血液"
  },
  20: {
    correct: ["opt2"],
    answerHtml: "還元ヘモグロビン（2）：チアノーゼの直接原因になる。",
    explanationHtml: "血中酸素分圧は低下し、酸化ヘモグロビンは減少します。",
    optionHtml: "2. 還元ヘモグロビン → チアノーゼの直接原因"
  },
  21: {
    correct: ["opt4"],
    answerHtml: "血中還元ヘモグロビン量の増加（4）：チアノーゼの原因。",
    explanationHtml: "チアノーゼは還元ヘモグロビンの増加により起こります。",
    optionHtml: "4. 血中還元ヘモグロビン量の増加 → チアノーゼの原因"
  },
  22: {
    correct: ["opt1"],
    answerHtml: "口唇（1）：末梢循環の状態を観察しやすい。",
    explanationHtml: "耳介より口唇の方が観察しやすく、頭皮や眼球は確認に適しません。",
    optionHtml: "1. 口唇 → 観察しやすい"
  },
  23: {
    correct: ["opt1"],
    answerHtml: "青（1）：還元ヘモグロビン増加により青紫色になる。",
    explanationHtml: "赤は充血、黄は黄疸、白は貧血やショック時の色です。",
    optionHtml: "1. 青 → 還元ヘモグロビン増加"
  },
  24: {
    correct: ["opt3"],
    answerHtml: "直腸（3）：鮮紅色の下血となりやすい。",
    explanationHtml: "胃や十二指腸はタール便、食道は吐血やタール便になりやすい。",
    optionHtml: "3. 直腸 → 鮮紅色の下血"
  },
  25: {
    correct: ["opt2"],
    answerHtml: "大腸癌（2）：血便や下血がみられることがある。",
    explanationHtml: "肝囊胞や卵巣癌では下血は通常起こらず、腎盂腎炎では血尿になります。",
    optionHtml: "2. 大腸癌 → 血便・下血"
  },
  26: {
    correct: ["opt2"],
    answerHtml: "気道（2）：喀血の出血部位。",
    explanationHtml: "大腸は下血、食道は吐血、胆道は喀血とは関係しません。",
    optionHtml: "2. 気道 → 喀血の部位"
  },
  27: {
    correct: ["opt4"],
    answerHtml: "血色素量が減っていること（4）：貧血の定義。",
    explanationHtml: "貧血はヘモグロビン濃度、赤血球数、ヘマトクリットが基準値未満の状態です。",
    optionHtml: "4. 血色素量が減っていること → 貧血の定義"
  },
  28: {
    correct: ["opt2", "opt5"],
    answerHtml: "ビタミンB12（2）と葉酸（5）：欠乏すると巨赤芽球性貧血を生じる。",
    explanationHtml: "ビタミンAは夜盲症、Dは骨軟化症、Eは神経障害や溶血を起こすことがあります。",
    optionHtml: "2. ビタミンB12 → 巨赤芽球性貧血<br>5. 葉酸 → 巨赤芽球性貧血"
  },
  29: {
    correct: ["opt1", "opt5"],
    answerHtml: "動悸（1）と匙状爪（5）：鉄欠乏性貧血でみられる。",
    explanationHtml: "発熱や黄疸、感覚過敏は鉄欠乏性貧血の典型症状ではありません。",
    optionHtml: "1. 動悸 → 酸素不足による心拍増加<br>5. 匙状爪 → 鉄欠乏による爪の変形"
  },
  30: {
    correct: ["opt4"],
    answerHtml: "下肢よりも上肢の手術後に多い（4）：誤り。",
    explanationHtml: "肺塞栓症は下肢由来の深部静脈血栓が主な原因です。",
    optionHtml: "4. 下肢よりも上肢の手術後に多い。 → 誤り"
  },
  31: {
    correct: ["opt4"],
    answerHtml: "脈拍数の増加（4）：代償的に増加する。",
    explanationHtml: "心原性ショックでは血圧低下、体温低下、尿量減少が起こることがあります。",
    optionHtml: "4. 脈拍数の増加 → 代償性反応"
  },
  32: {
    correct: ["opt3"],
    answerHtml: "血圧の低下（3）：有効循環血液量が低下するため。",
    explanationHtml: "出血性ショックでは尿量は減少し、皮膚は蒼白になりやすいです。",
    optionHtml: "3. 血圧の低下 → ショックの徴候"
  },
  33: {
    correct: ["opt4", "opt6"],
    answerHtml: "心筋梗塞（4）と敗血症（6）：心外閉塞・拘束性ショックの原因として適切でない。",
    explanationHtml: "心外閉塞・拘束性ショックは肺血栓塞栓症、緊張性気胸、大動脈解離、心タンポナーデなどが原因になる。",
    optionHtml: "4. 心筋梗塞 → 主に心原性ショック<br>6. 敗血症 → 主に分布性ショック"
  },
  34: {
    correct: ["opt2"],
    answerHtml: "ビリルビン（2）：血中濃度上昇で黄疸が起こる。",
    explanationHtml: "グルコースや中性脂肪、クレアチニンの上昇では黄疸は起こりません。",
    optionHtml: "2. ビリルビン → 黄疸の原因"
  },
  35: {
    correct: ["opt1"],
    answerHtml: "眼球結膜（1）：黄染の確認に最も適している。",
    explanationHtml: "皮膚より結膜の方が黄染を見つけやすく、他の部位はわかりにくい。",
    optionHtml: "1. 眼球結膜 → 早期黄疸の確認に有用"
  },
  36: {
    correct: ["opt4"],
    answerHtml: "グラスゴー・コーマ・スケール（4）：意識レベル評価に用いる。",
    explanationHtml: "クレペリンは作業能力、フェイススケールは痛み、ロールシャッハは心理検査です。",
    optionHtml: "4. グラスゴー・コーマ・スケール → 意識評価"
  },
  37: {
    correct: ["opt2"],
    answerHtml: "自発呼吸の消失（2）：死の三徴候の1つ。",
    explanationHtml: "死の三徴候は心臓停止、呼吸停止、瞳孔散大と対光反射消失です。",
    optionHtml: "2. 自発呼吸の消失 → 死の三徴候"
  },
  38: {
    correct: ["opt3"],
    answerHtml: "対光反射（3）：瞳孔散大と対光反射の消失を確認する。",
    explanationHtml: "腹壁反射や輻輳反射、深部腱反射は死の三徴候に含まれません。",
    optionHtml: "3. 対光反射 → 死の三徴候の観察項目"
  },
  39: {
    correct: ["opt3"],
    answerHtml: "平坦脳波（3）：脳死判定の重要項目。",
    explanationHtml: "脳死では徐脈や除脳硬直、けいれんは判定基準に含まれません。",
    optionHtml: "3. 平坦脳波 → 脳死判定"
  },
  40: {
    correct: ["opt4"],
    answerHtml: "脳幹反射の消失（4）：脳死判定で正しい。",
    explanationHtml: "瞳孔は4mm以上、脳波は平坦、呼吸は消失、浅昏睡は深昏睡です。",
    optionHtml: "4. 脳幹反射の消失 → 正しい"
  },
  41: {
    correct: ["opt2"],
    answerHtml: "遠隔転移する（2）：悪性腫瘍の特徴。",
    explanationHtml: "良性腫瘍は被膜があり、浸潤せず増殖が緩やかなことが多いです。",
    optionHtml: "2. 遠隔転移する → 悪性腫瘍の特徴"
  },
  42: {
    correct: ["opt2"],
    answerHtml: "分化度は低い（2）：悪性腫瘍細胞の特徴。",
    explanationHtml: "悪性腫瘍では染色体異常が多く、核分裂頻度が高く、核/細胞質比も大きいです。",
    optionHtml: "2. 分化度は低い → 悪性腫瘍の特徴"
  },
  43: {
    correct: ["opt4"],
    answerHtml: "左鎖骨上窩（4）：ウィルヒョウ転移の部位。",
    explanationHtml: "胃癌は左鎖骨上窩リンパ節に転移しやすい。",
    optionHtml: "4. 左鎖骨上窩 → ウィルヒョウ転移"
  },
  44: {
    correct: ["opt5"],
    answerHtml: "A型肝炎ウイルス（5）：発がん性はない。",
    explanationHtml: "HBVやHCVは発がん性がありますが、A型肝炎ウイルスには発がん性がありません。",
    optionHtml: "5. A型肝炎ウイルス → 発がん因子ではない"
  },
  45: {
    correct: ["opt3"],
    answerHtml: "神経線維腫（3）：良性腫瘍。",
    explanationHtml: "癌や肉腫、骨髄腫は悪性腫瘍です。",
    optionHtml: "3. 神経線維腫 → 良性腫瘍"
  },
  46: {
    correct: ["opt3"],
    answerHtml: "癌腫は上皮性腫瘍である（3）。",
    explanationHtml: "腺腫は上皮性腫瘍であり、大腸腺腫は癌化することがあります。平滑筋腫は非上皮性腫瘍です。",
    optionHtml: "3. 癌腫は上皮性腫瘍である。"
  },
  47: {
    correct: ["opt3"],
    answerHtml: "ホジキンリンパ腫：ラングハンス巨細胞（3）は誤り。",
    explanationHtml: "ホジキンリンパ腫ではリード・ステルンベルグ巨細胞が特徴です。",
    optionHtml: "3. ホジキンリンパ腫：ラングハンス巨細胞 → 誤り"
  },
  48: {
    correct: ["opt4"],
    answerHtml: "PSA（4）：前立腺癌に特徴的な腫瘍マーカー。",
    explanationHtml: "AFPは肝細胞癌、CA19-9は膵臓癌、CEAは消化器癌などで使われます。",
    optionHtml: "4. PSA → 前立腺癌マーカー"
  },
  49: {
    correct: ["opt2", "opt3"],
    answerHtml: "食道癌（2）と腎癌（3）：肺転移が比較的多い。",
    explanationHtml: "胃癌や結腸癌、膵癌、十二指腸乳頭部癌は肝転移が多いです。",
    optionHtml: "2. 食道癌 → 肺転移が多い<br>3. 腎癌 → 肺転移が多い"
  },
  50: {
    correct: ["opt1"],
    answerHtml: "DNAは体細胞分裂の前に複製される（1）。",
    explanationHtml: "DNAは二重鎖であり、mRNA合成は転写、アミノ酸配列決定は翻訳です。",
    optionHtml: "1. DNAは体細胞分裂の前に複製される。"
  },
  51: {
    correct: ["opt1"],
    answerHtml: "伴性劣性遺伝（1）：X連鎖劣性遺伝で男児に発症しやすい。",
    explanationHtml: "常染色体遺伝は男女同率、伴性優性は男女とも発症の可能性があります。",
    optionHtml: "1. 伴性劣性遺伝 → 男児に発症しやすい"
  },
  52: {
    correct: ["opt2"],
    answerHtml: "血友病（2）：遺伝子異常による遺伝病。",
    explanationHtml: "川崎病は原因不明、B型肝炎とマラリアは感染症、サルコイドーシスは炎症性疾患です。",
    optionHtml: "2. 血友病 → 遺伝病"
  },
  53: {
    correct: ["opt4"],
    answerHtml: "デュシェンヌ型筋ジストロフィーは常染色体優性遺伝ではない（4）。",
    explanationHtml: "デュシェンヌ型筋ジストロフィーはX連鎖劣性遺伝です。",
    optionHtml: "4. デュシェンヌ型筋ジストロフィー → X連鎖劣性遺伝"
  },
  54: {
    correct: ["opt2"],
    answerHtml: "23本（2）：減数分裂により染色体数は半分になる。",
    explanationHtml: "体細胞は46本、精子や卵子は23本です。",
    optionHtml: "2. 23本 → 減数分裂後の染色体数"
  },
  55: {
    correct: ["opt3"],
    answerHtml: "風疹ウイルス（3）：妊娠初期の感染で先天性奇形を起こす。",
    explanationHtml: "MRSAや結核菌、B型肝炎、ピロリ菌は胎児奇形を通常起こしません。",
    optionHtml: "3. 風疹ウイルス → 先天性奇形を起こす"
  },
  56: {
    correct: ["opt3", "opt4"],
    answerHtml: "白血病裂孔（3）とアウエル小体（4）：急性骨髄性白血病でみられる。",
    explanationHtml: "赤血球と血小板は減少し、ベンス・ジョーンズは多発性骨髄腫の指標です。",
    optionHtml: "3. 白血病裂孔 → 芽球増加<br>4. アウエル小体 → 骨髄芽球の好塩基性封入体"
  },
  57: {
    correct: ["opt2", "opt5"],
    answerHtml: "血小板数（2）とAPTT（5）：出血傾向の重要指標。",
    explanationHtml: "白血球数は直接評価に適さず、ALTは肝機能、血清鉄は貧血評価に使われます。",
    optionHtml: "2. 血小板数 → 出血リスク評価<br>5. APTT → 凝固異常評価"
  },
  58: {
    correct: ["opt3"],
    answerHtml: "神経膠芽腫（3）：最も悪性度が高い。",
    explanationHtml: "悪性度の高い神経性腫瘍には「芽」や「悪性」が付くことが多いです。",
    optionHtml: "3. 神経膠芽腫 → 最も悪性度が高い"
  },
};

/* 問題番号を表示する関数 */
function setProblemNumber() {
  const problemNumber = document.getElementById("problemNumber").getAttribute("value");
  document.getElementById("problemNumber").textContent = problemNumber;
}

window.onload = function () {
  setProblemNumber();
};

/* 正解判定と表示 */
function oK() {
  const problemNumber = Number(document.getElementById("problemNumber").getAttribute("value"));
  const problem = problems[problemNumber];
  const selected = Array.from(document.querySelectorAll('input[name="checkbox"]:checked, input[name="radio"]:checked')).map(item => item.value);

  if (selected.length === 0) {
    alert("答えを選択してください。");
    return;
  }

  if (problem.correct.length === selected.length && problem.correct.every(value => selected.includes(value))) {
    const mark = document.getElementById("correctMark");
    mark.classList.remove("show");
    setTimeout(function () {
      mark.classList.add("show");
    }, 10);
    setTimeout(function () {
      mark.classList.remove("show");
    }, 30000);
    return;
  }

  if (problem.correct.some(value => selected.includes(value))) {
    if (problem.correct.length > selected.length) {
      alert("一部の選択肢はあっていますが、まだ不正解です。");
    } else {
      alert("一部の選択肢はあっていますが、別の選択肢が違います。");
    }
  } else {
    alert("不正解です。もう一度考えてみてください。");
  }
}

/* 答えボタン押下時 */
function showAnswer() {
  const result = confirm("答え見てみる？");
  if (result) {
    document.getElementById("modal1").style.display = "block";
    openModal("OK");
  } else {
    alert("がんばってるね！");
    closeModal();
  }
}

/* モーダルを開く */
function openModal(num) {
  if (num === "OK") {
    const problemNumber = document.getElementById("problemNumber");
    answerText(problemNumber);
  }
}

/* モーダルを閉じる */
function closeModal() {
  document.getElementById("modal1").style.display = "none";
}

/* 問題ごとの答えと解説を表示する */
function answerText(problemNumber) {
  const num = Number(problemNumber.textContent);
  const problem = problems[num];
  if (!problem) {
    document.querySelector(".answer").innerHTML = "答えはありません。";
    document.querySelector(".explanation").innerHTML = "この問題の解説は未登録です。";
    document.querySelector(".option-explanations").innerHTML = "";
    return;
  }

  document.querySelector(".answer").innerHTML = problem.answerHtml;
  document.querySelector(".explanation").innerHTML = problem.explanationHtml;
  document.querySelector(".option-explanations").innerHTML = problem.optionHtml;
}
