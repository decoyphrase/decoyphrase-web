import { Language, Translations } from './types';
import { enTranslations } from './en';
import { idTranslations } from './id';
import { zhTranslations } from './zh';
import { ruTranslations } from './ru';
import { esTranslations } from './es';
import { frTranslations } from './fr';
import { ptTranslations } from './pt';
import { arTranslations } from './ar';
import { deTranslations } from './de';
import { elTranslations } from './el';
import { fiTranslations } from './fi';
import { hiTranslations } from './hi';
import { itTranslations } from './it';
import { jaTranslations } from './ja';
import { koTranslations } from './ko';
import { nlTranslations } from './nl';
import { plTranslations } from './pl';
import { trTranslations } from './tr';
import { ukTranslations } from './uk';
import { viTranslations } from './vi';

export * from './types';

export const translations: Record<Language, Translations> = {
  EN: enTranslations,
  ZH: zhTranslations, // Mandarin
  RU: ruTranslations, // Russian
  ES: esTranslations, // Spanish
  FR: frTranslations, // French
  ID: idTranslations, // Indonesia
  PT: ptTranslations, // Portuguese
  VI: viTranslations, // Vietnamese
  DE: deTranslations, // German
  TR: trTranslations, // Turkish
  KO: koTranslations, // Korean
  UK: ukTranslations, // Ukrainian
  AR: arTranslations, // Arabic
  IT: itTranslations, // Italian
  PL: plTranslations, // Polish
  JA: jaTranslations, // Japanese
  NL: nlTranslations, // Dutch
  EL: elTranslations, // Greek
  FI: fiTranslations, // Finnish
  HI: hiTranslations, // Hindi
};
