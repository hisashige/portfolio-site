'use client';

import styles from './index.module.css';
import { Skill } from '@/app/_constants/skills';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/app/_hooks/useIsMobile';

type Props = {
  skills?: Skill[];
};

export default function SkillList({ skills }: Props) {
  if (!skills) {
    return null;
  }
  if (skills.length === 0) {
    return <p>表示する技術がありません。</p>;
  }

  // モバイルの場合は、画像をクリックするとTooltipが表示されるようにする
  // PCの場合は、hoverでTooltipが表示される
  const isMobile = useIsMobile();
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [opneTooltipKey, setOpenToolkitKey] = useState<number | null>(null);
  const handleImageClick = (key: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenToolkitKey(key);
  };
  const handleClick = (event: Event) => {
    if (imageRef.current && !imageRef.current.contains(event.target as Node)) {
      // クリックされた要素がimage要素ではない場合
      setOpenToolkitKey(null);
    }
  };
  useEffect(() => {
    if (isMobile) {
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [isMobile]);

  return (
    <ul className={styles.skillsContainer}>
      {skills.map((skill, key) => (
        <Tooltip
          key={key}
          placement="bottom"
          content={skill.name}
          isOpen={isMobile ? opneTooltipKey === key : undefined}
        >
          <Image
            className={styles.devicon}
            key={key}
            src={skill.image}
            alt={skill.name}
            width={40}
            height={40}
            onClick={isMobile ? handleImageClick(key) : undefined}
            ref={isMobile ? imageRef : null}
          />
        </Tooltip>
      ))}
    </ul>
  );
}
