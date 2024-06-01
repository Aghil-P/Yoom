
import React, { ReactNode } from "react";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: ReactNode;
  image?: string;
  buttonIcon?: string;
}

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  image,
  buttonIcon,
  buttonText,
  handleClick,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="flex flex-col w-full rounded-[12px]
      gap-6 border-none max-w-[520px] bg-dark-1 px-6 py-9 text-white"
      >
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center">
              <Image src={image} alt="" width={72} height={72} />
            </div>
          )}
          <h1
            className={cn(
              `text-3xl font-bold
             leading-[42px]`,
              className
            )}
          >
            {title}
          </h1>
          {children}
          <button
            className="bg-blue-1 focus-visible:ring-0 flex
          focus-visible:ring-offset-0 items-center justify-center border-none rounded-[4px] py-2"
            onClick={handleClick}
          >
            {buttonIcon && (
                <Image src={buttonIcon} alt="" 
                width={16}
                height={16}
                />
            )} &nbsp; 
            {buttonText || "Schedule Meeting"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
