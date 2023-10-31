import React from 'react';
import { Card, CardHeader, CardBody, Image, Button, useDisclosure } from '@nextui-org/react';
import WorkModal from '../WorkModal';

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
      {image && (
        <WorkModal
          title={title}
          image={image}
          description={description}
          techs={techs}
          link={link}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
    </>
  );
}
