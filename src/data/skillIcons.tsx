import type { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPhp,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiFirebase,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaAws } from 'react-icons/fa6'
import { TbBrandOpenai } from 'react-icons/tb'

export const SKILL_ICONS: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: '#61dafb' },
  'Next.js': { icon: SiNextdotjs, color: '#eeeeec' },
  JavaScript: { icon: SiJavascript, color: '#f7df1e' },
  HTML: { icon: SiHtml5, color: '#e34f26' },
  CSS: { icon: SiCss, color: '#1572b6' },
  'Node.js': { icon: SiNodedotjs, color: '#5fa04e' },
  'Express.js': { icon: SiExpress, color: '#eeeeec' },
  Python: { icon: SiPython, color: '#3776ab' },
  PHP: { icon: SiPhp, color: '#8892be' },
  Java: { icon: FaJava, color: '#f89820' },
  MongoDB: { icon: SiMongodb, color: '#47a248' },
  PostgreSQL: { icon: SiPostgresql, color: '#4169e1' },
  SQL: { icon: FaDatabase, color: '#c98a4b' },
  Redis: { icon: SiRedis, color: '#dc382d' },
  Firebase: { icon: SiFirebase, color: '#ffca28' },
  AWS: { icon: FaAws, color: '#ff9900' },
  Docker: { icon: SiDocker, color: '#2496ed' },
  'OpenAI API': { icon: TbBrandOpenai, color: '#eeeeec' },
}
