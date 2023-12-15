"use client";

import { Button } from "@nextui-org/react";
import { ChangeEvent, useRef, useState } from "react";
import { LoremIpsum } from "lorem-ipsum";
import { PlayIcon, RefreshIcon, SettingsIcon } from "./icons";
import { useTimer } from "react-timer-hook";
import { Line } from "rc-progress";
import Image from "next/image";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export const Typer = () => {
  const generetedWords = lorem.generateWords(32);
  const [content, setContent] = useState(generetedWords);
  const [value, setValue] = useState("");
  const [errorIndexs, setErrorIndexs] = useState<number[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 30);
  const { seconds, start, restart, isRunning } = useTimer({
    expiryTimestamp: time,
    autoStart: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let inputValue = e.target.value;

    for (let i = 0; i < Math.min(content.length, inputValue.length); i++) {
      if (content[i] !== inputValue[i]) {
        setErrorIndexs([...errorIndexs, i]);
        inputValue = inputValue.split("").with(i, content[i]).join("");
      } else {
        setErrorIndexs(errorIndexs.filter((el) => el !== i));
      }
    }

    setValue(inputValue);
  };

  const handleRefresh = () => {
    restart(time);
    setContent(generetedWords);
  };

  const handleStart = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    start();
  };

  const percentCalculator = (arg1: string, arg2: string): number => {
    const cn = arg1.split("").length;
    const vl = arg2.split("").length;

    const result = (100 * vl) / cn;

    return result;
  };

  return (
    <div>
      <Line percent={percentCalculator(content, value)} className="mt-10" />

      <Image src="/car.svg" alt="car" width={200} height={170} />

      <div className="flex justify-between items-center mt-10">
        <div className="flex items-center gap-4">
          <Button isIconOnly>
            <SettingsIcon />
          </Button>

          <Button onClick={handleRefresh} isIconOnly>
            <RefreshIcon />
          </Button>

          <Button onClick={handleStart} color="success">
            <PlayIcon />
            Play game
          </Button>
        </div>

        <div>
          {seconds}
          {seconds !== 0 && "s"}
        </div>
      </div>

      <div className="relative mt-10">
        <p className="absolute text-neutral-500 text-2xl">{content}</p>
        <div className="relative z-50">
          <textarea
            ref={textareaRef}
            disabled={!isRunning}
            onChange={handleChange}
            value={value}
            className="absolute bg-transparent w-full h-[80vh] text-2xl text-transparent caret-green-400 stroke-3 outline-none"
          />
          <p className="absolute text-2xl">
            {value.split("").map((char, index) => (
              <span
                className={
                  errorIndexs.includes(index)
                    ? "text-red-500"
                    : "text-green-400"
                }
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
