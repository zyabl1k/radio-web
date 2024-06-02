import { Toast } from 'flowbite-react';
import { FunctionComponent, useEffect } from 'react';
import { HiCheck, HiExclamation } from 'react-icons/hi';
import { IAlert } from '@types'

export const AlertInfoWidget: FunctionComponent<IAlert> = ({ text, status, show, resetShow }) => {
  useEffect(() => {
    if (show) {
      setTimeout(resetShow, 3000);
    }
  }, [show]);

  if (!show) return;

  return (
    <div className="fixed z-[51] top-2 right-2">
      <Toast className="w-[400px]">
        {status === 'ok' ? (
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
        ) : (
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
        )}
        <div className="ml-3 text-sm font-normal">{text}</div>
      </Toast>
    </div>
  );
};
