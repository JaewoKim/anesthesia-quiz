const QUESTIONS = [
  {
    "q": "외래(ambulatory) 및 office-based 마취 환경에 대한 설명으로 옳은 것은?",
    "options": [
      "다수의 동반질환을 가진 환자는 외래 시술 대상이 될 수 없다",
      "마취 제공자는 마취 시행 전 시설의 운영 인프라와 정책이 수용 가능한 마취 표준에 부합하는지 확인해야 한다",
      "ASA의 권고사항은 한 번 제정되면 변경되지 않는다",
      "office-based 마취는 주로 응급 개복수술 환자에게 시행된다"
    ],
    "answer": 1,
    "exp": "마취 제공자는 해당 환경에서 마취를 제공하기 전에 운영 인프라와 정책이 수용 가능한 마취 진료 표준에 부합하는지 확인해야 한다. ASA 권고사항은 변경·수정될 수 있어 주기적으로 검토해야 하며, office-based 마취는 주로 미용 수술이나 치과 시술 환자에게 시행된다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "표면 심전도에서 다음 중 거의 항상 기저 심질환을 시사하는 전도장애는 무엇인가?",
    "options": [
      "우각차단(RBBB)",
      "좌각차단(LBBB)",
      "1도 방실차단",
      "정상 PR 간격을 동반한 단독 RBBB"
    ],
    "answer": 1,
    "exp": "좌주각의 지연 또는 차단으로 생기는 좌각차단(V5에서 상승각이 지연된 넓은 R파)은 거의 항상 기저 심질환을 동반한다. 반면 우각차단은 선천성 이상이거나 기질적 심질환을 반영할 수 있어 단독으로는 의미가 상대적으로 낮다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "51세 여자 환자가 3개월 전부터 시작된 우측 얼굴 부위의 통증을 주소로 마취통증의학과 외래를 방문하였다. 통증은 우측 아래턱에 해당하는 얼굴 부위와 우측 아래 어금니 주변 잇몸에 위치하고, 날카롭게 찌르는 양상이거나 찌릿한 느낌이었다. 통증 정도는 숫자 통증 등급으로 10 점 만점에 8 점으로, 말을 하거나, 씹거나, 세수할 때, 칫솔질할 때 유발되는 양상으로 잠을 잘 때에는 통증이 없다고 하였다. 통증은 1 분 정도 지속되었는데, 외부 병원에서 carbamazepine 등의 약물을 투여 받았으나 효과가 크지 않았다. 통증 부위에 대한 감각 이상은 없었다. 이 환자의 치료로 적절한 것은?",
    "options": [
      "경추부 경막외신경차단술 (Cervical epidural block)",
      "안면신경차단술 (Facial nerve block)",
      "상악신경차단술 (Maxillary nerve block)",
      "안와하신경 알코올 신경파괴술 (Infraorbital alcohol neurolysis)"
    ],
    "answer": 3,
    "exp": "상기 환자는 삼차신경(trigeminal nerve)의 V3(하악신경) 영역에 발생한 삼차신경통으로 진단해볼 수 있다. 삼차신경통은 전형적으로 세수, 면도, 칫솔질과 같은 무해한 자극에 의해 강력하고 발작적인 전기 쇼크와 같은 통증이 삼차신경(trigeminal nerve)의 영역에서 발생한다. 통증발작은 수초에서 2 분까지 지속되며 자극에 의해 통증이 유발되지 않는 불응기가 존재한다. 통증은 V2, V3 영역 또는 V2 와 V3 영역 모두에서 발생하는 경우가 93%를 차지한다. 치료는 약물치료, 신경차단 및 수술로 나뉘며, 약물치료는 carbamazepine 이 일차선택약으로 선호된다. 약물치료에 잘 반응하지 않는 환자들의 경우 삼차신경절의 경피적신경파괴술, 동결절제술, 풍선압박술, 고주파열응고술 등의 침습적 방법을 사용해 볼 수 있다. ㉮㉯㉰㉱ 환자의 증상과 관련이 없다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "심장수술 후 ICU에서 환자를 관찰하던 중, 출혈 경향(hemostatic defect)이 없는 상태에서 첫 2시간 동안의 흉관 배액량이 어느 정도일 때 과다 출혈로 간주되어 외과적 재개흉(reexploration)을 고려해야 하는가?",
    "options": [
      "50 mL/h 이상",
      "100 mL/h 이상",
      "250~300 mL/h (10 mL/kg/h) 이상",
      "20 mL/h 이상"
    ],
    "answer": 2,
    "exp": "지혈 결함이 없는 상태에서 수술 후 첫 2시간 동안 흉관 배액이 250~300 mL/h(10 mL/kg/h)를 초과하면 과다 출혈로 보고 재개흉이 필요할 수 있다. 이후에도 100 mL/h를 넘는 배액은 우려되며, 충분히 배액되지 않은 흉강 내 출혈은 심장압전(cardiac tamponade)을 유발할 수 있다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "자동차 사고로 인한 다발성 외상 환자가 응급 수술을 위해 수술실로 이송되었다. 환 자의 검체를 채취하여 혈액형 검사를 의뢰하기는 하였으나 응급 수술까지 결과가 나오지 않은 상태에서 대량 출혈로 응급수혈을 해야 한다면 이론상으로 가장 안전한 선택은?",
    "options": [
      "O형 RhD 음성 전혈",
      "O형 RhD 양성 전혈",
      "O형 RhD 음성 농축적혈구",
      "O형 RhD 음성 신선동결혈장"
    ],
    "answer": 2,
    "exp": "응급상황에서 환자의 혈액형을 모르고, ABO 및 RhD 혈액형검사도 할 시간이 없으면 O형 RhD음성혈액을 사용한다. O형 혈액의 적혈구에는 A와 B의 항원이 없고 혈청에 항A 항체와 항B항체가 있으므로 O형 적혈구가 용혈되지 않는다. 그러나 수혈자의 적혈구가 O 형의 공혈혈청내에 있는 항체에 의해 용혈되며 O형 공혈자의 혈청에 높은 역가의 용혈성 IgG와 IgM이 있는 경우도 있어 O형이 아닌 수혈자의 적혈구를 용혈한다. 그러므로 혈장량 을 줄인 농축적혈구를 사용해야 한다.",
    "cat": "응급",
    "lvl": "기본"
  },
  {
    "q": "키 154cm, 체중 140kg의 54세 여성이 전신마취하에 복강경 수술을 받기로 예정되 어 있었다. 신경근차단을 위하여 rocuronium 으로 유도 및 유지되었다. (총 용량170 mg IV) 170분의 수술이 끝날 때, 엄지모음근에서 최대 4연속 (TOF) 자극 후 2개의 반응이 확 인되었다. 환자의 중심 심부 온도는 35.6°C였다. Sugammadex 200 mg을 정맥으로 투여하 였다. 환자가 완전히 깨어 있는 상태에서 5분 후에 TOF 비율 0.9를 얻었다. 그런 다음 기 관 튜브를 제거하고 환자를 회복실로 옮겼다. 10분 후 환자는 호흡부전 증상을 호소하여 기 관 삽관과 프로포폴 진정을 실시했다. 이 증례와 관련된 설명으로 가장 부적합한 설명은?",
    "options": [
      "전신마취하 수술 후 호흡기계 부작용이 발생하기 쉬운 환자군에 해당한다.",
      "신경근감시를 통해서 신경근차단으로부터 완전한 회복을 감시하는 것이 필요하다.",
      "이 환자군에서 길항제의 용량은 과다투여를 피하기 위하여 lean/ideal body weight에",
      "Sugammadex 추가 투여로서 호흡부전 증상을 완화시킬 수 있었을 것이다."
    ],
    "answer": 2,
    "exp": "비만환자에서 신경근차단제와 길항제의 올바른 사용 Obesity are susceptible to critical respiratory events in the postoperative period, including hypoventilation, hypoxia, airway obstruction, and acute respiratory failure. 길항제인 Sugammadex의 용량부족에 의한 신경근차단의 재현(recurarization)이 원인으 로 생각할 수 있다. Sugammadex의 용량은 actual body weight 기준으로 하는게 추천된다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "지주막하출혈 후 경두개 도플러(TCD)에서 중대뇌동맥(MCA) 혈류속도가 130 cm/s로 측정되었다. 두개외 내경동맥 속도와의 비교(Lindegaard ratio)에서 MCA 속도가 내경동맥 속도의 3배 이상이었다. 가장 적절한 해석은?",
    "options": [
      "뇌혈관 연축(vasospasm)",
      "충혈성 혈류(hyperemia)",
      "정상 소견",
      "뇌사 임박"
    ],
    "answer": 0,
    "exp": "MCA 정상속도는 약 55 cm/s이며 120 cm/s 초과 시 연축 또는 충혈을 시사한다. Lindegaard ratio(MCA/두개외 내경동맥)가 3 이상이면 충혈보다 뇌혈관 연축을 더 시사한다.",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "중증근무력 환자의 신경근차단 및 회복에 관한 내용으로 옳은 것은?",
    "options": [
      "동일한 효과를 위해 탈분극성 신경근차단제 감량해서 사용한다.",
      "sugammadex 를 이용한 가역유도시 cholinergic crisis를 주의해야 한다.",
      "sugammadex 사용이 어려울 경우 rocuronium 보다 cisatracurium 의 사용이 유",
      "환자 각성시 자발호흡이 충분하다면 발관 후 추가 감시 불필요하다."
    ],
    "answer": 2,
    "exp": "All nondepolarizing relaxants have been successfully and uneventfully used with careful monitoring in patients with MG. Because the sensitivity of any individual MG patient is unknown, these drugs should be titrated in 1/10 of the usual dose. Sensitivity to nondepolarizing neuromuscular blocking drugs is increased during the coadministration of a potent inhaled anesthetic. Upon completion of the surgical procedure, the residual relaxation may be reversed using incremental doses of an anticholinesterase drug while neuromuscular transmission is carefully monitored to obtain maximum antagonism yet avoid a cholinergic crisis. For reversal of neuromuscular blockade, the recommended doses of sugammadex are 2 mg per kg in patients who have two twitches present on train-of-four stimulation, 4 mg per kg in patients who have 1 to 2 posttetanic twitches, and 16 mg per kg for immediate reversal in patients who have just received an intubating dose of 1.2 mg per kg of rocuronium. If sugammadex is not available, cisatracurium may be the preferred neuromuscular blocking drug because of its short elimination half- life, small volume of distribution, lack of cumulative effect, and high clearance. On the other hand, inadequately treated pain related to abdominal or thoracic surgery can inhibit ventilatory effort and thus can also worsen respiratory status. Nonopioid pain regimens should be used whenever possible. Following the VATS thymectomy, this patient would benefit from thoracic epidural analgesia via the catheter that was placed preoperatively. Neuraxial analgesia and regional anesthesia where appropriate greatly reduce the total dose of opioid required compared to parenteral administration to achieve an equivalent analgesic effect. Paravertebral blocks have been demonstrated to decrease pulmonary complications such as atelectasis and pneumonia following thoracotomy, whereas thoracic epidural analgesia has not. More recently, continuous erector spinae plane blocks have been used to effectively control postoperative pain after thoracotomy. Intravenous nonsteroidal anti-inflammatory drug (NSAID) regimens have also been effective in controlling pain in MG patients without causing respiratory depression. If oral or parenteral opioids are used, the dose should be decreased for MG patients receiving anticholinesterase therapy because these medications have been reported to increase the efficacy of opioids.",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "중추신경계에 작용하지 않으면서 위장관 변비 등 말초 opioid 작용을 선택적으로 길항하기 위해 사용되는 약물로 옳은 것은?",
    "options": [
      "Naloxone과 Naltrexone",
      "Nalbuphine과 Butorphanol",
      "Alvimopan과 Methylnaltrexone",
      "Fentanyl과 Morphine"
    ],
    "answer": 2,
    "exp": "Alvimopan과 methylnaltrexone은 중추신경계 밖 말초 조직의 opioid 수용체에 작용하는 선택적 길항제로 변비 등 말초성 부작용을 차단한다. Naloxone·naltrexone은 순수 길항제이지만 중추 작용을 포함하며, nalbuphine·butorphanol은 작용제-길항제이다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "5세 여아, 사시수술 예정이다. 일주일 전부터 기침, 콧물, 가래증상이 있었다. 입원 후 38.8도까지 고열이 올 랐고 현재 호전되었다. 안과의와 상의하여 수술진행을 어떻게 할 것인가?",
    "options": [
      "해열제 복용 후 열 내리면 수술 진행한다.",
      "항생제, 해열제 치료 후 증상 호전되면 수술 진행한다.",
      "퇴원하고, URI 치료 후에 증상 없어지면 바로 수술한다.",
      "퇴원하여 4주 이후까지 수술 연기한다."
    ],
    "answer": 3,
    "exp": "상기도감염, 특히 발열·화농성 가래를 동반한 하기도 침범 소견이 있었던 경우 기도 과민성(airway hyperreactivity)이 회복 후 4~6주까지 지속되어 후두경련·기관지경련·저산소혈증 등 마취 중 호흡기 합병증 위험이 유의하게 증가한다. 사시수술은 응급성이 없는 선택적 수술이므로 부모의 요구나 단순 해열 여부와 무관하게 증상 완전 회복 후 최소 4주 이상 연기하는 것이 안전하다.",
    "cat": "마취일반",
    "lvl": "기본",
    "img": "images/q_010_p0.jpg"
  },
  {
    "q": "82세 여자환자가 10일전 목욕 후 일어나가다 발생한 심한 허리통증으로 내원하였다. 환자는 경구투약 및 물리치료에도 통증이 점점 더 심해지는 양상을 보였으며, 특히 누웠다",
    "options": [
      "일어날 때나 움직일 때 통증이 심하고, 가만히 누워있으면 통증이 감소되는 양상을 보",
      ": T1 강조영상 B : T2 강조영상 C: 지방억제 T2 강조영상",
      "제 1 요추 후종인대골화증 (OPLL)",
      "제 2 요추 압박골절 (L2 compression fracture)"
    ],
    "answer": 3,
    "exp": "압박골절이 발생한 경우, 대부분 움직임에 따라 통증이 악화되고, 안정시에는 통증이 감소되는 특징을 보이며, 이환된 척추뼈몸통에 따른 피부분절에 따라 통증을 동반하는 경 우가 많다. 골 자체로 인한 통증은 치유되면 호전되나 주로 척추주위근육, 특히 척추 기립 근들(erector spine muslce) 에 심한 압통을 호소한다. X-선 검사나 MRI 로 진단할 수 있 으며, 척추체의 급성골절의 경우 T1강조영상에서는 저신호강도를, 지방억제 T2 강조영상에 서는 고신호강도를 나타낸다.",
    "cat": "마취일반",
    "lvl": "기본",
    "img": "images/q_011_p107.jpg"
  },
  {
    "q": "Transversus abdominis plane (TAP) block에서 국소마취제가 주입되는 정확한 근막면(plane)은 어디인가?",
    "options": [
      "External oblique와 internal oblique 사이",
      "Internal oblique와 transversus abdominis 사이",
      "Transversus abdominis와 복막(peritoneum) 사이",
      "Rectus abdominis와 posterior rectus sheath 사이"
    ],
    "answer": 1,
    "exp": "TAP block의 목표 신경(subcostal T12, ilioinguinal L1, iliohypogastric L1)은 내복사근(internal oblique)과 복횡근(transversus abdominis) 사이의 근막면을 주행한다. 따라서 바늘 끝은 두 근육의 근막층 사이에 위치시켜 국소마취제로 transversus abdominis plane을 채운다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "좌상엽 절제술을 시행받는 72세 남자가 마취 유도 후 극심한 저혈압과 함께 ETCO 2 감소를 보였다. 당시 시행한 흉부 초음파 영상 (M mode)이 다음과 같다면 진단은??",
    "options": [
      "Cardiac tamponade",
      "Tension pneumothorax",
      "Massive pleural effusion",
      "Pulmonary thromboembolism"
    ],
    "answer": 1,
    "exp": "M-mode of lung of lung ultrasound illustrative of the “lung point” for diagnosis of pneumothorax. The sudden inspiratory transition from a parallel line pattern indicative of absence of lung motion (pneumothorax) to a granular pattern indicative of lung tissue can be observed (arrow);",
    "cat": "순환/생리",
    "lvl": "기본",
    "img": "images/q_013_p116.jpg"
  },
  {
    "q": "Sellick maneuver(윤상연골 압박)의 주된 목적으로 가장 적절한 것은?",
    "options": [
      "후두 시야 개선을 통한 삽관 용이",
      "위 내용물 역류 및 흡인 방지",
      "성문하 부종 감소",
      "기관지 경련 예방"
    ],
    "answer": 1,
    "exp": "Sellick maneuver는 윤상연골을 압박하여 식도를 폐쇄함으로써 신속순차유도(RSI) 중 위 내용물의 역류와 폐 흡인을 예방하기 위한 술기이다. 흡인 위험이 높은 환자(full stomach)에서 전통적으로 사용되어 왔다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "에토미데이트(etomidate)에 관한 다음 설명 중 옳은 것은?",
    "options": [
      "수용성이 좋아 생리적 pH에서 이온화 분율이 높다",
      "propylene glycol에 용해되어 있어 주사 시 통증을 유발할 수 있다",
      "히스타민을 유리시켜 혈압을 떨어뜨린다",
      "경구 및 정맥 투여 모두 가능하다"
    ],
    "answer": 1,
    "exp": "에토미데이트는 산성 용액에서 불안정하고 생리적 pH에서 지질용해도 문제가 있어 propylene glycol에 용해되며, 이로 인해 주사 시 통증이 흔히 발생한다. 사전에 리도카인을 정맥 투여하면 통증을 줄일 수 있다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "간 합성 기능을 평가하는 데 가장 유용하며, 비타민 K 의존성 응고인자(II, VII, IX, X)의 결핍을 반영하는 검사는?",
    "options": [
      "프로트롬빈 시간(PT)",
      "혈중 암모니아",
      "혈청 빌리루빈",
      "혈청 알부민"
    ],
    "answer": 0,
    "exp": "프로트롬빈 시간(PT)은 반감기가 짧은 인자 VII를 포함한 비타민 K 의존성 응고인자를 반영하여 급성 간 합성 기능 저하를 민감하게 나타낸다. 혈청 알부민은 반감기가 길어 만성 간기능 평가에 유용하다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "Laparoscopic nephrectomy 진행중 PIP 30이상으로 오르고, SpO2 95%로 감소, EtCO2 46mmHg로상승, ABGA 해보니까 pH 7.24, PaCO2 61, PaO2 72, HCO3 24, SaO2 94%, CXR 상 right side capnothorax 소견",
    "options": [
      "긴장성 기흉 막기 위해 흉관 삽입한다.",
      "C line 잡고 CVP를 모니터링한다.",
      "대량수혈 준비한다.",
      "PEEP을 적용한다."
    ],
    "answer": 3,
    "exp": "복강경 수술 중 발생한 capnothorax는 횡격막 결손이나 후복막을 통해 CO₂가 흉강으로 유입된 것으로, 공기가 아닌 CO₂는 혈액에 빠르게 흡수되어 대개 자연 소실되므로 긴장성 기흉과 달리 흉관 삽입이 필요 없고 기복 압력을 낮추고 과환기·FiO₂ 증량 같은 보존적 처치로 대응한다. 이때 PEEP을 적용하면 흉강 내 CO₂가 폐포 쪽으로 밀려 재팽창과 환기-관류 개선을 유도하여 저산소혈증과 무기폐를 교정하므로 정답은 PEEP 적용이다.",
    "cat": "호흡/생리",
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
    "exp": "고령은 POCD(수술 후 인지기능장애)의 가장 일관되게 입증된 독립 위험인자로, 노화에 따른 신경 예비능(neural reserve) 감소, 콜린성 신경전달 저하, 수술·마취로 유발된 신경염증(neuroinflammation)과 혈액뇌장벽 취약성에 대한 노인 뇌의 감수성 증가가 그 기전이다. 뇌졸중·치매·기능저하 기왕력도 위험을 높이지만 이는 대개 고령과 동반되어 나타나는 종속적 인자이며, 장시간 전신마취의 독립적 기여는 대규모 연구(예: ISPOCD)에서 일관되게 입증되지 않아 고령이 '가장' 핵심적인 위험인자로 꼽힌다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "비탈분극성 차단으로부터의 회복 적절성을 평가할 때 fade가 가장 뚜렷하게 관찰되어 선호되는 자극 방식은?",
    "options": [
      "Single twitch",
      "Train-of-four",
      "Tetanic 또는 double-burst stimulation",
      "Posttetanic count"
    ],
    "answer": 2,
    "exp": "Fade는 train-of-four나 반복 twitch보다 sustained tetanic stimulation 및 double-burst stimulation에서 더 명확하게 나타나므로, 이 두 방식이 비탈분극성 차단의 회복 적절성 판정에 선호된다. 임상적 회복은 fade의 부재와 잘 상관한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "약물용출 스텐트(drug-eluting stent)를 가진 환자의 수술 전후 관리에 대한 설명으로 옳은 것은?",
    "options": [
      "척추마취를 시행하기 위해 마취과 의사가 단독으로 항혈소판제를 중단할 수 있다",
      "항혈소판 치료 중단 시 혈전증과 수술 전후 심근경색 위험이 매우 증가한다",
      "약물용출 스텐트 환자는 항혈소판제 중단과 무관하게 안전하다",
      "V3, V4 중간 흉부유도의 경미한 ST 상승은 항상 허혈을 의미한다"
    ],
    "answer": 1,
    "exp": "약물용출 스텐트 환자에서 항혈소판 치료를 중단하면 스텐트 혈전증과 수술 전후 심근경색 위험이 매우 증가한다. 마취과 의사는 비수술적 이유로 환자 및 심장내과와 위험-이익을 논의하지 않고 임의로 항혈소판제를 중단해서는 안 되며, V3·V4의 경미한 ST 상승은 젊은 환자에서 정상 변이일 수 있다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "50 세 여자가 주로 밤에 자는 동안 발생하는 왼손 저림 증상을 주소로 내원하였다. 왼손 저림은 손바닥과 왼손 엄지부터 중지까지의 저림을 호소하였으며, 시진 상 왼손의 엄지두덩근(thenar muscle)의 위축이 관찰되었다. 경추 MRI 검사 상 특이 소견은 보이지 않았다. 다음 이학적 검사 중 이 환자에서 양성 소견을 보일 가능성이 가장 높은 검사는?",
    "options": [
      "Hawkin’s test",
      "Adson’s test",
      "Patrick’s test",
      "Phalen’s test"
    ],
    "answer": 3,
    "exp": "손목굴증후군(carpal tunnel syndrome)은 정중신경의 포착으로 인한 신경병증으로 오래되면 저림 증상이 계속될 수 있으며, 엄지두덩근(thenar muscle)의 위축, 손가락 내전근의 위축이 올 수 있다. 근전도나 신경전도검사의 이상소견, 진찰상 Tinel sign 양성, Phalen’s test 양성 등으로 진단한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "근긴장증 환자에서 마취 중 발생하는 과도한 근수축에 관한 설명으로 옳은 것은?",
    "options": [
      "악성고열(malignant hyperthermia)의 발현으로 즉시 dantrolene을 투여해야 한다",
      "in vitro 검사에서 악성고열 양성으로 보고된 사례가 많다",
      "악성고열이 아니라 근긴장증의 악화를 반영할 가능성이 높다",
      "호흡근을 침범하여 수 일간 마비가 지속된다"
    ],
    "answer": 2,
    "exp": "이들 근긴장증 환자 중 악성고열 in vitro 검사 양성으로 보고된 예는 없으며, 적출 근육이 succinylcholine 노출 시 지연성 근긴장 수축을 보인다. 따라서 마취 중 과도한 근수축은 악성고열이 아니라 근긴장증의 악화를 반영할 가능성이 높다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "다음 그림은 Cardiopulmonary bypass machine의 기본 형태를 도식화한 것이다. 이에 대한 설명 중 가장 적절한 것을 고르시오.",
    "options": [
      "Venous reservoir는 압력이 낮은 정맥의 혈액을 원활하게 machine으로 가져오기 위",
      "CPB 동안 동맥내 CO 분압은 산소 공급기를 지나는 inspired oxygen",
      "일부의 centrifugal pump에서 pulsatile blood flow가 가능하다.",
      "Left ventricle의 팽창이 myocardial preservation을 막기 때문에 left ventricular"
    ],
    "answer": 3,
    "exp": "㉮ Circuit blood 대부분의 경우 gravity drainage로 venous reservoir에 모인다. ㉯ CPB 동안 동맥내 CO 분압은 산소 공급기를 지나는 total gas flow에 따라 달라진다 2 ㉰ 일부의 roller pump에서 pulsatile blood flow가 가능하다. ㉲ Total CPB 상황에서도 intercostal artery나 aorta에서 나온 bronchial artery나 thebesian vessel을 통해 좌심실에 혈액이 모이고 팽창될 수 있다.",
    "cat": "약리",
    "lvl": "기본",
    "img": "images/q_023_p58.jpg"
  },
  {
    "q": "TKRA한 환자에서 통증조절을 위해 block하려고 한다. 재활을 위해 최대한 운동신경을 보전하기 위한 방법 은?",
    "options": [
      "femoral n. block",
      "obturator n. block",
      "fasciailiaca compartment block",
      "adductor canal block"
    ],
    "answer": 3,
    "exp": "Adductor canal block은 대퇴신경의 감각분지인 복재신경(saphenous n.)과 슬관절로 가는 감각신경을 선택적으로 차단해 TKRA 후 진통을 제공하면서, 대퇴사두근을 지배하는 운동신경은 대부분 차단하지 않아 femoral n. block에 비해 quadriceps 근력 저하와 낙상 위험이 적다. 따라서 조기 보행·재활을 위해 운동신경 보존이 중요한 TKRA 환자에서 femoral nerve block의 진통 효과는 유사하게 유지하면서 운동기능을 최대한 보전할 수 있는 방법이다.",
    "cat": "신경/생리",
    "lvl": "기본"
  },
  {
    "q": "임신 24주 39세 임산부가 acute cholecystitis 진단 받고 laparoscopic cholecystectomy를 시행 받을 예정이다. 전신마취 관리 중 고려해야 할 사항으로 옳은 설명은?",
    "options": [
      "현재 주수에서는 left uterine displacement는 필요하지 않다.",
      "과환기를 통해 태아의 산소 공급을 증가시킨다.",
      "흡인 방지를 위해 rapid sequence induction을 시행한다.",
      "태아의 안전을 위해 산모의 수술 후 pain control은 되도록 하지 않는다."
    ],
    "answer": 2,
    "exp": "㉮ Left uterine displacement to relieve aortocaval compression after 20 weeks’ gestational age ㉯ Goal ETCO2",
    "cat": "순환/생리",
    "lvl": "기본"
  }
];
