import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Chip,
  Image,
  Button,
} from '@nextui-org/react';

type Props = {
  title: string;
  image: string;
  description: React.ReactNode;
  techs: string[];
  link: string | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function WorkModal({
  title,
  image,
  description,
  techs,
  link,
  isOpen,
  onClose,
}: Props) {
  const onPressToWorkHandler = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <Modal size="4xl" placement="center" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <div className="mx-auto my-auto">
                <Image
                  alt={title}
                  className="object-cover rounded-xm border-2 mb-3 max-h-80"
                  src={image}
                />
              </div>
              <div className="flex flex-wrap gap-1">
                {techs.map((tech, key) => (
                  <Chip key={key} size="sm">
                    {tech}
                  </Chip>
                ))}
              </div>
              <div className="text-default-500 text-sm">{description}</div>
            </ModalBody>
            <ModalFooter>
              {link && (
                <Button
                  radius="full"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
                  onPress={onPressToWorkHandler}
                >
                  制作物へGO！
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
