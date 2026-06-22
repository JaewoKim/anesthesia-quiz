const QUESTIONS = [
  {
    "q": "50cm 3.2kg 생후2개월 남아 전신마취 하에 서혜부 탈장 수술 예정이다. 32주 출생..당시 일주일간 기계호흡 치료를 받았으나 현재 청색증이나 호흡곤란 없다. Hb 10.9, 다음 중 옳은 것은?",
    "options": [
      "당일 입퇴원이 가능하다.",
      "모유수유 시 4시간 금식한다.",
      "통증 조절은 필요하지 않다.",
      "마취직후 수혈을 한다."
    ],
    "answer": 1,
    "exp": "정답 ②: ASA 금식 지침상 모유는 위 배출이 분유·우유(6시간)보다 빠르지만 맑은 액체(2시간)보다는 느려 흡인 위험을 줄이기 위해 4시간 금식이 권고되며, 이 영아는 청색증·호흡곤란이 없어 추가 제한이 필요 없다. 나머지는 모두 틀린데, ①·③·⑤는 교정연령 60주 미만(현재 약 40주) 미숙아 출신이라 수술 후 무호흡 위험으로 당일 퇴원 불가·입원 모니터링이 필요하고 통증 조절도 반드시 해야 하며 미숙아망막병증(ROP) 악화를 막기 위해 고농도 산소를 피해야 하고, ④의 Hb 10.9 g/dL은 생후 2개월 생리적 빈혈 범위 내 정상치로 수혈 적응증이 아니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "Spinal anesthesia로 인한 고위 차단 후 발생하는 apnea의 원인으로 가장 연관성 이 높은 것은?",
    "options": [
      "Intercostal muscle paralysis",
      "Abdominal muscle paralysis",
      "Phrenic nerve palsy",
      "Brainstem hypoperfusion"
    ],
    "answer": 3,
    "exp": "Diaphragmatic paralysis in the absence of total spinal anesthesia does not occur with neuraxial block, since even a sensory block as high as C3 will only produce a motor block at T1 through T",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "흡입마취제의 특성 옳은 것은?",
    "options": [
      "등적이완 시간을 연장시키지 않는다.",
      "심근보호에 가장 중요한것은 protein kinase A이다.",
      "ATP Sensitive K 채널이 허혈성 심근보호에 중요하다",
      "SA node의 자동능을 촉진한다."
    ],
    "answer": 2,
    "exp": "흡입마취제(특히 sevoflurane·isoflurane)의 심근보호는 anesthetic preconditioning 기전으로, mitochondrial·sarcolemmal ATP-sensitive K⁺ 채널(mitoK_ATP)의 개방이 핵심이며 이는 PKC(protein kinase C, PKA 아님) 활성화와 reactive oxygen species 신호를 거쳐 미토콘드리아 막전위를 안정화하고 허혈-재관류 손상을 줄인다(보기 2·3 감별 포인트). 따라서 CABG·AVR 등 심장수술에서 sevoflurane은 troponin I 분비를 오히려 감소시키고(보기 5 오류), 등척성 이완 시간을 연장하며 SA node 자동능은 억제하므로(보기 1·4 오류) 정답은 3번이다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "재태 주수 35주의 임산부가 임신 30주부터 악화된 운동시 호흡곤란으로 내원하였다. 환자는 이전에 특이 병력이 없었으나 경흉부 심초음파 검사에서 폐동맥 수축기압 96 mmHg의 심한 폐동맥고혈압 및 우심실의 심한 확장 소견을 보였다. 산모의 상태를 고려하 여 익일 제왕절개 수술을 시행하기로 결정하였다. 이 산모의 제왕절개 수술을 위한 마취 방법으로 가장 적절한 것은?",
    "options": [
      "Single-shot spinal anesthesia",
      "Slowly titrated epidural anesthesia",
      "General anesthesia",
      "General anesthesia with pulmonary artery catheter monitoring"
    ],
    "answer": 1,
    "exp": "폐동맥고혈압 산모의 제왕절개수술을 위한 마취 방법으로는 Slowly titrated epidural or combined spinal-epidural anesthesia가 가장 선호된다.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "노인 환자에서 수술 후 섬망의 위험인자와 관리에 대한 내용으로 다음 중 옳은 것은?",
    "options": [
      "우울증과는 상관이 없다.",
      "청력이 저하되어 보청기를 사용하던 환자의 경우, 수술 후 조용한 환경을 만들기 위해",
      "유치 도뇨관은 가능한 빨리 제거한다.",
      "통증 조절을 위한 일차 약제로 meperidine을 사용한다."
    ],
    "answer": 2,
    "exp": "㉮ 우울증은 섬망의 위험 인자 중 하나이다. ㉯ 시력, 청력보조는 섬망의 예방과 치료를 위한 비약물적 중재에 해당한다. ㉰ 유치 도뇨관을 가능한 빨리 제거하여 요로감염을 방지하고 환자의 활동을 촉진한다. ㉱ Meperidine은 Beer’s criteria에 포함되는 약제로, 노인 환자의 통증 조절에 추천되지 않는다. ㉲ 항정신병약물이 섬망의 기간과 정도를 줄여주는지에 대한 연구들은 일관되지 않은 결 과를 보여주고 있으며, 예방적 사용은 권고되지 않고 있다. 치매 환자에서 항정신병약물 을 사용하였을 때 사망률이 증가하는 것으로 알려져 있다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "목표농도조절주입(target controlled infusion, TCI)에 대한 적절한 설명을 고르시오.",
    "options": [
      "사용자가 설정한 목표농도를 유지하기 위하여 투여속도를 일정하게 유지하는 투여방",
      "일정 시간 간격에 따라 사용자가 주입속도를 변경해주어야 목표농도에 도달할 수 있다.",
      "특히 미국에서 TCI를 진료 현장에서 주로 활용하고 있다.",
      "효과처농도 TCI를 시행하기 위해서는 약동학 모수 이외에 약력학 모수 중에서 약물의"
    ],
    "answer": 3,
    "exp": "㉮㉯ 투여속도가 계속 변화되는 variable rate infusion 방법이다. ㉰ 미국 FDA에서는 진료영역에서 TCI의 사용을 승인하지 않아서, 연구목적으로만 사용되 고 있다. ㉱ 효과처농도 TCI를 시행하기 위해서는 약동학 모수 이외에 약력학 모수 중에서 약물의 혈액뇌평형속도상수(ke0)가 추가로 필요하다. ㉲ 모형이 다르면 투여량도 달라진다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "다음 그래프 및 이에 관련된 설명으로 옳은 것을 고르시오.",
    "options": [
      "Differential block으로 axon myelination, diameter, function의 차이에 의해 척추",
      "(a) Pin prick (b) Temperature (c) Light touch",
      "C fiber는 myelinated fiber로 diameter가 가장 작고, pain, temperature,",
      "Motor neuron의 경우 local anesthetics에 sensitivity가 높아 차단이 빠르게 나타나"
    ],
    "answer": 0,
    "exp": "㉯ (a) Temperature (b) Pin prick (c) Light touch ㉰ C fiber는 unmyelinated fiber로 diameter가 가장 작고, pain, temperature, postganglionic sympathetic function에 관여하며, local anesthetics에 높은 감수성을 나 타낸다. ㉱ Motor neuron의 경우 local anesthetics에 sensitivity가 낮아 차단이 느리게 나타나다. ㉲ Sympathetic block level이 sensory block level보다 먼저 차단된다. 차단되는 dermatome의 높이가 더 높다.",
    "cat": "마취일반",
    "lvl": "기본",
    "img": "images/q_007_p38.jpg"
  },
  {
    "q": "기저 질환이 없는 39세 여자 환자가 수술실에 입실하여 심계항진을 호소하였다. 혈 압 100/70mmHg, 심박수 160bpm으로 측정되었다. 입실 후 시행한 심전도에서 다음과 같 은 소견을 보였다. 우선적으로 시행해 볼 수 있는 처치로 가장 적절한 것은?",
    "options": [
      "Cardioversion 100-120J (biphasic waveform)",
      "Cardioversion 200J (monophasic waveform)",
      "Adenosine 6mg 정주",
      "Lidocaine 1mg/kg 정주"
    ],
    "answer": 2,
    "exp": "해설: 좁은 QRS·규칙적 160회/분 빈맥은 방실결절 회귀성 빈맥(AVNRT) 등 발작성 상심실성빈맥(PSVT)에 합당하며, 혈압이 유지된 안정 환자이므로 전기 심율동전환보다 약물 치료가 우선되고 미주신경 자극이 실패하면 adenosine이 1차 약제이다(2020 ACLS/SVT 가이드라인). Adenosine은 방실결절 전도를 일시 차단해 회귀회로를 끊어 동율동으로 전환시키며, verapamil은 저혈압·심부전 위험이 있고 lidocaine은 심실성 부정맥용이라 부적절하다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "52세 남자가 우측 상완부 절단 수술 후 발생한 우측 손과 손목의 통증을 주소로 내 원하였다. 통증은 수술 후 약 2주가 경과한 시점부터 시작되었고 저리고, 불로 지지는 것처 럼 화끈거리고 칼로 찌르는 양상의 통증이라고 한다. 수술 직후 환자는 본인의 우측 팔꿈 치, 전완, 손이 모두 그대로 있는 느낌이었는데, 시간이 점차 경과하면서 절단 이하 부위가 짧아지면서 손이 점점 절단면에 가까워지는 것처럼 느껴졌으며, 현재는 우측 손목과 손이 절단면 바로 아래에 붙어 있는 느낌이라고 한다. 이처럼 절단 수술 이후 존재하지 않는 손 과 손목이 절단면 바로 아래 붙어 있는 것으로 느끼는 현상을 무엇이라고 하는가?",
    "options": [
      "moving",
      "shortening",
      "telescoping",
      "omission"
    ],
    "answer": 2,
    "exp": "환지통 환자에서 telescoping 현상은 전체 환자의 1/3에서 나타나는 것으로 보고된 다. 수술 후 점차적으로 환지 부위가 작아지거나 단축되는 것으로 느끼며 나중에는 절단된 손이나 발이 절단면 바로 아래 달려 있는 듯한 느낌이나 손가락 또는 발가락이 절단면 아 래에 달려 있는 느낌을 호소하기도 한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "대장암 수술을 받은 50세 남자환자가 문합 부위 누출에 의한 복막염이 발생하여 응 급 개복술후 중환자실로 이송한 후 호흡 보조를 위해 인공호흡기 치료를 시작하였다. 기계 환기를 시행하던 중 그래픽 모니터링에서 점선내와 같은 압력-기류 곡선이 관찰되었다. 다 음 중 적절한 처치는?",
    "options": [
      "흡기시간을 늘려준다.",
      "흡기유량을 증가시킨다.",
      "일회호흡량을 감소시킨다.",
      "호기말양압을 적용한다."
    ],
    "answer": 1,
    "exp": "유량부조화가 발생한 경우로 기계환기기의 유양이 환자의 흡기 유량을 충족시키지 못하는 경우에 발생한다. 파형에서는 환자 기도압의 증가가 오목하게 나타난다.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "번 사이로 척추마취를 시행하였고, 마취높이는 흉추 6 번까지 였다. 수술을 위해 소독을 하던 중 갑자기 극심한 서맥과 함께 혈압이 60/40 mmHg 가 되었다. 응급으로 시행한 경흉부 심초음파 검사에서 다음과 같은 소견을 얻었다. 진단은?",
    "options": [
      "Systolic anterior motion (SAM)",
      "Severe vasovagal reflex",
      "Acute pulmonary embolism",
      "Sick sinus syndrome."
    ],
    "answer": 2,
    "exp": "㉮ a 2-D Doppler image by transesophageal echocardiography showing SAM, septal-mitral contact, and an interleaflet gap (shown by asterisk) between the anterior and posterior mitral valve leaflets. b Transesophageal 2-D color flow Doppler showing turbulence across the LVOT and a posteriorly directed jet of mitral regurgitation. ㉯ An echocardiogram of the left parasternal long axis view demonstrating the severely prolapsed posterior leaflet of the mitral valve (arrow). A 2-dimensional Doppler cardiogram showing severe mitral regurgitation and an enlarged left atrium. ㉰ Echocardiography shows D-shaped left ventricle (arrowheads), McConnell’s sign (arrow) ㉱ Left ventricular noncompaction cardiomyopathy (LVNC) is significantly associated with sick sinus syndrome and may require event monitoring. LVNC can be missed on echocardiography and may require cardiac magnetic resonance imaging for diagnosis. ㉲ Severe hypovolemic shock. Kissing walls of left ventricle on parasternal short axis view is shown. The left ventricle is obliterated during systole. Hypovolemic shock is characterized by a decrease in stressed volume. Accordingly, the cardiac volumes and pressures are usually low. This is reflected by small size of cardiac cavities, sometimes associated with virtual left end systolic volume or “kissing ventricles”. The inferior and superior vena cava sizes are usually small and disclose significant respiratory variations. Left heart filling pressures are low: low mitral E wave, low E/E’ ratio. Aortic velocity time integral (VTI) and cardiac output are typically low.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "65세 여자환자가 건강검진에서 발견된 조기위암으로 복강경 위절제술을 받기위해 입원하였다. 환자는 고혈압으로 안지오텐신수용체 차단제와 칼슘통로 차단제를 복용 중이 었으며, 역류성식도염으로 양성자펌프억제제를 복용 중이었다. 또한 갑상선기능저하증으로 레보티록신나트륨수화물을 복용 중이었으며 우울증으로 선택적 세로토닌 재흡수 억제제를 복용 중이었다. 이 환자에서 수술 당일 복용 중단이 권장되는 약제는?",
    "options": [
      "안지오텐신수용체 차단제",
      "칼슘통로 차단제",
      "양성자펌프 억제제",
      "레보티록신나트륨수화물"
    ],
    "answer": 0,
    "exp": "고혈압 약제 중 안지오텐신전환효소 억제제 (Angiotensin-converting-enzyme inhibitor)와 안지오텐신수용체 차단제 (angiotensin receptor blocker)는 수술 전 24시간 이내 복용하는 경우 수술 중 저혈압과 수술 후 심근손상의 위험 증가와 연관된다고 알려져 있다. 따라서 이들 약제는 수술 24시간 전부터 중단하는 것이 권장된다. 이외 고혈압 약제 들, 양성자펌프 억제제, 갑상선호르몬제, 선택적 세로토닌 재흡수 억제제은 수술 당일까지 복용 지속이 권장된다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "쇄골 밑 접근법 팔신경얼기 차단(infraclavicular brachial plexus block) 은 앞 팔(forearm)을 수술하는 경우 사용할 수 있는 부위마취 수기이다. 쇄골 밑 접근법의 특성을 설명한 것 중 옳은 것을 고르시오.",
    "options": [
      "목표 구조물들이 다른 팔신경얼기 차단법에 비해 상대적으로 얕은 곳(superficial)에 위",
      "초음파의 도움 없이도 쉽게 할 수 있는 팔신경얼기 차단법이다.",
      "팔을 외전(abduction) 시키는 것이 시술이 더 용이하다.",
      "카테터(catheter)의 거치가 다른 팔신경얼기 차단법과 비교하여 어렵다."
    ],
    "answer": 2,
    "exp": "및",
    "cat": "신경/생리",
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
    "q": "Glycocalyx 의 역할이 추가된 revised Starling equation 에 대해 설명한 것 중 옳은 것을 고르시오.",
    "options": [
      "Albumin을 외부에서 투여하여 colloid oncotic pressure를 높이면 pulmonary edema를",
      "Colloid 와 crystalloid를 주입하였을 때 intravascular volume effect는 3:1 이다.",
      "Fluid의 transcapillary flow는 plasma와 interstitial oncotic pressure에 영향을 받는다.",
      "Interstitial fluid는 lymphatic system으로 drainage 된다."
    ],
    "answer": 3,
    "exp": "명한 것 중 옳은 것을 고르시오. ㉮ Albumin을 외부에서 투여하여 colloid oncotic pressure를 높이면 pulmonary edema를 줄일 수 있다. ㉯ Colloid 와 crystalloid를 주입하였을 때 intravascular volume effect는 3:1 이다. ㉰ Fluid의 transcapillary flow는 plasma와 interstitial oncotic pressure에 영향을 받는다. ㉱ Interstitial fluid는 lymphatic system으로 drainage 된다. ㉲ Subglycocalyceal layer에는 protein이 많이 함유되어 있다. 정답: ㉱ 해설: ㉮ Capillary colloid oncotic pressure (COP)를 높여도 intravascular reabsorption 이 일어나지 않으므로, edema를 줄일 수 없다. ㉯ 약 1.5:1 정도이다. ㉰ Plasma와 subglycocalyceal layer의 oncotic pressure에 영향을 받는다. ㉲ Protein함유량이 적다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "38세 남자 환자가 신장 기증을 위한 복강경하 신장 적출술을 받고 있던 중 혈압 80/50mmHg, 심박수 75회/분으로 확인되었다. 적절한 수액공급을 시행한 이후에도 상기 활력 징후가 지속되었을 때 1차적으로 사용할 수 있는 승압제는?",
    "options": [
      "ephedrine",
      "phenylephrine",
      "norepinephrine",
      "epinephrine"
    ],
    "answer": 0,
    "exp": "If hypotension occurs after adequate fluid replacement, then dopamine and ephedrine are preferable to direct-acting vasopressors to minimize vasoconstriction in the graft. th",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "장기이식을 위한 장기 적출 후, 장기 보존액에서 일반적으로 허용되는 냉 허혈 시간 (cold ischemia time)은 신장-A 시간, 간-B 시간, 심장-C 시간, 폐-D 시간이다. A, B, C,",
    "options": [
      "는?",
      "36, 24, 18, 12",
      "24, 18, 12, 6",
      "24, 12, 6, 4"
    ],
    "answer": 3,
    "exp": "Generally accepted cold ischemia times during static cold preservation are 24 hours for the kidney, 12 hours for the liver, 6 hours for the heart, and 4 hours for the lung.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "키 170 cm, 체중 116 kg, BMI 40 kg/m2 인 45 세 남자 환자가 복강경 담낭절제술을 받을 예정이다. 환자는 15 년 전부터 당뇨를 앓고 있으나 혈당은 잘 조절되고 있고, 10 년전부터 고혈압으로 경구약을 복용하고 있으며 혈압은 잘 조절되고 있다. 평소 수면 시 코골이가 심하다고 하여 STOP-BANG 질문지로 평가한 결과 8 개 항목 중에서 5 개에 “예”라고 답하였다. 이 환자에서 당일 수술이 적합하지 않을 것으로 판단할 때 그 이유로 가장 타당한 것은?",
    "options": [
      "복강경 수술",
      "병적 비만 자체",
      "만성 당뇨",
      "만성 고혈압"
    ],
    "answer": 3,
    "exp": "STOP-BANG 5/8(고위험 OSA)에 병적 비만이 동반된 환자는 기도 허탈성·아편유사제 감수성이 높아 마취·진정 후 무호흡과 저산소증 등 호흡기 합병증이 지연되어 발생할 위험이 크다(ASA/SAMBA OSA 주산기 가이드라인). 따라서 당일 퇴원형 수술에서는 충분한 술후 호흡 감시 시간을 확보할 수 없으므로, 다른 동반질환(당뇨·고혈압)이 잘 조절되더라도 OSA가 당일 수술 부적합의 가장 타당한 사유가 된다.",
    "cat": "순환/생리",
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
    "exp": "해설: Isoflurane은 흡입마취제 중 관상동맥 미세혈관(소동맥)을 직접 가장 강하게 확장시켜 과거 협착부 인접 정상 혈관을 확장해 허혈 부위로 갈 혈류를 빼앗는 'coronary steal' 우려가 제기된 약제이며, sevoflurane은 관상동맥 확장 작용이 가장 약하다(Hartman et al., *Anesthesiology* 1992; Miller's Anesthesia, volatile agents의 coronary vasodilation 비교). 따라서 관상동맥 이완이 가장 큰 것은 isoflurane, 가장 적은 것은 sevoflurane으로 정답은 3번이다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "흡입마취제 약동학의 임상적용에 대한 설명으로 옳은 것은?",
    "options": [
      "신속한 마취유도를 위해 초기에 고농도 마취제를 흡입시키는 과압법은 추천되지 않는다.",
      "마취유도 초기 흡입마취제 중 많은 양이 혈액으로 섭취된다.",
      "임신말기 산모는 마취유도 속도가 느리다.",
      "폐기종 환자는 마취유도 속도가 빠르다."
    ],
    "answer": 1,
    "exp": "㉮ 신속한 마취유도를 위해 과압법은 흔히 사용된다. ㉰ 산모는 FRC 감소로 인해 마취유도 속도가 빠르다. ㉱ 폐기종 환자는 FRC 증가로 인해 마취유도 속도가 느리다. ㉲ 심부전 환자는 심박출량의 감소로 인해 마취발현 속도가 빠르다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "다음은 임신으로 인한 생리학적 변화를 설명한 것이다. 올바르게 설명한 것은?",
    "options": [
      "횡격막의 이동으로 인해 일회호흡량은 약간 감소하지만 분당호흡수는 증가한다.",
      "호르몬의 영향으로 말초 혈관 저항이 증가하므로 임신 말기에는 혈압이 상승한다.",
      "혈류량이 많아짐에 따라 심박출량의 증가로 흡입마취제의 필요량이 증가한다.",
      "혈액량의 증가로 혈액이 희석되어 빈혈이 나타나며 응고인자들이 감소한다."
    ],
    "answer": 3,
    "exp": "일회호흡량 분당호흡수 모두 증가한다. 전신혈관저항의 감소되므로 혈압이 상승하지 않는다. 민감도 감소로 흡입마취제의 필요량이 감소 혈액이 희석되어도 응고인자가 감소하지 않는다.",
    "cat": "산과마취",
    "lvl": "기본"
  },
  {
    "q": "태아와 산모 간의 혈장약물농도(F/M ratio)가 제일 작은 약물은?",
    "options": [
      "Ketamine",
      "Ephedrine",
      "Bupivacaine",
      "Rocuronium"
    ],
    "answer": 3,
    "exp": "해설: Rocuronium은 4기 암모늄(quaternary ammonium) 구조로 생리적 pH에서 완전히 이온화되어 있고 분자량이 크며 지용성이 낮아, 단순확산(simple diffusion)에 의존하는 태반 통과가 가장 제한적이라 F/M ratio가 약 0.1~0.2로 보기 중 가장 작다. 반면 ketamine·국소마취제(bupivacaine)·opioid(sufentanil)·ephedrine은 모두 비이온화 지용성이 높아 태반을 쉽게 통과하므로 F/M ratio가 상대적으로 크다(Miller's Anesthesia, placental drug transfer 원칙).",
    "cat": "약리",
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
    "exp": "복강경 수술 중 capnothorax는 insufflation된 CO₂가 횡격막의 선천적 결손부나 후복막을 따라 흉막강으로 유입되어 발생하며, CO₂는 공기 기흉과 달리 혈중 용해도가 높아 빠르게 흡수되므로 대부분 자연 소실되고 혈역학적으로 안정적이어서(긴장성 X) 흉관 삽입·대량수혈·CVP 모니터링이 불필요하다(보기 1·2·3 오답). 따라서 PEEP을 적용해 흉막강 내압보다 폐포압을 높여 허탈된 폐를 재팽창시키고 CO₂ 누출을 tamponade하는 것이 치료이며, 기복 해제 후 신속히 회복되므로 장기간 인공호흡기 치료는 예상되지 않는다(보기 5 오답).",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "특이 병력 없던 55 세 남자 환자가 교통사고로 인한 다발성 외상으로 응급실에 내원하였다. 내원 후 얼마 지나지 않아 심정지가 발생하였다. 즉시 심폐소생술을 시작하였고 기관내삽관에 성공했다. 그러나 정맥로(intravenous access) 및 골강내 주사로(intraosseous access) 확보에 연이어 실패하여 기관내관을 통해 약물을 투여하기로 하였다. 다음 중 기관내 투여를 할 수 없는 약물을 무엇인가?",
    "options": [
      "에피네프린 (epinephrine)",
      "바소프레신 (vasopressin)",
      "리도카인 (lidocaine)",
      "중탄산나트륨 (sodium bicarbonate)"
    ],
    "answer": 3,
    "exp": "정맥 또는 골강내 약물 투여가 불가능한 경우, 기관내 투여가 대체 경로가 될 수 있으며 에피네프린(epinephrine), 바소프레신(vasopressin), 리도카인(lidocaine), 아트로핀(atropine)의 기관내 투여가 가능하다. 중탄산나트륨(sodium bicarbonate)는 기관내 투여할 수 없다. 중탄산염은 점막과 폐포에 손상을 줄 수 있어 기관내관튜브를 이용한 투여는 금기이다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "49세 남자 환자가 교통사고로 인한 외상성 경막외 출혈로 전신마취하에 개두술을 받고 있다. 모든 환자 감시장치 소견이 정상이었으나 수술 중 맥박산소포화도가 98%에서 92%로 감소하였고 심박수가 90회/분에서 110회/분으로 증가하였다. 흡입산소농도 50%에 서 시행한 동맥혈 검사는 pH 7.211, PaCO 49mmHg, PaO 58mmHg, BE -1.01 mmol/L 2 2 였다. 산소포화도 저하의 원인을 감별하기 위해 시행한 폐 초음파는 다음과 같다. 가장 의 심되는 원인은? ( M mode )",
    "options": [
      "폐공기색전증",
      "흡인성 폐렴",
      "폐부종",
      "기흉"
    ],
    "answer": 3,
    "exp": "M-mode of lung of lung ultrasound illustrative of the “lung point” for diagnosis of pneumothorax. The sudden inspiratory transition from a parallel line pattern indicative of absence of lung motion (pneumothorax) to a granular pattern indicative of lung tissue can be observed.",
    "cat": "호흡/생리",
    "lvl": "기본"
  }
];
