"use client"

import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CiGrid41 } from 'react-icons/ci';
import { LuMenu } from 'react-icons/lu';

function SwitchDisplay({isListLayout, setIsListLayout, isGridLayout, setIsGridLayout}) {

  return (
    <div className="flex flex-row justify-center items-center w-1/6  ">
          <div className="flex flex-row w-24 ">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => {
                    setIsListLayout(true),
                    setIsGridLayout(false);
                  }}
                  className={`${
                    isListLayout === true
                      ? "bg-orange-700 border-orange-700"
                      : "hover:bg-secondary"
                  }  flex flex-row justify-center w-1/2 border-2 border-r-[1px]  rounded-tl-full rounded-bl-full py-2 `}
                >
                  <LuMenu />
                </TooltipTrigger>
                <TooltipContent side="bottom">List Layout</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger
                  onClick={() => {
                    setIsGridLayout(true),
                    setIsListLayout(false);
                  }}
                  className={`${
                    isGridLayout === true
                      ? "bg-orange-700 border-orange-700"
                      : "hover:bg-secondary"
                  } flex flex-row justify-center w-1/2 border-2 border-l-[1px] rounded-tr-full rounded-br-full py-2`}
                >
                  <CiGrid41 />
                </TooltipTrigger>
                <TooltipContent side="bottom">Grid layout</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
  )
}

export default SwitchDisplay