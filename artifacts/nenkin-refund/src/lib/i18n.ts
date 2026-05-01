export type Language = "ko" | "ja" | "en";

type TranslationStore = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: TranslationStore = {
  ko: {
    // SEO
    "seo.home.title": "일본 탈퇴일시금 소득세 환급 대행신청 | 노우제이다이코우",
    "seo.home.description": "일본에서 일하고 귀국하신 외국인 근로자를 위한 탈퇴일시금 및 소득세 환급 대행 서비스. 복잡한 서류 절차 없이 안전하고 빠르게 연금을 돌려받으세요.",
    "seo.faq.title": "자주 묻는 질문 | 일본 탈퇴일시금 소득세 환급 대행",
    "seo.faq.description": "일본 탈퇴일시금, 연금 환급, 소득세 환급에 대해 자주 묻는 질문을 확인하세요.",
    
    // Navbar
    "nav.home": "홈",
    "nav.faq": "FAQ",
    "nav.apply": "지금 신청하기",

    // Hero
    "hero.hook": "일본에서 일한 외국인이라면, 연금을 돌려받을 수 있습니다.",
    "hero.sub": "평균 100만엔 이상의 탈퇴일시금, 소득세 환급까지. 복잡한 절차는 전문가에게 맡기세요.",
    "hero.cta": "지금 신청하기",

    // What is it
    "what.title": "탈퇴일시금이란?",
    "what.desc": "일본에서 근무하며 납부한 후생연금 또는 국민연금은 귀국 시 조건을 만족하면 돌려받을 수 있습니다. 출국 후 2년 이내에만 신청이 가능하므로 빠른 준비가 필요합니다.",

    // Eligibility
    "eligibility.title": "신청 자격",
    "eligibility.1": "연금 가입기간 6개월 이상",
    "eligibility.2": "연금 가입기간 10년 미만",
    "eligibility.3": "일본 출국 후 2년 이내",
    "eligibility.4": "일본 국적 미소지자",
    "eligibility.5": "일본 내에 주소지가 없는 자",

    // Calculator
    "calc.title": "예상 환급금 계산기",
    "calc.type.label": "연금 종류",
    "calc.type.kosei": "후생연금 (회사원)",
    "calc.type.kokumin": "국민연금 (자영업/아르바이트)",
    "calc.salary.label": "평균 월 보수액 (엔, 세전)",
    "calc.period.label": "가입 기간 (개월)",
    "calc.result.gross": "총 탈퇴일시금 (세전)",
    "calc.result.tax": "원천징수 소득세 (20.42%)",
    "calc.result.net": "실 수령액 (세후)",
    "calc.result.refund": "소득세 환급 가능액",
    "calc.notice.kokumin": "국민연금은 세금이 공제되지 않고 전액 지급됩니다.",
    
    // Period Dropdown
    "period.6_11": "6~11개월",
    "period.12_17": "12~17개월",
    "period.18_23": "18~23개월",
    "period.24_29": "24~29개월",
    "period.30_35": "30~35개월",
    "period.36_41": "36~41개월",
    "period.42_47": "42~47개월",
    "period.48_53": "48~53개월",
    "period.54_59": "54~59개월",
    "period.60_plus": "60개월 이상",

    // Tax Refund
    "tax.title": "소득세 전액 환급",
    "tax.desc": "후생연금 탈퇴일시금을 받을 때 20.42%의 세금이 원천징수됩니다. 하지만 납세관리인을 선임하면 이 세금을 전액 환급받을 수 있습니다. 당사는 탈퇴일시금 청구부터 소득세 환급까지 원스톱으로 대행해 드립니다.",

    // Process
    "process.title": "진행 절차",
    "process.1.title": "상담 신청",
    "process.1.desc": "카카오톡 또는 이메일 상담",
    "process.2.title": "서류 준비",
    "process.2.desc": "안내에 따라 필요한 서류 준비",
    "process.3.title": "서류 제출",
    "process.3.desc": "일본 연금기구에 대행 접수",
    "process.4.title": "심사",
    "process.4.desc": "약 3~4개월 소요",
    "process.5.title": "입금 및 소득세 환급",
    "process.5.desc": "고객님 계좌로 직접 입금",

    // Documents
    "docs.title": "필요 서류",
    "docs.1": "탈퇴일시금 청구서 (당사 작성)",
    "docs.2": "여권 사본 (사진면, 상륙허가면 등)",
    "docs.3": "본인 명의 은행 통장 사본",
    "docs.4": "연금 수첩 (기초연금번호 통지서)",
    "docs.5": "주민표 제표 (일본 지자체 발급, 해당자에 한함)",

    // Apply
    "apply.title": "지금 바로 상담하세요",
    "apply.desc": "출국 후 2년이 지나면 소중한 연금을 돌려받을 수 없습니다.",
    "apply.btn": "상담 신청서 작성하기",

    // FAQ
    "faq.title": "자주 묻는 질문",
    "faq.q1": "탈퇴일시금이란?",
    "faq.a1": "일본에서 6개월 이상 일한 외국인이 귀국할 때, 그동안 납부했던 연금의 일부를 돌려받는 제도입니다.",
    "faq.q2": "신청 가능한 기간은?",
    "faq.a2": "일본을 출국한 지 2년 이내에만 신청이 가능합니다. 기간이 지나면 권리가 소멸됩니다.",
    "faq.q3": "대행 수수료는 얼마인가요?",
    "faq.a3": "환급 예상 금액 및 서류 준비 상황에 따라 다르므로, 상담 신청을 남겨주시면 개별적으로 상세히 안내해 드립니다.",
    "faq.q4": "얼마나 받을 수 있나요?",
    "faq.a4": "납부한 연금 종류(후생/국민), 월 평균 보수액, 가입 기간에 따라 다릅니다. 홈페이지의 계산기를 통해 대략적인 금액을 확인해 보세요.",
    "faq.q5": "소득세 환급도 같이 신청하나요?",
    "faq.a5": "네, 후생연금의 경우 탈퇴일시금 수령 후 원천징수된 소득세(20.42%)를 전액 돌려받을 수 있으며, 당사에서 한 번에 대행해 드립니다.",
    "faq.q6": "일본에 직접 가야 하나요?",
    "faq.a6": "아니요, 방문하실 필요 없이 우편과 온라인을 통해 전 과정이 진행됩니다.",
    "faq.q7": "얼마나 걸리나요?",
    "faq.a7": "일본 연금기구의 심사에 보통 3~4개월이 소요되며, 상황에 따라 5~6개월이 걸릴 수도 있습니다.",
    "faq.q8": "한국 은행 계좌로 받을 수 있나요?",
    "faq.a8": "네, 본인 명의의 한국 은행 계좌로 국제 송금을 통해 직접 입금됩니다.",
    "faq.q9": "이미 출국한 지 2년이 지났어요.",
    "faq.a9": "아쉽게도 출국 후 2년이 지나면 신청이 불가능합니다. 따라서 빠른 신청을 권장합니다.",
    "faq.q10": "후생연금과 국민연금의 차이는 무엇인가요?",
    "faq.a10": "일반적으로 회사에 소속된 직장인은 후생연금에 가입하며, 자영업자나 일부 아르바이트생은 국민연금에 가입합니다.",
    
    // Footer
    "footer.blog": "공식 블로그",
    "footer.contact": "고객 센터",
    "footer.rights": "모든 권리 보유."
  },
  ja: {
    // SEO
    "seo.home.title": "日本 脱退一時金・所得税還付 代行申請 | ノウゼイダイコウ",
    "seo.home.description": "日本で働き帰国した外国人労働者のための脱退一時金・所得税還付代行サービス。複雑な書類手続きなしで安全かつ迅速に年金を取り戻しましょう。",
    "seo.faq.title": "よくある質問 | 日本 脱退一時金・所得税還付 代行",
    "seo.faq.description": "日本の脱退一時金、年金還付、所得税還付についてよくある質問をご確認ください。",
    
    // Navbar
    "nav.home": "ホーム",
    "nav.faq": "FAQ",
    "nav.apply": "今すぐ申し込む",

    // Hero
    "hero.hook": "日本で働いた外国人なら、年金を取り戻せます。",
    "hero.sub": "平均100万年以上の脱退一時金、さらに所得税の還付まで。複雑な手続きは専門家にお任せください。",
    "hero.cta": "今すぐ申し込む",

    // What is it
    "what.title": "脱退一時金とは？",
    "what.desc": "日本で勤務し納付した厚生年金または国民年金は、帰国時に条件を満たせば払い戻しを受けられます。出国後2年以内の申請が必要ですので、早めの準備が大切です。",

    // Eligibility
    "eligibility.title": "申請資格",
    "eligibility.1": "年金加入期間が6ヶ月以上",
    "eligibility.2": "年金加入期間が10年未満",
    "eligibility.3": "日本出国後2年以内",
    "eligibility.4": "日本国籍を有していない方",
    "eligibility.5": "日本国内に住所を有していない方",

    // Calculator
    "calc.title": "予想還付金 計算機",
    "calc.type.label": "年金の種類",
    "calc.type.kosei": "厚生年金（会社員）",
    "calc.type.kokumin": "国民年金（自営業・アルバイト）",
    "calc.salary.label": "平均標準報酬額（円、税引前）",
    "calc.period.label": "加入期間（ヶ月）",
    "calc.result.gross": "総脱退一時金（税引前）",
    "calc.result.tax": "源泉所得税（20.42%）",
    "calc.result.net": "実受取額（税引後）",
    "calc.result.refund": "所得税還付可能額",
    "calc.notice.kokumin": "国民年金は税金が控除されず、全額支給されます。",
    
    // Period Dropdown
    "period.6_11": "6~11ヶ月",
    "period.12_17": "12~17ヶ月",
    "period.18_23": "18~23ヶ月",
    "period.24_29": "24~29ヶ月",
    "period.30_35": "30~35ヶ月",
    "period.36_41": "36~41ヶ月",
    "period.42_47": "42~47ヶ月",
    "period.48_53": "48~53ヶ月",
    "period.54_59": "54~59ヶ月",
    "period.60_plus": "60ヶ月以上",

    // Tax Refund
    "tax.title": "所得税の全額還付",
    "tax.desc": "厚生年金の脱退一時金を受け取る際、20.42%の税金が源泉徴収されます。しかし、納税管理人を選任すれば、この税金を全額還付してもらうことが可能です。当社では、脱退一時金の請求から所得税還付までワンストップで代行いたします。",

    // Process
    "process.title": "進行手順",
    "process.1.title": "相談申込",
    "process.1.desc": "カカオトークまたはメール相談",
    "process.2.title": "書類準備",
    "process.2.desc": "案内に従い必要な書類を準備",
    "process.3.title": "書類提出",
    "process.3.desc": "日本年金機構へ代行受付",
    "process.4.title": "審査",
    "process.4.desc": "約3〜4ヶ月所要",
    "process.5.title": "入金および所得税還付",
    "process.5.desc": "お客様の口座へ直接入金",

    // Documents
    "docs.title": "必要書類",
    "docs.1": "脱退一時金請求書（当社作成）",
    "docs.2": "パスポートのコピー（顔写真ページ、上陸許可ページ等）",
    "docs.3": "本人名義の銀行通帳のコピー",
    "docs.4": "年金手帳（基礎年金番号通知書）",
    "docs.5": "住民票の除票（日本の自治体発行、該当者のみ）",

    // Apply
    "apply.title": "今すぐご相談ください",
    "apply.desc": "出国後2年が経過すると、大切な年金を取り戻すことができません。",
    "apply.btn": "相談申込書を作成する",

    // FAQ
    "faq.title": "よくある質問",
    "faq.q1": "脱退一時金とは？",
    "faq.a1": "日本で6ヶ月以上働いた外国人が帰国する際に、これまで納付した年金の一部払い戻しを受けられる制度です。",
    "faq.q2": "申請可能な期間は？",
    "faq.a2": "日本を出国してから2年以内にのみ申請が可能です。期間が過ぎると権利が消滅します。",
    "faq.q3": "代行手数料はいくらですか？",
    "faq.a3": "予想還付額および書類準備の状況により異なりますので、相談申し込みをしていただければ個別にお見積りをご案内いたします。",
    "faq.q4": "いくら受け取れますか？",
    "faq.a4": "納付した年金の種類（厚生・国民）、月平均報酬額、加入期間により異なります。ホームページの計算機で概算額をご確認ください。",
    "faq.q5": "所得税の還付も一緒に申請しますか？",
    "faq.a5": "はい、厚生年金の場合、脱退一時金の受領後に源泉徴収された所得税（20.42%）を全額還付でき、当社で一括して代行いたします。",
    "faq.q6": "直接日本に行く必要がありますか？",
    "faq.a6": "いいえ、訪問の必要はなく、郵便およびオンラインで全過程を進行します。",
    "faq.q7": "どのくらいかかりますか？",
    "faq.a7": "日本年金機構の審査に通常3〜4ヶ月かかり、状況により5〜6ヶ月かかる場合もあります。",
    "faq.q8": "韓国の銀行口座で受け取れますか？",
    "faq.a8": "はい、ご本人名義の銀行口座へ国際送金を通じて直接入金されます。",
    "faq.q9": "すでに出国してから2年が過ぎています。",
    "faq.a9": "残念ながら、出国後2年が経過すると申請は不可能です。そのため、早めの申請をお勧めします。",
    "faq.q10": "厚生年金と国民年金の違いは何ですか？",
    "faq.a10": "一般的に会社に所属する会社員は厚生年金に加入し、自営業者や一部のアルバイトは国民年金に加入します。",
    
    // Footer
    "footer.blog": "公式ブログ",
    "footer.contact": "お問い合わせ",
    "footer.rights": "All rights reserved."
  },
  en: {
    // SEO
    "seo.home.title": "Japan Pension Lump-sum Withdrawal & Tax Refund Agency | Nouzeidaikou",
    "seo.home.description": "Professional agency service for foreign workers claiming back Japanese pension (Lump-sum Withdrawal) and income tax refunds. Quick, safe, and hassle-free.",
    "seo.faq.title": "FAQ | Japan Pension Lump-sum Withdrawal & Tax Refund Agency",
    "seo.faq.description": "Frequently asked questions regarding the Japanese pension lump-sum withdrawal and tax refund process.",
    
    // Navbar
    "nav.home": "Home",
    "nav.faq": "FAQ",
    "nav.apply": "Apply Now",

    // Hero
    "hero.hook": "Foreigners who worked in Japan: You can get your pension back.",
    "hero.sub": "Claim your lump-sum withdrawal payment (often over 1M yen) and get a full income tax refund. Leave the complex paperwork to our experts.",
    "hero.cta": "Apply Now",

    // What is it
    "what.title": "What is the Lump-sum Withdrawal?",
    "what.desc": "If you paid into the Japanese Employees' Pension or National Pension system while working in Japan, you can claim a refund upon leaving the country. Applications must be submitted within 2 years of departure.",

    // Eligibility
    "eligibility.title": "Eligibility Requirements",
    "eligibility.1": "Paid pension contributions for at least 6 months",
    "eligibility.2": "Paid pension contributions for less than 10 years",
    "eligibility.3": "Within 2 years of leaving Japan",
    "eligibility.4": "Do not possess Japanese citizenship",
    "eligibility.5": "No longer have a registered address in Japan",

    // Calculator
    "calc.title": "Estimated Refund Calculator",
    "calc.type.label": "Pension Type",
    "calc.type.kosei": "Employees' Pension (Kosei Nenkin)",
    "calc.type.kokumin": "National Pension (Kokumin Nenkin)",
    "calc.salary.label": "Average Monthly Salary (Yen, Pre-tax)",
    "calc.period.label": "Enrollment Period (Months)",
    "calc.result.gross": "Total Lump-sum Withdrawal (Pre-tax)",
    "calc.result.tax": "Withholding Tax (20.42%)",
    "calc.result.net": "Net Amount Received",
    "calc.result.refund": "Potential Tax Refund",
    "calc.notice.kokumin": "National Pension is paid in full with no tax withholding.",
    
    // Period Dropdown
    "period.6_11": "6-11 months",
    "period.12_17": "12-17 months",
    "period.18_23": "18-23 months",
    "period.24_29": "24-29 months",
    "period.30_35": "30-35 months",
    "period.36_41": "36-41 months",
    "period.42_47": "42-47 months",
    "period.48_53": "48-53 months",
    "period.54_59": "54-59 months",
    "period.60_plus": "60+ months",

    // Tax Refund
    "tax.title": "100% Income Tax Refund",
    "tax.desc": "When receiving the Employees' Pension Lump-sum Withdrawal, 20.42% is deducted as withholding tax. By appointing a tax representative (tax manager) before you leave or from abroad, you can get this tax fully refunded. We handle both procedures simultaneously.",

    // Process
    "process.title": "Process Timeline",
    "process.1.title": "Apply for Consultation",
    "process.1.desc": "Contact us via KakaoTalk or Email",
    "process.2.title": "Prepare Documents",
    "process.2.desc": "Gather requested documents",
    "process.3.title": "Submit Documents",
    "process.3.desc": "We submit them to the Japan Pension Service",
    "process.4.title": "Review Period",
    "process.4.desc": "Takes about 3 to 4 months",
    "process.5.title": "Payment & Tax Refund",
    "process.5.desc": "Deposited directly into your bank account",

    // Documents
    "docs.title": "Required Documents",
    "docs.1": "Lump-sum Withdrawal Application (Prepared by us)",
    "docs.2": "Passport Copy (Photo page, landing permission page, etc.)",
    "docs.3": "Copy of Bankbook (In your name)",
    "docs.4": "Pension Handbook (Basic Pension Number Notice)",
    "docs.5": "Certificate of Deletion of Resident Registration (If applicable)",

    // Apply
    "apply.title": "Contact Us Today",
    "apply.desc": "If more than 2 years pass after leaving Japan, your right to claim will expire.",
    "apply.btn": "Fill Out Application Form",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What is the Lump-sum Withdrawal Payment?",
    "faq.a1": "It is a system that allows foreigners who have worked in Japan for at least 6 months to claim a partial refund of their paid pension upon returning home.",
    "faq.q2": "When can I apply?",
    "faq.a2": "You must apply within 2 years of leaving Japan. After 2 years, your rights expire.",
    "faq.q3": "How much is the agency fee?",
    "faq.a3": "Fees depend on the estimated refund amount and your document status. Please request a consultation for a detailed quote.",
    "faq.q4": "How much will I receive?",
    "faq.a4": "It depends on the type of pension, average monthly salary, and enrollment period. Please use our calculator for an estimate.",
    "faq.q5": "Do you also apply for the income tax refund?",
    "faq.a5": "Yes, for Employees' Pension, the withheld tax (20.42%) can be fully refunded. We process this along with your withdrawal claim.",
    "faq.q6": "Do I need to visit Japan?",
    "faq.a6": "No, the entire process is handled remotely via mail and online.",
    "faq.q7": "How long does it take?",
    "faq.a7": "The review by the Japan Pension Service usually takes 3-4 months, but can take 5-6 months depending on circumstances.",
    "faq.q8": "Can I receive the money in my home country bank account?",
    "faq.a8": "Yes, the payment will be remitted internationally directly to your personal bank account.",
    "faq.q9": "It has already been over 2 years since I left Japan.",
    "faq.a9": "Unfortunately, applications are strictly not accepted if more than 2 years have passed. We recommend applying as early as possible.",
    "faq.q10": "What is the difference between Employees' Pension and National Pension?",
    "faq.a10": "Generally, company employees are enrolled in the Employees' Pension (Kosei Nenkin), while self-employed individuals and some part-timers are enrolled in the National Pension (Kokumin Nenkin)."
  }
};

let currentLang: Language = "ko";
const listeners: Set<() => void> = new Set();

export function getLanguage(): Language {
  return currentLang;
}

export function setLanguage(lang: Language) {
  currentLang = lang;
  document.documentElement.lang = lang;
  listeners.forEach(l => l());
}

export function subscribeLanguage(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function t(key: string): string {
  return translations[currentLang][key] || key;
}
