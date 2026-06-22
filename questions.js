const QUESTIONS = [
  {
    "q": "전공의가 술기시행 중 사고발생시 지도전문의에게 책임을 묻는 원리?",
    "options": [
      "분업 신뢰의 원칙",
      "주의의무의 원칙",
      "지시책임의 원칙",
      "?"
    ],
    "answer": 2,
    "exp": "지도책임의 원칙은 전공의(피지도자)가 단독으로 적정 술기를 수행할 역량·자격을 아직 갖추지 못한 상태에서, 지도전문의가 직접 지도·감독해야 할 주의의무를 다하지 못해 사고가 발생한 경우 그 감독 소홀을 근거로 지도자에게 책임을 귀속시키는 법리로, 대등한 전문가 간 책임을 분산시키는 \"분업·신뢰의 원칙(2번)\"과 정반대로 적용된다. 즉 피지도자의 미숙·무자격이 예견 가능한 상황에서는 신뢰의 원칙이 배제되고 지도전문의의 선임·감독상 과실(민법 제756조 사용자책임·의료법상 지도감독의무)이 인정되는 것이 핵심 기전이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "약력학과 약동학에 대한 다음 설명 중 옳은 것은?",
    "options": [
      "Ke0는 중심구획에서 말초구획으로의 속도 상수이다.",
      "0차 역학을 따르는 경우 시간당 일정량의 약물이 감소한다.",
      "청소율은 제거속도 상수를 분포 용적으로 나누어 계산한다.",
      "이력 현상은 중심구획과 말초구획의 농도차에 의해 발생한다."
    ],
    "answer": 1,
    "exp": "0차 역학(zero-order kinetics)은 대사효소·수송체가 포화되어 농도와 무관하게 단위시간당 **일정량(constant amount)**이 제거되는 양상으로, 페니토인 고용량·에탄올·고용량 aspirin이 대표적이며 따라서 보기 2번이 옳습니다(Stoelting's Pharmacology & Physiology in Anesthetic Practice). 나머지는 ① Ke0는 혈장-효과처(effect-site) 평형 속도상수로 중심→말초는 k12이고, ③ 청소율은 Cl = Ke × Vd(곱)이며, ④ 이력현상(hysteresis)은 혈장농도와 효과처농도 간 시간지연(ke0)에 기인하고, ⑤ 분포용적은 Vd = 약물량 ÷ 농도(나눗셈)이므로 모두 틀렸습니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "남자, 60갑년 흡연력 복강경 위절제술 받는 중, pip가 증가한 그래프 (두 개 그래프 제시되었는데, plateau pr.",
    "options": [
      "I:E ratio 올린다.",
      "호기말 양압을 올린다.",
      "기도내관 흡인한다.",
      "일회 호흡량을 줄인다."
    ],
    "answer": 2,
    "exp": "최고기도압(PIP)은 상승했으나 안정기압(plateau pressure)이 정상이라는 것은 폐·흉벽 유순도는 보존된 채 **기도 저항만 증가**했음을 의미하며(PIP−plateau = 저항 성분), 이때 호기말 양압·일회호흡량·호흡수 조절이나 I:E 비 조정은 저항 자체를 해소하지 못합니다. 60갑년 흡연력의 COPD 의심 환자에서 기도 저항 급증의 가장 흔하고 즉시 교정 가능한 원인은 **분비물·점액에 의한 기관내관 폐쇄**이므로, 기도내관 흡인이 정답입니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "Isoflurane과 remifentanil로 마취 중 가장 영향이 적은 것은?",
    "options": [
      "BAEP",
      "MEP",
      "SSEP",
      "VEP"
    ],
    "answer": 0,
    "exp": "BAEP는 청신경·뇌간 청각경로에서 발생하는 단순 oligosynaptic(소수 시냅스) 전위로, 흡입마취제(isoflurane)와 opioid에 거의 영향받지 않아 술중 감시에서 가장 안정적인 modality입니다(Sloan, *J Clin Neurophysiol* 2002). 반면 다수의 피질 시냅스를 경유하는 MEP·SSEP·VEP는 isoflurane의 시냅스 억제에 민감하며, 특히 VEP는 피질 의존도가 가장 높아 마취 영향이 제일 큽니다(Banoub, *Anesthesiology* 2003).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "젊은 여자환자 160cm에 118kg BMI 45인 환자가 bariatric 수술하러 내원하였다. 특이 과거력 없었고 PaO2",
    "options": [
      "그냥 예정대로 수술한다",
      "obese hypoventilation syndrome에 의해 central ventilatory drive가 저하되어 있다.",
      "수술 전 비만치료로 먹던 약들은 수술에 크게 영향 미치지 않는다",
      "IV잡기 힘드므로 IM으로 약 준다"
    ],
    "answer": 1,
    "exp": "해설: 고도비만(BMI 45)에서는 만성 야간 저환기로 인한 CO₂ 축적이 지속되면 중추 화학수용체가 고탄산혈증에 둔감해져(reset) central ventilatory drive가 저하되고, 이로 인해 주간 고탄산혈증(PaCO₂ >45 mmHg)과 저산소혈증을 동반하는 obese hypoventilation syndrome(Pickwickian syndrome)이 발생한다 — 따라서 보기 2번이 정답이다. 임상적으로 이런 환자는 마약성 진통제·벤조디아제핀 등에 의한 호흡억제 위험이 크므로 깊은 진정(5번)은 금기이며, OHS·OSA 평가와 수술 전 최적화가 필요하다(근거: Miller's Anesthesia, OHS 진단기준 BMI≥30 + 주간 PaCO₂≥45 mmHg).",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "67세 여환 낙상후에 지속되는 등허리통증으로 내원했다. 이학적 검사 상 흉요추 이행부에 압통, 타진통이 있",
    "options": [
      "흉추 9,10,11번 후지내측지",
      "흉추 10,11,12번 후지내측지",
      "흉추 11,12번, 요추 1번후지내측지",
      "흉추 12번, 요추 1,2번후지내측지"
    ],
    "answer": 1,
    "exp": "해설: 후관절(zygapophyseal joint)은 한 분절이 **같은 레벨과 바로 위 레벨 후지내측지(medial branch)의 이중 분절 지배**를 받으므로, 흉요추 이행부 압통의 책임 관절인 T11–T12 및 T12–L1 후관절을 모두 차단하려면 T10·T11·T12 내측지를 표적해야 한다. 또한 흉추 내측지는 횡돌기 상연·상관절돌기 기저부의 일정한 골성 표지를 따라 주행해 이 세 레벨을 묶어 차단하는 것이 진단적·치료적 medial branch block의 해부학적 근거가 된다(Bogduk, *Practice Guidelines for Spinal Diagnostic Procedures*).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "이질통 발생기전, 연관된 신경섬유는?",
    "options": [
      "A-alpha",
      "A-beta",
      "A-delta",
      "C fiber"
    ],
    "answer": 1,
    "exp": "이질통(allodynia)은 정상적으로 통증을 전달하지 않는 굵은 유수신경섬유인 **Aβ-fiber**가, 신경손상 후 척수후각의 중추감작(central sensitization)·시냅스 재배선으로 인해 통각경로로 잘못 연결되면서 가벼운 촉각 자극이 통증으로 인지되는 현상이다(정답 2번). 반면 A-delta·C fiber는 본래 통각 수용기로서 정상 통증(nociceptive pain)을 매개하므로 이질통의 핵심 기전 섬유가 아니다(근거: Woolf CJ, *Pain* 2011 중추감작 리뷰; IASP allodynia 정의).",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "glycocalyx model에서 모세혈관압이 10mmHg일때혈장량 가장 증가하는 모세혈관압 및 수액은? (뭐 이런거 같",
    "options": [
      "5mmHg,0.45% NS 760ml",
      "5mmHg, 0.9% NS 760ml",
      "5mmHg, 5%albumin 250ml",
      "15mmHg,0.45% NS 760ml"
    ],
    "answer": 1,
    "exp": "**해설:** 개정 Starling(glycocalyx) 모델에서는 모세혈관압이 낮을수록(5mmHg) 글리코칼릭스 하부 간질의 oncotic 구배가 유지되어 *재흡수는 일어나지 않고 여과(filtration)만 최소화*되므로 투여 수액이 혈관 내에 더 오래 잔류하고, 같은 저압 조건에서는 세포내로 분포하는 저장성 0.45% NS보다 세포외액에 국한되는 등장성 0.9% NS가 혈장량을 더 많이 늘린다. 따라서 저압(5mmHg) + 등장성 대용량(760ml) 조합이 5% albumin 250ml(투여량 자체가 1/3 수준)보다 절대 혈장량 증가가 커 정답이 된다(Woodcock & Woodcock, *Br J Anaesth* 2012; revised Starling principle).",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "TKRA한 환자에서 통증조절을 위해 block하려고 한다. 재활을 위해 최대한 운동신경을 보전하기 위한 방법",
    "options": [
      "femoral n. block",
      "obturator n. block",
      "fasciailiaca compartment block",
      "adductor canal block"
    ],
    "answer": 3,
    "exp": "복재신경(saphenous nerve) 등 주로 감각분지를 차단하는 adductor canal block은 대퇴사두근(quadriceps)으로 가는 운동분지를 대부분 보존하여, femoral nerve block 대비 사두근 근력 약화와 낙상 위험이 적어 TKRA 후 조기 재활·보행에 유리하다(Jaeger et al., Anesthesiology 2013 — 사두근 근력 보존 우월성 RCT). Fascia iliaca block과 femoral nerve block은 대퇴신경 운동분지를, obturator block은 내전근 운동신경을, popliteal block은 하퇴 운동신경을 차단하므로 운동신경 보존 목적에는 부적합하다.",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "burst suppression 일으키는 마취제는?",
    "options": [
      "desflurane",
      "N2O",
      "ketamine",
      "fentanyl"
    ],
    "answer": 0,
    "exp": "흡입마취제인 desflurane은 GABA-A 수용체를 강화하고 피질 신경활동을 농도의존적으로 억제하여, 고용량(대략 1.5 MAC 이상)에서 EEG상 평탄구간과 고진폭 활동이 교대로 나타나는 burst suppression을 유발한다(volatile anesthetics·propofol·barbiturate 공통 기전). 반면 N2O와 ketamine은 NMDA 길항제로 오히려 고주파 활동을 증가시키고, fentanyl(μ-opioid)과 dexmedetomidine(α2 작용제, 자연수면 유사 뇌파)은 단독으로 burst suppression을 일으키지 못한다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "periOP MI에 관하여 옳은 것은?",
    "options": [
      "Type II MI이다.",
      "수술 후 24시간 이후에 잘생긴다.",
      "수술 중 허혈은 ST elevation이 많다.",
      "허혈은 transmural injury가 많다."
    ],
    "answer": 0,
    "exp": "해설: 주산기 심근경색의 대다수는 빈맥·저혈압·빈혈·저산소증에 의한 산소 수요-공급 불균형으로 발생하는 **Type II MI**로, 급성 죽상반 파열·혈전(Type I)보다 흔하다(보기 1 정답). 따라서 허혈은 심내막하(subendocardial)에 국한되어 ST 하강(ST depression)으로 나타나는 경우가 많고, transmural injury나 ST 상승은 드물며, 발생 시점도 수술 후 24시간 이후가 아니라 첫 48시간 이내(특히 24~48시간)에 집중된다(보기 2·3·4 오답).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "50cm 3.2kg 생후2개월 남아 전신마취 하에 서혜부 탈장 수술 예정이다. 32주 출생..당시 일주일간 기계호흡",
    "options": [
      "당일 입퇴원이 가능하다.",
      "모유수유 시 4시간 금식한다.",
      "통증 조절은 필요하지 않다.",
      "마취직후 수혈을 한다."
    ],
    "answer": 1,
    "exp": "해설: ASA 금식 가이드라인상 모유는 위 배출이 빠른 반고형식과 달리 4시간이면 위에서 충분히 비워지므로(맑은 액체 2시간·조제분유 6시간·고형식 6시간과 구분), 정답은 모유수유 4시간 금식이다. 나머지 보기는 32주 출생·1주 기계호흡 기왕력의 교정연령 약 40주 미숙아로서 수술 후 무호흡(postoperative apnea) 고위험군이라 당일 퇴원 불가(교정연령 60주까지 야간 입원·무호흡 모니터링 필요)이고, 수술 통증 조절은 반드시 필요하며, 일률적 수혈 적응증이 없고, 미숙아 망막병증(ROP) 위험 때문에 고농도 산소 노출은 피해 SpO₂ 목표 범위 내 최소 산소를 사용해야 하므로 모두 오답이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "노인에서 하지수술 시 전신마취에 비해 부위마취의 장점은?",
    "options": [
      "전신마취보다 폐합병증이 감소한다.",
      "전신마취보다 인지기능 감소한다.",
      "부위마취에서 DVT 발생이 적다.",
      "부위마취에서 출혈이 적다."
    ],
    "answer": 3,
    "exp": "정답: 부위마취에서 출혈이 적다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "인지기능 괜찮은 노인. 신경통에 대해 지속적, 효과적으로 통증을 관리하기 좋은, 응답률도 좋은 다음 통증",
    "options": [
      "Visual analogue scale",
      "Numeric rating scale",
      "Visual rating scale",
      "Mcgill pain index"
    ],
    "answer": 1,
    "exp": "해설: Numeric rating scale(NRS)는 0–10 정수 척도로 노인이 숫자만 답하면 되어 인지 부담과 시각·운동 협응 요구가 낮고, 구두(전화 포함)로도 시행 가능해 만성 신경통의 반복적·지속적 추적에서 완료율(응답률)이 VAS보다 높다는 근거가 있습니다(VAS는 선상 표시·미세운동·시력 요구로 노인 미완성·오류율이 높음). McGill pain index는 통증의 질을 다차원적으로 평가하나 어휘·시간 부담이 커 반복 모니터링에 부적합하고, behavior rating scale은 자가보고가 가능한 인지 정상 환자에서는 1차 선택이 아니어서 NRS가 정답입니다.",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "반폐쇄식 호흡회로로 전신마취 중 이산화탄소 흡수제가 고갈되었다. 고탄산혈증을 줄이기 위한 방법은?",
    "options": [
      "100% 산소를 공급한다.",
      "신선가스유량을 증가시킨다.",
      "일회호흡량을 증가시킨다.",
      "용수환기를 시행한다."
    ],
    "answer": 1,
    "exp": "반폐쇄식 회로에서 흡수제가 고갈되면 호기 CO₂가 회로 내에 재호흡되어 고탄산혈증이 발생하므로, 신선가스유량을 충분히 높이면(분당환기량을 초과하는 고유량) 회로가 사실상 반개방식처럼 작동하여 CO₂가 함유된 호기가스가 재호흡되기 전에 배기밸브로 씻겨 나간다. 100% 산소 공급·일회호흡량 증가·용수환기는 환기량만 늘릴 뿐 이미 흡입되는 CO₂ 자체를 제거하지 못하고, 아산화질소 중단도 저산소증 예방과는 관련 있으나 고탄산혈증 교정과는 무관하다(Miller's Anesthesia, breathing system rebreathing 원리).",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "7세 환아 3시간 전에 물 100ml 마셨고, 수술직전까지 껌 씹었다. 어떻게 해야 되나?",
    "options": [
      "8시간연기",
      "6시간연기",
      "4시간연기",
      "2시간연기"
    ],
    "answer": 3,
    "exp": "해설: 맑은 액체(물 100 mL)는 ASA 금식 지침상 마취 2시간 전까지 허용되므로 3시간 경과한 본 환아는 흡인 위험 기준을 충족하며, 껌은 위액 분비를 약간 늘리지만 위 내용물 부피·pH를 임상적으로 의미 있게 변화시키지 않아 2023 ASA 가이드라인은 껌 저작만을 이유로 한 수술 연기를 권고하지 않는다. 따라서 추가 금식 없이 예정대로 수술을 진행하는 것이 옳다(근거: ASA Practice Guidelines for Preoperative Fasting, 2023 update).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "isoflurane, sevoflurane, desflurane 중에서 관상동맥 이완 가장 많이 하는 것과 적게 하는 것은?",
    "options": [
      "sevoflurane - isoflurane",
      "sevoflurane - desflurane",
      "Isoflurane – sevoflurane",
      "isoflurane - desflurane"
    ],
    "answer": 2,
    "exp": "해설: Isoflurane은 직경 100 μm 이하의 관상동맥 저항세동맥(resistance arteriole)을 직접 확장시키는 작용이 휘발성 마취제 중 가장 강해, 협착 부위 원위부 혈류를 정상 분지로 빼앗는 관상동맥 도류현상(coronary steal)이 고전적으로 우려되었다. 반면 sevoflurane은 세 약제 중 직접적인 관상동맥 확장 효과가 가장 약하며, desflurane은 중간 정도여서 정답은 isoflurane(최대)–sevoflurane(최소)이다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "다음 중 노인에서 brain sensitivity의 증가로 투여량을 감량해야 하는 것은?",
    "options": [
      "Cisatracurium",
      "Etomidate",
      "Propofol",
      "Vecuronium"
    ],
    "answer": 2,
    "exp": "노인에서 propofol은 약동학적 청소율 감소뿐 아니라 뇌의 약력학적 민감도 자체가 증가하여(동일 효과부위 농도에서 더 깊은 진정·BIS 저하 발생) 유도·유지 용량을 모두 감량해야 한다. 반면 cisatracurium·vecuronium은 신경근접합부에 작용하고, etomidate·thiopental(pentothal)의 노인 감량은 주로 중심구획 분포용적 감소 등 약동학적 변화에 기인하므로 \"brain sensitivity 증가\"라는 약력학적 기전과는 거리가 있다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "혈액가스 분배계수에 관한 설명 중 옳은 것은?",
    "options": [
      "분배계수가 작으면potency 가 크다.",
      "계수가 낮으면 마취유도가 지연된다.",
      "분배계수가 1.8이라는 것은 혈액과 폐포의 가스 분압차가 1.8배라는 뜻이다.",
      "평형상태는 혈액과 폐포의 마취가스 분압이 같아 가스 이동이 없는 상태이다."
    ],
    "answer": 3,
    "exp": "해설: 혈액가스 분배계수(blood:gas partition coefficient)는 평형상태에서 혈액과 폐포의 마취가스 **분압**이 동일해져 더 이상 순(net) 이동이 없는 상태를 정의하는 값으로, 보기 4가 옳다(분배계수는 분압이 같아진 평형에서 혈액에 용해된 가스의 농도/양 비율을 의미하므로 보기 3의 \"분압차 1.8배\"는 틀림). 분배계수가 낮을수록 혈액 용해도가 작아 폐포 분압이 빠르게 상승해 마취유도가 **빨라지며**(보기 2 오답), potency는 혈액가스계수가 아니라 지질가스 분배계수(MAC와 반비례)로 결정되므로 보기 1도 틀리다(Miller's Anesthesia 기준).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "승모판 질환을 앓고 있는 임산부가 LMWH으로 항응고치료를 받고 있다. 경막외 카테터를 제거하던 중 카",
    "options": [
      "2시간 후",
      "6시간 후",
      "12시간 후",
      "24시간 후"
    ],
    "answer": 3,
    "exp": "해설: 승모판 질환으로 치료용량(therapeutic dose) LMWH를 투여받는 환자에서는 항-Xa 활성이 충분히 소실되어 척수경막외 혈종 위험이 최소화되도록, 마지막 투여 후 **24시간**이 경과한 뒤 경막외 카테터를 조작·제거해야 한다(ASRA 2018 신경축 차단-항응고 가이드라인 기준). 이는 예방용량 LMWH의 12시간 대기와 구별되며, 치료용량은 반감기(약 4~7시간)의 3~5배에 해당하는 시간을 확보해 잔존 항응고 효과로 인한 출혈성 합병증을 예방하기 위함이다.",
    "cat": "부위마취",
    "lvl": "기본"
  },
  {
    "q": "위궤양 있는 환자 무릎 관절염 통증 무슨약?",
    "options": [
      "aspirin",
      "naproxen",
      "celecoxib",
      "ibuprofen"
    ],
    "answer": 2,
    "exp": "해설: Celecoxib는 선택적 COX-2 억제제로, 위점막 보호 prostaglandin 합성을 담당하는 COX-1을 보존하기 때문에 비선택적 NSAID(aspirin·naproxen·ibuprofen) 및 COX-2 선호적이지만 고용량에서 COX-1도 억제하는 meloxicam보다 소화성 궤양·출혈 위험이 낮다(CLASS trial; ACG NSAID 가이드라인). 따라서 활동성 위궤양 병력 환자의 골관절염 통증에는 위장관 안전성이 가장 우수한 celecoxib가 적합하며, 위험도가 높을 경우 PPI 병용을 추가로 고려한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "Carotidendarterectomy 수술 중에 TCD와 cerebral oximetry 중에 옳은 것은?",
    "options": [
      "TCD는 직접적으로 뇌허혈을 측정한다.",
      "TCD는 뇌의 작은동맥의 혈류 속도를 측정한다.",
      "Oximetry는뇌동맥의 산소포화도를 측정한다.",
      "Oximetry는뇌 심부조직의 산소포화도를 측정한다."
    ],
    "answer": 3,
    "exp": "해설: TCD(transcranial Doppler)는 중대뇌동맥(MCA) 등 대혈관의 혈류 *속도*를 간접 지표로 측정할 뿐 허혈 자체를 직접 측정하지 못하며, cerebral oximetry(NIRS)는 전두엽 피질 등 뇌 심부조직이 아닌 표재성 피질의 국소 산소포화도(rSO₂, 동맥+정맥 혼합 혈액)를 반영한다. 따라서 보기 1·2·3·4는 모두 측정 대상을 잘못 기술한 것이고, NIRS의 rSO₂는 기저치 대비 약 20% 감소를 허혈 의심 기준으로 흔히 인용하나 절대값·변화율에 대한 **표준화된 절대 임계치가 확립되어 있지 않아** 보기 5가 정답이다 (근거: Miller's Anesthesia 9th ed. neuromonitoring 챕터; Thiele et al., *Anesth Analg* 2015 NIRS 리뷰).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "hypothermic CPB도중 대동맥 겸자 후 pump flow를 올릴 경우 다음 중 옳은 것은?",
    "options": [
      "심실확장의 소실",
      "심근보호효과 증가",
      "뇌경색발생률 증가",
      "전신관류량 감소"
    ],
    "answer": 2,
    "exp": "해설: Hypothermic CPB에서 대동맥 겸자 후 pump flow를 올리면 동맥 캐뉼라를 통한 관류량과 함께 뇌로 전달되는 미세색전(공기·죽상반 debris)의 부하가 증가하여 뇌경색 발생률이 높아진다(고유량일수록 cerebral embolic load 증가, Stroke/Ann Thorac Surg CPB 관류 연구). 나머지 보기는 틀린데, 대동맥이 겸자된 상태이므로 관상동맥 혈류·심근보호는 pump flow가 아닌 cardioplegia에 의존하고(②⑤ 무관), 유량을 올리면 전신관류량은 오히려 증가하므로(④ 반대) 정답은 ③ 뇌경색 발생률 증가다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "다음 중 POCD의 risk factor로 '가장' 관련 깊은 것은?",
    "options": [
      "뇌졸중의 기왕력",
      "고령",
      "장시간의 전신마취",
      "치매"
    ],
    "answer": 1,
    "exp": "고령은 ISPOCD1 연구(Moller et al., *Lancet* 1998)에서 수술 후 장기 인지기능저하(POCD, postoperative cognitive dysfunction)의 유일하게 일관되게 입증된 독립적 위험인자로, 노화에 따른 신경세포 예비능(cognitive reserve) 감소·신경염증 취약성 증가·혈액뇌장벽 투과성 변화가 핵심 기전입니다. 뇌졸중 기왕력·치매·일상생활 기능저하는 기저 인지손상을 반영하는 교란변수이고 장시간 전신마취는 근거가 약해, '가장' 관련 깊은 단일 인자는 고령입니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "26G whitacre needle로 pop은 분명히 났는데, 척수액 안나온다.",
    "options": [
      "10초정도 더 기다려보고 베벨을 돌려본다",
      "척수액이 안 나오니 기침을 해보라고 한다.",
      "일단 마취제를 시험적으로 줘본다.",
      "spinal needle을 cephalad 쪽으로 향해 다시 시행한다."
    ],
    "answer": 0,
    "exp": "26G Whitacre는 pencil-point 침으로 측면 개구부(orifice)가 침 끝보다 약간 근위부에 있고 구경이 작아 CSF 유출 속도가 느리므로, pop으로 경막 관통이 확인됐다면 10초가량 기다리는 것만으로 척수액이 차오를 수 있다. 또한 개구부가 신경근이나 경막 주름에 일부 가려져 있을 수 있어 베벨(개구부)을 90~180° 회전시키면 개구부가 지주막하강 내강으로 향하면서 유출이 확인되므로, 굳이 더 진입(5번, dural sleeve·신경 손상 위험)하거나 기침·시험 주입(부정확·전척수마취 위험) 같은 침습적·비특이적 조작 전 1·회전이 가장 안전하고 합리적인 1차 조치다.",
    "cat": "마취일반",
    "lvl": "기본"
  }
];
