import React from 'react';
import { Card, CardHeader, CardBody, Image, Button } from '@nextui-org/react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Chip,
} from '@nextui-org/react';

type Props = {
  title: string;
  thumbnail: string;
  image: string | null;
  subtitle: string;
  description: React.ReactNode;
  techs: string[];
  link: string | null;
};

export default function SlideItem({
  title,
  thumbnail,
  image,
  subtitle,
  description,
  techs,
  link,
}: Props) {
  const onPressToWorkHandler = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-medium">{title}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={title}
            className="object-cover rounded-xl h-56 mb-3"
            src={thumbnail}
            width={270}
          />
          <p className="text-tiny uppercase font-bold mb-2">{subtitle}</p>
          {/* <small className="text-default-500">{description}</small> */}
          {image && (
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
              onClick={handleOpen}
            >
              詳細を見る
            </Button>
          )}
        </CardBody>
      </Card>
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
    </>
  );
}
