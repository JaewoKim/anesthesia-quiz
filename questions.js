const QUESTIONS = [
  {
    "q": "LD50, ED50, LD1, ED99가 표기된 다음 그래프를 보고 맞는 내용을 고르세요.",
    "options": [
      "ED99 < LD50이므로 임상에서 사용할 수 있다.",
      "ED50 < LD50이므로 임상에서 사용하기 적합한 약제이다.",
      "LD1 < ED99이므로 임상에서 사용하기 부적합한 약제이다.",
      "ED50 < LD1이므로 임상에서 사용할 수 있다."
    ],
    "answer": 2,
    "exp": "이 약물은 ED99(99% 유효용량)가 LD1(1% 치사용량)보다 커서 용량-반응 곡선과 용량-독성 곡선이 겹치므로, 충분한 치료효과를 얻으려는 용량에서 이미 일부 환자에게 치사 독성이 나타나 치료지수(LD50/ED50)와 무관하게 안전역(margin of safety)이 확보되지 않는다. 따라서 LD1 < ED99인 약제는 유효용량과 독성용량의 분리가 불가능하여 임상 사용에 부적합하다(정답 3번).",
    "cat": "약리",
    "lvl": "기본",
    "img": "images/q_001_p0.jpg"
  },
  {
    "q": "경요도전립선절제술(TURP) 중 발생하는 TURP syndrome에 대한 설명으로 옳은 것은?",
    "options": [
      "고나트륨혈증과 탈수가 특징이다",
      "저장성 관류액의 전신 흡수로 인한 저나트륨혈증과 수분 과부하가 핵심 기전이다",
      "수술 중 출혈이 전혀 없는 것이 특징이다",
      "앙와위(supine)에서만 발생한다"
    ],
    "answer": 1,
    "exp": "TURP syndrome은 저장성 세척액이 개방된 정맥동을 통해 흡수되어 저나트륨혈증, 수분 과부하, 신경학적·심혈관계 증상을 유발한다. 임상 양상에는 정신 변화, 시야 장애, 서맥, 저혈압 등이 포함된다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "성인에서 척수(spinal cord)는 일반적으로 어느 척추 높이에서 끝나는가?",
    "options": [
      "T12",
      "L1",
      "L3",
      "S2"
    ],
    "answer": 1,
    "exp": "성인에서 척수는 대후두공(foramen magnum)에서 시작하여 L1 높이에서 끝난다. 소아에서는 L3에서 끝나며 성장하면서 위로 올라간다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "전신마취가 가스교환에 미치는 영향에 대한 설명으로 옳은 것은?",
    "options": [
      "전신마취는 일반적으로 venous admixture를 5~10%로 증가시키며, 이는 의존성 폐 영역의 무기폐와 기도 허탈 때문일 가능성이 높다",
      "전신마취 중 alveolar dead space 증가는 자발호흡에서만 관찰된다",
      "흡입마취제는 hypoxic pulmonary vasoconstriction을 강화시킨다",
      "젊은 성인에서 venous admixture 증가가 가장 크게 나타난다"
    ],
    "answer": 0,
    "exp": "전신마취는 의존성 폐 영역의 무기폐와 기도 허탈로 인해 venous admixture를 5~10%로 흔히 증가시킨다. Alveolar dead space 증가는 조절호흡에서 가장 흔하고, 흡입마취제는 HPV를 억제하며(휘발성 마취제 ED50은 약 2 MAC), venous admixture 증가는 고령 환자에서 가장 크다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "68세 남자 환자가 복강경 담낭절제술 수술을 받기로 하였다. 환자는 이전에 충수돌 기염으로 응급 수술을 받았는데, 잠드는 약을 맞은 후에 숨쉬기 힘들어지며 기침을 심하게 한 기억이 있다고 하였다. Opioid 사용에 의한 기침으로 생각되어 마취 유도를 위한 fentanyl 투여 시 예방을 하기로 하였다. 다음 중 도움이 될 수 있는 방법은 무엇인가?",
    "options": [
      "Fentanyl을 가능한 빠르게 투여한다.",
      "Fentanyl을 150μg을 먼저 투여한 후에 25μg을 투여한다.",
      "α1 agonists를 먼저 투여한다.",
      "Dexamethasone을 먼저 투여한다."
    ],
    "answer": 3,
    "exp": "Fentanyl, administered through a peripheral intravenous cannula, provoked cough when it was injected rapidly, but the incidence of cough decreased significantly as the injection time was increased, as well as by the administration of 1.5 mg/ kg lidocaine 1 minute before fentanyl administration. A meta-analysis showed that the lowest effective dose of lidocaine on the risk of opioid-induced cough was 0.5 mg/kg. It was also reported that preemptive use of fentanyl 25 μg, administered 1 minute before bolus injection of fentanyl (125 or 150 μg), can effectively suppress fentanyl-induced cough. Propofol, α 2 agonists (clonidine, dexmedetomidine), inhalation of β 2 agonists (terbutaline, salbutamol), and NMDA- receptor antagonists (ketamine, dextromethorphan) were also effective for suppression of fentanyl-induced cough.",
    "cat": "응급",
    "lvl": "기본"
  },
  {
    "q": "복합부위 통증 증후군의 1형과 2형를 구분하기 위해 실시하는 검사는?",
    "options": [
      "방사선 검사",
      "적외선 체열검사",
      "핵의학 검사",
      "근전도 및 신경전도 검사"
    ],
    "answer": 3,
    "exp": "근전도 및 신경전도 검사는 1형과 2형의 진단 기준 차이인 주요 신경 손상 여부를 확인하여 2형을 확진하는 용도로 시행됩니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "75세 남자 뇌동맥류파열, 수술 전 심전도에서 qt prolonged, u wave, t inversion. 다음으로 할 것은?",
    "options": [
      "수술연기",
      "베타 차단제 사용한다.",
      "폐동맥 카테터를 넣는다.",
      "니트로글리세린 쓴다."
    ],
    "answer": 3,
    "exp": "지주막하출혈(파열 뇌동맥류)은 교감신경·카테콜아민 급증으로 신경성 심근손상(neurogenic stunned myocardium)을 일으켜 QT 연장, T파 역전, U파 등 허혈과 유사한 심전도 변화를 흔히 동반하므로, 이것이 가역적 신경성 변화인지 실제 심근경색인지 감별이 먼저 필요하다. 따라서 트로포닌-I·CK-MB 같은 심근손상 표지자를 측정하여 심근경색을 배제·확인하는 것이 다음 단계이며, 그 결과에 따라 수술 시기·혈역학 모니터링·약물 사용을 결정한다.",
    "cat": "기도관리",
    "lvl": "기본",
    "img": "images/q_007_p13.jpg"
  },
  {
    "q": "PACU에서 PONV 예방을 위해 사용하는 5-HT3 수용체 길항제(예: ondansetron)에 관한 설명으로 옳은 것은?",
    "options": [
      "진정, 추체외로 증상, 호흡억제를 흔히 유발한다",
      "가장 흔한 부작용은 두통이며 QT 간격을 약간 연장시킬 수 있다",
      "palonosetron이 dolasetron보다 QT 연장 위험이 더 크다",
      "간부전 환자에서 ondansetron 용량을 증량해야 한다"
    ],
    "answer": 1,
    "exp": "5-HT3 길항제는 권장용량의 수 배에서도 심각한 부작용이 거의 없으며 진정·추체외로 증상·호흡억제를 일으키지 않고, 가장 흔한 부작용은 두통이다. QT 연장은 dolasetron에서 더 흔하고 palonosetron에서 덜하며, ondansetron은 간에서 대사되므로 간부전 시 청소율 저하로 용량을 감량해야 한다.",
    "cat": "합병증",
    "lvl": "기본"
  },
  {
    "q": "성인 화상 환자에서 체표면적(TBSA)을 빠르게 추정하기 위해 사용하는 'Rule of Nines'에 따르면, 성인에서 한쪽 하지(전체) 전면+후면이 차지하는 비율은?",
    "options": [
      "9%",
      "18%",
      "27%",
      "36%"
    ],
    "answer": 1,
    "exp": "Rule of Nines에서 성인의 한쪽 하지 전체(전면+후면)는 18%를 차지한다. 머리·목 9%, 각 상지 9%, 몸통 전면 18%, 후면 18%로 구성된다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "방광 외측벽에 위치한 종양에 대해 경요도방광종양절제술(TURBT)을 시행할 때, 척추마취 또는 근이완제 없는 전신마취 상태에서 소작 절제경 사용 시 발생할 수 있는 문제는?",
    "options": [
      "폐쇄신경(obturator nerve) 자극에 의한 다리 내전",
      "대퇴신경 자극에 의한 슬관절 신전",
      "좌골신경 자극에 의한 족저 굴곡",
      "음부신경 자극에 의한 회음부 수축"
    ],
    "answer": 0,
    "exp": "방광 외측벽 종양은 폐쇄신경에 인접해 있어 소작 시 폐쇄신경이 자극되면 다리가 갑자기 내전될 수 있다. 이를 방지하기 위해 TURBT는 TURP와 달리 신경근차단을 동반한 전신마취로 시행하는 경우가 많다.",
    "cat": "부위마취",
    "lvl": "기본"
  },
  {
    "q": "39 주 산모가 입원 후 시행한 동맥혈 가스분석 소견이 다음과 같았다. 이에 대한 원인 해석으로 적절한 것은? pH 7.44 PaCO 30mmHg PaO 110mmHg HCO - 20mmol/L 2 2 3",
    "options": [
      "만기임신 시residual volume 10% 증가한다.",
      "Oxygen consumption이 20% 감소한다.",
      "Minute ventilation이 45-50% 증가한다.",
      "Tidal volume이 30% 감소한다."
    ],
    "answer": 2,
    "exp": "㉮ 만기임신 시residual volume 15-20% 감소한다. ㉯ 만기임신 시 oxygen consumption은 20-35% 증가한다. ㉱ 만기 임신시 tidal volume은 40-45% 증가한다. ㉲ respiratory rate은 0-15% 증가한다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "76세 환자가 위암을 진단받고 위 전 절제술이 예정되었다. 환자는 6개월 전 심근경 색으로 쓰러진 후 관상동맥 협착증을 진단받고 스탠트 시술을 받았다. 현재 aspirin과 clopidogrel을 복용 중이다. 수술 전 처치 내용으로 옳은 것은 무엇인가?",
    "options": [
      "비가역적 혈소판 억제 효과를 고려하여 aspirin은 7일 전 중단이 원칙이다.",
      "Clopidogrel은 수술 5일 전 중단하고 aspirin은 복용을 유지한다.",
      "수술 5일 전 aspirin과 clopidogrel을 모두 중단했다가 수술 후 복용을 시작한다.",
      "수술 7일 전부터 aspirin과 clopidogrel은 계속 중단한다."
    ],
    "answer": 1,
    "exp": "Whenever possible, surgical procedures should be performed following critical time windows (i.e., 30 days after BMS, or",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "호기지(expiratory limb)에서 측정한 '호기 일회호흡량'이 실제 환자에게 전달된 양보다 과대평가되는 경우와 가장 거리가 먼 것은?",
    "options": [
      "길고 순응도가 높은(compliant) 호흡 회로 튜브",
      "빠른 호흡수",
      "증가된 기도압",
      "짧고 단단한(non-compliant) 호흡 회로 튜브"
    ],
    "answer": 3,
    "exp": "호기지에서 측정한 일회호흡량에는 회로 튜브를 팽창시킨 가스가 포함되어 실제 환자 전달량보다 크게 측정된다. 이 차이는 길고 순응도 높은 튜브, 빠른 호흡수, 높은 기도압에서 커지므로 짧고 단단한 튜브는 오히려 차이가 작다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "심부전(congestive heart failure) 환자에서 ANP와 BNP의 관계로 옳은 것은?",
    "options": [
      "BNP는 항상 ANP의 약 20% 수준으로 유지된다",
      "심부전에서는 BNP가 ANP를 초과할 수 있다",
      "ANP는 심실 과팽창에만 반응하여 분비된다",
      "BNP는 뇌에서만 분비되고 심장에서는 분비되지 않는다"
    ],
    "answer": 1,
    "exp": "정상적으로 BNP는 ANP의 약 20% 수준이지만 울혈성 심부전에서는 BNP 수치가 ANP를 초과할 수 있다. BNP는 심실 용적·압력 증가(심실 과팽창)와 혈압 상승에 반응하여 뇌에서도 분비된다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "3도 화상 12일째 피부이식을 위해 전신마취를 시행한다 탈분극성 근이완제와 비탈분극성 근이완제의 민감 도 변화는?",
    "options": [
      "탈분극성 민감도 증가 / 비탈분극성 민감도 증가",
      "탈분극성 민감도 증가 / 비탈분극성 민감도 감소",
      "탈분극성 민감도 감소 / 비탈분극성 민감도 증가",
      "탈분극성 민감도 감소 / 비탈분극성 민감도 감소"
    ],
    "answer": 1,
    "exp": "해설: 화상 후 수일~수개월간 운동종판 외(extrajunctional) 부위에 미성숙형(γ-subunit) 아세틸콜린 수용체가 과발현(upregulation)되어, 탈분극성 약물(succinylcholine)은 이들 수용체에서 광범위한 탈분극과 대량의 K⁺ 유출을 일으켜 민감도가 증가하고 치명적 고칼륨혈증을 유발하므로 금기다. 반대로 비탈분극성 약물은 늘어난 수용체 수만큼 더 많은 용량이 필요한 저항(resistance) 상태가 되어 민감도가 감소한다(정답 2번).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "Le Fort II 또는 III 골절 환자에서 비강 삽관(nasal intubation)이 금기가 되는 가장 중요한 이유는?",
    "options": [
      "구인두 팩(throat pack) 삽입이 어렵기 때문",
      "두개저 골절(basilar skull fracture)이 동반될 수 있기 때문",
      "조절성 저혈압을 유지할 수 없기 때문",
      "정맥 공기색전증 위험이 높기 때문"
    ],
    "answer": 1,
    "exp": "Le Fort II와 III 골절은 두개저 골절과 동반될 수 있어, 비강 삽관 시 관이 두개강 내로 잘못 진입할 위험이 있다. 따라서 두개저 골절이 의심되거나 동반된 경우 비강 삽관은 금기이다.",
    "cat": "기도관리",
    "lvl": "기본"
  },
  {
    "q": "흡입마취제의 uptake에 영향을 미치는 요인들에 대한 설명 중 옳은 것은?",
    "options": [
      "혈액/가스 분배 계수가 클수록 용해도가 작으며 마취유도는 촉진된다.",
      "심장박출량이 감소하면 마취유도가 촉진된다.",
      "용해도가 낮은 마취제일수록 심박출량에 의한 영향이 많다.",
      "용해도가 낮은 마취제일수록 환기에 의한 영향이 많다."
    ],
    "answer": 1,
    "exp": "혈액/가스 분배 계수가 클수록 용해도가 크며 마취유도는 지연된다. 용해도가 높은 마취제일수록 심박출량과 환기에 의한 영향이 많다. 우좌션트가 있는 경우 마취유도가 지연된다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "64세 여자환자가 자궁경부암 진단 후 우측 골반 내 통증을 호소하여 다음과 같은 시술을 시행하였다. 시행한 시술의 명칭은?",
    "options": [
      "상하복신경총 차단 (Superior hypogastric plexus block)",
      "성상신경절 차단 (Stellate ganglion block)",
      "외톨이 신경절 차단술 (Ganglion impar block)",
      "복강신경절 차단술 (Celiac plexus block)"
    ],
    "answer": 0,
    "exp": "제시된 그림은 상하복신경차단술을 시행하는 그림이다.",
    "cat": "마취일반",
    "lvl": "기본",
    "img": "images/q_018_p98.jpg"
  },
  {
    "q": "",
    "options": [
      "형 간염으로 인한 간경화로 말기 간질환을 가진 60 세 남자 환자가 간이식 수술을 받기",
      "말기 간 질환 환자는 낮은 심박출량, 높은 전신혈관 저항, 낮은 동맥 혈압을 특징으로 하는",
      "2차원 경흉부 심초음파는 문맥폐고혈압에 대해 유용한 선별검사(screening test)이다.",
      "수술 중 정맥정맥 우회술(venovenous bypass)은 전부화 감소는 완화시켜주지만 내장 울혈은"
    ],
    "answer": 2,
    "exp": "㉮ 말기 간 질환 환자는 높은 심박출량, 낮은 전신혈관 저항, 낮은 동맥 혈압을 특징으로 하는 과역동적 순환(hyperdynamic circulation)이 일반적인 특징이다. ㉰ 수술 중 정맥정맥 우회술(venovenous bypass)은 전부하 감소는 완화시키고 내장울혈을 줄여준다. ㉱ 간폐증후군(hepatopulmonary syndrome)이 있는 경우, 폐내 혈관확장은 폐의 기저부에 우세하기 때문에 서있는 자세에서 바로누운 자세에 비해 저산소혈증이 악화된다. ㉲ 이식간의 문합이 끝난 후 재관류후 증후군(post-reperfusion syndrome)이 나타나면 서맥을 회복시키고 전신혈관저항 증가, 심근 수축력 증대를 위해 epinephrine의 사용이 좋다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "외래 수술(ambulatory surgery) 후 안전한 퇴원 기준에 대한 설명으로 옳은 것은?",
    "options": [
      "퇴원 전 활력징후는 최소 30분간 안정적이어야 한다",
      "최근 외래수술센터(ASC)에서는 퇴원 전 음수(drinking)와 배뇨(voiding)를 점점 더 필수 요건으로 요구하지 않는 추세이다",
      "마취과 의사 단독으로 퇴원을 결정할 수 있다",
      "책임 있는 성인 동반자 없이도 환자가 혼자 귀가할 수 있다"
    ],
    "answer": 1,
    "exp": "최근 ASC에서는 퇴원 전 음수와 배뇨를 필수로 요구하지 않으며, 대신 필요 시 수분보충·도뇨를 위한 추후 관리 계획과 지침을 제공한다. 활력징후는 최소 1시간 안정, 퇴원은 마취·수술 담당자(또는 대리인) 양측 결정, 책임 있는 성인 동반자가 필수이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "정맥로 확보가 어려운 심정지 상황에서 기관내관(endotracheal tube)을 통해 투여할 수 있는 약물이 아닌 것은?",
    "options": [
      "에피네프린(epinephrine)",
      "리도카인(lidocaine)",
      "날록손(naloxone)",
      "중탄산나트륨(sodium bicarbonate)"
    ],
    "answer": 3,
    "exp": "리도카인, 에피네프린, 아트로핀, 날록손, 바소프레신은 기관내 투여가 가능하나 중탄산나트륨은 불가능하다. 기관내 투여 시 정맥 권장량의 2~2.5배를 생리식염수나 증류수 5~10mL에 희석하여 사용한다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "PFT 소견 obstructive pattern. 이 환자의 WHO기준에 따른 pul.HTN grade는?",
    "options": [
      "Gr 1",
      "Gr 2",
      "Gr 3",
      "Gr 4"
    ],
    "answer": 2,
    "exp": "WHO 폐고혈압 분류에서 obstructive pattern(FEV1/FVC 감소)은 COPD를 시사하며, 만성 저산소증에 의한 폐혈관 수축(hypoxic pulmonary vasoconstriction)과 폐혈관상(pulmonary vascular bed) 파괴로 폐고혈압이 발생하는 Group 3(폐질환 및/또는 저산소증에 의한 폐고혈압)에 해당한다. 참고로 Group 1은 특발성·결합조직질환 등 PAH, Group 2는 좌심부전, Group 4는 만성 혈전색전성(CTEPH), Group 5는 다인자성/원인불명이므로, 폐쇄성 환기장애 소견은 Group 3로 분류하는 것이 기전적·임상적으로 타당하다.",
    "cat": "마취일반",
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
    "q": "45세 남자가 요통을 주소로 내원하였다. 환자는 하지 방사통이 없는 요통을 호소하 였으며, 오래 앉아 있거나 허리를 구부릴 때 통증이 증가하였다. 이 환자의 MRI는 다음과 같다. 가장 가능성이 높은 진단명은?",
    "options": [
      "추간판탈출증",
      "척추관협착증",
      "추간판내장증",
      "후관절증후군"
    ],
    "answer": 2,
    "exp": "하지방사통이 없는 요통이 있고 추간판 압력을 증가 시키는 자세에서의 통증 증가와 MRI에서 high-intensity zone의 소견이 보이면 추간판내장증을 의심하여야 한다.",
    "cat": "마취일반",
    "lvl": "기본",
    "img": "images/q_024_p89.jpg"
  },
  {
    "q": "비탈분극성 근이완제의 역전 속도에 관한 설명으로 옳지 않은 것은?",
    "options": [
      "Edrophonium은 보통 neostigmine보다 빠르게 역전시킨다",
      "고용량 neostigmine이 저용량보다 더 빠른 역전을 보인다",
      "깊은 차단(deep block)이 얕은 차단(shallow block)보다 역전이 쉽다",
      "중간작용 근이완제가 장시간작용 근이완제보다 빨리 역전된다"
    ],
    "answer": 2,
    "exp": "역전 속도는 약물·용량·차단 깊이 등에 좌우되며, 얕은 차단이 깊은 차단보다 역전이 더 쉽다. 따라서 '깊은 차단이 더 쉽다'는 설명은 틀렸다.",
    "cat": "마취일반",
    "lvl": "기본"
  }
];
