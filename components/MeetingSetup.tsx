"use client";
import {
  DeviceSettings,
  VideoPreview,
  useCall,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
 
const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value:boolean) => void;
}) => {
  const [isMicCamToggledOn, setisMicCamToggledOn] = useState(false);
  const call = useCall();
  if (!call) {
    throw new Error("usecall must be used within STreamcall component");
  }

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.microphone.enable();
      call?.camera.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div
      className="flex flex-col h-screen w-full items-center 
    justify-center text-white gap-3"
    >
      <h1 className="text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="flex h-16 items-center justify-center gap-3">
        <label
          className="flex items-center justify-center
        gap-2 font-medium"
        >
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setisMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        {" "}
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
