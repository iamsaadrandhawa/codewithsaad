// src/components/MiniRobot.tsx
import { useCallback, useEffect, useId, useRef, useState } from 'react';

/* ================================================================
   🎛️ CONFIG — change these to rename the assistant and the boss
   ================================================================ */
const ASSISTANT_NAME = 'Saarah';       // e.g. 'Sarah', 'Aria', 'Nova', 'Zara'
const BOSS_NAME = 'Saad';             // e.g. 'Saad', 'Ali', 'Ahmed'

/* Optional Urdu versions of the names (used in Urdu text) */
const ASSISTANT_NAME_UR = ASSISTANT_NAME;    // Urdu mode still says the same name (Roman)
const BOSS_NAME_UR = BOSS_NAME;              // Urdu mode still says the same name (Roman)

interface BubbleState {
  fullText: string;
  typedText: string;
  visible: boolean;
}

interface MiniRobotProps {
  readyToIntroduce?: boolean;
}

type Language = 'en' | 'ur';

/* ================================================================
   Intro strings — now dynamic
   ================================================================ */
const INTRO_TEXT =
  `Hi! I am ${ASSISTANT_NAME}, ${BOSS_NAME}'s virtual assistant. ` +
  `I will walk around this site with you. Click a section, button, or card and I will explain what it does.`;

const URDU_INTRO =
  `Assalam o alaikum. Main ${ASSISTANT_NAME_UR} hoon, ${BOSS_NAME_UR} ki virtual assistant. ` +
  `Main aapke saath is website par chalungi.`;

const WAKE_PROMPT_EN = 'Please activate me';
const WAKE_PROMPT_UR = 'Mujhe activate karein';

/* ================================================================
   Section descriptions
   ================================================================ */
const SECTION_DESCRIPTIONS: Record<string, string> = {
  home: `Welcome. This section introduces ${BOSS_NAME} and his work.`,
  skills: `This section shows ${BOSS_NAME}'s skills in development, networking, and technology.`,
  projects: `Explore ${BOSS_NAME}'s projects here. Click a project to learn more about it.`,
  experience: `This section describes ${BOSS_NAME}'s professional experience and previous roles.`,
  education:
    `This is ${BOSS_NAME}'s Education section. It shows his academic journey from Matric in 2017 up to his ongoing M S in Information Technology at Riphah International University.`,
  certifications: `This is ${BOSS_NAME}'s Certifications section, shown as a learning roadmap.`,
  testimonials: 'Here you can read feedback from clients and colleagues.',
  contact: `This is the Contact section. Send ${BOSS_NAME} a direct message using the form on the left.`,
  footer:
    `This is the footer. It shows the copyright notice for ${BOSS_NAME} and quick links to his social profiles.`,
};

const URDU_SECTIONS: Record<string, string> = {
  home: `Khush aamdeed. Yeh section ${BOSS_NAME_UR} aur unke kaam ka taaruf karata hai.`,
  skills: `Yeh section ${BOSS_NAME_UR} ki development, networking aur technology ki maharat dikhata hai.`,
  projects: `Yeh ${BOSS_NAME_UR} ke projects hain.`,
  experience: `Is section mein ${BOSS_NAME_UR} ka professional tajurba aur pichli jobs ka zikr hai.`,
  education: `Yeh ${BOSS_NAME_UR} ka Education section hai.`,
  certifications: `Yeh ${BOSS_NAME_UR} ka Certifications section hai.`,
  testimonials: `Yahan aap ${BOSS_NAME_UR} ke saath kaam karne walon ki raaye parh sakte hain.`,
  contact: `Yeh Contact section hai.`,
  footer: `Yeh footer hai.`,
};

/* ================================================================
   Fallback explanation tables — now dynamic
   ================================================================ */
const SKILL_EXPLANATIONS_EN: Record<string, string> = {
  'Web Development':
    `${BOSS_NAME} builds modern, responsive, high performance websites using React dot J S, Next dot J S, and Tailwind CSS.`,
  'Mobile Development':
    `${BOSS_NAME} builds cross platform mobile apps with React Native and Expo.`,
  'Backend Development':
    `${BOSS_NAME} builds secure and scalable backend systems using Node dot J S, Express, and REST APIs.`,
  'Database Systems':
    `${BOSS_NAME} works with MongoDB, MySQL, and Firebase Firestore.`,
  'Network Infrastructure':
    `${BOSS_NAME} designs and manages fiber optic networks, IP routing, and Mikrotik devices.`,
  'Security & Firewalls':
    `${BOSS_NAME} configures firewalls and access control rules.`,
  Connectivity:
    `${BOSS_NAME} manages switches, V LANs, and Wide Area Networks.`,
  'IT Operations':
    `${BOSS_NAME} handles C C T V, OS setup, hardware troubleshooting, and end to end I T support.`,
  Frontend:
    `${BOSS_NAME} works with React dot J S and TypeScript to build fast, type safe user interfaces.`,
  Backend: `${BOSS_NAME} builds secure backends with Node dot J S and Express.`,
  'Networking & IT':
    `${BOSS_NAME} has hands on experience with fiber optic networks, Mikrotik routers, Cisco routing, firewalls, V LANs, and C C T V systems.`,
  'Tools & DevOps':
    `${BOSS_NAME} uses Git, C I and C D pipelines, Fastlane, Jest, Firebase, and A W S.`,
  'MS Information Technology':
    `M S Information Technology at Riphah International University, Faisalabad. ${BOSS_NAME} is currently enrolled, expected to complete in 2026.`,
  'BS Computer Science':
    `B S Computer Science from Riphah International University, Faisalabad, completed in 2024.`,
  'FSC Pre Engineering':
    `F S C Pre Engineering from Superior College, Shahkot, completed in 2020.`,
  'Matric in Computer Science':
    `Matriculation in Computer Science from Al Raza High School, Shahkot, completed in 2017.`,
  'Assistant IT Officer':
    `Assistant I T Officer at Jadeed Group of Companies, Shahkot, Pakistan. ${BOSS_NAME} started this role in July 2025 and it is his current job.`,
  'MERN-Stack Developer':
    `M E R N Stack Developer as a freelancer, working from Pakistan since July 2022.`,
  'Computer Science Lecturer':
    `Computer Science Lecturer at Government Graduate College, Shahkot, September 2024 to December 2024.`,
  'Network Administrator':
    `Network Administrator at Mascot Fiber Private Limited, Shahkot, October 2022 to September 2024.`,
  'Cybersecurity Essentials':
    `Cybersecurity Essentials, issued by Cisco Networking Academy in 2023.`,
  'NDG Linux Essentials':
    `N D G Linux Essentials, issued by Cisco Networking Academy in 2023.`,
  'Networking Essentials':
    `Networking Essentials, issued by Cisco Networking Academy in 2023.`,
  'Introduction to IoT and Digital Transformation':
    `Introduction to I o T and Digital Transformation, Cisco Networking Academy, 2025.`,
  'Ethical Hacker': `Ethical Hacker, issued by Cisco Networking Academy in 2025.`,
  'Python Essentials 1': `Python Essentials 1, issued by Cisco Networking Academy in 2025.`,
  Email: `Email. Send ${BOSS_NAME} a direct email at iamsaadrandhawa at gmail dot com.`,
  Phone: `Phone. Call or message ${BOSS_NAME} at plus 92 345 0450266.`,
  WhatsApp: `WhatsApp. Chat instantly with ${BOSS_NAME} on WhatsApp.`,
  Location: `Location. ${BOSS_NAME} is based in Tehsil Shahkot, Punjab, Pakistan.`,
};

const SKILL_EXPLANATIONS_UR: Record<string, string> = {
  'Web Development':
    `${BOSS_NAME_UR} React dot J S, Next dot J S aur Tailwind CSS se modern websites banate hain.`,
  'Mobile Development':
    `${BOSS_NAME_UR} React Native aur Expo se cross platform mobile apps banate hain.`,
  'Backend Development':
    `${BOSS_NAME_UR} Node dot J S aur Express se mehfooz backend banate hain.`,
  'Database Systems':
    `${BOSS_NAME_UR} MongoDB, MySQL aur Firebase Firestore ke saath kaam karte hain.`,
  'Network Infrastructure':
    `${BOSS_NAME_UR} fiber optic networks aur Mikrotik devices manage karte hain.`,
  'Security & Firewalls':
    `${BOSS_NAME_UR} firewalls aur access control configure karte hain.`,
  Connectivity: `${BOSS_NAME_UR} switches, V LANs aur W A N manage karte hain.`,
  'IT Operations': `${BOSS_NAME_UR} C C T V aur I T support sambhalte hain.`,
  Frontend: `${BOSS_NAME_UR} React aur TypeScript se user interfaces banate hain.`,
  Backend: `${BOSS_NAME_UR} Node dot J S aur Express se backends banate hain.`,
  'Networking & IT':
    `${BOSS_NAME_UR} fiber, Mikrotik, Cisco aur C C T V ka tajurba rakhte hain.`,
  'Tools & DevOps':
    `${BOSS_NAME_UR} Git, C I aur C D, Fastlane, Jest aur A W S use karte hain.`,
  'MS Information Technology':
    `M S Information Technology, Riphah International University, 2026 mein mukammal hoga.`,
  'BS Computer Science':
    `B S Computer Science, Riphah International University, 2024 mein mukammal hui.`,
  'FSC Pre Engineering': `F S C Pre Engineering, Superior College, 2020 mein mukammal hui.`,
  'Matric in Computer Science':
    `Matriculation in Computer Science, Al Raza High School, 2017 mein mukammal hui.`,
  'Assistant IT Officer': `Assistant I T Officer, Jadeed Group, Shahkot.`,
  'MERN-Stack Developer': `M E R N Stack Developer, freelance.`,
  'Computer Science Lecturer': `Computer Science Lecturer, Government Graduate College.`,
  'Network Administrator': `Network Administrator, Mascot Fiber.`,
  'Cybersecurity Essentials': `Cybersecurity Essentials, Cisco, 2023.`,
  'NDG Linux Essentials': `N D G Linux Essentials, Cisco, 2023.`,
  'Networking Essentials': `Networking Essentials, Cisco, 2023.`,
  'Introduction to IoT and Digital Transformation': `Introduction to I o T, Cisco, 2025.`,
  'Ethical Hacker': `Ethical Hacker, Cisco, 2025.`,
  'Python Essentials 1': `Python Essentials 1, Cisco, 2025.`,
  Email: `Email. ${BOSS_NAME_UR} ko iamsaadrandhawa at gmail dot com par email bhejein.`,
  Phone: `Phone. ${BOSS_NAME_UR} ko plus 92 345 0450266 par call karein.`,
  WhatsApp: `WhatsApp. ${BOSS_NAME_UR} se WhatsApp par chat karein.`,
  Location: `Location. ${BOSS_NAME_UR} Tehsil Shahkot, Punjab mein base hain.`,
};

/* ================================================================
   Voice picker
   ================================================================ */
const pickVoice = (
  voices: SpeechSynthesisVoice[],
  language: Language
): SpeechSynthesisVoice | null => {
  if (!voices.length) return null;

  if (language === 'ur') {
    const urduVoice = voices.find((v) => v.lang.toLowerCase().startsWith('ur'));
    if (urduVoice) return urduVoice;

    const hindiFemale = ['Swara', 'Lekha', 'Kalpana', 'Heera'];
    for (const name of hindiFemale) {
      const match = voices.find(
        (v) =>
          v.lang.toLowerCase().startsWith('hi') &&
          v.name.toLowerCase().includes(name.toLowerCase())
      );
      if (match) return match;
    }
    const anyHindi = voices.find((v) => v.lang.toLowerCase().startsWith('hi'));
    if (anyHindi) return anyHindi;
    const indianEn = voices.find((v) => v.lang === 'en-IN');
    if (indianEn) return indianEn;
  }

  const preferredNames = [
    'Samantha',
    'Microsoft Zira',
    'Microsoft Aria',
    'Google UK English Female',
    'Karen',
    'Moira',
    'Tessa',
    'Victoria',
  ];

  for (const name of preferredNames) {
    const voice = voices.find(
      (candidate) =>
        candidate.lang.toLowerCase().startsWith('en') &&
        candidate.name.toLowerCase().includes(name.toLowerCase())
    );
    if (voice) return voice;
  }

  return (
    voices.find((voice) => voice.localService && voice.lang === 'en-US') ||
    voices.find((voice) => voice.lang.startsWith('en')) ||
    voices.find((voice) => voice.default) ||
    voices[0] ||
    null
  );
};

/* ================================================================
   Chunk text
   ================================================================ */
const splitIntoChunks = (text: string, limit = 140): string[] => {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const chunks: string[] = [];
  let current = '';

  for (const word of words) {
    if (current && current.length + word.length + 1 > limit) {
      chunks.push(current);
      current = '';
    }
    let remaining = word;
    while (remaining.length > limit) {
      if (current) {
        chunks.push(current);
        current = '';
      }
      chunks.push(remaining.slice(0, limit));
      remaining = remaining.slice(limit);
    }
    if (remaining) {
      current = current ? `${current} ${remaining}` : remaining;
    }
  }
  if (current) chunks.push(current);
  return chunks;
};

/* ================================================================
   Auto-explain
   ================================================================ */
const autoExplain = (element: Element, language: Language): string => {
  if (language === 'ur') {
    const custom = element.getAttribute('data-explain-ur')?.trim();
    if (custom) return custom;

    const headingText = element.querySelector('h3, h2, h1')?.textContent?.trim();
    if (headingText && SKILL_EXPLANATIONS_UR[headingText]) {
      return SKILL_EXPLANATIONS_UR[headingText];
    }

    const tag = element.tagName.toLowerCase();
    const href = element.getAttribute('href') || '';
    const id = href.startsWith('#') ? href.slice(1) : element.id;

    if (tag === 'footer') return URDU_SECTIONS.footer;
    if (tag === 'section' || href.startsWith('#')) {
      return URDU_SECTIONS[id] || 'Is hissay mein mazeed maloomat dekhein.';
    }
    if (element.hasAttribute('download'))
      return 'Yahan click kar ke aap file download kar sakte hain.';
    if (href.startsWith('mailto:'))
      return `Yeh link ${BOSS_NAME_UR} ko email bhejne ke liye aapki email app kholta hai.`;
    if (href.startsWith('tel:')) return 'Yeh link phone call karne ke liye hai.';
    if (tag === 'a') return 'Yeh link mutalliq safha kholta hai.';
    if (tag === 'button' || element.getAttribute('role') === 'button') {
      return 'Yeh button mutalliq kaam anjaam dene ke liye hai.';
    }
    const section = element.closest('section')?.id || '';
    return URDU_SECTIONS[section] || 'Yahan is mawzu ke bare mein mazeed maloomat hain.';
  }

  const customExplanation = element.getAttribute('data-explain')?.trim();
  if (customExplanation) return customExplanation;

  const headingText = element.querySelector('h3, h2, h1')?.textContent?.trim();
  if (headingText && SKILL_EXPLANATIONS_EN[headingText]) {
    return SKILL_EXPLANATIONS_EN[headingText];
  }

  const tag = element.tagName.toLowerCase();
  const text = element.textContent?.replace(/\s+/g, ' ').trim() || '';
  const label = element.getAttribute('aria-label') || text.slice(0, 100);
  const sectionId =
    element.id ||
    element.closest('section')?.id ||
    (tag === 'footer' ? 'footer' : '');

  if (tag === 'footer') return SECTION_DESCRIPTIONS.footer;

  if (tag === 'a') {
    const href = element.getAttribute('href') || '';
    if (element.hasAttribute('download'))
      return `This link downloads ${label || 'a file'}.`;
    if (href.startsWith('#')) {
      const id = href.slice(1);
      return (
        SECTION_DESCRIPTIONS[id] ||
        `This link takes you to ${label || id || 'the top of the page'}.`
      );
    }
    if (href.startsWith('mailto:'))
      return `This link opens your email app so you can send a message to ${BOSS_NAME}.`;
    if (href.startsWith('tel:')) return 'This link lets you call the displayed phone number.';
    if (/^https?:\/\//i.test(href)) {
      const destination =
        element.getAttribute('target') === '_blank' ? 'in a new tab' : 'in this tab';
      return `This link opens ${label || 'another page'} ${destination}.`;
    }
    return `This link opens ${label || 'another page'}.`;
  }

  if (tag === 'button' || element.getAttribute('role') === 'button') {
    const lowerLabel = label.toLowerCase();
    if (/menu|navigation/.test(lowerLabel)) {
      return element.getAttribute('aria-expanded') === 'true'
        ? 'This button controls the navigation menu. The menu is open.'
        : 'This button controls the navigation menu.';
    }
    if (/theme|dark mode|light mode/.test(lowerLabel))
      return 'This button changes the appearance of the website.';
    if (
      element.getAttribute('type') === 'submit' ||
      /send message|submit/.test(lowerLabel)
    )
      return 'This button submits the information you entered in the form.';
    return label ? `This button is called ${label}.` : '';
  }

  if (/^h[1-6]$/.test(tag)) {
    return `This heading introduces ${label || 'this part of the page'}.`;
  }

  if (tag === 'section') {
    return (
      SECTION_DESCRIPTIONS[sectionId] ||
      (label ? `This section contains ${label}.` : '')
    );
  }

  return label ? `This content is about ${label}.` : '';
};

/* ================================================================
   Sarah component
   ================================================================ */
const MiniRobot = ({ readyToIntroduce = false }: MiniRobotProps) => {
  const uniqueId = useId().replace(/:/g, '');
  const bodyGradientId = `sarah-body-${uniqueId}`;
  const visorGradientId = `sarah-visor-${uniqueId}`;
  const glowId = `sarah-glow-${uniqueId}`;

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [facing, setFacing] = useState<'left' | 'right'>('left');
  const [walking, setWalking] = useState(false);
  const [running, setRunning] = useState(false);
  const [waving, setWaving] = useState(false);
  const [talking, setTalking] = useState(false);
  const [blink, setBlink] = useState(false);
  const [speechError, setSpeechError] = useState('');
  const [language, setLanguage] = useState<Language>('en');

  const [awakened, setAwakened] = useState(false);
  const [showWakePrompt, setShowWakePrompt] = useState(true);

  const [bubble, setBubble] = useState<BubbleState>({
    fullText: '',
    typedText: '',
    visible: false,
  });

  const robotRootRef = useRef<HTMLDivElement | null>(null);
  const robotPosRef = useRef({ x: 0, y: 0 });
  const targetPosRef = useRef({ x: 0, y: 0 });

  const talkingRef = useRef(false);
  const hasIntroducedRef = useRef(false);
  const hasSpokenWakePromptRef = useRef(false);
  const sessionRef = useRef(0);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const typeTimerRef = useRef<number | null>(null);
  const hideTimerRef = useRef<number | null>(null);
  const waveTimerRef = useRef<number | null>(null);

  const clearConversationTimers = useCallback(() => {
    if (typeTimerRef.current !== null) {
      window.clearInterval(typeTimerRef.current);
      typeTimerRef.current = null;
    }
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (waveTimerRef.current !== null) {
      window.clearTimeout(waveTimerRef.current);
      waveTimerRef.current = null;
    }
  }, []);

  const cancelCurrentSpeech = useCallback(() => {
    sessionRef.current += 1;
    clearConversationTimers();

    const utterance = utteranceRef.current;
    if (utterance) {
      utterance.onstart = null;
      utterance.onend = null;
      utterance.onerror = null;
    }
    utteranceRef.current = null;
    talkingRef.current = false;

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [clearConversationTimers]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const synth = window.speechSynthesis;
    const loadVoices = () => {
      voicesRef.current = synth.getVoices();
    };
    loadVoices();
    synth.addEventListener('voiceschanged', loadVoices);
    return () => {
      synth.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  const speakOnly = useCallback(
    (text: string, lang: Language = 'en') => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
      cancelCurrentSpeech();

      const synth = window.speechSynthesis;
      const availableVoices = synth.getVoices();
      const voice = pickVoice(
        availableVoices.length ? availableVoices : voicesRef.current,
        lang
      );

      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;
      if (voice) utterance.voice = voice;
      utterance.lang = voice?.lang || (lang === 'ur' ? 'hi-IN' : 'en-US');
      utterance.rate = 0.95;
      utterance.pitch = 1.15;
      utterance.volume = 1;

      utterance.onstart = () => {
        talkingRef.current = true;
        setTalking(true);
      };
      utterance.onend = () => {
        talkingRef.current = false;
        setTalking(false);
      };
      utterance.onerror = () => {
        talkingRef.current = false;
        setTalking(false);
      };

      try {
        if (synth.paused) synth.resume();
        synth.speak(utterance);
      } catch {}
    },
    [cancelCurrentSpeech]
  );

  const say = useCallback(
    (message: string, selectedLanguage: Language = language) => {
      const text = message.trim();
      if (!text) return;

      cancelCurrentSpeech();

      const session = sessionRef.current;
      const typeSpeed = 24;
      const startedAt = Date.now();
      let characterIndex = 0;

      setTalking(false);
      setSpeechError('');
      setWaving(true);
      setBubble({ fullText: text, typedText: '', visible: true });

      waveTimerRef.current = window.setTimeout(() => {
        if (session !== sessionRef.current) return;
        setWaving(false);
        waveTimerRef.current = null;
      }, 1000);

      const typeTimer = window.setInterval(() => {
        if (session !== sessionRef.current) {
          window.clearInterval(typeTimer);
          return;
        }
        characterIndex += 1;
        setBubble((current) => ({
          ...current,
          typedText: text.slice(0, characterIndex),
        }));
        if (characterIndex >= text.length) {
          window.clearInterval(typeTimer);
          typeTimerRef.current = null;
        }
      }, typeSpeed);

      typeTimerRef.current = typeTimer;

      const finish = (errorMessage = '') => {
        if (session !== sessionRef.current) return;
        utteranceRef.current = null;
        talkingRef.current = false;
        setTalking(false);
        setSpeechError(errorMessage);

        const remainingTypingTime = Math.max(
          0,
          text.length * typeSpeed - (Date.now() - startedAt)
        );

        hideTimerRef.current = window.setTimeout(
          () => {
            if (session !== sessionRef.current) return;
            setBubble((current) => ({ ...current, visible: false }));
            hideTimerRef.current = null;
          },
          remainingTypingTime + (errorMessage ? 7000 : 2500)
        );
      };

      if (
        typeof window === 'undefined' ||
        !('speechSynthesis' in window) ||
        !('SpeechSynthesisUtterance' in window)
      ) {
        finish(
          selectedLanguage === 'ur'
            ? 'Is browser mein awaaz support nahi hai.'
            : 'Voice playback is unavailable in this browser.'
        );
        return;
      }

      const synth = window.speechSynthesis;
      const availableVoices = synth.getVoices();
      const voice = pickVoice(
        availableVoices.length ? availableVoices : voicesRef.current,
        selectedLanguage
      );

      const chunks = splitIntoChunks(text);
      let chunkIndex = 0;

      const speakNext = () => {
        if (session !== sessionRef.current) return;
        if (chunkIndex >= chunks.length) {
          finish();
          return;
        }

        const utterance = new SpeechSynthesisUtterance(chunks[chunkIndex++]);
        utteranceRef.current = utterance;

        if (voice) utterance.voice = voice;
        utterance.lang =
          voice?.lang || (selectedLanguage === 'ur' ? 'hi-IN' : 'en-US');

        utterance.rate = 0.92;
        utterance.pitch = 1.15;
        utterance.volume = 1;

        utterance.onstart = () => {
          if (session !== sessionRef.current) return;
          talkingRef.current = true;
          setTalking(true);
        };

        utterance.onend = () => {
          if (session !== sessionRef.current) return;
          window.setTimeout(() => {
            if (session !== sessionRef.current) return;
            speakNext();
          }, 120);
        };

        utterance.onerror = (event) => {
          if (session !== sessionRef.current) return;
          console.warn('Assistant speech error:', event.error);
          if (event.error === 'interrupted' || event.error === 'canceled') return;
          finish(
            event.error === 'not-allowed'
              ? `Click ${ASSISTANT_NAME} to start voice playback.`
              : `Voice playback stopped. Click ${ASSISTANT_NAME} to try again.`
          );
        };

        try {
          if (synth.paused) synth.resume();
          synth.speak(utterance);
        } catch (error) {
          console.warn('Assistant could not speak:', error);
          finish(`Voice playback failed. Click ${ASSISTANT_NAME} to try again.`);
        }
      };

      speakNext();
    },
    [cancelCurrentSpeech, language]
  );

  const stop = useCallback(() => {
    cancelCurrentSpeech();
    setTalking(false);
    setWaving(false);
    setSpeechError('');
    setBubble((current) => ({ ...current, visible: false }));
  }, [cancelCurrentSpeech]);

  const deactivate = useCallback(() => {
    cancelCurrentSpeech();
    setTalking(false);
    setWaving(false);
    setSpeechError('');
    setBubble({ fullText: '', typedText: '', visible: false });

    setFacing('left');
    setWalking(false);
    setRunning(false);
    setPos({ x: 0, y: 0 });
    robotPosRef.current = { x: 0, y: 0 };
    targetPosRef.current = { x: 0, y: 0 };

    setAwakened(false);
    setShowWakePrompt(true);
    hasIntroducedRef.current = false;
    hasSpokenWakePromptRef.current = false;
  }, [cancelCurrentSpeech]);

  useEffect(() => {
    if (!readyToIntroduce) return;
    if (awakened) return;
    if (hasSpokenWakePromptRef.current) return;

    const timer = window.setTimeout(() => {
      hasSpokenWakePromptRef.current = true;
      speakOnly(language === 'ur' ? WAKE_PROMPT_UR : WAKE_PROMPT_EN, language);
    }, 1600);

    return () => window.clearTimeout(timer);
  }, [readyToIntroduce, awakened, speakOnly, language]);

  useEffect(() => {
    if (awakened) {
      setShowWakePrompt(false);
      return;
    }

    const show = () => setShowWakePrompt(true);
    const hide = () => setShowWakePrompt(false);

    const firstHide = window.setTimeout(hide, 4800);
    const loop = window.setInterval(() => {
      show();
      window.setTimeout(hide, 4000);
    }, 9000);

    return () => {
      window.clearTimeout(firstHide);
      window.clearInterval(loop);
    };
  }, [awakened]);

  const awaken = useCallback(() => {
    if (awakened) return;
    setAwakened(true);
    setShowWakePrompt(false);
    cancelCurrentSpeech();

    hasIntroducedRef.current = true;
    setFacing('right');
    window.setTimeout(
      () => say(language === 'ur' ? URDU_INTRO : INTRO_TEXT, language),
      500
    );
  }, [awakened, cancelCurrentSpeech, say, language]);

  useEffect(() => {
    if (!awakened) {
      setWalking(false);
      setRunning(false);
      robotPosRef.current = { x: 0, y: 0 };
      targetPosRef.current = { x: 0, y: 0 };
      setPos({ x: 0, y: 0 });
      return;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame: number | null = null;
    let blinkTimeout: number | null = null;
    let idleWaveTimeout: number | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      if (reducedMotion.matches) {
        targetPosRef.current = { x: 0, y: 0 };
        return;
      }
      const isMobile = window.innerWidth < 768;
      const factorX = isMobile ? 0.15 : 0.35;
      const factorY = isMobile ? 0.12 : 0.25;
      targetPosRef.current = {
        x: (event.clientX - window.innerWidth / 2) * factorX,
        y: (event.clientY - window.innerHeight / 2) * factorY,
      };
    };

    const tick = () => {
      if (reducedMotion.matches) {
        targetPosRef.current = { x: 0, y: 0 };
      }

      const dx = targetPosRef.current.x - robotPosRef.current.x;
      const dy = targetPosRef.current.y - robotPosRef.current.y;
      const distance = Math.hypot(dx, dy);
      const moving = distance > 0.5;

      setWalking(!reducedMotion.matches && distance > 4);
      setRunning(!reducedMotion.matches && distance > 90);

      if (Math.abs(dx) > 2) {
        setFacing(dx > 0 ? 'right' : 'left');
      }

      if (moving) {
        const ease = distance > 90 ? 0.14 : 0.08;
        robotPosRef.current = {
          x: robotPosRef.current.x + dx * ease,
          y: robotPosRef.current.y + dy * ease,
        };
        setPos({ ...robotPosRef.current });
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrame = window.requestAnimationFrame(tick);

    const blinkInterval = window.setInterval(() => {
      setBlink(true);
      blinkTimeout = window.setTimeout(() => setBlink(false), 150);
    }, 3800);

    const waveInterval = window.setInterval(() => {
      if (talkingRef.current || reducedMotion.matches) return;
      setWaving(true);
      idleWaveTimeout = window.setTimeout(() => setWaving(false), 1200);
    }, 12000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      window.clearInterval(blinkInterval);
      window.clearInterval(waveInterval);
      if (blinkTimeout !== null) window.clearTimeout(blinkTimeout);
      if (idleWaveTimeout !== null) window.clearTimeout(idleWaveTimeout);
    };
  }, [awakened]);

  useEffect(() => {
    if (!awakened) return;

    const handlePageClick = (event: MouseEvent) => {
      if (!readyToIntroduce) return;
      if (event.button !== 0) return;
      if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;

      if (robotRootRef.current?.contains(target)) return;

      if (
        target.closest(
          'input, textarea, select, label, [contenteditable="true"], ' +
            '[data-sarah-ignore]'
        )
      ) {
        return;
      }

      if (!hasIntroducedRef.current) {
        hasIntroducedRef.current = true;
        say(language === 'ur' ? URDU_INTRO : INTRO_TEXT, language);
        return;
      }

      const explainElement =
        target.closest('[data-explain-ur], [data-explain]') ||
        target.closest(
          'a, button, [role="button"], article, h1, h2, h3, section, footer'
        );

      if (!explainElement) return;
      const explanation = autoExplain(explainElement, language);
      if (explanation) say(explanation, language);
    };

    document.addEventListener('click', handlePageClick);
    return () => {
      document.removeEventListener('click', handlePageClick);
    };
  }, [readyToIntroduce, say, language, awakened]);

  useEffect(() => {
    return () => cancelCurrentSpeech();
  }, [cancelCurrentSpeech]);

  const walkSpeed = running ? '0.35s' : '0.6s';
  const isFacingLeft = facing === 'left';

  return (
    <div
      ref={robotRootRef}
      className={`sarah-root ${
        awakened
          ? 'fixed z-50 bottom-5 right-5 md:bottom-auto md:right-auto md:left-1/2 md:top-1/2'
          : [
              'fixed z-50',
              'max-[380px]:bottom-[68px] max-[380px]:right-[16px]',
              'bottom-[66px] right-[20px]',
              'sm:bottom-[78px] sm:right-[28px]',
              'md:bottom-[92px] md:right-[36px]',
              'lg:bottom-[96px] lg:right-[40px]',
            ].join(' ')
      }`}
      style={{
        transform: awakened
          ? `translate(${pos.x}px, ${pos.y}px)`
          : 'translate(0, 0)',
        transition: awakened
          ? 'transform 80ms linear'
          : 'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      <style>{`
        @keyframes sarah-arm-left {
          from { transform: rotate(-22deg); }
          to { transform: rotate(22deg); }
        }
        @keyframes sarah-arm-right {
          from { transform: rotate(22deg); }
          to { transform: rotate(-22deg); }
        }
        @keyframes sarah-leg-left {
          from { transform: rotate(18deg); }
          to { transform: rotate(-18deg); }
        }
        @keyframes sarah-leg-right {
          from { transform: rotate(-18deg); }
          to { transform: rotate(18deg); }
        }
        @keyframes sarah-mouth {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.5); }
        }
        @keyframes sarah-sit-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes sarah-hello-wave-left {
          0%, 100% { transform: rotate(48deg); }
          25% { transform: rotate(120deg); }
          50% { transform: rotate(90deg); }
          75% { transform: rotate(130deg); }
        }
        @keyframes sarah-prompt-pop {
          0%   { opacity: 0; transform: translate(-50%, 4px) scale(0.9); }
          15%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
          85%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -4px) scale(0.98); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sarah-root *,
          .sarah-root *::before,
          .sarah-root *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div
        className={
          !awakened
            ? 'relative flex flex-col items-center'
            : 'relative md:-translate-x-1/2 md:-translate-y-1/2'
        }
      >
        {/* ---------- Language switcher — visible only when awake ---------- */}
        {awakened && (
          <div
            className="mb-2 flex gap-1 rounded-lg bg-slate-950/90 border border-white/10 p-1 text-xs text-white backdrop-blur-md"
            aria-label={`${ASSISTANT_NAME}'s language`}
          >
            {(['en', 'ur'] as const).map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={language === value}
                onClick={(event) => {
                  event.stopPropagation();
                  setLanguage(value);
                  if (bubble.fullText) {
                    say(bubble.fullText, value);
                  }
                }}
                className={`rounded px-2 py-1 transition-colors ${
                  language === value
                    ? 'bg-cyan-700 text-white'
                    : 'text-slate-300 hover:bg-white/10'
                }`}
              >
                {value === 'ur' ? 'اردو' : 'English'}
              </button>
            ))}
          </div>
        )}

        {/* ---------- WAKE PROMPT ---------- */}
        {!awakened && showWakePrompt && (
          <div
            className="pointer-events-none absolute left-1/2 z-20"
            style={{
              bottom: 'calc(100% + 1px)',
              transform: 'translateX(-50%)',
              animation: 'sarah-prompt-pop 4.5s ease-in-out forwards',
            }}
          >
            <div className="relative rounded-lg border border-cyan-400/40 bg-[#0b1020]/95 px-2 py-1 shadow-[0_0_20px_rgba(34,211,238,0.4)] backdrop-blur-md sm:px-3 sm:py-1.5">
              <span className="block whitespace-nowrap text-center text-[10px] font-semibold text-cyan-200 sm:text-[11px]">
                {language === 'ur' ? WAKE_PROMPT_UR : WAKE_PROMPT_EN}
              </span>
              <div
                aria-hidden
                className="absolute left-1/2 -bottom-1.5 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-cyan-400/40 bg-[#0b1020]/95"
              />
            </div>
          </div>
        )}

        {/* ---------- Speech bubble ---------- */}
        {(bubble.visible || awakened) && (
          <div
            className="absolute bottom-full right-0 mb-4 md:right-auto md:left-1/2 md:-translate-x-1/2"
            style={{ width: 'min(300px, calc(100vw - 32px))' }}
          >
            <div className="relative rounded-2xl border border-cyan-400/30 bg-[#0b1020]/95 px-4 py-3 text-slate-200 shadow-xl backdrop-blur-md">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold text-cyan-300">
                  {ASSISTANT_NAME} {talking ? '• Speaking' : ''}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      stop();
                    }}
                    className="rounded px-2 py-1 text-xs text-slate-300 hover:bg-white/10 transition-colors"
                  >
                    Stop
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      deactivate();
                    }}
                    className="rounded px-2 py-1 text-xs text-amber-300 hover:bg-amber-400/10 transition-colors"
                    title={`Put ${ASSISTANT_NAME} back to sleep`}
                  >
                    Deactivate
                  </button>
                </div>
              </div>

              <p className="text-[12.5px] leading-relaxed" aria-hidden="true">
                {bubble.typedText || (
                  <span className="text-slate-500 italic">
                    Listening… click anything and I'll explain.
                  </span>
                )}
                {bubble.visible &&
                  bubble.typedText.length > 0 &&
                  bubble.typedText.length < bubble.fullText.length && (
                    <span className="ml-0.5 inline-block h-3 w-1 bg-cyan-300" />
                  )}
              </p>

              <span className="sr-only" role="status" aria-live="polite">
                {bubble.fullText}
              </span>

              {speechError && (
                <p className="mt-2 text-xs text-amber-300" role="alert">
                  {speechError}
                </p>
              )}

              <div
                aria-hidden="true"
                className="absolute -bottom-1.5 right-9 h-3 w-3 rotate-45 border-b border-r border-cyan-400/30 bg-[#0b1020] md:right-auto md:left-1/2 md:-translate-x-1/2"
              />
            </div>
          </div>
        )}

        {/* ---------- Robot ---------- */}
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            if (!awakened) {
              awaken();
              return;
            }
            hasIntroducedRef.current = true;
            say(language === 'ur' ? URDU_INTRO : INTRO_TEXT, language);
          }}
          className="relative block cursor-pointer rounded-2xl border-0 bg-transparent p-0"
          aria-label={
            awakened
              ? `Play ${ASSISTANT_NAME}'s introduction`
              : `Wake up ${ASSISTANT_NAME}`
          }
          title={
            awakened
              ? `Click to hear ${ASSISTANT_NAME}`
              : 'Click to activate me'
          }
        >
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 h-3 rounded-full bg-black/40 blur-md"
            style={{
              width: awakened ? (running ? 50 : walking ? 58 : 64) : 40,
              transform: 'translateX(-50%)',
            }}
          />

          <svg
            viewBox="0 0 86 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className={`transition-all duration-500 ${
              awakened
                ? 'w-[72px] h-[80px] sm:w-[80px] sm:h-[88px] md:w-[86px] md:h-[96px]'
                : 'w-[54px] h-[62px] sm:w-[60px] sm:h-[68px] md:w-[64px] md:h-[72px]'
            }`}
            style={{
              overflow: 'visible',
              transform: `scaleX(${isFacingLeft ? -1 : 1}) ${
                awakened ? '' : 'translateY(2px)'
              }`,
              transition:
                'transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1), width 500ms ease, height 500ms ease',
              animation: awakened
                ? 'none'
                : 'sarah-sit-bob 2.6s ease-in-out infinite',
            }}
          >
            <defs>
              <linearGradient id={bodyGradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e0f7ff" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
              <linearGradient id={visorGradientId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <line x1="43" y1="8" x2="43" y2="18" stroke="#7dd3fc" strokeWidth="2" />
            <circle
              cx="43"
              cy="6"
              r="3"
              fill={talking ? '#34d399' : '#22d3ee'}
              filter={`url(#${glowId})`}
            />

            <rect
              x="16"
              y="18"
              width="54"
              height="42"
              rx="14"
              fill={`url(#${bodyGradientId})`}
              stroke="#0ea5e9"
              strokeWidth="1.5"
            />
            <rect
              x="22"
              y="26"
              width="42"
              height="22"
              rx="8"
              fill={`url(#${visorGradientId})`}
            />

            <g filter={`url(#${glowId})`}>
              <ellipse cx="34" cy="37" rx="3" ry={blink ? 0.6 : 3} fill="#22d3ee" />
              <ellipse cx="52" cy="37" rx="3" ry={blink ? 0.6 : 3} fill="#22d3ee" />
            </g>

            {talking ? (
              <ellipse
                cx="43"
                cy="45"
                rx="5"
                ry="2"
                fill="#22d3ee"
                style={{
                  transformBox: 'fill-box',
                  transformOrigin: 'center',
                  animation: 'sarah-mouth 450ms ease-in-out infinite',
                }}
              />
            ) : (
              <path
                d="M35 44 Q43 48 51 44"
                stroke="#22d3ee"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}

            <circle cx="27" cy="44" r="1.4" fill="#f472b6" opacity="0.8" />
            <circle cx="59" cy="44" r="1.4" fill="#f472b6" opacity="0.8" />

            <rect x="10" y="30" width="6" height="12" rx="2" fill="#7dd3fc" stroke="#0ea5e9" />
            <rect x="70" y="30" width="6" height="12" rx="2" fill="#7dd3fc" stroke="#0ea5e9" />

            <rect x="38" y="58" width="10" height="4" rx="1.5" fill="#0ea5e9" />
            <rect
              x="22"
              y="62"
              width="42"
              height="22"
              rx="8"
              fill={`url(#${bodyGradientId})`}
              stroke="#0ea5e9"
              strokeWidth="1.5"
            />
            <rect x="34" y="68" width="18" height="10" rx="3" fill="#0f172a" />
            <circle cx="39" cy="73" r="1.5" fill="#22d3ee" />
            <circle cx="47" cy="73" r="1.5" fill="#f472b6" />

            {/* LEFT ARM — waves hello while asleep */}
            <g
              style={{
                transformOrigin: '22px 68px',
                transform: !awakened
                  ? undefined
                  : awakened && walking
                  ? undefined
                  : 'rotate(0deg)',
                animation: !awakened
                  ? 'sarah-hello-wave-left 1.8s ease-in-out infinite'
                  : awakened && walking
                  ? `sarah-arm-left ${walkSpeed} ease-in-out infinite alternate`
                  : 'none',
                transition: 'transform 400ms ease',
              }}
            >
              <rect
                x="14"
                y="66"
                width="8"
                height="18"
                rx="4"
                fill="#7dd3fc"
                stroke="#0ea5e9"
                strokeWidth="1.2"
              />
              <circle cx="18" cy="85" r="3" fill="#bae6fd" stroke="#0ea5e9" />
            </g>

            {/* RIGHT ARM — rests on lap while asleep; waves when greeting */}
            <g
              style={{
                transformOrigin: '64px 68px',
                transform: awakened
                  ? waving
                    ? 'rotate(-140deg)'
                    : 'rotate(0deg)'
                  : 'rotate(48deg)',
                animation:
                  awakened && walking && !waving
                    ? `sarah-arm-right ${walkSpeed} ease-in-out infinite alternate`
                    : 'none',
                transition: 'transform 400ms ease',
              }}
            >
              <rect
                x="64"
                y="66"
                width="8"
                height="18"
                rx="4"
                fill="#7dd3fc"
                stroke="#0ea5e9"
                strokeWidth="1.2"
              />
              <circle cx="68" cy="85" r="3" fill="#bae6fd" stroke="#0ea5e9" />
            </g>

            {/* LEFT LEG — folded while asleep */}
            <g
              style={{
                transformOrigin: '34px 84px',
                transform: awakened ? 'rotate(0deg)' : 'rotate(75deg) translateY(-10px)',
                animation:
                  awakened && walking
                    ? `sarah-leg-left ${walkSpeed} ease-in-out infinite alternate`
                    : 'none',
                transition: 'transform 400ms ease',
              }}
            >
              <rect x="30" y="84" width="8" height="10" rx="3" fill="#0ea5e9" />
              <ellipse cx="34" cy="94" rx="5" ry="2" fill="#0369a1" />
            </g>

            {/* RIGHT LEG — folded while asleep */}
            <g
              style={{
                transformOrigin: '52px 84px',
                transform: awakened ? 'rotate(0deg)' : 'rotate(-75deg) translateY(-10px)',
                animation:
                  awakened && walking
                    ? `sarah-leg-right ${walkSpeed} ease-in-out infinite alternate`
                    : 'none',
                transition: 'transform 400ms ease',
              }}
            >
              <rect x="48" y="84" width="8" height="10" rx="3" fill="#0ea5e9" />
              <ellipse cx="52" cy="94" rx="5" ry="2" fill="#0369a1" />
            </g>
          </svg>

          {/* Label — only shown when awake */}
          {awakened && (
            <span className="mt-1 block text-center text-[10px] font-medium text-cyan-500">
              {talking ? 'Speaking…' : `▶ Hear ${ASSISTANT_NAME}`}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default MiniRobot;