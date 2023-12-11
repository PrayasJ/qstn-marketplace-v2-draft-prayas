import { Button, Dialog, Text, TextField } from '@sekmet/radix-ui-themes';
import { useRouter } from 'next/navigation';

interface DialogPopupProps {
  title: string;
  description: string;
  input1_label: string;
  input2_label: string;
  input1_placeholder: string;
  input2_placeholder: string;
  continue_button_text: string;
  path: string;
}
export default function DialogPopup({
  title,
  description,
  input1_label,
  input2_label,
  input1_placeholder,
  input2_placeholder,
  continue_button_text,
  path
}: DialogPopupProps) {
  const router = useRouter();

  return (
    <Dialog.Content style={{ maxWidth: 450 }}>
      <div className="flex flex-col justify-around gap-4">
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>
          <Text size={'2'}>{description}</Text>
        </Dialog.Description>

        <div className="flex justify-center gap-2">
          <div className="w-3/5">
            <label>{input1_label}</label>
            <TextField.Input placeholder={input1_placeholder} required />
          </div>

          <div className="w-2/5">
            <label>{input2_label}</label>
            <TextField.Input placeholder={input2_placeholder} required />
          </div>
        </div>

        <div className="flex w-2/3 gap-2">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Button onClick={() => router.push(path)}>
            <Text>{continue_button_text}</Text>
            <svg
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 2.66634V1.33301M9 10.6663V9.33301M4.33333 5.99967H5.66667M12.3333 5.99967H13.6667M10.8667 7.86634L11.6667 8.66634M10.8667 4.13301L11.6667 3.33301M1 13.9997L7 7.99967M7.13333 4.13301L6.33333 3.33301"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </Dialog.Content>
  );
}
