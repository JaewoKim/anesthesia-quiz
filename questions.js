const QUESTIONS = [
  {
    "q": "TKRA한 환자에서 통증조절을 위해 block하려고 한다. 재활을 위해 최대한 운동신경을 보전하기 위한 방법",
    "options": [
      "femoral n. block",
      "obturator n. block",
      "fasciailiaca compartment block",
      "adductor canal block"
    ],
    "answer": 3,
    "exp": "Adductor canal block은 대퇴신경의 감각분지인 복재신경(saphenous n.)과 무릎관절 가지를 선택적으로 차단해 슬관절 전내측의 통증을 조절하면서, femoral n. block과 달리 대퇴사두근으로 가는 운동신경 차단이 최소화되어 근력과 보행이 보존됩니다. 따라서 TKRA 후 조기 재활과 보행 훈련이 핵심인 상황에서 quadriceps weakness로 인한 낙상 위험을 줄이면서 진통을 제공할 수 있어 운동신경 보전 측면에서 가장 적합합니다(근거: Jaeger et al., *Anesthesiology* 2013 — ACB가 FNB 대비 quadriceps strength 유의하게 보존).",
    "cat": "신경/생리",
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
    "exp": "해설: TCD(경두개 도플러)는 중대뇌동맥 등 굵은 기저 뇌동맥의 혈류 \"속도\"를 측정하는 간접 지표일 뿐 뇌허혈 자체를 직접 측정하지 못하고(보기1·2 오류), cerebral oximetry(NIRS)는 전두엽 피질의 동·정맥 혼합 조직 산소포화도(주로 정맥혈 가중)를 보는 것이라 순수 동맥 산소포화도가 아니다(보기3 오류). NIRS는 측정값이 기기·환자별 베이스라인 의존성이 크고 절대값이나 감소율(%)에 대한 보편적 허혈 임계치가 확립되어 있지 않아, CEA 중 shunt 적용 판단의 단독 기준으로 쓰기 어렵다는 점에서 보기5가 정답이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "추간판 탈출증으로 MRI를 찍으려 하는데 환자가 통증이 너무 심하고 호흡곤란증세가 있어서 MAC으로 검",
    "options": [
      "단일 정맥마취제로도 충분하다.",
      "중등도 진정으로 진행한다.",
      "Ketamine은 진통 효과는 강하지만 구역, 구토가 심하고 회복이 느리다.",
      "MRI검사 도중 진정상태가 변하지 않는다."
    ],
    "answer": 2,
    "exp": "해설: Ketamine은 NMDA 수용체 길항을 통해 해리성 마취와 강력한 진통을 제공하면서 자발호흡·기도반사·교감신경 긴장을 유지하므로, 기도 접근이 제한되는 MRI 환경에서 호흡곤란 환자에게 이론적 이점이 있으나, 본 문항의 정답대로 구역·구토와 분비물 증가, 응급반응(emergence reaction) 및 상대적으로 느린 회복이라는 단점을 동반한다. 따라서 MAC에서 단독 고용량보다는 propofol 등과의 저용량 병용(소위 ketofol)으로 진통은 살리고 오심·회복 지연을 줄이는 전략이 임상적으로 권장된다(Miller's Anesthesia, NMDA 길항제 약리 기전).",
    "cat": "약리",
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
    "exp": "해설: Isoflurane은 관상동맥 미세저항혈관(small resistance arterioles)을 가장 강하게 확장시켜 협착 원위부 측부순환 의존 영역의 혈류를 정상 영역으로 빼앗는 \"coronary steal\" 현상과 역사적으로 연관된 반면, sevoflurane은 세 약제 중 관상동맥 확장 작용이 가장 약하다. 따라서 직접적 관상동맥 혈관확장 정도는 isoflurane > desflurane > sevoflurane 순서이며, 정답은 ③ Isoflurane–sevoflurane이다.",
    "cat": "순환/생리",
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
    "exp": "정답이 모유수유 4시간 금식인 이유는 ASA 금식 가이드라인상 모유는 위 배출 시간을 고려해 4시간(맑은 액체 2시간, 분유·우유 6시간)으로 권고되기 때문이다. 나머지는 모두 오답으로, 재태 32주·인공호흡력이 있는 교정연령 약 40주 미숙아는 60주 미만까지 수술 후 무호흡 위험으로 당일퇴원 불가(1번)·최소 12~24시간 무호흡 모니터링이 필요하고, 신생아도 통증을 느끼므로 진통이 필수이며(3번), 적응증 없는 예방적 수혈(4번)과 미숙아망막병증을 유발하는 60% 고농도 산소(5번)는 피해야 한다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "환자에게 급하게 RBC 4개를 universal O Rh- 수혈했다. 이후 확인된 환자 혈액형은 A Rh+ 이었다. 3일 뒤",
    "options": [
      "A Rh+",
      "A Rh-",
      "O Rh+",
      "O Rh-"
    ],
    "answer": 3,
    "exp": "해설: O형 적혈구는 A·B 항원이 없어 환자의 항-A 항체와 반응하지 않고, Rh⁻ 적혈구 역시 Rh⁺ 환자에게 면역학적으로 안전하므로 응급 상황에서 추가 수혈이 필요하면 환자 본래 혈액형으로 성급히 전환하지 말고 O Rh⁻를 계속 투여하는 것이 원칙이다(massive transfusion 시 수혈된 O형 적혈구가 순환혈액의 상당 부분을 차지해 ABO 정형검사가 교란될 수 있어, 환자 혈청 내 항-A 역가가 충분히 감소하고 정·역형 일치가 재확인될 때까지 type-specific 전환을 미룬다). 3일 경과만으로는 다량 수혈된 동종 적혈구가 아직 충분히 제거되지 않아 안전한 전환 시점으로 보기 어렵고, O Rh⁻는 모든 수혈자에게 적합한 보편 공혈혈액이므로 정답은 O Rh⁻이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "Acute tubular necrosis에 합당한 소견을 고르시오",
    "options": [
      "fractionexcretion of sodium = 1",
      "hyaline cast in urine sediment",
      "urine creatine /plasma creatine 30",
      "urine osmolality 300mOsm"
    ],
    "answer": 3,
    "exp": "급성 세뇨관 괴사(ATN)에서는 손상된 세뇨관 상피가 수분 재흡수·농축 기능을 상실하여 소변이 혈장과 등장성(약 300 mOsm/kg)을 보이는 등장뇨(isosthenuria)가 특징입니다. 나머지 보기(FENa<1, U/P creatinine>40, urine Na<20, hyaline cast)는 세뇨관 기능이 보존된 신전성(prerenal) 질소혈증 소견으로, ATN에서는 반대로 FENa>2, 진흙빛 과립원주(muddy-brown granular cast)가 관찰됩니다.",
    "cat": "마취일반",
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
    "exp": "Rocuronium은 4차 암모늄(quaternary ammonium) 구조로 고도로 이온화되어 있고 수용성·고분자량이어서 지질친화성이 낮아 태반(lipid membrane)을 거의 통과하지 못하므로 F/M ratio가 약 0.16으로 가장 낮습니다. 반면 ketamine·bupivacaine·sufentanil은 지용성·비이온화 비율이 높고 ephedrine도 분자량이 작아 수동확산으로 태반을 잘 통과하므로 F/M ratio가 훨씬 높습니다(예: ketamine ~1.26).",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "70세 남자환자가 7일전 중심정맥관 삽입하고 경정맥영양을 시작하였다. 갑자기 체온 38.5 도 혈압80/50 맥",
    "options": [
      "경험적 항진균제 micafungin 을 투여한다",
      "카테터를 유지하면서 2세대cephalosporin 으로 교체한다",
      "카테터를 제거하고 meropenem 을 투여한다",
      "카테터를 제거하고 vancomycin 을 투여한다"
    ],
    "answer": 3,
    "exp": "해설: 7일 경과한 중심정맥관 + 경정맥영양(TPN)은 카테터 관련 혈류감염(CRBSI)의 전형적 상황으로, 패혈성 쇼크(혈압 80/50)가 동반된 단기 비터널형 카테터는 감염원 제거(source control)를 위해 즉시 제거하고, 가장 흔한 원인균인 그람양성균(특히 MRSA·coagulase-negative staphylococci)을 경험적으로 겨냥해 vancomycin을 투여해야 한다(IDSA CRBSI 2009 가이드라인). 2세대 cephalosporin은 MRSA를 못 덮고, micafungin은 칸디다 위험인자(장기 TPN·광범위 항생제·면역저하)가 누적된 후에 고려하며, 쇼크 환자에서 배양 결과를 기다리는 것은 금기다.",
    "cat": "순환/생리",
    "lvl": "기본"
  },
  {
    "q": "68세 여자 155cm 50kg, 21세 남자170cm 50kg 전정맥마취 시행하는데 목표효과처농도 3ug/ml 로 설정하여",
    "options": [
      "schnider",
      "marsh",
      "minto",
      "scott"
    ],
    "answer": 1,
    "exp": "Marsh 모델은 총체중(TBW)만을 유일한 공변량으로 사용하여 중심구획 용적과 청소율을 체중에 비례시키므로, 나이·키·성별이 달라도 체중이 동일한 두 환자(둘 다 50kg)에게는 완전히 같은 효과처농도 3μg/mL 도달 용량을 산출한다. 반면 Schnider는 나이·키·체중·제지방체중(LBM)을 모두 반영하고 Minto는 remifentanil용, Scott·Hudson은 fentanyl/alfentanil 계열 모델이므로 propofol을 체중 기반으로 단순 표적할 때 두 환자에게 동일 용량이 나오는 모델은 Marsh뿐이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "폐 좌상엽에 6cm 크기의 bulla 가 있어서 절제술 예정.",
    "options": [
      "a line",
      "b line",
      "lung slide",
      "lung pulse"
    ],
    "answer": 3,
    "exp": "폐 거대 bulla는 흉막 초음파에서 lung sliding·B-line·lung pulse가 모두 소실되어 기흉과 동일하게 보일 수 있어 감별이 어렵지만, lung point(허탈된 폐와 정상 환기 폐의 경계가 호흡주기에 따라 화면에서 왔다 갔다 하는 지점)는 오직 진성 기흉에서만 관찰되는 100% 특이도의 소견이다. Bulla는 흉벽 전체에 걸쳐 무환기 패턴이 균질하게 나타날 뿐 환기 폐와의 동적 경계가 없으므로 lung point가 보이지 않으며, 따라서 lung point의 유무가 bulla를 기흉으로 오인하지 않게 해 주는 결정적 감별점이다.",
    "cat": "호흡/생리",
    "lvl": "기본"
  },
  {
    "q": "75세 여자환자가 등 통증을 주소로 내원 하였다. 단순 방사선 촬영상 T7,11에 압박 골절 소견을 보였다. 이",
    "options": [
      "CT",
      "Bone Scan",
      "단순 방사선 촬영",
      "체열 검사"
    ],
    "answer": 3,
    "exp": "MRI는 STIR/T2 강조영상에서 골수 부종(bone marrow edema) 신호를 통해 급성·증상성 압박골절과 진구성(만성) 골절을 감별할 수 있어, 다발성 병변(T7·T11) 중 실제 통증을 유발하는 책임 분절을 특정하는 데 필수적이다. 또한 연부조직·척수·신경근 압박 및 악성 종양에 의한 병적 골절 여부까지 평가할 수 있어, 척추성형술(vertebroplasty)·골다공증 치료 방침 결정에 가장 적합한 검사이다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "LD50, ED50, LD1, ED99가 표기된 다음 그래프를 보고 맞는 내용을 고르세요.",
    "options": [
      "ED99 < LD50이므로 임상에서 사용할 수 있다.",
      "ED50 < LD50이므로 임상에서 사용하기 적합한 약제이다.",
      "LD1 < ED99이므로 임상에서 사용하기 부적합한 약제이다.",
      "ED50 < LD1이므로 임상에서 사용할 수 있다."
    ],
    "answer": 2,
    "exp": "약물의 안전성은 단순히 LD50/ED50 비(치료지수)가 아니라 용량-반응 곡선의 겹침 정도로 판단해야 하며, **확실안전역(margin of safety = LD1/ED99)**이 1보다 커야(즉 ED99 < LD1) 99%에서 효과를 내는 용량에서도 사망이 거의 발생하지 않아 임상 사용이 적합합니다. 제시된 그래프처럼 **LD1 < ED99**이면 충분한 약효(ED99)에 도달하기 전에 이미 일부 환자에서 치사(LD1)가 발생하는 곡선 중첩 구간이 존재하므로, 치료지수가 양호해 보여도 실제로는 안전역이 음(陰)이 되어 임상 사용에 부적합합니다.",
    "cat": "약리",
    "lvl": "기본"
  },
  {
    "q": "기저질환 없는 40세 남자, 위전절제술 끝나간다. T1 87%, TOF ratio 66%. 시행할 것은?",
    "options": [
      "neostigmine 0.02mg/kg",
      "sugammadex 4mg/kg",
      "다른곳에서 신경근차단감시",
      "PTC check."
    ],
    "answer": 0,
    "exp": "TOF ratio 0.66은 사연축 모두 감지되는 중등도(moderate) 잔여 차단으로, T1이 87%까지 회복된 이 상태에서는 아세틸콜린에스터분해효소 억제제인 neostigmine 0.02mg/kg(저용량)이 시냅스 간극 ACh를 증가시켜 충분히 역전 가능하므로 정답입니다. Sugammadex 4mg/kg(보기 2)는 PTC 1–2의 deep block에서 쓰는 과용량이고, 즉시 발관(보기 5)은 TOF ratio ≥0.9 미충족이라 잔여 차단·흡인 위험으로 부적절합니다(2023 ASA Neuromuscular Blockade 가이드라인 기준).",
    "cat": "모니터링",
    "lvl": "기본"
  },
  {
    "q": "혼합정맥혈 산소포화도 82%일 때 의심되는 상황은?",
    "options": [
      "혈색소 8",
      "심박출량감소",
      "패혈증",
      "shivering"
    ],
    "answer": 2,
    "exp": "정상 혼합정맥혈 산소포화도(SvO₂)는 약 75%이며, 82%로 상승한 것은 조직의 산소 추출·이용 장애를 시사하는데 패혈증에서는 미세순환 단락(microcirculatory shunting)과 미토콘드리아 기능장애로 인해 말초에서 산소를 제대로 추출하지 못해 SvO₂가 오히려 증가한다. 반면 혈색소 감소(빈혈), 심박출량 감소, shivering·체온상승(산소소비 증가)은 모두 산소 공급 대비 소비를 늘려 SvO₂를 **감소**시키므로 정답은 패혈증이다.",
    "cat": "호흡/생리",
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
    "exp": "BAEP는 청각 유발전위의 발생원이 뇌간(brainstem auditory pathway, 와우신경핵·상올리브핵·하구)에 있어 피질 시냅스 의존도가 낮아 isoflurane 같은 흡입마취제와 remifentanil에 가장 저항성이 크다(volatile agent는 피질 시냅스 전달을 용량의존적으로 억제하므로 피질 성분이 큰 신호일수록 더 억압됨). 반면 VEP는 다중 피질 시냅스를 거쳐 흡입마취에 가장 예민하고, SSEP·MEP도 피질 성분이 있어 BAEP보다 진폭 감소·latency 증가가 뚜렷하다(근거: Sloan TB, *J Clin Neurophysiol* 2002; Banoub *Anesthesiology* 2003 IONM 마취 영향 리뷰).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "퇴원 후 점수 구하는 문제. 혈압 원래의 20프로이내, 걷기 괜찮고, 어지럼 없음, 출혈 거의 없음, 중등도 오",
    "options": [
      "9",
      "8",
      "7",
      "6"
    ],
    "answer": 1,
    "exp": "정답: 8",
    "cat": "순환/생리",
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
    "exp": "대동맥 겸자 상태에서 pump flow를 올리면 관상동맥은 겸자로 차단되어 영향이 없으나, 대동맥 내 죽종(atheroma)·기포·미세색전(microemboli)이 증가한 유량을 따라 뇌혈류로 다량 전달되어 색전성 뇌경색 위험이 높아집니다. 따라서 고유량은 뇌 색전 부하(embolic load)를 증가시키므로 정답은 \"뇌경색 발생률 증가\"이며, 나머지 보기(심실확장 소실·심근보호 증가·전신관류 감소·관상동맥혈류 감소)는 cross-clamp 하 고유량의 생리와 반대되거나 무관합니다.",
    "cat": "마취일반",
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
    "exp": "후관절(facet joint)은 해당 분절과 바로 위 분절의 후지내측지(medial branch)로부터 이중 신경지배를 받으므로, 흉요추 이행부(T12-L1) 압통·타진통의 원인인 후관절·골절 부위 통증을 차단하려면 그보다 위 분절까지 포함한 medial branch를 표적해야 합니다. 따라서 T12-L1 후관절 통증에는 흉추 10, 11, 12번 후지내측지가 정답이며, 이는 흉추부 medial branch가 횡돌기를 상위에서 비스듬히 가로질러 분포하는 해부학적 주행을 반영한 임상 근거에 따른 것입니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "치매있던 환자 수술 후 공격적이고 주사바늘을 뽑으려고 한다. 무슨 검사를 해야하며 진단은 무엇인가?",
    "options": [
      "short blessed test – 섬망",
      "CAM – 치매의 악화",
      "short blessed test – 치매의 악화",
      "CAM – 섬망"
    ],
    "answer": 3,
    "exp": "급성 발병·증상 변동·부주의(inattention)·비조직적 사고를 핵심 진단축으로 평가하는 **CAM(Confusion Assessment Method)**이 적절한 검사이며, 수술 직후 갑작스럽게 나타난 공격성·초조·주사바늘 제거 시도는 기저 치매와 무관하게 급성·가역적 경과를 보이는 **섬망(delirium)**의 전형적 양상이다(정답 4번). Short Blessed Test는 만성·서서히 진행하는 인지저하를 선별하는 치매 도구로 급성 혼동 상태 감별에는 부적합하고, 치매 환자는 섬망 발생의 주요 위험인자일 뿐 증상의 급성 변동성은 치매 악화가 아닌 섬망을 시사한다(DSM-5 섬망 진단기준·CAM 알고리즘 Inouye et al., Ann Intern Med 1990).",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "다음 그래프를 보고 옳은 것은?",
    "options": [
      "alfentanil이 효능이 가장 높다.",
      "alfentanil이 potency가 가장 크다.",
      "remifentanil이 sufentanil보다 pontency가 크다.",
      "감마는 각 약물에서 차이가 크다."
    ],
    "answer": 3,
    "exp": "네 가지 약물(alfentanil·remifentanil·sufentanil·fentanyl)은 모두 μ-opioid 수용체 완전작용제(full agonist)이므로 용량을 충분히 올리면 도달하는 최대 진통 효과, 즉 efficacy(intrinsic activity)는 거의 동일하고 용량-반응곡선의 상한(plateau) 높이가 서로 비슷합니다 — 따라서 보기 5번이 옳습니다. 반면 곡선이 좌우로 이동하는 정도(EC50)로 결정되는 potency는 sufentanil ≫ remifentanil·fentanyl ≫ alfentanil 순으로 크게 차이 나므로(alfentanil이 potency가 가장 낮음), 보기 1·2·3은 틀리고 곡선의 기울기를 나타내는 Hill 계수(γ)도 약물 간 크게 다르지 않아 보기 4도 오답입니다.",
    "cat": "마취일반",
    "lvl": "기본"
  },
  {
    "q": "수술실 밖에서 MAC으로 MRI 촬영하려고 한다. MRI 촬영 중 환자 감시에 대한 설명으로 옳은 것은?",
    "options": [
      "Pacemaker 가진 환자 촬영 가능하다.",
      "응급으로 기관삽관 시 일반적인 기관삽관 도구 이용 가능하다.",
      "MRI 자기장에 의해 산소포화도 심전도 그래프에 noise 생긴다.",
      "환자감시장치는 MRI 영상의 질에 영향을 미치지 않는다."
    ],
    "answer": 2,
    "exp": "MRI의 강한 정자기장(static field)과 RF(radiofrequency) 펄스 및 변화하는 경사자장(gradient)이 심전도 전극·케이블에 자기유도(자기수력학적 효과, magnetohydrodynamic effect로 대동맥 혈류에 의한 T파 증고 포함)와 RF 간섭을 일으켜 ECG·SpO2 파형에 noise를 유발하므로 정답은 3번이다. 나머지는 모두 틀리며 — pacemaker는 자기장 오작동·리드 가열 위험으로 원칙적 금기(MRI-conditional 기기만 조건부 가능), 응급 기관삽관 시 일반 후두경 등 강자성 금속 도구는 발사체(projectile) 위험으로 zone IV 반입 불가하여 MRI-safe 도구가 필요하고, 감시장치(특히 케이블)는 영상 artifact를 유발하며, 분비물·연하 곤란 및 항타액 목적의 glycopyrrolate 전투약은 MAC 중 기도 보호를 위해 오히려 권장될 수 있다.",
    "cat": "약리",
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
    "exp": "해설: 승모판 질환 임산부는 혈전색전증 위험으로 **치료용량(therapeutic dose) LMWH**를 투여받는데, LMWH는 항Xa 활성이 피크 후 반감기가 길어 치료용량에서는 신경축 차단·카테터 조작 시점까지 충분한 항응고 효과가 잔존하므로 척수경막외 혈종 예방을 위해 마지막 투여 후 **24시간** 경과를 권고한다 (ASRA 2018 신경축 항응고 가이드라인; 예방용량은 12시간). 따라서 카테터 제거는 마지막 치료용량 LMWH 투여 24시간 이후에 시행해야 하며, 제거 후 다음 LMWH 재투여는 최소 4시간 이상 간격을 두어야 한다.",
    "cat": "부위마취",
    "lvl": "기본"
  },
  {
    "q": "70세 70kg 남자가 고관절수술 중에 적혈구 용적률이 22%이다. 70ml/kg이고 pRBC의 용적률을 60%라고 할",
    "options": [
      "450",
      "550",
      "650",
      "750"
    ],
    "answer": 2,
    "exp": "해설: 총 혈액량은 70 kg × 70 mL/kg = 4,900 mL이며, 목표 적혈구용적률(Hct) 30%로 올리기 위해 필요한 pRBC 양은 [혈액량 × (목표Hct − 현재Hct)] ÷ pRBC Hct = 4,900 × (0.30 − 0.22) ÷ 0.60 ≈ 653 mL로 계산되어 정답은 ③ 650이다. 이는 수혈 시 환자의 적혈구 질량 증가분이 투여한 pRBC의 적혈구 질량과 같다는 질량보존 원리에 근거하며, 농축적혈구의 Hct(약 55~70%)가 전혈보다 높아 적은 용량으로도 효율적인 산소운반능 회복이 가능함을 반영한다.",
    "cat": "마취일반",
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
    "exp": "Celecoxib은 선택적 COX-2 억제제로, 위점막 보호 프로스타글란딘(PGE2·PGI2)을 생성하는 COX-1을 거의 억제하지 않아 비선택적 NSAID(aspirin·naproxen·ibuprofen)나 meloxicam(준선택적)보다 소화성 궤양 악화·출혈 위험이 유의하게 낮습니다(ACG NSAID 가이드라인, CONDOR trial Lancet 2010). 따라서 기존 위궤양 병력이 있는 골관절염 환자의 통증 조절에는 위장관 안전성이 가장 우수한 celecoxib이 적절하며, 필요 시 PPI 병용으로 추가 보호가 권장됩니다.",
    "cat": "마취일반",
    "lvl": "기본"
  }
];
